<template>
  <div id='tableContainer'>
    <table 
      :items='items'
      id='table'
    >
      <tbody>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Levels</th>
          <th>Rarity</th>
          <th>Type</th>
        </tr>
        <tr v-for="item in items">
          <td><img src="../assets/images/Arrow_E61_ua.png" alt="Arrows of Actaeon" width="45px"></td>
          <td>{{ item.display_name }}</td>
          <td>{{ returnLevels(item.available_levels).join(' ') }}</td>
          <td><span :style='{ color: rareColor(item.rarity), fontWeight: "bold" }'>{{ toUpper(item.rarity) }}</span></td>
          <td>{{ item.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      items: []
    }
  },
  created() {
    this.fetchData(this.$route.params.name);
  },
  methods: {
    fetchData(name) {
      console.log('running')
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch('http://aoedb.net/api/items?type=' + name)
        .then(response => response.text())
        .then(contents => {
          this.items = JSON.parse(contents).items
          console.log(this.items);  
        })
    },
    toUpper(item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    },
    returnLevels(levels) {
      const newLevels = levels.map(level => {
        return level - 3;
      })
      return newLevels;
    },
    rareColor(rarity) {
      switch (rarity) {
        case 'legendary': {
          return 'orange'
        }
        case 'epic': {
          return '#b04bdf'
        }
        case 'rare': {
          return '#3b8fff'
        }
        case 'uncommon': {
          return '#45ff5e'
        }
      }
      
    }
  }
}
</script>

<style scoped>
  #tableContainer {
    width: 60%;
    height: 90%;
    margin: auto;
    margin-top: 2%;
    overflow: scroll;
  }

  #tableContainer > table > tbody > tr:hover {
    background-color: #8299b8;
    cursor: pointer;
  }
</style>

