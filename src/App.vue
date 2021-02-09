<template>
  <div id="app" class="h-100 w-100">
    <Header v-show="header"/>
    <router-view class=" animate__animated animate__fadeIn"></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: { Header },
  data() {
    return{
      header: true
    }
  },
  created: function(){
    this.checkHeader();
  },
  methods: {
    checkHeader: function(){
      const block = ["/requirement", "/adm"];
      block.indexOf(this.$route.path.toLowerCase()) > -1 ? this.header = false : this.header = true;
    },
  },
  watch: {
     $route() {
      this.checkHeader();
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  text-align: center;
  color: #ffffff;
  font-family: 'Ubuntu', sans-serif;
}

</style>
