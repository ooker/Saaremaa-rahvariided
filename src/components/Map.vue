<template>
  <div>
    <div class="nkl-viewContainer">
      <div class="map__mapContainer">
        <gmap-map
          :center="center"
          :zoom="zoom"
          :options="mapOptions"
          :bounds="mapBounds"
          ref="mymap"
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

      <!-- <transition name="fade"> -->
        <div class="map__contentContainer" v-if="isGuessed">


          <div class="map__contentContainer__info zigzag">

            <div style="margin:auto;">

            <h1>{{gd[gi].name}}</h1>
            <hr />
            <p v-html="gd[gi].info">
            <hr />
            </p>
            <a @click="next" class="button">EDASI</a>
            </div>

          </div>

          <div class="map__contentContainer__costume" :style="{ backgroundImage: 'url(' + costumeImg + ')' }">
            <!-- <img :src="this.costumeImg" /> -->
          </div>




        </div>
      <!-- </transition> -->

    </div><!-- //.nkl-viewContainer -->

    <transition name="fade">
      <div class="map__infoPanel" v-if="!isGuessed">
        <h1>{{gd[gi].name}} kihelkond</h1>
        <p>
          Proovi, mitme korraga leiad õige koha üles.
        </p>
      </div>
    </transition>
    <!-- <nkl-guess-thing-response v-if="currentChoice" :choice="currentChoice" @closeMe="responseClosed"></nkl-guess-thing-response> -->

  </div>
</template>


<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import {load, Map, Marker} from 'vue2-google-maps';
  import Vue from 'vue';
  import {eventBus} from "../main";

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
        center: { lat: 58.361886, lng: 22.605158 },
        zoom : 9,
        mapMarkers : [],
        mapOptions : {},
        mapBounds : {},
        //currentPlace: "",
        costumeImg : require("../assets/img/game/" + this.gd[this.gi].costume),
        // costumeImg : "../assets/" + this.gd[this.gi].costume,
        isGuessed : false
      }
    },

    methods : {

      markerClicked (e) {
        if(e.right == true){
          eventBus.foundPlace();
          this.isGuessed = true;

          this.center = {lat: e.position.lat, lng:e.position.lng }
          this.zoom = 10;

          let self = this;
          setTimeout(
            function(){
                self.$refs.mymap.resizePreserveCenter();
            }, 500
          );

        }
      },
      next(){
        eventBus.changeRound();
        eventBus.changeView("nkl-guess-thing");
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

      //this.currentPlace = this.gd[this.gi].name;
      //this.$emit('fitBounds', this.mapBounds);

      this.mapBounds.north = 58.639969;
      this.mapBounds.west = 21.757071;
      this.mapBounds.south = 57.891453;
      this.mapBounds.east = 23.431412;

    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .map__mapContainer {
    flex:1 0 33.333%;
    height:70vh;

    @include mq-l{
      height: 85vh;
    }
  }
  .map__contentContainer {
    flex: 1 0 66.666%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;


    @include mq-m {
      flex-direction: row;
    }

    @include mq-l{
      height: 85vh;
      height: 100%;
    }
  }

  .map__contentContainer__info {
    flex:1 0 50%;
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    height: 100%;
    padding: 2vh 3vw;
    line-height: 1.6;
    text-align: center;
    color: white;
    overflow-y: auto;

    h1 {
      text-align: center;
    }
    hr {
      width: 90%;
    }
    @include mq-l {
      height: 85vh;
    }
  }
  .map__contentContainer__costume {
    flex: 1 0 50%;
    height : 100%;

    background-size: cover;
    background-position: center;
    img {
      object-fit: contain;
      // display: block;
      // width: 100%;
      // min-height: 100%;
    }

      @include mq-l {
        height: 85vh;
      }
  }


  .map__infoPanel {
    position: absolute;
    top: 1vh;
    left: 1vh;
    padding: 1vh 2vw;
    background: rgba(0,0,0,0.6);
    color: white;
    h1 {
      margin: 0;
    }
      p {
        margin: 0.5rem 0;
      }
  }
</style>
