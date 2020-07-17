<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Contador/>
  </div>
</template>

<script>
import Contador from './components/Contador.vue'

export default {
  name: 'App',
  components: {
    Contador
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background-color: #b2b6e9;
  margin: auto;
  padding: 50px;
  width: 500px;
  border-radius: 30px;
}
</style>
