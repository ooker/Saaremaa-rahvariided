<template>
  <div class="nkl-viewContainer nkl-viewContainer--flex">

    <div class="nkl-viewContainer__item image">
        <img src="../assets/img/game/ese-01_600.jpg" alt="">
    </div>

    <div class="nkl-viewContainer__item content">
        <h1>Mis see on?</h1>
        <div class="buttons">
          <nkl-guess-thing-button
            v-for="choice in choices"
            :name="choice"
            :right="rightChoice"
            :current="currentChoice"
            @choiceMade = "checkAnswer"
          ></nkl-guess-thing-button>
        </div>
    </div>

    <nkl-guess-thing-response v-if="currentChoice" :choice="currentChoice" @closeMe="responseClosed"></nkl-guess-thing-response>

  </div>
</template>


<script>

  import {eventBus} from "../main";
  import GuessThingButton from "../components/GuessThingButton.vue";
  import GuessThingResponse from "../components/GuessThingResponse.vue";

  export default {
      data (){
        return {
          kihelkond : eventBus.gameData[eventBus.gameIndex],
          choices : ["essa", "tessa", "kossa"],
          rightChoice : "essa",
          currentChoice: null,
          guessScore: 60,
          penalty: 10
        }
      },
      components : {
        "nkl-guess-thing-button": GuessThingButton,
        "nkl-guess-thing-response": GuessThingResponse
      },
      methods : {
        checkAnswer(d){
          if (d == "wrong") {
            this.guessScore -= this.penalty;
            this.currentChoice = "wrong";
          } else if (d == "right") {
            eventBus.changeScore(this.guessScore);
            this.currentChoice = "right";
          }
        },
        responseClosed(){
          this.currentChoice = null;
        }
      }
  }
</script>

<style scoped lang="sass">

  .image {
    flex: 0 1 40%;
    img {
      border-radius: 50%;
    }
  }

  .content {
    flex: 1;
    h1 {
      text-align: center;
    }
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    button {
      flex: 0 1 33.3%;
    }
  }

</style>
