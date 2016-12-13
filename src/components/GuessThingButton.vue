<template>
  <button @click="clicked" class="nkl-button">{{name}}</button>
</template>

<script>
  export default {
    props: ["name", "right"],
    methods: {
      clicked () {
        if (this.name == this.right) {
          this.$emit("choiceMade", true);
        } else {
          this.$emit("choiceMade", false);
        }
      }
    }
  }
</script>

<style scoped></style>
