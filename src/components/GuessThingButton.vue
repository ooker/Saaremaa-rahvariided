<template>
  <button @click="clicked">{{myName}}</button>
</template>


<script>
  export default {

    props: ["name", "right", "current"],
    data () {
      return {
        myName: this.name,
        myRight: this.right
      }

    },
    methods: {
      clicked () {
        if (this.myName == this.myRight) {
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
