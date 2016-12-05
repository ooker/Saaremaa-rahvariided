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
      position: {lat: 58.098358, lng: 22.231077}
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
      position: {lat: 58.012714, lng: 22.052888}
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
      position: {lat: 58.360297, lng: 22.035814}
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
      position: {lat: 58.300548, lng: 22.725704} 
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

/*

markers: [
  {
    position: {lat: 58.408213, lng: 22.788948} //Valjala
  }, {
    position: {lat: 58.349067, lng: 22.509372} // Kaarma
  }, {
    position: {lat: 58.300548, lng: 22.725704} // Püha
  }, {
    position: {lat: 58.360297, lng: 22.035814} // Kihelkonna
  }, {
    position: {lat: 58.012714, lng: 22.052888} // Jämaja
  }, {
    position: {lat: 58.098358, lng: 22.231077} // Anseküla
  }, {
    position: {lat: 58.333498, lng: 22.258482} // Kärla
  }, {
    position: {lat: 58.613415, lng: 22.915182} // Jaani
  }, {
    position: {lat: 58.509506, lng: 23.049149} // Pöide
  }, {
    position: {lat: 58.462323, lng: 22.235696} // Mustjala
  }, {
    position: {lat: 58.523244, lng: 22.732552},
    right: true // Karja
  }
]

 */
