<template>
  <div class="nkl-viewContainer nkl-viewContainer--flex">
    <div class="map-container">
      <gmap-map
        :center="center"
        :zoom="zoom"
        :options="mapOptions"
      >
        <gmap-marker
          v-for="m in mapMarkers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          :isRight="m.right"
          @click="markerClicked(m)"
        ></gmap-marker>
      </gmap-map>
    </div>
    <transition name="fade">
      <div class="content-container" v-if="isGuessed">
        <h1>Heihoo</h1>
      </div>
    </transition>
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
        zoom : 9,
        mapMarkers : [],
        mapOptions : {},
        isGuessed : false
      }
    },
    methods : {

      markerClicked (e) {

        if(e.right == true){
          this.isGuessed = true;
          var that = this;
          var marker = e;
          setTimeout(function(){
            that.center.lat = marker.position.lat;
            that.center.lng = marker.position.lng;
            that.zoom = 11;
          }, 2000);

        }
      }
    },
    created(){

      this.mapOptions = {
        mapTypeControl: false,
        streetViewControl: false,
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

      for (var i=0; i<this.gd.length; i++) {
        this.mapMarkers.push( {position:{lat:this.gd[i].map.position.lat, lng:this.gd[i].map.position.lng}} );
        if(i == this.gi){
          this.mapMarkers[i].right = true;
        }
      }

    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .map-container {
    flex:1 0 40%;
    height:100%;
  }
  .content-container {
    flex: 1 0 60%;
  }

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
