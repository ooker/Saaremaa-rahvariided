<template>
  <div class="intro nkl-zigzag">

    <div style="width:100%;margin:4vh auto;">
      <svg viewBox="0 0 100 2">
        <path fill="none" stroke="#777" stroke-width="1px" vector-effect="non-scaling-stroke"
          d="M0,1.5 48,1.5 50,0 52,1.5 100,1.5"/>
      </svg>
    </div>

    <h1>Ongi kõik!</h1>

    <p>
      Sul õnnestus koguda {{this.finalScore}} punkti 940-st võimalikust ja loodetavasti ka pisut uusi teadmisi Saaremaa rahvarõivaste ning kihelkondade kohta.
    </p>
    <div style="width:100%;margin:4vh auto;">
      <svg viewBox="0 0 100 2">
        <path fill="none" stroke="#777" stroke-width="1px" vector-effect="non-scaling-stroke"
          d="M0,0.5 48,0.5 50,2 52,0.5 100,0.5"/>
      </svg>
    </div>
    <button class="nkl-btn huge nkl-font--special" @click="launchGame">Proovi uuesti</button>

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
      launchGame(){
        eventBus.changeView("nkl-guess-thing");
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
</style>
