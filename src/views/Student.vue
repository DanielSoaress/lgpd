<template>
   <main class="d-flex align-self-center w-100">
      <div class="form-signin shadow-lg rounded">
        <img class="mb-3" src="../assets/logo-background.png" alt="" width="250" height="70">
        <h3 class="h3 mb-3">CMP</h3>

        <label for="inputUser" class="sr-only">MATRÍCULA</label>
    
        <input type="text" v-model="name" id="inputUser" class="form-control mb-2" placeholder="MATRÍCULA" required autofocus>

        <label for="inputPassword" class="sr-only">SENHA</label>
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="SENHA" required>

        <div class="checkbox mb-4 mt-3">
          <label class="float-left">
            <input type="checkbox" v-model="remember" value="remember-me"> Lembrar-me
          </label>
          <label class="float-right mr-2">
            <p class="h3" v-b-tooltip.hover.right title="Para acessar os dados que armazenamos sobre você insira sua matrícula e senha, em caso de dúvidas entre em contato com o suporte pelo email: xxxxxx@uniateneu.edu.br"><b-icon icon="question-circle-fill" variant="light"></b-icon></p>
          </label>
        </div>
        <b-button class="btn btn-lg btn-primary btn-block" v-b-modal.modal-in>CONSULTAR</b-button>
        <ModalIn />
      </div>
    </main>
</template>

<script>
import ModalIn from '../components/ModalIn.vue'

export default {
    data() {
      return{
        name: '',
        password: '',
        remember: '',
      }
    },
    mounted() {
      if(localStorage.name){
        this.name = localStorage.name;
        this.remember = localStorage.remember;
      }
    },
    methods: { 
      singin(){
        if(this.remember){
          localStorage.name = this.name;
          localStorage.remember = this.remember;
        }else{
          localStorage.name = '';
          localStorage.remember = this.remember
        }
      }
    },
    components: {
      ModalIn,
    }

}
</script>

<style>


</style>