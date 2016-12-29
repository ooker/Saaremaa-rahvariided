<template>
  <div id="app">
    <transition name="fade" mode="out-in" >
      <component :is="currentView" :gd="gameData" :gi="gameIndex"></component>
    </transition>

    <nkl-bottom-bar :gd="gameData" v-if="gameStarted"></nkl-bottom-bar>
    <nkl-score :score="gameScore" v-if="gameStarted"></nkl-score>
  </div>
</template>

<script>
  import {eventBus} from "./main";
  import BottomBar from "./components/BottomBar.vue";
  import GameMap from "./components/Map.vue";
  import GameOver from "./components/GameOver.vue";
  import GuessThing from "./components/GuessThing.vue";
  import Intro from "./components/Intro.vue";
  import Score from "./components/Score.vue";


  export default {
    name: 'app',
    data () {
      return {
        currentView : "nkl-intro",
        gameData: eventBus.shuffle(eventBus.gameData),
        gameScore: 500,
        gameIndex: 0,
        gameStarted: false
      }
    },
    components : {
      "nkl-intro" : Intro,
      "nkl-guess-thing" : GuessThing,
      "nkl-map" : GameMap,
      "nkl-score" : Score,
      "nkl-bottom-bar" : BottomBar,
      "nkl-game-over" : GameOver
    },
    created(){
      eventBus.$on("gameStarted", ()=>{
        this.gameStarted = true;
      } );
      eventBus.$on("viewChanged", (newView)=>{
        this.currentView = newView;
      } );
      eventBus.$on("scoreChanged", (s)=>{
        //this.gameScore += s;
        this.gameScore += s;
        eventBus.finalScore = this.gameScore;
      } );
      eventBus.$on("roundChanged", ()=>{
        this.gameIndex++;
      } );
      eventBus.$on("itemFound", ()=>{
          this.gameData[this.gameIndex].item.itemFound = true;
      } );
      /*eventBus.$on("getGameScore", ()=>{
          eventBus.finalScore = this.gameScore;
      } );*/
    }
  }
</script>


<style lang="sass">
  //@import "assets/scss/variables.scss";
  #app {
    min-height: 100vh;
    max-width: 1500px;
    margin: auto;
  }
</style>
