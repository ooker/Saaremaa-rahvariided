<template>
  <figure class="bottomBar__item" :class="{active:itemFound}">
      <div>
        <img :src="this.img" />
      </div>
      <figcaption v-if="itemFound">
        <p>{{this.place.item.name}}</p>
        <p>{{this.place.name}}</p>
      </figcaption>
    </figure>
</template>

<script>

  import {eventBus} from "../main";

  export default {
    props: ["place", "itemFound"],
    data(){
      return {
          img : require("../assets/img/game/" + this.place.item.img)
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
    opacity: 0.25;

    img {
      display: block;
      width: 50%;
      //max-width: 70%;
      border-radius: 50%;
      margin: 0 auto 1vh auto;
      box-shadow: 0 0 5px 2px hsla(0, 0%, 0%, 0.3);
      transition: all 0.5s ease;
    }
    p {
      margin:0;
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }

    .active {
      opacity: 1;

      &:hover {
        img {
          width: 70%;
          margin-bottom: 2vh;
          transition: all 0.5s ease;
        }
      }
    }
</style>
