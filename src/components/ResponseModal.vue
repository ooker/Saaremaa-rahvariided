<template>
  <div class="nkl-responseModal">
    <div v-if="myChoice === 'wrong'">
      <h1>Too bad!</h1>
    </div>
    <div v-else="myChoice === 'right'">
      <h1>Well done!</h1>
    </div>
    <button @click="clicked">KINNI</button>
  </div>
</template>


<script>
  export default {
    props: ["choice"],
    data(){
      return {
        myChoice : this.choice
      }
    },
    methods : {
      clicked(){
        this.$emit("closeMe");
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .nkl-responseModal {
    position: absolute;
    top:10vh;
    right:20vw;

    background: hsla( 0, 0%, 0%, 0.6);

    @include mq-m {
      background: yellow;
    }
  }



</style>
