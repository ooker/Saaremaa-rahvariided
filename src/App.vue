<template>
  <div id="app">
    <component :is="currentView" :gd="gameData" :gi="gameIndex"></component>
    <nkl-bottom-bar :gd="gameData"></nkl-bottom-bar>
    <nkl-score :score="gameScore"></nkl-score>
  </div>
</template>

<script>
  import {eventBus} from "./main";
  import Intro from "./components/Intro.vue";
  import GuessThing from "./components/GuessThing.vue";
  import GameMap from "./components/Map.vue";
  import Score from "./components/Score.vue";
  import BottomBar from "./components/BottomBar.vue";

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
      "nkl-guess-thing": GuessThing,
      "nkl-map" : GameMap,
      "nkl-score": Score,
      "nkl-bottom-bar": BottomBar
    },
    created(){
      eventBus.$on("viewChanged", (newView)=>{
        this.currentView = newView;
      } );
      eventBus.$on("scoreChanged", (s)=>{
        this.gameScore += s;
      } );
      eventBus.$on("roundChanged", ()=>{
        if(this.gameIndex < 3) {
          this.gameIndex++;
        } else {
          // Game Over
          this.gameIndex = 0;
        }
      } );
      eventBus.$on("itemFound", ()=>{
          this.gameData[this.gameIndex].item.itemFound = true;
      } );
      /*eventBus.$on("placeFound", ()=>{
          this.gameData[this.gameIndex].map.placeFound = true;
      } );*/


      //console.log("App: " + this.gameData[0].name)
      //console.log("Bus: " + eventBus.gameData[0].name)

    }
  }
</script>

<style>

  #app {
    min-height: 100vh;
    background: #666;
  }

</style>
