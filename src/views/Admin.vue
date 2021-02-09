<template>
    <b-container class="panel-adm" fluid>
        <b-row class="w-100 pr-2">
            <b-col>
               <UserGroup />
            </b-col>
            <b-col cols="10">
                <div class="mb-3 w-100">
                    <NavBar @atualizar="atualizar" :status="status"/>
                    <AccordionHeader />
                    <Accordion v-for="(accordion, index) in accordions" :index="index" :accordion="accordion" :status="status" :key="accordion.requirement.id" :accordionShow="show"/>
                    <div class="requeriments w-100">
                        <div class="question" v-if="empty">
                            <h2 class="mb-0">
                                <div class="btn btn-block text-left w-100" type="button">
                                    <b-row class="px-2 ml-2">
                                        Nenhum requerimento encontrado
                                    </b-row>
                                </div>
                            </h2>
                        </div>
                    </div>
                    <Pagination @atualizarPag="atualizarPag" :length="length" class="mt-3"/>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Accordion from "@/components/accordion/Accordion.vue"
import AccordionHeader from "@/components/accordion/AccordionHeader.vue"
import Pagination from "@/components/Pagination"
import NavBar from "@/components/accordion/NavBarFilter"
import UserGroup from "@/components/UserGroup.vue"

export default {
    components: {
        Accordion, AccordionHeader, NavBar, Pagination, UserGroup
    },
    data() {
        return {
            accordions: [],
            search: '',
            status: [],
            accordionsAux: [],
            show: [],
            length: null,
            empty: false,
        
        }
    },
    created () {
        this.getStatus();
        this.getRequirements(0);
        if(this.$store.getters.getAuthenticated != true) this.$router.push('/adm');
    },
    computed: {
        getAccordions(){
            return this.accordions
        },
        getFilter(){
            return this.$store.getters.getFilter;
        },
        getLength(){
            return this.$store.getters.getLength;
        }
    },
    methods: {
        atualizar: async function(search){
            this.search = search;
            this.$store.dispatch('currentPage' , 1);
            this.getRequirements(0, this.search);
        },
        atualizarPag: async function(){
            this.getRequirements(this.$store.getters.getCurrentPage-1, this.search);
        },
        getRequirements: async function(skip, search){
            await this.axios.post(this.$store.getters.getBaseUrl + "api/requirements/"+skip, { status: this.$store.getters.getFilter, search: search }).then( response => {
                this.setAccordions(response.data.data); 
            });
            await this.axios.post(this.$store.getters.getBaseUrl + "api/requirements-count", { status: this.$store.getters.getFilter, search: search }).then( response => {
                this.setLength(response.data.data)
            });
        },
        getStatus(){
            this.axios.get(this.$store.getters.getBaseUrl + "api/status").then( response => {this.setStatus(response.data); } );
        },
        setLength(length){
            this.$store.dispatch('length', length);
        },
        setStatus(status){
            this.status = status
        },
        setAccordions(accordions){
            this.empty = (accordions.length ==  0) ?  true : false
            this.accordions = accordions
        },
        setAccordionsAux(accordions){
            this.accordionsAux = accordions
        },
    },
    watch: {
        accordions(){
            return this.accordions
        },
        getLength(){
            this.length = this.$store.getters.getLength;
        },
    }
}
</script>

<style>
.panel-adm{
    flex-direction: column;
    margin-bottom: 20px!important;
    margin-top: 8vh;

    display: flex;
    align-items: center;
}

.black {
    color: black;
    font-weight: 500;
}

</style>