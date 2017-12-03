<template>
  <b-container fluid id='app'>
    <div id='navbar'>
      <router-link to='/'>
          <img id='logo' src='./assets/images/AvatarLibrary.png'/>
      </router-link>
      <div id='links'>
        <router-link to='/' class='link'>Home</router-link>
        |
        <router-link to='/items' class='link'>Items</router-link>
        |
        <router-link to='/' class='link'>Link</router-link>
        |
        <router-link to='/' class='link'>Link</router-link>
        |
        <router-link to='/' class='link'>Link</router-link>
      </div>
    </div>
    <router-view />
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
  background-image: url('./assets/images/ShipEgypt.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5%;
}
body, html {
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
}

#navbar {
  border-bottom: 1px solid white;
  color: #E6C953;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
  padding: 0px;
  display: block;
  position: relative;
  padding-left: 75px;
}
#logo {
  position: absolute;
  width: 75px;
  border: 0;
  left: 0;
  top: -20px;
}
.link {
  font-size: 22px;
  font-weight: bold;
  color: #E6C953;
}
#links {
  text-align: left;
  display: block;
}
</style>
