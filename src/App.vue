<template>
  <div id='app'>
    <div id='navbar'>
      <router-link to='/'>
        <img id='logo' src='./assets/images/AvatarLibrary.png' />
      </router-link>
      <div id='links'>
        <router-link to='/' class='link'>Home</router-link>
        <span class='separator'>|</span>
        <div class='dropdown'>
          <router-link to='/items' class='link dropbtn'>Items</router-link>
          <div class='dropdown-content' id='myDropdown'>
            <div v-for='link in links'>
              <div class='linkContainer' :id=link.id>
                <img :src=link.icon :alt=link.name width='45px'>
                <span>{{ link.name }}</span>
                <span class='rightArrow'>▶</span>
              </div>
              <div class='submenu-content' :class=link.subId>
                <div v-for='subLink in link.links'>
                  <div class='linkContainer'>
                    <img :src=subLink.icon :alt=subLink.name width='45px'>
                    <router-link :to=returnLink(subLink.linkName)>{{ subLink.name }}</router-link>
                  </div>
                </div>
                <div class='edge left'></div>
                <div class='edge right'></div>
                <div class='edge top'></div>
                <div class='edge bottom'></div>
                <div class='corner topLeft'></div>
                <div class='corner topRight'></div>
                <div class='corner bottomLeft'></div>
                <div class='corner bottomRight'></div>
              </div>
            </div>
            <div class='edge left'></div>
            <div class='edge right'></div>
            <div class='edge top'></div>
            <div class='edge bottom'></div>
            <div class='corner topLeft'></div>
            <div class='corner topRight'></div>
            <div class='corner bottomLeft'></div>
            <div class='corner bottomRight'></div>
          </div>
        </div>
        <span class='separator'>|</span>
        <router-link to='/' class='link'>Link</router-link>
        <span class='separator'>|</span>
        <router-link to='/' class='link'>Link</router-link>
        <span class='separator'>|</span>
        <router-link to='/' class='link'>Link</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  import links from './assets/itemMenuLinks';

  const arrows = require('./assets/images/GearSlots/ArrowsSlot.png');

  export default {
    name: 'app',
    data() {
      return {
        links,
        arrows,
      };
    },
    mounted() {
      const submenus = document.getElementsByClassName('submenu-content');
      links.map((item) => {
        document.getElementById(item.id).onmouseover = function () {
          document.getElementsByClassName(item.subId)[0].style.display = 'flex';
        };
        document.getElementsByClassName(item.subId)[0].onmouseover = function () {
          document.getElementsByClassName(item.subId)[0].style.display = 'flex';
        };
        document.getElementById(item.id).onmouseout = function () {
          document.getElementsByClassName(item.subId)[0].style.display = 'none';
        };
        document.getElementsByClassName(item.subId)[0].onmouseout = function () {
          document.getElementsByClassName(item.subId)[0].style.display = 'none';
        };
      });
    },
    methods: {
      returnLink(name) {
        return '/items/types/'.concat(name);
      },
    },
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

  body,
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0 0 0 0;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
  }

  table {
    border-collapse: collapse;
    width: 100%
  }

  td,
  th {
    white-space: nowrap;
    color: #E6C953;
    font-size: 14px;
    text-shadow: 1px 0px 1px black;
    text-align: left;
    padding: 4px 4px 4px 8px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  }

  th {
    background-color: #313D52;
    padding: 12px 4px 12px 8px;
  }

  tr:nth-child(even) {
    background-color: #3E506F;
  }

  tr:nth-child(odd) {
    background-color: #313D52;
  }

  #navbar {
    border-bottom: 1px solid white;
    color: #E6C953;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
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

  .separator {
    font-size: 25px;
    color: rgba(230, 201, 83, 0.3);
  }

  .linkContainer {
    display: flex;
    width: 20vw;
    height: 5vh;
    align-items: center;
    padding-left: 10px;
  }
  /* The container <div> - needed to position the dropdown content */

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: #313D52;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    text-align: center;
  }

  .submenu-content {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: #313D52;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    text-align: center;
    margin-left: 20vw;
    margin-top: -5vh;
  }

  .linkContainer:hover {
    background-color: #8299b8;
    cursor: pointer;
  }
  /* Links inside the dropdown */

  .dropdown-content a {
    color: #E6C953;
    font-weight: bold;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  /* Show the dropdown menu on hover */

  .dropdown:hover .dropdown-content {
    display: flex;
  }
  /* .dropdown-content:hover .submenu-content {
    display: flex;
  } */

  .dropdown-content>div:nth-child(even) {
    background-color: #3E506F;
  }

  .rightArrow {
    position: absolute;
    font-size: 12px;
    right: 10%;
  }

</style>

<style scoped>
  .edge {
    position: absolute;
  }

  .corner {
    position: absolute;
    width: 8px;
    height: 8px;
    background-image: url('./assets/images/border_corners.png');
  }

  .left {
    top: 0;
    bottom: 0;
    width: 8px;
    background-image: url('./assets/images/tooltip/left.png');
  }

  .right {
    right: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background-image: url('./assets/images/tooltip/right.png');
  }

  .top {
    top: 0;
    left: 2px;
    right: 2px;
    height: 4px;
    background-image: url('./assets/images/tooltip/top.png');
  }

  .bottom {
    bottom: 0;
    left: 2px;
    right: 2px;
    height: 8px;
    background-image: url('./assets/images/tooltip/bot.png');
  }

  .topLeft {
    top: 0;
    bottom: 0;
  }

  .topRight {
    top: 0;
    right: 0;
    background-position: 8px 0;
  }

  .bottomLeft {
    bottom: 0;
    left: 0;
    background-position: 0 8px;
  }

  .bottomRight {
    bottom: 0;
    right: 0;
    background-position: 8px 8px;
  }

</style>
