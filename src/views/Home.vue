<template>
  <b-container class="container-home">
    <div>
      <b-row class="m-2">
        <b-col> 
          <b-card title="" class="mt-5 w-100" >
            <b-card-text class="text-center">
              <h4>Este site protege sua privacidade aderindo à Lei Geral de Proteção de Dados Pessoais (LGPD). </h4>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="d-flex direction-row justify-content-center">
        <b-col md="6">
          <b-card-img :src="require('../assets/PersonalData.gif')" img-left id="img-home" class="mb-3"></b-card-img>
        </b-col>
         <b-col class="mt-4" md="6">
           <b-row>
              <b-card class="mb-1 w-100" >
                <b-card-text class="text-justify p-2">
                  Somos muito sérios com o cumprimento das leis que protegem sua privacidade. Aqui você, de forma facilitada, pode exercer alguns direitos previstos em nossa  Política de Privacidade, como acesso, correção dos dados ou revogação do consentimento.
                </b-card-text>
                <template #footer>
                  <b-col>
                    <b-row class="d-flex justify-content-center">
                      <b-button to="/requirement" class="w-50 shadow-lg rounded btn-custom">Solicitar</b-button>
                    </b-row>
                  </b-col>
                </template>
              </b-card>
              <b-card class="mb-2 w-100" >
                <b-card-text class="text-justify p-2">
                  Você pode consultar a situação do seu requerimento. Por razões de segurança, a presente consulta somente poderá ser realizada com o número de protocolo. 
                </b-card-text>
                <template #footer>
                  <b-col>
                    <b-row class="d-flex justify-content-center">
                       <b-button class="w-50 shadow-lg rounded btn-custom" @click="alert">Consultar</b-button>
                    </b-row>
                  </b-col>
                </template>
              </b-card>
           </b-row>
        </b-col>
      </b-row>
      <b-row class="w-100 d-flex justify-content-center mt-3">
          <h5>Conheça seus <a class="link" @click="$bvModal.show('modal-art')">direitos</a></h5>
      </b-row>
    </div>
    <Modal />
  </b-container>
</template>

<script>
import Modal from '../components/modal/Modal'

export default {
  components: {
    Modal
  },
  data() {
    return {
    }
  },
  methods: {
     alert: function(){
       this.$swal.fire({
          title: 'Insira o protocolo do requerimento',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          cancelButtonText: 'Cancelar',
          showCancelButton: true,
          confirmButtonText: 'Consultar',
          showLoaderOnConfirm: true,
          preConfirm: (protocol) => {
            return this.axios.get(this.$store.getters.getBaseUrl + "api/requirements/protocol/" + protocol)
            .then( response => { return response.data })
            .catch(() => { (protocol == '') ? this.$swal.showValidationMessage(`Insira o protocolo`) : this.$swal.showValidationMessage(`Ocorreu algum erro`) })
          },
          allowOutsideClick: () => !this.$swal.isLoading()
          }).then((result) => {
              if(result.isConfirmed) {
                if(result.value.message == 'Fail') {
                    this.$swal.fire({
                      icon: 'error',
                      text: result.value[0],
                    })
                } else {
                  var res = result.value[0][0]
                  this.$swal.fire({
                    title: `CPF: XXX.${res.cpf.substr(4, 3)}.XXX-${res.cpf.substr(9)}`,
                    input: 'text',
                    preConfirm: (cpf) => { return cpf },
                    allowOutsideClick: () => !this.$swal.isLoading()
                    }).then((result) => {
                        if (result.isConfirmed && result.value == res.cpf) {
                          let date = new Date(res.created_at);
                          this.$swal.fire({
                            title: `Procolo: ${res.protocol}`,
                            html:
                            `<form class="text-left mt-3">
                              <div class="form-group">
                                <label for="inputName">Nome</label>
                                <input type="text" class="form-control" id="inputName" value="${res.name}" disabled>
                              </div>
                              <div class="form-group">
                                <label for="inputStatus">Estado</label>
                                <input type="text" class="form-control" id="inputStatus" value="${res.req_status}" disabled>
                              </div>
                              <div class="form-group">
                                <label for="inputStatus">Solicitação</label>
                                <input type="text" class="form-control" id="inputStatus" value="${res.req_solicitation}" disabled>
                              </div>
                              <div class="form-group">
                                <label for="inputDate">Abertura</label>
                                <input type="text" class="form-control" id="inputDate" value="${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}" disabled>
                              </div>
                              <div class="form-group">
                                <label for="inputMessage">Mensagem</label>
                                <textarea type="text" class="form-control" id="inputMessage" disabled>${res.message}</textarea>
                              </div>
                            </form>`,
                          }) 
                        } else {
                          this.$swal.fire({
                            icon: 'error',
                            text: 'CPF informado não corresponde',
                          })
                        }
                  })
                }
            }
      });
    },
  }
}
</script>

<style>
.link {
  cursor: pointer;
  font-weight: 500;
  color: white!important;
  text-decoration: underline;
}

.card {
  background-color: #2c668a00!important;
  border: 0px!important;
}

.container-home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
}

.btn-custom {
  border-style: solid;
  border-color: #027368!important;
  border-width: 5px;
  background-color: #027368!important;
  color: #ffffff!important;
  font-weight: 700;
}

#button-content{
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

.btn-custom:hover {
  background-color: #0d6158!important;
  border-color: #0d6158!important;
  color: #ffffff!important;
}

.card-footer {
  background-color: rgba(0, 0, 0, 0)!important;
  border-color: rgba(0, 0, 0, 0)!important;
}

.direction-row{
  flex-direction: row;
}

@media (max-width: 950px),  (max-height: 600px)
{
  .container-home
   {
    display: initial!important;
    justify-content: none!important;
    align-items: none!important;
   }
  
  #img-home{
    max-width: 60%;
  }
}
</style>