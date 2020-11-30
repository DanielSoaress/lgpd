<template>
  <b-modal id="modal-in" size="lg" cancel-title="FECHAR" ok-title="SALVAR" title="CONTROLE DE PRIVACIDADE">
    <h3>Configurações de Privacidade</h3>
    <p class="ml-5 mr-5 text-justify">Você pode ver os dados que armazenamos sobre você e solicitar a altereção do seu consentimento sobre os dados que armazenamos sobre você, as mudanças são feitas em até 7 dias. Quisque finibus sed arcu vel sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Aliquam ut placerat orci, vel semper nunc. Nam in quam eget magna varius pulvinar. Sed rutrum massa vitae viverra sollicitudin. Ut cursus risus vel diam tempus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
    <hr/>
    <b-form>
      <b-form-group class="mb-0" >
        <div class="field w-100">
          <SwitchButton />
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin. </p></small>
          </div>  
        </div>
        <hr/>
      </b-form-group>

      <b-form-group class="mb-0">
        <div class="field w-100">
          <SwitchButton />
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin. </p></small>
          </div>   
        </div>
        <hr/>
      </b-form-group>

       <b-form-group class="mb-0">
        <div class="field w-100">
          <SwitchButton />
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin. </p></small>
          </div>   
        </div>
        <hr/>
      </b-form-group>

       <b-form-group class="mb-0">
        <div class="field w-100">
          <SwitchButton />
          <div>
            <h4>Pellentesque habitant morbi</h4>
            <p class="m-0">Dado:  Lorem ipsum dolor</p>
            <p class="m-0">Setor: Lorem ipsum  </p>
            <small><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin erat ac quam feugiat bibendum at vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada lacus eget aliquam mollis. Quisque finibus sed arcu vel sollicitudin. </p></small>
          </div>   
        </div>
        <hr/>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import SwitchButton from '../components/SwitchButton'

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

    },
    components: {
      SwitchButton
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

</style>