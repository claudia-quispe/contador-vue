<template>
    <div>
      <h1>Counter Clicks!</h1>
      <p>Counter: {{ respuestaClicks }}</p>
      <button @click="counter()">Click Me!</button>
    </div>
</template>

<script>
export default {
    name: 'Contador',
    computed: {
      respuestaClicks() {
        return this.$store.state.respuestaClicks
      }
    },
    methods: {
      counter() {
        this.$store.commit('increment')     
      }
    }
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
