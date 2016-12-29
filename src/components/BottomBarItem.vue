<template>
  <figure class="bottomBar__item" :class="{active:itemFound}">
      <div>
        <img :src="this.img" />
      </div>
      <figcaption >
        <p v-if="itemFound">{{this.place.item.name}}</p>
        <p style="opacity:0.4">{{this.place.name}}</p>
      </figcaption>
    </figure>
</template>

<script>

  import {eventBus} from "../main";

  export default {
    props: ["place", "itemFound"],
    data(){
      return {
          img : require("../assets/img/game/" + this.place.item.thumb)
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .bottomBar__item {
    flex: 0 1 12%;
    text-align: center;
    margin: 0;
    padding: 0;
    opacity: 0;

    img {
      display: block;
      width: 60%;
      max-width: 10vh;
      border-radius: 50%;
      margin: 0 auto 1vh auto;
      box-shadow: 0 0 5px 2px hsla(0, 0%, 0%, 0.3);
      transition: all 0.5s ease;
    }
    p {
      margin:0;
      font-size: 0.65rem;
      text-transform: uppercase;
    }
  }

    .active {
      opacity: 1;
      transition: all 0.5s ease;
      &:hover {
        img {
          width: 85%;
          max-width: 100%;
          //margin-bottom: 2vh;
          transition: all 0.5s ease;
        }
      }
    }
</style>
