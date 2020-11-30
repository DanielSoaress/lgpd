<template>
  <header class="w-100 animate__animated animate__fadeInDown">
  <b-navbar toggleable="lg" >
    <b-navbar-brand class="p-0" to="/"><img src="../assets/logo-background.png" alt="" height="45" width="150"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item class="active" to="/" >HOME 
              <div class="animate__animated animate__fadeIn" v-if="getCurrentRoute == 'Home'"></div>
          </b-nav-item>
          <b-nav-item class="active" to="/student" >ALUNO<div class="animate__animated animate__fadeIn" v-if="getCurrentRoute == 'Student'"></div></b-nav-item>
          <b-nav-item class="active" to="/singin" >COLABORADOR<div class="animate__animated animate__fadeIn" v-if="getCurrentRoute == 'Singin'"></div></b-nav-item>
          <b-nav-item class="active" to="/search" >VISITANTE<div class="animate__animated animate__fadeIn" v-if="getCurrentRoute == 'Search'"></div></b-nav-item>
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
      return this.$store.getters.getUser
    },
    getLogado(){
      return this.$store.getters.getLogado
    },
    getCurrentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    logout(){
      this.$store.dispatch('logout', !this.$store.getters.getLogado );
      this.$router.push('/');
    },
  }
}
</script>

<style >
header {
  background-color: #024873!important;
  background: linear-gradient(360deg, rgba(255,255,255,0) 0%, rgb(2, 54, 87, 0.3) 50%);
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

header a:hover {
  color:#ffffffad!important;
}
</style>