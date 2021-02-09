<template>
      <div class="d-flex justify-content-center mt-5 mb-4">
        <b-overlay :show="show" rounded="lg" opacity="1" variant="light">
        <div class="form-requirement shadow-lg rounded">
            <b-row>
              <b-col class="pl-0 pr-4 ml-0"><b-button class="btn-custom" @click="back"><b-icon icon="arrow-left" aria-hidden="true"></b-icon></b-button></b-col>
              <b-col><h1 class="h3 mb-3 font-weight-normal">REQUERIMENTO</h1></b-col>
              <b-col></b-col>
            </b-row>
    
            <p class="text-justify">Para facilitar a validação da sua identidade, pedimos que preencha o formulário abaixo </p>
            
            <p class="mb-0 ml-5 text-left"><label style="color: #BF1B17;">*</label> Eu sou:</p>
            <b-form-group>
              <Checkbox v-for="c in clientComp" :key="c.id" :client="client" :value="{'id': c.id, 'name': c.name}" />
            </b-form-group>
            
            <p class="mb-0 ml-5 text-left"><label style="color: #BF1B17;">*</label> Meu pedido é uma solicitação de:</p>
            <b-form-group >
              <Checkbox v-for="s in solicitationComp" :key="s.id" :client="solicitation" :solicitationFlag="true" :value="{'id': s.id, 'name': s.name}" />
            </b-form-group>

            <p class="mb-0 ml-5 text-left"><label style="color: #BF1B17;">*</label> Setores envolvidos:</p>
            <b-form-group>
              <Checkbox v-for="s in sectorComp" :key="s.id" :client="sector" :value="{'id': s.id, 'name': s.name}" />
            </b-form-group>

            <b-form-input type="text" class="form-control mb-2" placeholder="NOME COMPLETO" v-model="name" required></b-form-input>     

            <the-mask  class="form-control mb-2" placeholder="CPF" :mask="['###.###.###-##']"  v-model="cpf" required/>

            <b-input-group prepend="@" class="mb-2">
              <b-form-input type="text" id="inputEmail" class="form-control" placeholder="EMAIL" :state="nameState" @blur="verify" @keydown="setState(null)" v-model.trim="email" required autofocus></b-form-input>
            </b-input-group>

            <b-form-textarea class="mb-3"
            id="textarea"
            v-model.trim="message"
            placeholder="Mensagem para o administrador..."
            rows="6"
            max-rows="6"
            required
            ></b-form-textarea>
            
            <div class="float-right">
              <vue-recaptcha  @expired="onExpired" @verify="onVerify" class="mb-3" :sitekey="sitekey" :loadRecaptchaScript="true"></vue-recaptcha>
            </div>

            <b-button class="btn btn-lg btn-custom btn-block" :disabled="disabled" @click="send">
               <b-spinner style="width: 1.5rem; height: 1.5rem;" v-if="loading" variant="light" label="Loading..."></b-spinner>
               <p class="m-0 p-0" v-if="!loading">ENVIAR</p>
            </b-button>            
        </div>  
        </b-overlay>
      </div>
</template>



<script>
import Checkbox from '../components/Checkbox.vue';
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: { Checkbox, VueRecaptcha },
  data() {
        return {
          email: '',
          sitekey: '6LejYEgaAAAAAExp240FusZTLHp_TUjCdl150_es',
          recaptcha: null,
          name: '',
          cpf: '',
          message: '',
          disabled: true,
          state: null,
          clientComp: [],
          client: [],
          solicitation: [],
          solicitationComp: [],
          sector: [],
          sectorComp: [],
          show: true,
          loading: false,
        }
      },    
  watch: {
    recaptcha: function() {
      this.disabled = !this.check();
    },
    name: function() {
      this.disabled = !this.check();
    },
    cpf: function() {
      this.disabled = !this.check();
    },
    client: function() {
      this.disabled = !this.check();
    },
    solicitation: function() {
      this.disabled = !this.check();
    },
    sector: function() {
      this.disabled = !this.check();
    },
    email: function () {
      this.disabled = !this.check();
    },
    message: function () {
      this.disabled = !this.check();
    },
    sectorComp: function() {
      this.show = this.checkComp();
    },
    solicitationComp: function() {
      this.show = this.checkComp();
    },
    clientComp: function() {
      this.show = this.checkComp();
    }
  },
  computed: {
      nameState: function(){
        return this.state;
      },
      verifyCpf: function(){
        if(this.cpf.length < 11){
          return false
        }else{
          return true
        }
      },
  },
  beforeCreate: async function(){
    await this.axios.get(this.$store.getters.getBaseUrl + "api/client").then(response => { this.setForm(response.data, 'client')});
    await this.axios.get(this.$store.getters.getBaseUrl + "api/sector").then(response => { this.setForm(response.data, 'sector')});
    await this.axios.get(this.$store.getters.getBaseUrl + "api/solicitation").then(response => { this.setForm(response.data, 'solicitation')});
  },
  methods: {
    send: async function () {
      this.loading = true;
      this.disabled = true;
      if(this.check()){
         let client =  this.getArrayId(this.client);
         let sector = this.getArrayId(this.sector);
         let solicitation = this.getArrayId(this.solicitation);
         const result = await this.axios.post(this.$store.getters.getBaseUrl + "api/requirements", 
          { email: this.email, clients: client, solicitation_id: solicitation[0], sectors: sector, name: this.name, cpf: this.cpf, message: this.message })
         if(result.status == 200){
           this.alert('success', 'Requerimento enviado com sucesso');
           setTimeout(() => {
             this.email = '', this.message = '', this.name = '', this.cpf = '', this.client = [], this.sector = [],  this.solicitation = [], this.state = null
             this.back();
           }, 3000)
         }else{
           this.alert('error', 'Falha ao enviar o Requerimento');   
         }
      }
      this.disabled = false;
      this.loading = false;
    },
    onVerify: async function (token) {
      await this.axios.post(this.$store.getters.getBaseUrl + "api/recaptcha", { token: token }).then(response => { this.recaptcha = response.data.success});
    },
    onExpired: function () {
      this.recaptcha = null;
    },
    getArrayId(array){
      let aux = [];
      for(let i = 0; i < array.length; i++){
        aux.push(array[i].id)
      }
      return aux;
    },
    checkComp: function(){
      if(this.sectorComp != [] && this.solicitationComp != [] && this.clientComp != []) return false;
    },
    setForm(array, opc){
      if(opc == "client") this.clientComp = array;
      if(opc == "solicitation") this.solicitationComp = array;
      if(opc == "sector") this.sectorComp = array;
    },
    back: function () {
      this.$router.push('/')
    },
    alert: function(a , txt){
       this.$swal.fire({
          position: 'center',
          icon: a,
          title: txt,
          showConfirmButton: false,
          timer: 3000
      });
    },
    check: function(){
      if(this.email != '' && this.message != '' && this.state != false && this.client.length != 0
       && this.solicitation.length != 0 && this.sector != 0 && this.name != "" && this.cpf != "" && this.cpf.length == 11 && this.recaptcha){
          return true;
      }else {
          return false;
      }
    },
    verify: function(){
      let user = this.email.substring(0, this.email.indexOf("@"));
      let domain = this.email.substring(this.email.indexOf("@")+ 1, this.email.length);

      if ((user.length >=1) && (domain.length >=3) && (user.search("@")== -1) && (domain.search("@")==-1) && (user.search(" ")== -1) && (domain.search(" ")==-1) && (domain.search(".")!=-1) && (domain.indexOf(".") >=1) && (domain.lastIndexOf(".") < domain.length - 1)) {
        this.state = true;
      } else if(this.email == ''){
        this.state = null;
      } else{
        this.state = false;
      }
    },
    setState: function(s){
      this.state = s;
    }
  }
}


</script>

<style>
.form-requirement {
  width: 100%;
  max-width: 600px;
  /*margin: auto;*/

  padding: 25px;
  background-color: rgb(200, 200, 200, 0.0);
}

.requirement {
  height: 80vh;
}

.spinner-border{
  color: #0d6158;
}

</style>