<template>
    <div>
        <b-modal id="modal-new" title="Novo Usuário" hide-footer>
            <b-form-group label="Usuário:">
                <b-form-input v-model="newUser" placeholder="Nome.Sobrenome"></b-form-input>
            </b-form-group>
            <b-form-group label="Permissão:" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="1">Admin</b-form-radio>
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="2">Super Admin</b-form-radio>
            </b-form-group>
            <hr>
            <div class="d-flex justify-content-around">
                <b-button @click="$bvModal.hide('modal-new')">Cancelar</b-button>
                <b-button @click="save" variant="primary">Salvar</b-button>
            </div> 
        </b-modal>

        <b-modal id="modal-edit" title="Alterar Permissão" hide-footer>
            <b-form-group label="Usuário:">
                <b-form-input v-model="user.username" placeholder="Nome.Sobrenome" disabled></b-form-input>
            </b-form-group>
            <b-form-group label="Permissão:" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="1">Admin</b-form-radio>
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="2">Super Admin</b-form-radio>
            </b-form-group>
            <div class="d-flex justify-content-around">
                <b-button @click="$bvModal.hide('modal-edit')">Cancelar</b-button>
                <b-button @click="edit" variant="primary">Salvar</b-button>
            </div>  
        </b-modal>

        <b-modal id="modal-delete" title="Excluir Usuário" hide-footer>
            <p>Você realmente deseja revogar o acesso a este sistema do {{ user.username }} ?</p>
            <div class="d-flex justify-content-around">
                <b-button @click="$bvModal.hide('modal-delete')">Cancelar</b-button>
                <b-button @click="deleteUser" variant="primary">Salvar</b-button>
            </div> 
        </b-modal>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            newUser: '',
            selected: '1',
        }
    },
    methods: {
       save: async function() {
        await this.axios.post(this.$store.getters.getBaseUrl + "api/user", { username: this.newUser, permission: this.selected})
        .then(response => { this.hideModal(response, 'modal-new')});
        this.newUser = '';
        this.selected = 1;
       },
       edit: async function() {
        await this.axios.post(this.$store.getters.getBaseUrl + "api/user/" + this.user.id, { permission: this.selected})
         .then(response => { this.hideModal(response, 'modal-edit')});
       },
       deleteUser:async function() {
        await this.axios.delete(this.$store.getters.getBaseUrl + "api/user/" + this.user.id)
         .then(response => { this.hideModal(response, 'modal-delete')});
       },
       hideModal: function(response, modal) {
           this.$bvModal.hide(modal)
            if(response.status == 200) {
                this.alert('success', 'Operação concluída!');
                this.$emit('atualizaUsers');
            } else {
                this.alert('error', 'Ops, algo deu errado...')
            }
       },
       alert: function(a , txt){
        this.$swal.fire({
            position: 'center',
            icon: a,
            title: txt,
            showConfirmButton: true,
        });
    },
    },
    watch: {
        user: function() {
            this.selected = this.user.permission;
        }
    }
}
</script>

<style>

</style>