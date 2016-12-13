<template>
  <div class="intro zigzag">

    <h1>Rahvarõivad</h1>
    <!-- <hr /> -->
    <div style="width:100%;margin:4vh auto;">
      <svg viewBox="0 0 200 8">
        <path fill="none" stroke="#777" stroke-width="2px" vector-effect="non-scaling-stroke"
          d="M0,8 0,7 90,7 100,1 110,7 200,7 200,8"/>
      </svg>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis tempor ex ac sollicitudin. Nulla facilisi. Suspendisse felis nisl, cursus non posuere sit amet, tempor non velit. Praesent fermentum quam a mollis scelerisque. Phasellus vel facilisis est, non congue nisi. Proin mi enim, fermentum ac nisi ac, vehicula blandit lectus. In vehicula justo lacus, sed molestie eros lacinia eu. Donec mollis molestie magna, in varius lorem condimentum sed.</p>
    <!-- <hr /> -->
    <div style="width:100%;margin:4vh auto;">
      <svg viewBox="0 0 200 8">
        <path fill="none" stroke="#777" stroke-width="2px" vector-effect="non-scaling-stroke"
          d="M0,0 0,1 90,1 100,7 110,1 200,1 200,0"/>
      </svg>
    </div>
    <button class="nkl-button huge nkl-font--special" @click="launchGame">Mängima!</button>

  </div>

</template>


<script>

  import {eventBus} from "../main";

  export default {
    methods : {
      launchGame(){
        eventBus.changeView("nkl-guess-thing");
      }
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
      height: 85vh;
    }
  }
  h1 {
    font-size: 5rem;
    line-height: 1;
    margin: 0;
    color: $nkl-yellow--pale;
    text-shadow: 0 3px 5px rgba(0,0,0,0.7);
  }
  p {
    line-height: 1.6;
    color: $nkl-white;
    margin: 0;
  }
  hr {
      width: 80%;
      margin: 4vh auto;
    }
</style>
