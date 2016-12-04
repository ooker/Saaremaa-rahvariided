<template>
  <div class="nkl-viewContainer nkl-viewContainer--flex">
  <gmap-map
    :center="center"
    :zoom="9"
    :options="mapOptions"
  >
    <gmap-marker
      v-for="m in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
  <!-- <nkl-guess-thing-response v-if="currentChoice" :choice="currentChoice" @closeMe="responseClosed"></nkl-guess-thing-response> -->
</div>
</template>


<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import {load, Map, Marker} from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB9KVv29qwpVyoBevreWcdrJvV-0BrBPW0'
    }
  });

  export default {
    components: {
      gmapMap: Map,
      gmapMarker: Marker
    },
    props: ["gd", "gi"],
    data () {
      return {
        center: {lat: 58.361886, lng: 22.605158},
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
            position: {lat: 58.523244, lng: 22.732552} // Karja
          }
        ],
        mapOptions : {}
      }
    },
    created(){
      this.mapOptions = {
        styles : [
          { "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [{"visibility": "off" }]
          }, {
            "featureType": "administrative.neighborhood",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#519c1f" }]
          }, {
            "featureType": "landscape.natural",
            "stylers": [{ "color": "#60b825" }, { "visibility": "on" }]
          }, {
            "featureType": "poi",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#cddc10" }, {"visibility": "on"}]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#cddc10" }, { "visibility": "on" }, { "weight": 1.5 }]
          }, {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road.local",
            "stylers": [{  "visibility": "off" }]
          }, {
            "featureType": "transit",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#058b88" }, {"visibility": "on"}]
          }, {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "off" }]
          }
        ] // map styles
      }
    }
  }
</script>

<!--
<script>
  // GM API KEY: AIzaSyB9KVv29qwpVyoBevreWcdrJvV-0BrBPW0
  import {eventBus} from "../main";

  export default {
    // gd: gameData, gi: gameIndex
    props: ["gd", "gi"],
    data (){
      return {
        lat : "",
        lng: null,
        currentChoice : false,
        rightChoice : false,
        guessScore: 60,
        penalty: 5
      }
    },
    components : {
      // "nkl-guess-thing-button": GuessThingButton,
      // "nkl-guess-thing-response": GuessThingResponse
    },
    methods : {
      checkAnswer(d){
        if (d == "wrong") {
          this.guessScore -= this.penalty;
          this.currentChoice = false;
        } else if (d == "right") {
          eventBus.changeScore(this.guessScore);
          this.currentChoice = false;
        }
      },

      responseClosed(){
        this.currentChoice = false;
      }
    },
    created(){

    }
  }
</script>
-->
<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

</style>

<!--
Custom map style
[
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#519c1f"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "color": "#60b825"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#cddc10"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#cddc10"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#058b88"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

-->
