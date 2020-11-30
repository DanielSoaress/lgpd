<template>
      <div class="d-flex align-items-center justify-content-center requirement my-2">
        <div class="form-requirement shadow-lg rounded">
            <h1 class="h3 mb-3 font-weight-normal">REQUERIMENTO</h1>
            <p class="text-justify">Precisamos de seu endereço de email para esta operação, pois necessitamos de um tempo para processar sua solicitação </p>

            <label for="inputEmail" class="sr-only">EMAIL</label>
            <b-input-group prepend="@" class="mb-2">
              <b-form-input type="text" id="inputEmail" class="form-control" placeholder="EMAIL" :state="nameState" @blur="verify" @keydown="setState(null)" v-model.trim="email" required autofocus></b-form-input>
            </b-input-group>

            <div class="mb-4">
                <b-form-select v-model="selected">
                  <b-form-select-option :value="null">Selecione o tipo</b-form-select-option>
                  <b-form-select-option v-for="info in options" v-bind:key="info.id" :value="info.id">{{ info.name }}</b-form-select-option>
                </b-form-select>
            </div>

            <b-form-textarea class="mb-3"
            id="textarea"
            v-model.trim="message"
            placeholder="Mensagem para o administrador..."
            rows="6"
            max-rows="6"
            required
            ></b-form-textarea>

            {{disabled}}

            <b-button class="btn btn-lg btn-primary btn-block" :disabled="disabled" @click="send">ENVIAR</b-button>
        </div>  
      </div>
</template>

<script>
export default {
  data() {
        return {
          email: '',
          selected: null,
          message: '',
          options: null,
          disabled: true,
          state: null,
        }
      },
  created: function() {
    this.axios.get(this.$store.getters.getBaseUrl + "types").then( response => this.options = response.data, console.log(this.options) );
  },    
  watch: {
    email: function () {
      this.disabled = !this.check();
    },
    message: function () {
      this.disabled = !this.check();
    },
    selected: function () {
      this.disabled = !this.check();
    },
  },
  computed: {
      nameState: function(){
        return this.state;
      },
  },
  methods: {
    send: function () {
      if(this.check()){
         this.axios.post(this.$store.getters.getBaseUrl + "requirements", { email: this.email, type_id: this.selected, message: this.message });
         this.email = '';
         this.selected = null;
         this.message = ' ';
      }
    },
    check: function(){
      if(this.email != '' && this.selected != null && this.message != '' && this.state != false){
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
  max-width: 500px;
  /*margin: auto;*/

  padding: 25px;
  background-color: rgb(200, 200, 200, 0.0);
}

.requirement {
  height: 90vh;
}

</style>