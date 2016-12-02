<template>
  <div class="nkl-bottomBar">

    <figure v-for="(place, index) in this.gd" class="item">
      <figcaption >
        <img :src="imgArr[index]" />
        <!-- <img src="../assets/ese-01_200.jpg" />  -->
        <p>{{ place.item.name }}</p>
        <p>{{ place.name}}</p>
      </figcaption>
    </figure>

  </div>
</template>

<script>

  export default {
    props: ["gd"],
    data(){
      return {
          imgArr : []
      }
    },
    methods : {

    },
    created(){
      let url;
      for (var i=0; i<this.gd.length; i++) {
        url = this.gd[i].item.thumb;
        url = require("../assets/img/game/" + url);
        this.imgArr.push(url);
      }

    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";
  .nkl-bottomBar {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    background: hsla(0, 0%, 0%, 0.8);
    color: white;

    @include mq-l{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .item {
    flex: 0 1 9%;
    text-align: center;
    img {
      width: 70%;
      max-width: 70px;
      border-radius: 50%;
    }
    p {
      display:none;
      margin:0;
    }
    &--active {
      margin-top: -4vmin;
      p {
        display: block;
      }
    }
  }
</style>
