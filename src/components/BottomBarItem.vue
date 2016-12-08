<template>
  <figure class="bottomBar__item">
      <div>
        <img :src="this.img" />
      </div>
      <figcaption>
        <p v-if="itemFound==true">Essa</p>
        <p v-if="placeFound==true">Tessa</p>
      </figcaption>
    </figure>
</template>

<script>

  import {eventBus} from "../main";

  export default {
    props: ["place", "itemFound", "placeFound"],
    data(){
      return {
          img : require("../assets/img/game/" + this.place.item.img),
          //itemFound : this.itemFound
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
    transition: all 0.5s ease;

    img {
      display: block;
      width: 50%;
      max-width: 70%;
      border-radius: 50%;
      margin: 0 auto;
    }
    p {
      //display:none;
      margin:0;
    }
    &--active {
      margin-top: -4vmin;
      p {
        display: block;
      }
    }
      &:hover {
        flex: 0 1 20%;
        margin-top: -70px;
        transition: all 0.5s ease;
      }
  }
    .showItem {
      background-color: yellow;
    }
</style>
