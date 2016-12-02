//require("!style-loader!css-loader!sass-loader!./assets/scss/nkl.scss");
require("./assets/scss/nkl.scss");


import Vue from 'vue'
import App from './App.vue'

var gameData = [
  {
    "name" : "Anseküla",
    "item" : {
      "name" : "Sariküll",
      "img" :  "ese-02_600.jpg",
      "thumb" : "ese-02_200.jpg"
    },
    "options" : [
      "Rullkrae",
      "Lihaküünal",
      "Uskumatu ime",
      "Sall"
    ],
    "map" : {
      "lat": 45.447,
      "lng": 44.228
    }
  },
  {
    "name" : "Jämaja",
    "item" : {
      "name" : "Jämaja ese",
      "img" :  "ese-02_600.jpg",
      "thumb" : "ese-02_200.jpg"
    },
    "options" : [
      "Koorikvest",
      "Pidulik keeks",
      "Harilik uba"
    ],
    "map" : {
      "lat": 45.447,
      "lng": 44.228
    }
  },
  {
    "name" : "Kihelkonna",
    "item" : {
      "name" : "Kihelkonna ese",
      "img" :  "ese-01_600.jpg",
      "thumb" : "ese-01_200.jpg"
    },
    "options" : [
      "Tibu-tiss",
      "Laevastik",
      "Reeglikauss"
    ],
    "map" : {
      "lat": 55.447,
      "lng": 77.228
    }
  },
  {
    "name" : "Püha",
    "item" : {
      "name" : "Püha ese",
      "img" :  "ese-01_600.jpg",
      "thumb" : "ese-01_200.jpg"
    },
    "options" : [
      "Laparootsor",
      "Püha müha",
      "Laimukarikas"
    ],
    "map" : {
      "lat": 56.447,
      "lng": 78.228
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
    },

    shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
      }
      return sourceArray;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});



//----- Helpers

/*function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));
    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}*/
