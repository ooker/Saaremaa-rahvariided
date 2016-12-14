//require("!style-loader!css-loader!sass-loader!./assets/scss/nkl.scss");
require("./assets/scss/nkl.scss");

import Vue from 'vue'
import App from './App.vue'

var gameData = [
  {
    "name" : "Anseküla",
    "item" : {
      "name" : "Lahttasku",
      "img" :  "item_placeholder_600.jpg",
      "thumb" : "item_placeholder_200.jpg",
      "options" : [
        "Ridiküll",
        "Kosjakott",
        "Vardakott",
        "Peokott",
        "Tubakatasku"
      ],
      "itemInfo" : "Rahvarõivad õmmeldi sageli ilma taskuteta. Selle asemel sidusid naised paremale puusale lahttasku. Need tehti väga uhked ja kaunistati mitmel erineval viisil aplikatsiooni, paelte ja tikandiga. Tikandis kasutati sageli värvilisest klaasist ümmargusi ja torukujulisi helmeid.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.098358, lng: 22.231077},
      placeFound : false
    },
    "info" : "Anseküla (saksa keeles Anseküll) võttis enda alla Sõrve poolsaare kitsa kaela ja Saaremaa edelapoolsema nurga. Kaasaegse haldusjaotuse järgi kattus valdav osa Anseküla kihelkonnast praeguse Salme valla territooriumiga. Anseküla keskaegne Maarja kirik hävis täielikult 1944.aastal. Anseküla kihelkonna lauljad pidasid oma esimese laulupeo Massinõmmel juba 1863. aastal.",
    "costume":"costume_ansekyla.jpg"
  },
  {
    "name" : "Jaani",
    "item" : {
      "name" : "Ummiskingad",
      "img" :  "item_placeholder_600.jpg",
      "thumb" : "item_placeholder_200.jpg",
      "options" : [
        "Pidukossid",
        "Kõpsutid",
        "Hülgevarbad",
        "Tipskorkiskingad",
        "Kõvapastlad",
        "Nakikingad"
      ],
      "itemInfo" : "Juba 1774. aastal on üles kirjutatud, et Saaremaal ei kanta viletsaid pastlaid, vaid saapaid ja ummiskingi. Varasemal ajal õmmeldi kingadele tald alla traadiga, hiljem tikutati – paks tallanahk kinnitati puust tikkudega.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.613415, lng: 22.915182},
      placeFound : false
    },
    "info" : "Jaani (saksa keeles St. Johannis) asus Saaremaa kirdeosas. Kaasaegse haldusjaotuse järgi hõlmas see väike kihelkond umbes praeguse Orissaare valla lääneosa. Kihelkonna keskse – Jaani kiriku ehitustöödega tehti algust Põhjasõja ajal. Jaani kihelkonda jäävad Pulli ja Paramaja pank, Järveküla järv.",
    "costume":"costume_poide.jpg"
  },
  {
    "name" : "Jämaja",
    "item" : {
      "name" : "Kirimüts",
      "img" :  "item_jamaja_600.jpg",
      "thumb" : "item_jamaja_200.jpg",
      "options" : [
        "Tuttpütt",
        "Pühadepibo",
        "Poistelõks",
        "Tuulelipp",
        "Murumüts"
      ],
      "itemInfo" : "19. sajandi lõpus kanti pappalusel tanu asemel meelsamini varrastel kootud <b>kirimütsi</b> e tuttmütsi. Tavaliselt kooti musta põhja sisse punased laiemad vöödid peente valgete triipude ja tähnidega. Pika sopi otsa kinnitati tutt, mis Jämaja kihelkonnas tehti eriti suur ja uhke. Selle valmistamiseks kasutati poepitsi ja -paelu ning kirjusid riideribasid.",
      "itemFound" : false
    },

    "map" : {
      position: {lat: 58.012714, lng: 22.052888},
      placeFound : false
    },
    "info" : "Jämaja <i class='special'>(saksa keeles Jamma)</i> hõlmas suurema osa Sõrve poolsaarest. Poolsaarel asunud kihelkonda ümbritses pea terves ulatuses meri. Kaasaegse haldusjaotuse järgi kattus Jämaja kihelkond üldjoontes praeguse Torgu vallaga. Jämaja Kolmainu kirik ehitati väga põhjalikult ümber 19. sajandi keskpaiku. Sõrve sääre tipus oleva tuletorni ajalugu ulatub tagasi aastasse 1684. Poolsaare läänerannikul paiknev Ohessaare pank ei ole oma mõõtmetelt kuigi märkimisväärne, kuid see-eest leidub siin rohkesti kivistisi.",
    "costume":"costume_ansekyla.jpg"
  },
  {
    "name" : "Kaarma",
    "item" : {
      "name" : "Pinnmüts",
      "img" :  "item_kaarma_600.jpg",
      "thumb" : "item_kaarma_200.jpg",
      "options" : [
        "Raagtanu",
        "Memmekiiver",
        "Kopsik",
        "Kongtanu",
        "Mesipuu"
      ],
      "itemInfo" : "Pinnmüts e kabimüts sai oma teise nimetuse kapja meenutava kuju tõttu. Pinnmüts ei olnud eriti laialdaselt levinud ja seda kanti peamiselt linnalähedastes kihelkondades. Mütsi pappalus kaeti lillelise siid- või sitsriidega ja kaunistati kardpaeltega. Mütsi kukla peale seoti lipsu pikad lindid, mille otsad langesid seljale.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.349067, lng: 22.509372},
      placeFound : false
    },
    "info" : "Kaarma (saksa keeles <i>Karmel</i>) kihelkond asus Saaremaa keskel, ulatudes Kuressaare ümbruses mereni. Keskaegse Peeter-Pauli kiriku naabrusse jääb Kaarma maalinn. Kunagi tegutses Kaarmal õpetajate seminar, kus valmistati ette külakoolmeistreid. Kohalikust dolomiidikärjäärist võetud ehituskivi leidis kasutust ka kaugel väljaspool Saaremaad.",
    "costume":"costume_kaarma.jpg"
  },
  {
    "name" : "Karja",
    "item" : {
      "name" : "Liistik",
      "img" :  "item_placeholder_600.jpg",
      "thumb" : "item_placeholder_200.jpg",
      "options" : [
        "Porst",
        "Umps",
        "Toreon",
        "Poistelõks"
      ],
      "itemInfo" : "Piduülikonna juurde kuuluvat liistikut peeti üheks uhkemaks iluasjaks. Vanemad liistikud olid üsna lühikesed ja mitmete kaunistustega. Kaelus ja hõlmad ääristati värvilise kandiga, ette õmmeldi tavaliselt punane lapp. Hõlmad hoiti koos malide – rattakujuliste tinanaastudega, millest läbitõmmatud punane pael seoti lipsuks.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.523244, lng: 22.732552},
      placeFound : false
    },
    "info" : "Karja (saksa keeles <i>Karris</i>) asus Saaremaa põhjaosas Soela väina ääres. Kaasaegse haldusjaotuse järgi hõlmas Karja kihelkond ligikaudu praeguse Leisi valla territooriumi.<br><br>Karja keskaegne Katariina kirik on tähelepanuväärne oma raidkaunistuste poolest.<br><br>Tuntud on Angla tuulikud ja vana maalinn Kooljamägedel.<br><br>Triigi sadama kaudu peeti ühendust nii Hiiumaa kui mandriga.",
    "costume":"costume_karja.jpg"
  },
  {
    "name" : "Kihelkonna",
    "item" : {
      "name" : "Ümbrik",
      "img" :  "item_placeholder_600.jpg",
      "thumb" : "item_placeholder_200.jpg",
      "options" : [
        "Panderoll",
        "Pallapool",
        "Tumeseelik",
        "Ülemeelik",
        "Tule-eila-meile"
      ],
      "itemInfo" : "Kihelkonna vanem must seelik ümbrik kaunistati allääres värviliste riideribadega. Et tihedalt volditud seelik oleks veidike kohevam aeti selle serva kas traat või männijuur. Hiljem hakati musta seelikukanga sisse kuduma punaseid laiemaid vööte, mida ääristasid värvilised kitsamad triibud.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.360297, lng: 22.035814},
      placeFound : false
    },
    "info" : "Kihelkonna <i>(saksa keeles Kielkond)</i> oli Saaremaa ja ühtlasi kogu Eesti läänepoolseim kihelkond. Tänapäevase haldusjaotuse järgi hõlmas Kihelkonna kihelkond praeguse Kihelkonna ja endise Lümanda valla ning tüki Salme vallast. Kihelkonna keskaegne Miikaeli kirik sai oma sihvaka torni alles 1899. aastal. Kihelkonna piiridesse jääb Vilsandi saar oma linnuriigiga, Harilaiu poolsaar viltuse majakaga, Odalätsi allikad, vanim ja kõrgeim koht Saaremaal – Viidumäe.",
    "costume":"costume_kihelkonna.jpg"
  },
  {
    "name" : "Kärla",
    "item" : {
      "name" : "Kiutkuub",
      "img" :  "item_karla_600.jpg",
      "thumb" : "item_karla_200.jpg",
      "options" : [
        "Kirikuub",
        "Kört",
        "Punaseelik",
        "Vaatamind"
      ],
      "itemInfo" : "Vanemamoeline põikitriipudega ümbrik asendus 1870.–1880. aastatel kiutkuuega, mille kangasse kooti püstitriibud. See seelik oli pisut lühem ja kaharam ning seda volditi ainult ülaosas värvli juurest. Seeliku triibud olid kitsad ja tavaliselt tumedad. Väikesed voldid seati nii, et alati jäi üks värvitoon – enamasti punane, voldi harjale.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.333498, lng: 22.258482},
      placeFound : false
    },
    "info" : "Kärla (saksa keeles Kergel) oli ainus Saaremaa kihelkond, millel puudus merepiir. Varasema haldusjaotuse järgi hõlmas Kärla kihelkond endise Kärla valla territooriumi. Kärla Maarja Magdaleena kirik ehitati 19. sajandi II veerandil lammutatud keskaegse kiriku asemele. Suuremalt jaolt Kärla kihelkonda jääv Karujärv on Saaremaa suurim ja üks ilusaimatest järvedest. Hirmuste mäel on aga Saaremaa vägilase Suure Tõllu viimne puhkepaik.",
    "costume":"costume_karla.jpg"
  },
  {
    "name" : "Mustjala",
    "item" : {
      "name" : "Abukäised",
      "img" :  "item_mustjala_600.jpg",
      "thumb" : "item_mustjala_200.jpg",
      "options" : [
        "Õhtuvatt",
        "Kurtkampsun",
        "Memmemunder",
        "Punakrae-jakk"
      ],
      "itemInfo" : "Veidi allapoole ulatuvad abukäised oli avaralõikeline üleriie. Umbes abaluude kohalt algas sügav volt ja kummalgi puusal oli veel üks madal volt. Kaelus ja hõlmad kuni vöökohani kaunistati punasest kalevist kandiga.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.462323, lng: 22.235696},
      placeFound : false
    },
    "info" : "Mustjala (saksa keeles Mustel) oli mereäärne kihelkond Saaremaa loodeosas. Kaasaegse haldusjaotuse järgi kattus Mustjala kihelkond tänapäevase Mustjala vallaga. Mustjala Anna kirik ei saanud oma nime pühaku järgi nagu see tavaliselt käis, vaid hoopis Taani asekuberneri abikaasa nime järgi. Tähelepanuväärne on Panga e Mustjala pank, mis on Saaremaa kõrgeim pank. Tükk maad madalam Ninase (Tagaranna) pank samanimelisel poolsaarel on omapärase sakilise ülaservaga.",
    "costume":"costume_mustjala.jpg"
  },
  {
    "name" : "Pöide",
    "item" : {
      "name" : "Ratasüll",
      "img" :  "item_poide_600.jpg",
      "thumb" : "item_poide_200.jpg",
      "options" : [
        "Täditanu",
        "Nõelatanu",
        "Kauamängiv",
        "Päikesekroon",
        "Aupaiste"
      ],
      "itemInfo" : "Talimütsid e üllid olid Saaremaal üsna omapärase kujuga. Ratasülli lagipealse läbimõõt oli 25–29 cm. Äär valmistati u 7 cm laiusest mustast lambanaha siilust. Ülli ülemist serva hoidis sõõrina sisse painutatud puuvits. Sageli rohkem uhkuseasjaks olevale üllile seoti rätik peale – nii püsis see kindlamini peas ja talvel kaitses ka külma eest.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.509506, lng: 23.049149},
      placeFound : false
    },
    "info" : "Pöide (saksa keeles Peude) kihelkond asus Saaremaa idaosas. Kaasaegse haldusjaotuse järgi hõlmas Pöide kihelkond nüüdse Pöide ja Valjala valla ning osa Orissaare valla idapoolsest alast. Kihelkonna keskuses olev Pöide Maarja kirik on Saaremaa suurim kirik. Pöide kihelkonda jäävad Maasilinna ordulinnuse varemed, Kahutsi maalinn, Koigi raba, Kübassaare poolsaar.",
    "costume":"costume_poide.jpg"
  },
  {
    "name" : "Püha",
    "item" : {
      "name" : "Kirivöö",
      "img" :  "item_pyha_600.jpg",
      "thumb" : "item_pyha_200.jpg",
      "options" : [
        "Kõlavöö",
        "Laululint",
        "Rästikupael",
        "Salakirjak",
        "Pihahoidja"
      ],
      "itemInfo" : "Kirivöö oli kõige levinum vöö, mis kooti villasest ja linasest lõngast. Vöö pidi ulatuma 2–3 korda ümber keha ja selle laius oli mõnikord kuni 8 cm. Vöökorrad mähiti kõik üksteise peale, paistma jäi ainult pealmine kord.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.300548, lng: 22.725704},
      placeFound : false
    },
    "info" : "Püha (saksa keeles Pyha) asus Saaremaa kaguosas. Kaasaegse haldusjaotuse järgi kattus Püha kihelkond enamikus osas praeguse Pihtla vallaga. Püha Jakobi kirikut hakati kihelkonna keskusesse rajama juba 13. sajandil. Kihelkonna suurimaks vaatamisväärsuseks on Kaali meteoriidikraater.",
    "costume":"costume_pyha.jpg"
  },
  {
    "name" : "Valjala",
    "item" : {
      "name" : "Sariküll",
      "img" :  "item_valjala_600.jpg",
      "thumb" : "item_valjala_200.jpg",
      "options" : [
        "Totulotu",
        "Kikk-kõrumüts",
        "Pilotka",
        "Kikktanu",
        "Sarvikpibo"
      ],
      "itemInfo" : "Saarlaste talimütsil – punase lagipealsega sariküllil oli kaks sarve. Need ja mütsi äär kaeti musta tallenahaga. Nagu ratasüllile nii ka sariküllile seoti rätik peale, et see kindlamini peas püsiks ja külma eest kaitseks. Kihelkonniti oli sarikülli kandmise viis erinev. Mõnel pool seati sarved ette ja taha, teisal jälle külgedele.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.408213, lng: 22.788948},
      placeFound : false
    },
    "info" : "Valjala (saksa keeles Wolde) kihelkond asus Saaremaa kaguosas. Kaasaegse haldusjaotuse järgi hõlmas Valjala kihelkond ligikaudu praeguse Valjala valla ala. Valjala Martini kirik on Saaremaa kihelkonna kirikutest vanim, mille ehitamisega alustati juba pärast Saaremaa alistamist. Valjalas asub ka muistne maalinn, mis oli Saaremaa tugevaim. Selle alistumist 1227. aastal võib pidada ka muistse vabadusvõitluse lõpuks.",
    "costume":"costume_valjala.jpg"
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
