<template>
  <div id="app">
    <component :is="currentView"></component>
    <bottom-bar></bottom-bar>
    <nkl-score :score="gameScore"></nkl-score>
  </div>
</template>

<script>
  import {eventBus} from "./main";
  import Intro from "./components/Intro.vue";
  import GuessThing from "./components/GuessThing.vue";
  import Score from "./components/Score.vue";
  import BottomBar from "./components/BottomBar.vue";

  export default {
    name: 'app',
    data () {
      return {
        currentView : "nkl-intro",
        views: ["nkl-intro", "nkl-guess-view"],
        introText: "Kakummeri hepoo loorisaba tutt!",
        gameScore: 0,
        gameIndex: 0
      }
    },
    components : {
      "nkl-intro" : Intro,
      "nkl-guess-thing": GuessThing,
      "nkl-score": Score,
      "bottom-bar": BottomBar
    },
    created(){
      eventBus.$on("viewChanged", (newView)=>{
        this.currentView = newView;
      } );
      eventBus.$on("scoreChanged", (s)=>{
        this.gameScore += s;
      } );

    }
  }
</script>

<style>

  #app {
    min-height: 100vh;
    background: #666;
  }

</style>
