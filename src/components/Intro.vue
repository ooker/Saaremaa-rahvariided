<template>
  <div class="intro zigzag">

    <h1>See on mäng</h1>
    <hr />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis tempor ex ac sollicitudin. Nulla facilisi. Suspendisse felis nisl, cursus non posuere sit amet, tempor non velit. Praesent fermentum quam a mollis scelerisque. Phasellus vel facilisis est, non congue nisi. Proin mi enim, fermentum ac nisi ac, vehicula blandit lectus. In vehicula justo lacus, sed molestie eros lacinia eu. Donec mollis molestie magna, in varius lorem condimentum sed.</p>
    <button class="nkl-button large nkl-font--special" @click="launchGame">Mängima!</button>

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
    text-shadow: 0 3px 5px rgba(0,0,0,0.7);
  }
  p {
    line-height: 1.6;
  }
  hr {
      width: 60%;
      margin-top: 4vh;
    }
</style>
