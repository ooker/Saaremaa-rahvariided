<template>
  <div class="nkl-viewContainer">

    <div class="nkl-viewContainer__item nkl-guessThing__image">
        <img :src="image" alt="Mõista-mõista, mis see on">
    </div>

    <transition name="fade" mode="out-in">
      <div
        v-if="!itemFound"
        key="searching"
        class="nkl-viewContainer__item nkl-guessThing__content">

          <transition name="fly" appear ><div class="nkl-label">ARVA ÄRA</div></transition>

          <h1>Mis on pildil?</h1>
          <hr />
          <div class="nkl-guessThing__buttons">
            <nkl-guess-thing-button
              v-for="choice in choices"
              :name="choice"
              :right="rightChoice"
              :current="currentChoice"
              @choiceMade = "checkAnswer"
              class="nkl-btn"
            ></nkl-guess-thing-button>
          </div>
          <transition name="fade">
            <nkl-response-modal v-if="currentChoice===false"
            :choice="currentChoice"
            @closeMe="responseClosed"
            class="nkl-responseModal__item"></nkl-response-modal>
          </transition>
      </div>
      <div
        v-if="itemFound"
        key="found"
        class="nkl-viewContainer__item nkl-guessThing__content">

        <transition name="fly" appear ><div class="nkl-label">{{ chants[Math.floor(Math.random()*chants.length)] }}</div></transition>

        <h1>{{this.rightChoice}}</h1>
        <p style="margin-top:0.5vh; text-transform:uppercase; font-size:0.8rem;"> {{ gd[gi].name }} kihelkonnast</p>
        <hr />
        <p style="max-width:100%;" v-html="gd[gi].item.itemInfo"></p>
        <hr />
        <button @click="next" class="nkl-btn">EDASI</button>

      </div>
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
        chants : ["ÕIGE VASTUS!", "VÄGA TUBLI!", "HEA TÖÖ!", "HÄSTI PAKUTUD!", "ARVASID ÄRA!"],
        itemFound : false,
        currentChoice: null,
        guessScore: 6,
        penalty: 5
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
          eventBus.changeScore(eventBus.penalty);
          this.currentChoice = false;

        } else if (d == true) {
          //eventBus.changeScore(this.guessScore);
          eventBus.changeScore(eventBus.bonus);
          this.currentChoice = true;
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
      max-width: 450px;
      box-shadow: 0 0 1.5vw 0px rgba(0,0,0,0.8);
    }

    @include mq-m {
      img {
        max-width: 450px;
      }
    }

    @include mq-l {
      padding-top: 0;
      height: 90vh;
      justify-content: flex-end;
      img {
        max-width: none;
        box-shadow: 0 0 0.7vw 0px rgba(0,0,0,0.8);
      }
    }
  }

  .nkl-guessThing__content {
    position: relative;
    flex: 1 0 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 $nkl-m $nkl-5xl $nkl-m ;
    text-align: center;
    h1 {
      text-align: center;
      font-size: 3rem;
      color: $nkl-yellow--pale;
      margin-bottom: 0;
    }
    hr {
      width: 100%;
    }
    p {
      color: $nkl-white;
      line-height: 1.6;

    }
    @include mq-l {
      height: 90vh;
      padding: 0 $nkl-5xl 0 $nkl-m;
    }
  }

  .nkl-guessThing__buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .nkl-btn {
      margin: 0.5vw;
      flex: 0 1 auto;
    }

  }

  .nkl-button--disabled {
    background-color: rgba(0,0,0,0.5);
    opacity: 0.6;
  }

  .nkl-responseModal__item {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: hsla( 0, 0%, 0%, 0.9);
  }

    .nkl-label {
      opacity: 1;
      transform: rotateZ(-7deg) translate(-100px, 26px);
    }



  .fly-enter {
    opacity: 0;
    transform: rotateZ(0) translate(-100px, 0px);
  }
  .fly-enter-active {
    animation: fly-in 0.7s ease-out forwards;
  }

  @keyframes fly-in {
    0% {
      opacity: 0;
      transform: rotateZ(0) translate(-100px, 0px);
    }
    100% {
      opacity: 1;
      transform: rotateZ(-7deg) translateY(-100px, 26px);
    }
  }

</style>
