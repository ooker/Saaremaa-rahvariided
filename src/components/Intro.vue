<template>
  <div class="intro">

    <h1>See on mäng</h1>
    <h4>Komponent "Intro"</h4>
    <button class="nkl-button large nkl-font--special" @click="launchGame">Mängima!</button>

  </div>

</template>


<script>

  import {eventBus} from "../main";

  export default {
    methods : {
      launchGame(){
        //this.$emit("viewChanged", "nkl-guess-thing");
        eventBus.changeView("nkl-guess-thing");

        //eventBus.score++;
        //console.log("GAME's ON MOTHAFUCKAS!!!" + eventBus.gameData[1].name);
      }
    }

  }
</script>

<style scoped>
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100vh;
    background: gray;
  }

</style>
