<template>
  <div class="nkl-viewContainer zigzag">

    <div class="nkl-viewContainer__item nkl-guessThing__image">
        <img :src="image" alt="Mõista-mõista, mis see on">
        <!-- <img :src="loadImg(this.image)" /> -->
        <!-- <img src="../assets/ese-01_600.jpg"  /> -->
        <!-- <img src="../assets/img/game/ese-01_600.jpg" alt="Mõista-mõista, mis see on"> -->
    </div>

    <div class="nkl-viewContainer__item nkl-guessThing__content" v-if="!itemFound">
        <h1>Mis see on?</h1>
        <div class="buttons">
          <nkl-guess-thing-button
            v-for="choice in choices"
            :name="choice"
            :right="rightChoice"
            :current="currentChoice"
            @choiceMade = "checkAnswer"
            class="nkl-button"
          ></nkl-guess-thing-button>
        </div>
    </div>
    <div v-else class="nkl-viewContainer__item nkl-guessThing__content">
      <h1>{{this.rightChoice}}</h1>
      <hr />
      <p v-html="gd[gi].item.itemInfo"></p>
      <hr />
      <p></p>
      <button @click="next">EDASI</button>
    </div>

    <transition name="fade">
      <nkl-response-modal v-if="currentChoice==='wrong'"
      :choice="currentChoice"
      @closeMe="responseClosed"></nkl-response-modal>
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
        itemFound : false,
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
        if (d == false) {
          this.guessScore -= this.penalty;
          this.currentChoice = "wrong";
        } else if (d == true) {
          eventBus.changeScore(this.guessScore);
          this.currentChoice = "right";
          eventBus.foundItem();
          this.itemFound = true;
          //eventBus.changeView("nkl-map");
        }
      },
      responseClosed(){
        this.currentChoice = null;
      },
      next(){
        eventBus.changeView("nkl-map");
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

  .nkl-guessThing__image {
    flex: 0 1 40%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;

    img {
      width: 90%;
      border-radius: 50%;
      box-shadow: 0 0 1.5vw 0px rgba(0,0,0,0.8);
    }

    @include mq-m {
      img {
        max-width: 450px;
      }
    }

    @include mq-l {
      padding-top: 0;
      height: 85vh;
      img {
        max-width: none;
        box-shadow: 0 0 0.7vw 0px rgba(0,0,0,0.8);
      }
    }
  }

  .nkl-guessThing__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
      font-size: 3rem;
    }
    @include mq-l {
      height: 85vh;
    }
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .nkl-button {
      margin: 1vw;
      flex: 0 1 auto;
    }
    .nkl-button--disabled {
      background-color: rgba(0,0,0,0.3);
    }
  }

</style>
