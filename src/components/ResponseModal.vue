<template>
  <div class="nkl-responseModal">
    <div v-if="myChoice === false">
      <h1>{{ giveMeAPhrase }}</h1>
    </div>
    <div v-else="myChoice === true">
      <h1>Well done!</h1>
    </div>
    <button @click="clicked" class="nkl-button">PROOVIN UUESTI</button>
  </div>
</template>


<script>
  export default {
    props: ["choice"],
    data(){
      return {
        myChoice : this.choice,
        wrongPhrases: [
          "Mitte päris!", "Vale vastus!", "Uups!", "Ei ole õige!", "Kahjuks mitte!"
        ]
      }
    },
    computed: {
      giveMeAPhrase(){
        let wrongPhrase = this.wrongPhrases[ Math.floor(Math.random()*this.wrongPhrases.length) ];
        return wrongPhrase;
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



</style>
