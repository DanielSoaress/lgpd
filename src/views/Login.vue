<template>
    <div class="d-flex justify-content-between w-100 height">
      <b-card-img :src="require('../assets/svg/Versioncontrol-bro.svg')" class="img-svg" ></b-card-img>
      <b-img :src="require('../assets/svg/method-draw-image.svg')" class="background-svg background-svg-visible">
      </b-img>
      <div class="background-grandient">
        <div class="form-signin shadow-lg rounded px-5 py-3">
          <img class="mb-3" src="../assets/logo-background.png" alt="" width="250" height="70">
          <h3 class="h3 mb-3">DSPD</h3>

          <label for="inputUser" class="sr-only">NOME.SOBRENOME</label>
          <b-form-input type="text" v-model="user.username" class="form-control mb-2" placeholder="NOME.SOBRENOME" :state="stateUsername"  id="inputUser" required autofocus></b-form-input>
        
          <label for="inputPassword" class="sr-only">SENHA</label>
          <b-form-input type="password" v-model="user.password" class="form-control mb-2" placeholder="SENHA" :state="statePassword"  id="inputPassword" required ></b-form-input>

          <div class="checkbox mb-4 mt-3">
            <label class="float-left">
              <input type="checkbox" v-model="remember" @click="singin" value="remember-me"> Lembrar-me
            </label>
            <label class="float-right mr-2">
              <p class="h3" v-b-tooltip.hover.right title="Para acessar os dados que armazenamos sobre você insira seu usuário e senha AD UNIATENEU, em caso de dúvidas entre em contato com o suporte pelo email: xxxxxx@uniateneu.edu.br"><b-icon icon="question-circle-fill" variant="light"></b-icon></p>
            </label>
          </div>
          <b-button class="btn btn-lg btn-custom btn-block" @click="auth" :disabled="loading">
             <b-spinner style="width: 1.5rem; height: 1.5rem;" v-if="loading" variant="light" label="Loading..."></b-spinner>
             <p class="m-0 p-0" v-if="!loading">ENTRAR</p>
          </b-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        user: {
          username:  '',
          password: '',
        },
        remember: '',
        loading: false,
        stateUsername: null,
        statePassword: null,
      }
    },
    mounted() {
      if(localStorage.remember){
        this.user.username = localStorage.username;
        this.remember = localStorage.remember;
      }
    },
    methods: { 
      singin() {
        if(this.remember){
          localStorage.username = this.user.username;
          localStorage.remember = this.remember;
        }else{
          localStorage.username = '';
          localStorage.remember = this.remember;
        }
      },
      back: function () {
        this.$router.go(-1)
      },
      auth: async function () {
        if(this.user.username == '') this.stateUsername = false;
        if(this.user.password == '') this.statePassword = false;
        if(this.user.username != '' && this.user.password != ''){
          this.loading = true;
          await this.axios.post(this.$store.getters.getBaseUrl + "api/login", { username: this.user.username, password_plain: this.user.password })
          .then(response => {  this.$store.dispatch('authenticated', response.data.data.authenticated)});
          //Tô aqui - Alterando Login
          if(this.$store.getters.getAuthenticated) {
            this.axios.get(this.$store.getters.getBaseUrl + "api/user/" + this.user.username)
            .then(response => { console.log(response)});
          }
          /*this.singin();
          if (this.$store.getters.getAuthenticated) {
            this.$store.dispatch('user', this.user.username);
            this.$router.push('/paneladm');
          } else {
            this.alert('error', 'Usuário ou senha incorreto');
          }*/
          this.loading = false;

        }
      },
      alert: function(a , txt){
       this.$swal.fire({
          position: 'center',
          icon: a,
          title: txt,
      })
    },
    },
    watch: {
      username(){
        this.stateUsername = null;
      },
      password(){
        this.statePassword = null;
      },
    },
    computed: {
      username() {
        return this.user.username;
      },
      password() {
        return this.user.password;
      }
    }
}
</script>


<style>
.height {
  height: 100vh;
}
.img-svg {
  position: absolute;
  height: 70vh;
  min-height: 400px;
  top: 15%;
  right: 30%;
  z-index: 5;
}

.form-signin {
  margin-left: 20%;
  width: 35%;
  height: 40%;
  min-width: 400px;
  min-height: 400px;
  max-width: 500px;
  z-index: 5;
}

.background-svg{
  height: 100vh;
  width: 80vw;
  position: absolute;

}

.background-grandient{
  background: rgb(8,133,210);
  background: radial-gradient(circle, rgba(8,133,210,1) 0%, rgba(2,72,115,1) 100%);
  width: 70%;
  min-width: 600px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


@media (max-width: 950px),  (max-height: 600px)
{
  .background-svg-visible
   {
    visibility: hidden!important;
   }

  .form-signin {
     margin-left: 0%!important;
  }

  .img-svg{
    display: none!important;
  }

  .background-grandient {
    width: 100%!important;
    margin-left: 0px!important;
  }
}

</style>