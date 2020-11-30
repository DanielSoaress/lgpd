<template>
  <div id="app" class="h-100 w-100">
    <Header />
    <router-view class=" animate__animated animate__fadeIn"></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: { Header, }
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
