<template>
  <div class="nkl-viewContainer nkl-viewContainer--flex">

    <div class="nkl-viewContainer__item map">
      MAP
    </div>

    <!-- <nkl-guess-thing-response v-if="currentChoice" :choice="currentChoice" @closeMe="responseClosed"></nkl-guess-thing-response> -->
  </div>
</template>


<script>
  // GM API KEY: AIzaSyB9KVv29qwpVyoBevreWcdrJvV-0BrBPW0
  import {eventBus} from "../main";

  export default {
    // gd: gameData, gi: gameIndex
    props: ["gd", "gi"],
    data (){
      return {
        lat : "",
        lng: null,
        currentChoice : false,
        rightChoice : false,
        guessScore: 60,
        penalty: 5
      }
    },
    components : {
      // "nkl-guess-thing-button": GuessThingButton,
      // "nkl-guess-thing-response": GuessThingResponse
    },
    methods : {
      checkAnswer(d){
        if (d == "wrong") {
          this.guessScore -= this.penalty;
          this.currentChoice = false;
        } else if (d == "right") {
          eventBus.changeScore(this.guessScore);
          this.currentChoice = false;
        }
      },

      responseClosed(){
        this.currentChoice = false;
      }
    },
    created(){

    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

</style>
