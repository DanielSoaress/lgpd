<template>
  <b-modal id="modal-out" cancel-title="FECHAR" title="DADOS PESSOAIS">
      <b-form>
        <b-form-group id="input-group-1" label="Email" label-for="input-1" description="Informações.">
          <b-form-input id="input-1" v-model="form.email" type="email" readonly ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nome:" label-for="input-2" description="Informações.">
          <b-form-input id="input-2" v-model="form.name" readonly></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="CPF:" label-for="input-2" description="Informações.">
          <b-form-input id="input-2" v-model="form.cpf" readonly></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="RG:" label-for="input-2" description="Informações.">
          <b-form-input id="input-2" v-model="form.rg" readonly></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Endereço:" label-for="input-2" description="Informações.">
          <b-form-input id="input-2" v-model="form.endereco" readonly></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Telefone:" label-for="input-2" description="Informações.">
          <b-form-input id="input-2" v-model="form.telefone" readonly></b-form-input>
        </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
data() {
      return {
        form: {
          email: 'fulano.raimundo@uniateneu.edu.br',
          name: 'Fulano Barbosa Raimundo',
          cpf: '123.123.123-25',
          rg: '0000000000',
          endereco: 'Rua 589, casa 47',
          telefone: '(85) 98888.8888'
        },
      }
    },
    methods: {

    }
  }

</script>

<style>

</style>