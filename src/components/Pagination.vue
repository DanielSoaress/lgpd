<template>
    <div>
        <b-button-group >
            <b-button class="btn-pagination" :disabled="prevDisabled" @click="prev(); "><b-icon-arrow-left-short></b-icon-arrow-left-short></b-button>
            <b-button class="btn-pagination" :disabled="prevDisabled" @click="changeCurrent(btnPrev); ">{{ btnPrev }}</b-button>
            <b-button class="btn-pagination"><u>{{ getCurrentPage }}</u></b-button>
            <b-button class="btn-pagination" :disabled="nextDisabled" @click="changeCurrent(btnNext); ">{{ btnNext }}</b-button>
            <b-button class="btn-pagination" :disabled="nextDisabled" @click="next(); "><b-icon-arrow-right-short></b-icon-arrow-right-short></b-button>
        </b-button-group>
    </div>
  
</template>

<script>
export default {
    props: [
        'length'
    ],
    data() {
        return {
            rows: 0,
            btnPrev: 0,
            btnNext: 2,
            nextDisabled: false,
            prevDisabled: true,
        }
    },
    mounted(){
        setTimeout(() => {
             this.setRows()
        }, 2000)
        this.changeDisabled()
    },
    computed: {
        getRows(){
            return this.rows;
        },
        getBtnPrev(){
            return this.btnPrev;
        },
        getBtnNext(){
            return this.btnNext;
        },
        getNextDisabled(){
            return this.nextDisabled;
        },      
        getPrevDisabled(){
            return this.prevDisabled;
        },
        getCurrentPage(){
            return this.$store.getters.getCurrentPage;
        },
        getPerPage(){
            return this.$store.getters.getPerPage;
        },
        getLength(){
            return this.length;
        },
    },
    methods: {
        setNextDisabled(nextDisabled){
            this.nextDisabled = nextDisabled
        },      
        setPrevDisabled(prevDisabled){
            this.prevDisabled = prevDisabled
        },
        setBtnPrev(btnPrev){
            this.btnPrev = btnPrev
        },
        setBtnNext(btnNext){
            this.btnNext = btnNext
        },
        setRows(){
            let aux = this.getLength/this.getPerPage;
            (aux % 1 === 0) ? this.rows =  aux : this.rows = Math.trunc(aux) + 1;
        },
        next(){
            if(this.getCurrentPage != this.getRows) this.changeCurrent(this.getCurrentPage + 1)
        },
        changeDisabled(){
            (this.getCurrentPage == this.getRows || this.getRows == 0) ? this.setNextDisabled(true) : this.setNextDisabled(false);
            (this.getCurrentPage != 1) ? this.setPrevDisabled(false) : this.setPrevDisabled(true);
        },
        prev(){
            if(this.getCurrentPage != 1) this.changeCurrent(this.getCurrentPage - 1)
        },
        changeCurrent(number){
            this.$store.dispatch('currentPage' , number);
            this.setBtnPrev(this.getCurrentPage - 1)
            this.setBtnNext(this.getCurrentPage + 1)
            this.$emit('atualizarPag', this.search)
        }
    },
    watch: {
        btnPrev() {
            this.changeDisabled()        
        },
        length() {
            this.setRows()
            this.changeDisabled()
        },
        '$store.state.currentPage': {
            deep: true,
            handler() {
                this.setRows()
                this.changeDisabled()
                this.setBtnPrev(this.getCurrentPage-1);
                this.setBtnNext(this.getCurrentPage+1);
            }
        }
    }
    
}
</script>

<style>
.btn-pagination {
  border-style: solid;
  border-color: #2e2d2d!important;
  border-width: 5px;
  background-color: #2e2d2d!important;
  color: #ffffff!important;
  font-weight: 700;
}

.btn-pagination:disabled,
.btn-pagination[disabled], .btn-pagination:disabled:hover{
  border: 1px solid #1d1c1c!important;
  background-color: #1d1c1c!important;
  color: #ffffff!important;
}

.btn-pagination:hover {
  background-color: #1d1c1c!important;
  border-color: #1d1c1c!important;
  color: #ffffff!important;
}

</style>