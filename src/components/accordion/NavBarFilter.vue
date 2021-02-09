<template>
      <div class="w-100" >
        <div class="filter text-left w-100" >
            <b-row>
                <b-col cols="5" class="ml-5">
                </b-col>    
                <b-col cols="6" class="mr-1">
                    <b-row>
                        <b-col cols="3">
                            <b-dropdown class="m-md-2" > 
                            <template #button-content>
                                <b-icon icon="bookmark-fill"></b-icon> Filtro
                            </template>
                                    <b-form-checkbox v-for="option in options" :key="option.value"
                                        class="ml-2"
                                        name="checkbox-1"
                                        v-model="selected"
                                        :value="option.value"
                                        >
                                        {{ option.text }}
                                    </b-form-checkbox>
                            </b-dropdown>
                        </b-col>
                        <b-col cols='9'>
                            <b-input-group class="m-md-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="search"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input v-model="search" id="inline-form-input-email" v-on:keyup="searchEmail($event)" placeholder="Buscar"
                            v-b-tooltip.hover title="Pressione 'Enter' para filtrar"
                            ></b-form-input>
                            </b-input-group>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>           
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'status'
    ],
    data() {
        return {
            options: [],
            selected: null,
            search: '',
        }
    },
    methods: {
        setOptions(objId, objName){
           this.options.push({value: objId, text: objName});
        },
        searchEmail(event){
            if(event.key == "Enter"){
                this.$emit('atualizar', this.search)
            }
        }
    },
    mounted(){
        setTimeout(() => {
            for(const s in this.status){
                this.setOptions(this.status[s].id, this.status[s].name);
            }
        }, 1000)
    },
    watch: {
        selected() {
            this.selected = (this.selected == false) ? 0 : this.selected;
            this.$store.dispatch('filter', this.selected);
            this.$emit('atualizar', this.search)
        },
    }

}
</script>

<style>

.filter{
    background-color: #0D0D0D!important;
    
}

</style>