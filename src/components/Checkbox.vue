<template>
  <b-button class="btn-custom-outline mx-1 mb-1 w-25" :class="{ 'btn-outline-selected': isActive, 'shadow': isActive}" @click="check()" :value="value.id">{{ value.name }}</b-button>
</template>

<script>
export default {
    props: ['value', 'client', 'solicitationFlag'],
    data() {
        return {
            isActive: false,
        }
    },
    computed:{
 
    },
    methods:{
        check: function() { 
            for(const i in this.client){
                if(this.client[i].id == this.value.id){
                    this.client.splice(i, 1);
                    this.isActive = false;
                    return 
                }
            }
            this.client.push(this.value)
            this.isActive = true;
        },
        splice: function(value){
            for(const i in this.client){
              if(this.client[i].name == value){
                  this.client.splice(i, 1);
                  break;
              }
            }
        },
        solicitation: function(){
            if(this.solicitationFlag){
                if(this.client.length > 1) this.client.shift();
            }
        }
    },
    watch: {
        client: function(){
           for(const i in this.client){
              if(this.client[i].name == "Outros" && this.client[this.client.length-1].name == "Outros"){
                for(const i in this.client){
                    if(this.client[i].name != "Outros"){
                        this.splice(this.client[i].name)
                    }
                }
                break;
              }
           }
           for(const i in this.client){
              if(this.client[i].name != "Outros" && this.client[this.client.length-1].name != "Outros"){
                this.splice("Outros")
                break;
              }
           }

           this.solicitation();
            
           let aux = true;
           for(const obj in this.client){
                if(this.client[obj].id == this.value.id){
                    this.isActive = true;
                    aux = false;
                    break;
                }
            }
            if(aux) this.isActive = false;
        }
    }
}
</script>

<style>
.btn-custom-outline {
  border-style: solid;
  border-color: #027368!important;
  border-width: 2px!important;
  background-color: #02736800!important;
  color: #ffffff!important;
  font-weight: 700;
}

.btn-custom-outline:hover {
  background-color: #0d6158!important;
  border-color: #0d6158!important;
  color: #ffffff!important;
}

.btn-outline-selected {
  background-color: #0d6158!important;
  border-color: #0d6158!important;
  color: #ffffff!important;
}
</style>