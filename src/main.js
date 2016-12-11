//require("!style-loader!css-loader!sass-loader!./assets/scss/nkl.scss");
require("./assets/scss/nkl.scss");

import Vue from 'vue'
import App from './App.vue'

var gameData = [
  {
    "name" : "Anseküla",
    "item" : {
      "name" : "Lahttasku",
      "img" :  "ese-02_600.jpg",
      "thumb" : "ese-02_200.jpg",
      "options" : [
        "Ridiküll",
        "Kosjakott",
        "Poekott",
        "Peokott"
      ],
      "itemInfo" : "Rahvarõivad õmmeldi sageli ilma taskuteta. Selle asemel sidusid naised paremale puusale lahttasku. Need tehti väga uhked ja kaunistati mitmel erineval viisil aplikatsiooni, paelte ja tikandiga. Tikandis kasutati sageli värvilisest klaasist ümmargusi ja torukujulisi helmeid.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.098358, lng: 22.231077},
      placeFound : false
    },
    "info" : "Anseküla (saksa keeles Anseküll) võttis enda alla Sõrve poolsaare kitsa kaela ja Saaremaa edelapoolsema nurga. Kaasaegse haldusjaotuse järgi kattus valdav osa Anseküla kihelkonnast praeguse Salme valla territooriumiga. Anseküla keskaegne Maarja kirik hävis täielikult 1944.aastal. Anseküla kihelkonna lauljad pidasid oma esimese laulupeo Massinõmmel juba 1863. aastal."
  },
  {
    "name" : "Jämaja",
    "item" : {
      "name" : "Kirimüts",
      "img" :  "item_jamaja_600.jpg",
      "thumb" : "item_jamaja_200.jpg",
      "options" : [
        "Tutik",
        "Pühadepibo",
        "Poistelõks",
        "Täitare"
      ],
      "itemInfo" : "19. sajandi lõpus kanti pappalusel tanu asemel meelsamini varrastel kootud <b>kirimütsi</b> e tuttmütsi. Tavaliselt kooti musta põhja sisse punased laiemad vöödid peente valgete triipude ja tähnidega. Pika sopi otsa kinnitati tutt, mis Jämaja kihelkonnas tehti eriti suur ja uhke. Selle valmistamiseks kasutati poepitsi ja -paelu ning kirjusid riideribasid.",
      "itemFound" : false
    },

    "map" : {
      position: {lat: 58.012714, lng: 22.052888},
      placeFound : false
    },
    "info" : "Jämaja <i class='special'>(saksa keeles Jamma)</i> hõlmas suurema osa Sõrve poolsaarest. Poolsaarel asunud kihelkonda ümbritses pea terves ulatuses meri. Kaasaegse haldusjaotuse järgi kattus Jämaja kihelkond üldjoontes praeguse Torgu vallaga. Jämaja Kolmainu kirik ehitati väga põhjalikult ümber 19. sajandi keskpaiku. Sõrve sääre tipus oleva tuletorni ajalugu ulatub tagasi aastasse 1684. Poolsaare läänerannikul paiknev Ohessaare pank ei ole oma mõõtmetelt kuigi märkimisväärne, kuid see-eest leidub siin rohkesti kivistisi."
  },
  {
    "name" : "Kihelkonna",
    "item" : {
      "name" : "Ümbrik",
      "img" :  "ese-01_600.jpg",
      "thumb" : "ese-01_200.jpg",
      "options" : [
        "Panderoll",
        "Postipakk",
        "Tumeseelik",
        "Toomapood"
      ],
      "itemInfo" : "Kihelkonna vanem must seelik ümbrik kaunistati allääres värviliste riideribadega. Et tihedalt volditud seelik oleks veidike kohevam aeti selle serva kas traat või männijuur. Hiljem hakati musta seelikukanga sisse kuduma punaseid laiemaid vööte, mida ääristasid värvilised kitsamad triibud.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.360297, lng: 22.035814},
      placeFound : false
    },
    "info" : "Kihelkonna <i>(saksa keeles Kielkond)</i> oli Saaremaa ja ühtlasi kogu Eesti läänepoolseim kihelkond. Tänapäevase haldusjaotuse järgi hõlmas Kihelkonna kihelkond praeguse Kihelkonna ja endise Lümanda valla ning tüki Salme vallast. Kihelkonna keskaegne Miikaeli kirik sai oma sihvaka torni alles 1899. aastal. Kihelkonna piiridesse jääb Vilsandi saar oma linnuriigiga, Harilaiu poolsaar viltuse majakaga, Odalätsi allikad, vanim ja kõrgeim koht Saaremaal – Viidumäe."
  },
  {
    "name" : "Püha",
    "item" : {
      "name" : "Kirivöö",
      "img" :  "ese-01_600.jpg",
      "thumb" : "ese-01_200.jpg",
      "options" : [
        "Pidulint",
        "Punapael",
        "Rästikupael",
        "Salakirjak"
      ],
      "itemInfo" : "Kirivöö oli kõige levinum vöö, mis kooti villasest ja linasest lõngast. Vöö pidi ulatuma 2–3 korda ümber keha ja selle laius oli mõnikord kuni 8 cm. Vöökorrad mähiti kõik üksteise peale, paistma jäi ainult pealmine kord.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.300548, lng: 22.725704},
      placeFound : false
    },
    "info" : "Püha (saksa keeles Pyha) asus Saaremaa kaguosas. Kaasaegse haldusjaotuse järgi kattus Püha kihelkond enamikus osas praeguse Pihtla vallaga. Püha Jakobi kirikut hakati kihelkonna keskusesse rajama juba 13. sajandil. Kihelkonna suurimaks vaatamisväärsuseks on Kaali meteoriidikraater."
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
      this.$emit("scoreChanged", value);
    },
    changeRound(){
      this.$emit("roundChanged", this.gameIndex);
    },
    foundItem(){
      this.$emit("itemFound");
    },
    foundPlace(){
      this.$emit("placeFound");
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
