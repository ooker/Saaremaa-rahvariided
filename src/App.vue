<template>
  <div id="app">
    <transition name="fade" mode="out-in" >
      <component :is="currentView" :gd="gameData" :gi="gameIndex"></component>
    </transition>
    
    <nkl-bottom-bar :gd="gameData"></nkl-bottom-bar>
    <nkl-score :score="gameScore"></nkl-score>
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
        gameScore: 0,
        gameIndex: 0
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
      eventBus.$on("viewChanged", (newView)=>{
        this.currentView = newView;
      } );
      eventBus.$on("scoreChanged", (s)=>{
        this.gameScore += s;
      } );
      eventBus.$on("roundChanged", ()=>{
        this.gameIndex++;
      } );
      eventBus.$on("itemFound", ()=>{
          this.gameData[this.gameIndex].item.itemFound = true;
      } );
    }
  }
</script>


<style>
  #app {
    min-height: 100vh;
  }
</style>
