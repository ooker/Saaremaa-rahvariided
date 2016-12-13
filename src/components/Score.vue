<template>
  <div class="nkl-score">
    {{ this.score }}
  </div>
</template>

<script>
  export default {
    props: ["score"]
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .nkl-score {
    position: absolute;
    top: 2vmin;
    right: 2vmin;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: $font-special;
    font-size: 2.5rem;
    line-height: 1;
    color: $nkl-yellow--pale;

    background: rgba(0, 0, 0, 0.6);
  }
</style>
