<template>
  <div class="nkl-bottomBar">
    <h4> Bottom bar </h4>
  </div>
</template>

<script>

  export default {
    //props: ["score"]
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";
  .nkl-bottomBar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    display: none;
    background: hsla(0, 0%, 0%, 0.8);
    color: white;
    @include mq-l{
      display: flex;
    }
  }
</style>
