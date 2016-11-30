<template>
  <div class="g-score">
    <h4>{{ this.score }}</h4>
  </div>
</template>

<script>
  export default {
    props: ["score"]
  }
</script>

<style scoped lang="sass">
  .g-score {
    position: absolute;
    top: 2vmin;
    right: 2vmin;
    width: 100px;
    padding: 1vmin;
    color: white;
    background: rgba(0,0,0,0.4);
  }
</style>
