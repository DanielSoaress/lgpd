<template>
  <b-container class="d-flex align-items-center justify-content-center w-100 container">
    <div>
      <b-row class="m-2">
        <b-col> 
          <b-card title="" class="mb-5 w-100" >
            <b-card-text class="text-center">
              <h4>Este site protege sua privacidade aderindo à Lei Geral de Proteção de Dados Pessoais (LGPD). Nós não utilizaremos seus dados para qualquer propósito sem o seu consentimento.</h4>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-card-group deck>
          
            <b-card title="Aluno" class="mb-2 w-100" >
              <b-card-text class="text-justify">
                Estuda ou já estudou na UniAteneu e quer acessar os dados que armazenamos sobre você?
              </b-card-text>
              <template #footer>
                <b-button to="/student" class="card-link w-50 shadow-lg rounded">Consultar</b-button>
              </template>
            </b-card>

            <b-card title="Colaborador" class="mb-2 w-100" >
              <b-card-text class="text-justify">
                Trabalha ou já trabalhou na UniAteneu e quer acessar os dados que armazenamos sobre você?
              </b-card-text>
              <template #footer>
                <b-button to="/singin" class="card-link w-50 shadow-lg rounded">Consultar</b-button>
              </template>
            </b-card>

            <b-card title="Visitante" class="mb-2 w-100" >
              <b-card-text class="text-justify">
                Não tem vinculo conosco e deseja saber se temos algum dado armazenado sobre você?
              </b-card-text>
              <template #footer>
                <b-button to="/search" class="card-link w-50 shadow-lg rounded">Consultar</b-button>
              </template>
            </b-card>
        </b-card-group>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
       txt0 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel mauris vel leo ultrices ultricies scelerisque et tortor. Nunc lobortis sit amet magna vel dictum. Quisque volutpat euismod tempor. Quisque dictum, libero a euismod pellentesque, nibh mauris ornare nibh, placerat convallis dolor dui ut mauris. Donec a aliquam est. Cras dui mi, varius ac sollicitudin placerat, ullamcorper at nibh. Donec aliquet, augue vel vulputate lacinia, mauris orci consequat turpis, vel dictum lorem dolor vel eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus magna nulla, vel euismod nisi rutrum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porta varius imperdiet. \n Quisque facilisis felis euismod rhoncus elementum. Aliquam bibendum tincidunt sem. Donec faucibus consectetur consectetur. Ut nec blandit sapien, vitae suscipit orci. Vestibulum feugiat blandit nibh at convallis. Donec a dui quis felis interdum aliquet. Cras vel auctor arcu, eget semper lectus. Maecenas in blandit sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer scelerisque mauris nec dictum molestie. Maecenas pulvinar ultricies convallis. ",
       txt1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis neque. Phasellus et quam faucibus, efficitur ligula at, maximus enim. Nulla cursus sapien in dictum lobortis. Nulla diam justo, mollis ut massa ac, blandit auctor ligula. Vestibulum semper ullamcorper tellus, eget scelerisque lectus. Mauris suscipit consectetur sem, at iaculis neque sagittis et. Donec ornare turpis purus, non scelerisque sapien sollicitudin vehicula. Sed mi urna, accumsan non purus et, commodo hendrerit lectus. Fusce fringilla, quam vel faucibus accumsan, elit odio lacinia dui, id scelerisque leo libero porttitor libero. Nam non urna eget enim dictum hendrerit et at turpis. Praesent ac tempus ante, ac mattis est. ",
       txt2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel mauris vel leo ultrices ultricies scelerisque et tortor. Nunc lobortis sit amet magna vel dictum. Quisque volutpat euismod tempor. Quisque dictum, libero a euismod pellentesque, nibh mauris ornare nibh, placerat convallis dolor dui ut mauris. Donec a aliquam est. Cras dui mi, varius ac sollicitudin placerat, ullamcorper at nibh. Donec aliquet, augue vel vulputate lacinia, mauris orci consequat turpis, vel dictum lorem dolor vel eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus magna nulla, vel euismod nisi rutrum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porta varius imperdiet. ",
    }
  }
}
</script>

<style>
.card {
  background-color: #2c668a00!important;
  border: 0px!important;
}

.container {
  height: 85vh;
}

.btn {
  border-style: solid;
  border-color: #027368!important;
  border-width: 5px;
  background-color: #027368!important;
  color: #ffffff!important;
  font-weight: 700;

}

button:disabled,
button[disabled], button:disabled:hover{
  border: 1px solid #02736871!important;
  background-color: #02736883!important;
  color: #ffffff!important;
}



.btn:hover {
  background-color: #0d6158!important;
  border-color: #0d6158!important;
  color: #ffffff!important;
}

.card-footer {
  background-color: rgba(0, 0, 0, 0)!important;
  border-color: rgba(0, 0, 0, 0)!important;
}
</style>