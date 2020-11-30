<template>
  <main class="d-flex align-self-center"> 
    <form class="form-signin shadow-lg rounded">
      <img class="mb-3" src="../assets/logo-background.png" alt="" width="250" height="70">
      <h3 class="mb-3">CMP</h3>

      <label for="inputName" class="sr-only">NOME COMPLETO</label>
      <input type="text" id="inputName" class="form-control mb-2" placeholder="NOME COMPLETO" autofocus>

      <label for="inputTel" class="sr-only">TELEFONE</label>
      <input type="text" id="inputTel" class="form-control mb-2" placeholder="TELEFONE" >

      <div class="mb-4 mt-3">
        <label class="float-right mr-2">
          <p class="h3" v-b-tooltip.hover.right title="Para acessar os dados que armazenamos sobre você insira seu NOME COMPLETO ou TELEFONE, em caso de dúvidas entre em contato com o suporte pelo email: xxxxxx@uniateneu.edu.br"><b-icon icon="question-circle-fill" variant="light"></b-icon></p>
        </label>
      </div>
      <b-button class="btn btn-lg btn-primary btn-block" v-b-modal.modal-in>CONSULTAR</b-button>
      <ModalIn />
    </form>
  </main>
</template>

<script>
import ModalIn from '../components/ModalIn'

export default {
  components: { ModalIn }
}
</script>

<style>


</style>