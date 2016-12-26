<template>
  <button
    @click="clicked"
    :disabled = "isClicked"
    :class = "{ 'nkl-btn--disabled' : this.isClicked }"
    class="nkl-btn">{{name}}</button>
</template>

<script>
  export default {
    props: ["name", "right"],
    data() {
      return {
        isClicked : false
      }
    },
    methods: {
      clicked () {
        if (this.name == this.right) {
          this.$emit("choiceMade", true);
        } else {
          this.$emit("choiceMade", false);
        }
        this.isClicked = true;
      }
    }
  }
</script>

<style scoped>
  button {
    text-transform: uppercase;
    letter-spacing: 1.6px;
    line-height: 1;
  }
</style>
