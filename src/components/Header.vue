<template>
  <header class="w-100 header-custom animate__animated animate__fadeInDown">
  <b-navbar toggleable="lg" >
    <b-navbar-brand class="p-0" to="/"><img src="../assets/logo-background.png" alt="" height="45" width="150"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

     <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="authenticated" class="active border-transparent"><b-icon icon="person"></b-icon> {{ getUser }} </b-nav-item>
        <b-nav-item v-if="authenticated" @click="logout" class="active border-transparent"><b-icon icon="power"></b-icon> SAIR </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</header>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  computed: {
    getUser(){
      return this.$store.getters.getUser.toUpperCase()
    },
    authenticated(){
      if(this.getCurrentRoute == "Home") return false 
      return this.$store.getters.getAuthenticated
    },
    getCurrentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    logout(){
      this.$store.dispatch('authenticated', false);
      this.$router.push('/');
    },
  }
}
</script>

<style >
.header-custom {
  background-color: #024873!important;
  background: linear-gradient(360deg, rgba(255,255,255,0) 0%, rgb(2, 54, 87, 0.3) 50%);
}

header .border-transparent {
  border-style: solid;
  border-color: #02736800!important;
  border-width: 2px!important;
}

header .btn-custom-outline {
  border-style: solid;
  border-color: #027368!important;
  border-width: 2px!important;
  border-radius: 4px!important;
  background-color: #02736800!important;
  color: #ffffff!important;
  font-weight: 700;
}

header .btn-custom-outline:hover {
  background-color: #0d6158!important;
  border-color: #0d6158!important;
  color: #ffffff!important;
}

header a {
   color: #ffffff!important;
   font-weight: 600;
}

.active div{
  width: 100%;
  height: 5px;
  background-color: #027368;
}


</style>