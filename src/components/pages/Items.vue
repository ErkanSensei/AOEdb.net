<template>
    <b-row>
      <b-col sm='5' id='updates'>
        <b-card title='Latest Updates' id='updatesCard'>
          <Update 
            date='09/23/17' 
            title='Athens Update'
            content='Updated database for latest celeste changes, including our new celeste exclusive items. In addition, the items and consumables pages are now sorted alphabetically. Finally, last but not least, the dreaded apostrophe issue is now resolved - no more andapos!'
            image='../../src/assets/images/Arrow_E61_ua.png'
          />
          <router-view></router-view>
        </b-card>
      </b-col>
    </b-row>
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
