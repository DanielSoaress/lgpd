<template>
  <b-modal ref="my-modal" id="modal-in" size="lg"  header-text-variant="light" hide-footer title="DADOS">
    <p class="ml-5 mr-5 text-justify">Os dados abaixo são todos os dados pessoais que temos armazenado sobre você, verifique se está confortável com as informações que nos providenciou. 
      Caso tenha algum dado que não esteja confortável, abra um requerimento com as devidas informações. </p>
    <hr/>
    <b-form>
      <b-form-group class="mb-0" >
        <div class="field w-100">
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <p class="text-justify"> Descrição: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin.</small></p>
          </div>  
        </div>
        <hr/>
      </b-form-group>
      <b-form-group class="mb-0" >
        <div class="field w-100">
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <p class="text-justify"> Descrição: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin.</small></p>
          </div>  
        </div>
        <hr/>
      </b-form-group>
      <b-form-group class="mb-0" >
        <div class="field w-100">
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <p class="text-justify"> Descrição: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin.</small></p>
          </div>  
        </div>
        <hr/>
      </b-form-group>
      <b-form-group class="mb-0" >
        <div class="field w-100">
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <p class="text-justify"> Descrição: <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin.</small></p>
          </div>  
        </div>
        <hr/>
      </b-form-group>
      <div class="w-100 d-flex justify-content-between">
          <b-button class="m-2 close-modal" @click="hideModal">FECHAR</b-button>
          <b-button class="m-2" variant="primary"  @click="requirement">ABRIR REQUERIMENTO</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>

export default {
    data() {
      return {
        txt: '',
        form: {
          email: 'fulano  .raimundo@uniateneu.edu.br',
          name: 'Fulano Barbosa Raimundo',
          cpf: '123.123.123-25',
          rg: '0000000000',
          endereco: 'Rua 589, casa 47',
          telefone: '(85) 98888.8888'
        },
      }
    },
    methods: {
      hideModal() {
          this.$refs['my-modal'].hide()
      },
      requirement() {
        this.$router.push('requirement')
      }
    },
    components: {
      
    },
  }
</script>

<style>

.field {
  display: flex;
  flex-direction: row!important;
  justify-content: space-around!important;
  align-items: center;
}

.field div{
  max-width: 600px;
}

.close-modal{
  border-width: 2px!important;
  border-style: solid!important;
  background-color: aliceblue!important;
  color: #027368!important;
}

</style>