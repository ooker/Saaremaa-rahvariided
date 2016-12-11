<template>
  <button @click="clicked" class="nkl-button ">{{name}}</button>
</template>


<script>
  export default {

    props: ["name", "right", "current"],
    data () {
      return {
        //myName: this.name,
        //myRight: this.right
      }

    },
    methods: {
      clicked () {
        if (this.name == this.right) {
          this.$emit("choiceMade", "right");
        } else {
          this.$emit("choiceMade", "wrong");
        }
      }

    }
  }
</script>

<style scoped>
  /*flex-grow: 0;*/
  /*flex-s*/
</style>
