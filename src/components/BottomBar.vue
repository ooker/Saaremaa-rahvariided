<template>
  <div class="nkl-bottomBar">

    <nkl-bottom-bar-item
      v-for="place in this.gd"
        :place="place"
        :itemFound="place.item.itemFound"
        :placeFound="place.map.placeFound"

      class="nkl-bottomBar__item"></nkl-bottom-bar-item>

  </div>
</template>

<script>

  import BottomBarItem from "../components/BottomBarItem.vue";

  export default {
    props: ["gd"],
    components : {
      "nkl-bottom-bar-item": BottomBarItem,
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
      justify-content: center;
      align-items: baseline;
    }
  }
    .nkl-bottomBar__item {

    }
</style>
