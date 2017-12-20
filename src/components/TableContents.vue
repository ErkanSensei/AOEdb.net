<template>
  <div id='tableContainer'>
    <div id='table'>
    <table 
      :items='items'
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
          <td class='icon'><img src="../assets/images/Arrow_E61_ua.png" alt="Arrows of Actaeon" width="45px"></td>
          <td class='name'><span>{{ item.display_name }}</span></td>
          <td class='levels'><span>{{ returnLevels(item.available_levels).join(' ') }}</span></td>
          <td class='rarity'><span :style='{ color: rareColor(item.rarity), fontWeight: "bold" }'>{{ toUpper(item.rarity) }}</span></td>
          <td class='type'><span>{{ item.type }}</span></td>
        </tr>
      </tbody>
    </table>
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
</template>

<script>

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetchData(this.$route.params.name);
  },
  methods: {
    fetchData(name) {
      console.log('running');
      fetch('http://aoedb.net/api/items?type='.concat(name))
        .then(response => response.text())
        .then((contents) => {
          this.items = JSON.parse(contents).items;
          console.log(this.items);
        });
    },
    toUpper(item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    },
    returnLevels(levels) {
      const newLevels = levels.map(level => level - 3);
      return newLevels;
    },
    rareColor(rarity) {
      switch (rarity) {
        case 'legendary': {
          return 'orange';
        }
        case 'epic': {
          return '#b04bdf';
        }
        case 'rare': {
          return '#3b8fff';
        }
        case 'uncommon': {
          return '#45ff5e';
        }
        default: {
          return 'white';
        }
      }
    },
  },
  watch: {
    $route(to) {
      this.items = [];
      this.fetchData(to.params.name);
    },
  },
};
</script>

<style scoped>
  #tableContainer {
    position: relative;
    width: 60%;
    height: 80%;
    margin: auto;
    margin-top: 2%;
    overflow: hidden;
    table-layout: fixed;
  }
  
  #table {
    height: 100%;
    min-width: 100%;
    overflow-y: scroll;
    display: block;
  }
  
  #tableContainer > #table > table > tbody > tr:hover {
    background-color: #8299b8;
    cursor: pointer;
  }

  #tableContainer > #table > table > tbody > tr > td:not(.icon) {
    overflow-wrap: normal;
    padding-left: 10px;
    padding-right: 10px;
  }

  .name > span {
    width: 100%;
    display: block;
    white-space: normal;
  }
  
  .levels > span {
    width: 100%;
    white-space: normal;
  }

  .type > span {
    width: 100%;
    white-space: normal;
  }

  .edge {
    position: absolute;
  }

  .corner {
    position: absolute;
    width: 8px;
    height: 8px;
    background-image: url('../assets/images/border_corners.png');
  }

  .left {
    top: 0;
    bottom: 0;
    width: 8px;
    background-image: url('../assets/images/tooltip/left.png');
  }

  .right {
    right: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background-image: url('../assets/images/tooltip/right.png');
  }

  .top {
    top: 0;
    left: 2px;
    right: 2px;
    height: 8px;
    background-image: url('../assets/images/tooltip/top.png');
  }

  .bottom {
    bottom: 0;
    left: 2px;
    right: 2px;
    height: 8px;
    background-image: url('../assets/images/tooltip/bot.png');
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

  /* Smartphones ----------- */
@media only screen and (max-width: 760px) {
  #tableContainer {
    position: relative;
    width: 100%;
    height: 75%;
    margin: auto;
    margin-top: 2%;
    overflow: hidden;
    table-layout: fixed;
  }
}
</style>

