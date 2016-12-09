<template>
  <div class="nkl-viewContainer nkl-viewContainer--flex">

    <div class="nkl-viewContainer__item image">
        <img :src="image" alt="Mõista-mõista, mis see on">
        <!-- <img :src="loadImg(this.image)" /> -->
        <!-- <img src="../assets/ese-01_600.jpg"  /> -->
        <!-- <img src="../assets/img/game/ese-01_600.jpg" alt="Mõista-mõista, mis see on"> -->
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

    <transition name="fade">
      <nkl-response-modal v-if="currentChoice" :choice="currentChoice" @closeMe="responseClosed"></nkl-response-modal>
    </transition>

  </div>
</template>


<script>

  import {eventBus} from "../main";
  import GuessThingButton from "../components/GuessThingButton.vue";
  import ResponseModal from "../components/ResponseModal.vue";

  export default {
    // gd: gameData, gi: gameIndex
    props: ["gd", "gi"],
    data (){
      return {
        image : require("../assets/img/game/" + this.gd[this.gi].item.img) ,
        choices : [],
        //rightChoice : false,
        currentChoice: null,
        guessScore: 60,
        penalty: 10
      }
    },
    components : {
      "nkl-guess-thing-button": GuessThingButton,
      "nkl-response-modal": ResponseModal
    },
    methods : {
      checkAnswer(d){
        if (d == "wrong") {
          this.guessScore -= this.penalty;
          this.currentChoice = "wrong";
        } else if (d == "right") {
          eventBus.changeScore(this.guessScore);
          this.currentChoice = "right";
          eventBus.foundItem();
          eventBus.changeView("nkl-map");
        }
      },
      responseClosed(){
        this.currentChoice = null;
      }
    },
    created(){
      this.choices.push(this.gd[this.gi].item.name);
      for (var value of this.gd[this.gi].item.options) {
        this.choices.push(value);
      }
      this.choices = eventBus.shuffle(this.choices);
      this.rightChoice = this.gd[this.gi].item.name;
    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";
  .image {

    flex: 0 1 40%;
    text-align: center;
    padding-top:5vh;
    img {
      width: 90%;
      border-radius: 50%;
    }
    @include mq-m {

      // padding-top:0;
      img {
        width: 90%;
        max-width: 500px;
      }
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
    justify-content: center;
    button {
      margin: 1vw;
      flex: 0 1 auto;
    }
  }

</style>
