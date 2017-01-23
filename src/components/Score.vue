<template>
  <div class="nkl-score" :class="[{alert : alertMe}, {success : praiseMe}]">
    {{ this.newScore }}
  </div>
</template>

<script>
  export default {
    props: ["score"],
    data(){
      return {
        newScore : this.score,
        alertMe : false,
        praiseMe : false
      }
    },
    methods : {
      scoreChanged(){
        if(this.score < this.newScore){
          this.alertMe = true;
          /*setTimeout(function(){
            vm.alertMe = false;
            vm.newScore = vm.score;
          }, 850);*/
          this.scrubNumbers();
        } else {
          this.praiseMe = true;
          /*setTimeout(function(){
            vm.praiseMe = false;
            vm.newScore = vm.score;
          }, 850);*/
          this.scrubNumbers();
        }
      },
      scrubNumbers(){
        var int;
        var vm = this;

        int = setInterval(function(){
          if(vm.score == vm.newScore){
            clearInterval(int);
            vm.alertMe = false;
            vm.praiseMe = false;
          } else {
            if(vm.score > vm.newScore){
              vm.newScore++;
            } else {
              vm.newScore--;
            }
          }
        }, 100);
      }
    },
    watch : {
      score : function(){
        this.scoreChanged();
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .nkl-score {
    position: fixed;
    top: 2vmin;
    right: 2vmin;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: $font-special;
    font-size: 2rem;
    line-height: 1;
    color: $nkl-white;

    border: 3px $nkl-yellow--pale solid;
    background: rgba(0, 0, 0, 0.8);
    transition: all 1s;
  }

  .alert {
      background: rgb(170, 57, 15);
      width: 5.6rem;
      height: 5.6rem;
      transition: all .75s;
  }
  .success {
    background: rgb(15, 170, 26);
    width: 5.6rem;
    height: 5.6rem;
    transition: all .75s;
  }


</style>
