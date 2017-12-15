<template>
    <router-view />
</template>

<script>
import Update from '../Update';

export default {
  name: 'Items',
  components: {
    Update,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #updates {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #updatesCard {
    color: white;
    background-color: #313d52;
  }
</style>
