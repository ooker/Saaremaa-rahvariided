//require("!style-loader!css-loader!sass-loader!./assets/scss/nkl.scss");
require("./assets/scss/nkl.scss");


import Vue from 'vue'
import App from './App.vue'

var gameData = [
  {
    "name" : "Anseküla",
    "variandid" : {
      "a" : "See on esimene a",
      "b" : "See on esimene b"
    }
  },
  {
    "name" : "Jämaja",
    "variandid" : {
      "a" : "See on teine a",
      "b" : "See on teine b"
    }
  }

];


export const eventBus = new Vue({
  data: {
    gameData : gameData,
    gameIndex : 0
  },
  methods : {
    changeView(viewName){
      this.$emit("viewChanged", viewName);
    },
    changeScore(value){
      this.$emit("scoreChanged", value)
    }
  },
  beforeCreate() {
    gameData = shuffle(gameData);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});



//----- Helpers

function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));
    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}
