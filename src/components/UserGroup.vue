<template>
   <div class="p-2 usergroup">
        <p>Gerenciar Permissão:</p>
        <b-list-group class="scroll">
            <b-list-group-item v-for="u in users" :key="u.id" class="d-flex align-items-center justify-content-between"><span class="black">{{ u.username }}</span>
                <b-button-group size="sm">
                    <b-button @click="setUser(u)" v-b-modal.modal-edit> <b-icon icon="pencil-fill"></b-icon></b-button> 
                    <b-button @click="setUser(u)" class="mx-1" v-b-modal.modal-delete><b-icon icon="trash-fill"></b-icon></b-button>
                </b-button-group> 
            </b-list-group-item>
        </b-list-group>
        <b-button class="m-2" @click="setUserAdd()" v-b-modal.modal-new>Adicionar</b-button>
        <ModalUser @atualizaUsers="atualizaUsers" :user="user" />
    </div>
</template>

<script>
import ModalUser from '@/components/modal/ModalUser'

export default {
    components: {
        ModalUser,
    },
    data() {
        return {
            users: [],
            user: '',
        }
    },
    methods: {
        setUsers: function(users){
            this.users = users;
        },
        setUser: function(user){
            this.user = user;
        },
        setUserAdd: function(){
            let obj = new Object();
            obj.permission = 1;
            this.user = obj;
        },
        atualizaUsers: async function(){
            await this.axios.get(this.$store.getters.getBaseUrl + "api/user")
            .then(response => { this.setUsers(response.data)});
        }
    },
    created: async function () {
        await this.axios.get(this.$store.getters.getBaseUrl + "api/user")
         .then(response => { this.setUsers(response.data)});
    }
}
</script>

<style>
.usergroup{
    max-height: 500px;
    background-color: #0D0D0D;
}

.scroll {
    overflow-y: auto;
    max-height: 400px;

}

</style>