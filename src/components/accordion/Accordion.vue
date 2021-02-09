<template>
    <div class="requeriments w-100">
        <b-skeleton-wrapper :loading="loading">
            <template #loading>
                <button class="btn btn-link btn-block text-left w-100" type="button" >
                <b-skeleton width="100%"></b-skeleton>
                </button>
            </template>
            <div class="question">
                <h2 class="mb-0">
                    <div class="btn btn-block text-left w-100" type="button" @click="isShow()" >
                        <b-row>
                            <b-col cols="3"><b-icon icon="bookmark-fill" :variant="variant"></b-icon> {{ accordion.requirement.name }}</b-col>
                            <b-col cols="3">{{ accordion.requirement.protocol }}</b-col>
                            <b-col cols="3">{{ date }} - {{ getCountdown }}</b-col>
                            <b-col cols="2 ml-3">{{ stateName }}</b-col>
                            <b-col class="m-0 px-4 d-flex flex-row-reverse "> <b-icon icon="arrow-down-short" :flip-v="show"></b-icon> </b-col>
                        </b-row>
                    </div>
                </h2>
            </div>
        </b-skeleton-wrapper>    

        <div class="response" v-bind:class="{ show: show }">
            <div class="text-justify pb-2">
                <b-row class="w-100 px-2 pt-2 pb-0">
                    <b-col class="col-6 d-flex flex-direction">
                        <label><b>Nome:</b></label> 
                        <b-form-input type="text" :value="accordion.requirement.name" disabled class="name-field"></b-form-input>
                        <label><b>CPF:</b></label> 
                        <b-form-input type="text" :value="getCpf" disabled class="name-field"></b-form-input>
                        <label><b>Email:</b></label> 
                        <b-form-input type="text" :value="accordion.requirement.email" disabled class="name-field"></b-form-input>
                        <label><b>Mensagem:</b></label> 
                        <b-form-textarea type="text" :value="accordion.requirement.message" disabled class="message-field mb-2"></b-form-textarea>
                    </b-col>
                    <b-col>
                        <label><b>Setores:</b> <h5><b-badge v-for="(sectors, index) in accordion.sectors" :key="index" class="mx-1">{{ sectors.name }}</b-badge></h5></label>
                        <br>
                        <label><b>Usuário:</b> <h5><b-badge v-for="(clients, index) in accordion.clients" :key="index" class="mx-1">{{ clients.name }}</b-badge></h5></label>
                        <br>
                        <label><b>Solicitação:</b> <h5><b-badge class="mx-1">{{ accordion.requirement.req_solicitation }}</b-badge></h5></label>
                    </b-col>
                    <div class="w-25">
                        <label class="mt-2"><b>Abertura:</b></label>
                        <b-form-input type="text" :value="getDateHour" disabled class="name-field"></b-form-input>
                        <label><b>Prazo de Conclusão:</b></label>
                        <b-form-input type="text" :value="getTerm" disabled class="name-field"></b-form-input>
                        <label><b>Protocolo:</b></label>
                        <b-form-input type="text" :value="accordion.requirement.protocol" disabled class="name-field"></b-form-input>
                        <label><b>Estado:</b></label>
                        <b-form-select v-model="selected" :options="options" @change="sendSelected"></b-form-select>
                    </div>
                </b-row>
                
                
            </div>
        </div>
    </div>
     
</template>

<script>
export default {
    props: [
        'accordion', 'status', 'index', 'accordionShow', 'empty'
    ],
    data() {
        return {
            selected: null,
            options: [],
            loading: true,
            show: false,
            date: null,
            hour: null,
            stateId: '-',
            variant: null,
            stateName: '',         
        }
    },
    computed:{
        getCountdown(){
            let newDate = new Date(this.accordion.requirement.created_at);
            newDate.setDate(newDate.getDate() + 14);
            let now = new Date(Date.now());
            let day = 1000 * 60 * 60 * 24;
            let diference = Date.parse(newDate) - Date.parse(now);
            diference = Math.round(diference/day)
            return (diference < 0) ? 'Prazo Encerrado' : diference = 'Falta: ' + diference + ' Dias';
        },
        getCpf(){
            let cpf = this.accordion.requirement.cpf;
            cpf =  cpf.substr(0,3) + "." + cpf.substr(3,3) + "." + cpf.substr(6,3) + "-" + cpf.substr(9,2)
            return cpf;
        },
        getTerm(){
            let newDate = new Date(this.accordion.requirement.created_at);
            newDate.setDate(newDate.getDate() + 14);

            let day = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
            let month = (newDate.getMonth() <= 10) ? "0" + (newDate.getMonth() + 1) : (this.getDateA.getMonth() + 1)
            let date = day  + '/' + month  + '/' + newDate.getFullYear()
            
            return date;
        },
        getSelected(){
           return this.selected
        },
        getStateId(){
            return this.stateId
        },
        getStateName(){
            return this.stateName
        },
        getDateA(){
            return this.date
        },
        getHour(){
           return this.hour
        },
        getDateHour(){
            return this.date + ' - ' + this.hour;
        },
        getLoading(){
            return this.loading
        },
        getStateFromArray(arrayStatus){
            let aux = ''
            for(const s in arrayStatus){
                if(this.getStateId == arrayStatus[s].id){
                    aux = arrayStatus[s].name;
                }
            }
            return aux;
        },        
        getShow(){
            return this.show;
        },
        getFilterStateId(){
            return this.$store.getters.getFilter
        },
    },
    created: function(){
        this.setDate(new Date(this.accordion.requirement.created_at))
        let date = this.getDateA.getDate() > 9 ? '' : '0';
        let month = (this.getDateA.getMonth() <= 10) ? "0"+(this.getDateA.getMonth() + 1) : (this.getDateA.getMonth() + 1)
        date = date + this.getDateA.getDate() + '/' + month  + '/' + this.getDateA.getFullYear()
        this.setHour(this.getDateA.getHours() + ':' + this.getDateA.getMinutes())
        this.setDate(date)
        this.setStateId(this.accordion.requirement.status_id)
        this.setSelected(this.accordion.requirement.status_id)
    },
     mounted () {
        setTimeout(() => {
            for(const s in this.status){
                this.setState(this.status[s].id, this.status[s].name);
                this.setOptions(this.status[s].id, this.status[s].name);
            }
            this.setLoading(!this.getLoading)
        }, 1000)
    },
    methods: {
        setSelected(selected){
            this.selected = selected;
        },
        setStateId(state){
            this.stateId = state;
        },
        setState(objId, objName){
            if(objId == this.getStateId){
                this.setStateName(objName)
            }
        },
        setStateName(stateName){
            this.stateName = stateName;
        },
        setDate(date){
            this.date = date;
        },
        setHour(hour){
            this.hour = hour;
        },
        setLoading(loading){
            this.loading = loading;
        },
        setVariant(variant) {
            this.variant = variant;
        },
        isShow() {
            this.accordionShow.pop();
            this.accordionShow.push(this.accordion.requirement.id);
        },
        setOptions(objId, objName){
            this.options.push({value: objId, text: objName});
        },
        sendSelected(){
            this.axios.post(this.$store.getters.getBaseUrl + "api/requirements/edit/" + this.accordion.requirement.id, {
                'status_id': this.getSelected,
            }).then( response => console.log(response));
        },
        changeVariant(){
            if(this.getStateId == "3"){
                this.setVariant("success")
                this.setStateName("Concluído")
            }else if(this.getStateId == "2"){
                this.setVariant("warning")
                this.setStateName("Em andamento")
            }else{
                this.setVariant("danger")
                this.setStateName("Aberto")
            }
        }
    },
    watch: {
        show: function() {
            this.getShow
        },
        stateId: function() {
            this.changeVariant()
        },
        selected: function(){
            this.setStateId(this.getSelected)
            this.changeVariant()
        },
        accordionShow: function(){
            (this.accordionShow[0] == this.accordion.requirement.id) ? this.show = !this.show : this.show = false;
        }
    }
}
</script>

<style>
label b {
    color: #2e2d2d;
}

.name-field {
    margin-bottom: 5px;
}

.message-field::first-letter, .name-field {
    text-transform: capitalize;
}

.flex-direction {
    flex-direction: column;
}

.message-field {
    flex-grow: 1;
    min-height: 100px;
    border: 2px solid #2e2d2d;
    border-radius: 5px;
}

.requeriments {
    display: block;
    background-color: #181717;
}

.requeriments .btn{
    color: white!important;
}

.requeriments .question{
    position: relative;
    transition: all 0.4s linear;
}

.requeriments .question:after{
    content: '';
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%) rotate(0deg);

    transition: all 0.4s linear;
}

.requeriments .response{
    color: black;
    background-color: aliceblue;
    padding-left: 10px;
    opacity: 0;
    max-height: 0px;
    overflow-y: hidden;
    transition: all 0.4s ease-out;
}

.requeriments .response.show{
    opacity: 1;
    max-height: 1000px;
}

.question:hover {
    background-color: #292727;
}

</style>