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
            :name="m.name"
            @click="markerClicked(m)"
          ></gmap-marker>
          <gmap-info-window class="map__markerInfo"
            :position = "this.center"
            :opened = "this.isGuessed"
            :content = "gd[gi].name.toUpperCase()"
          ></gmap-info-window>
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
              <img :src="viewImg" />
              <hr />
              </p>
              <a @click="next" class="nkl-button">EDASI</a>
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

    <transition name="fade">
      <nkl-response-modal v-if="currentChoice===false"
      :choice="currentChoice"
      :message="wrongMessage"
      @closeMe="responseClosed"
      class="nkl-responseModal__map"></nkl-response-modal>
    </transition>
    <!-- <nkl-guess-thing-response v-if="currentChoice" :choice="currentChoice" @closeMe="responseClosed"></nkl-guess-thing-response> -->

  </div>
</template>


<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import {load, Map, Marker, InfoWindow} from 'vue2-google-maps';
  import Vue from 'vue';
  import {eventBus} from "../main";
  import ResponseModal from "../components/ResponseModal.vue";

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB9KVv29qwpVyoBevreWcdrJvV-0BrBPW0'
    }
  });

  export default {
    components: {
      gmapMap: Map,
      gmapMarker: Marker,
      gmapInfoWindow: InfoWindow,
      "nkl-response-modal": ResponseModal
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
        viewImg : require("../assets/img/game/" + this.gd[this.gi].view),
        // costumeImg : "../assets/" + this.gd[this.gi].costume,
        isGuessed : false,
        currentChoice : null,
        rightPos : {},
        wrongMessage: ""
      }
    },

    methods : {

      markerClicked (e) {
        if(e.right == true){
          eventBus.foundPlace();

          //this.center = {lat: e.position.lat, lng:e.position.lng }
          let self = this;
          let place = e;

          setTimeout(
            function(){
              self.center = {lat: place.position.lat, lng:place.position.lng };
              self.zoom = 10;
              self.$refs.mymap.resizePreserveCenter();
              self.isGuessed = true;
            }, 200
          );

        } else if (e.right == false){
          this.currentChoice = false;
          this.wrongMessage = "See on hoopis <b class='nkl-important'>" + e.name.toUpperCase() + "</b> mis asub õigest kohast umbes <b class='nkl-important'>" + Math.round(this.getDistance(e.position, this.rightPos)) + " km</b> kaugusel.";
          console.log(this.wrongMessage);
        }
      },
      responseClosed(){
        this.currentChoice = null;
      },
      next(){
        eventBus.changeRound();
        eventBus.changeView("nkl-guess-thing");
      },
      rad(x) {
        return x * Math.PI / 180;
      },
      getDistance(p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.rad(p2.lat - p1.lat);
        var dLong = this.rad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        //console.log("DISTANTS:" + Math.round(d/1000));
        return d/1000;

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
        this.mapMarkers[i].name = this.gd[i].name;
        if(i == this.gi){
          this.mapMarkers[i].right = true;
          this.rightPos.lat = this.gd[i].map.position.lat;
          this.rightPos.lng = this.gd[i].map.position.lng;
        } else {
          this.mapMarkers[i].right = false;
        }
      }

      //this.currentPlace = this.gd[this.gi].name;
      //this.$emit('fitBounds', this.mapBounds);

      // this.mapBounds.north = 58.639969;
      // this.mapBounds.west = 21.757071;
      // this.mapBounds.south = 57.891453;
      // this.mapBounds.east = 23.431412;

    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .map__mapContainer {
    flex:1 0 33.333%;
    height:70vh;

    @include mq-l {
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
      //height: 100%;
    }
  }

  .map__contentContainer__info {
    flex:1 0 50%;
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    height: 100%;
    padding: 2vh 3vw 20vh 3vw;
    line-height: 1.6;
    text-align: center;
    color: $nkl-white;
    overflow-y: auto;

    h1 {
      text-align: center;
      color: $nkl-yellow--pale;
    }

    hr {
      //width: 90%;
      border: none;
      border-bottom: 1px solid lighten($nkl-gray, 15%);
      &:nth-of-type(1) {
        margin: 2vh 0 1vh 0;
      }
      &:nth-of-type(2) {
        margin: 3vh 0 1vh 0;
      }
      &:last-of-type {
        margin: 1vh 0 5vh 0;
      }
    }

    img {
      display: block;
      margin: 0 auto;
      border: 2px solid lighten($nkl-gray, 15%);
      border-radius: 6px;
      width: 96%;
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

  .gm-style-iw {
    color: black;
  }

  .nkl-responseModal__map {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: hsla( 0, 0%, 0%, 0.9);
  }



</style>
