<template>
  <div class="nkl-responseModal">
    <div v-if="myChoice === false">
      <h2>{{ giveMeAPhrase }}</h2>
      <p v-if="showMessage === true" v-html="message"></p>
    </div>

    <!--<div v-else="myChoice === true">
      <h1>Hea töö!</h1>
    </div>-->
    <button @click="clicked" class="nkl-button">PROOVI UUESTI</button>
  </div>
</template>


<script>
  export default {
    props: ["choice", "message"],
    data(){
      return {
        myChoice : this.choice,
        extraMessage : this.message,
        showMessage : false,
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
    created(){
      //console.log(message);
      if(this.message != undefined) {
        this.showMessage = true;
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
    padding: 2vh 3vw;
  }
  h2 {
    font-size: $nkl-xxxl;
    margin-bottom: $nkl-s;
    color: $nkl-yellow--pale;
    text-align: center;

  }
  p {
    color:#fff;
    text-align: center;
    margin-bottom: $nkl-xl;
  }
  hr {
    width:50%;
  }
    b {
      color: $nkl-yellow--pale;
    }

  /*.nkl-responseModal {
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
    background: hsla( 0, 0%, 0%, 0.9);}*/



</style>
