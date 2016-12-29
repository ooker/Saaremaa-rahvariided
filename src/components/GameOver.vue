<template>
  <div class="intro nkl-zigzag">

    <h1>Ongi kõik!</h1>

    <div style="width:100%;margin:2vh auto;">
      <svg viewBox="0 0 100 2">
        <path fill="none" stroke="#777" stroke-width="1px" vector-effect="non-scaling-stroke"
          d="M0,1.5 48,1.5 50,0 52,1.5 100,1.5"/>
      </svg>
    </div>

    <section class="nkl-introInfo">

      <div class="nkl-introInfo__left">
        <p class="nkl-intro__text">
          Sul õnnestus koguda <b class="nkl-important">{{this.finalScore}} punkti</b> 940-st võimalikust ja <b class="nkl-important">loodetavasti ka pisut uusi teadmisi</b> Saaremaa rahvarõivaste ning kihelkondade kohta.
        </p>
      </div>
      <div class="nkl-introInfo__right">
          <button class="nkl-btn large nkl-font--special" @click="restartGame">Proovi uuesti</button>
      </div>

    </section>


    <div style="width:100%;margin:2vh auto;">
      <svg viewBox="0 0 100 2">
        <path fill="none" stroke="#777" stroke-width="1px" vector-effect="non-scaling-stroke"
          d="M0,0.5 48,0.5 50,2 52,0.5 100,0.5"/>
      </svg>
    </div>


  </div>

</template>


<script>

  import {eventBus} from "../main";

  export default {
    data(){
      return {
        finalScore : 0
      }
    },
    methods : {
      restartGame(){
        //eventBus.changeView("nkl-guess-thing");
        eventBus.restartGame();
      }
    },
    created() {
      this.finalScore = eventBus.finalScore;
    }

  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100vh;
    padding: 2vh 4vw;
    text-align: center;
    @include mq-l {
      height: 90vh;
      text-align: left;
    }
  }
  h1 {
    font-size: 3rem;
    line-height: 1.4;
    margin: 0 auto $nkl-m auto;
    color: $nkl-yellow--pale;
    text-shadow: 0 3px 5px rgba(0,0,0,0.7);
  }
  p {
    line-height: 1.6;
    color: $nkl-white;
    margin: 0 0 $nkl-s 0;
  }
  hr {
      width: 80%;
      margin: 4vh auto;
  }

  .nkl-introInfo {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    &>div {
      padding: 3vmin;
    }

    @include mq-l {
      flex-direction: row;
      align-items: center;
    }
  }

  .nkl-introInfo__left {
    @include mq-l {
      flex: 1 0 66.666%;
    }
  }
  .nkl-introInfo__right {
    @include mq-l {
      flex: 1 0 33.333%;
      align-self: flex-start;
      text-align: center;
    }
  }

  .nkl-intro__text {
    font-size: 1.2rem;
  }
</style>
