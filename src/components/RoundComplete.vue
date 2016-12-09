<template>
  <div class="nkl-viewContainer nkl-viewContainer--flex">

    <div class="nkl-viewContainer__item image">
        <img :src="itemImg" alt="asass">
    </div>

    <div class="nkl-viewContainer__item costume">
      <img :src="costumeImage" alt="asass">
    </div>

    <div class="nkl-viewContainer__item map">

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        itemImg : "",
        costumeImg : ""
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";



</style>
