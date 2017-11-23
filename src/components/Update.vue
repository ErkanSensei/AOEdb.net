<template>
    <div>
        <h1 id='title'>{{ date }}: {{ title }}</h1>
        <div id='row'>
            <img :src='image' id='icon'>
            <p id='content'>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['date', 'title', 'image', 'content'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #content {
        padding: 5px;
    }
    #icon {
        float: left;
        margin: 0 5px 0 0;
    }
    #row {
        line-height: 1;
        height: 64px;
        font-size: 12px;
        font-weight: bold;
        text-align: left;
        text-shadow: 1px 0px 1px black
    }
    #title {
        font-weight: bold;
        font-size: 12px;
        color: #3b8fff;
        text-align: left;
        border-bottom: 1px dashed #3b8fff;
    }
</style>
