<template>
  <b-container fluid id="app">
    <router-view/>
  </b-container>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-image: url('./assets/images/bg2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
body, html {
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
