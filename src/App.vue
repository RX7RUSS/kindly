<template>
  <div id="app">
    <Kindly msg="Welcome to Kindly"/>
  </div>
</template>

<script>
import Kindly from './components/Kindly.vue'

export default {
  name: 'app',
  components: {
    Kindly
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ql-editor {
  min-height: 300px;
}
</style>
