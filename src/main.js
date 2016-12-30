//require("!style-loader!css-loader!sass-loader!./assets/scss/nkl.scss");
require("./assets/scss/nkl.scss");

import Vue from 'vue'
import App from './App.vue'

var gameData = [
  {
    "name" : "Anseküla",
    "item" : {
      "name" : "Lahttasku",
      "img" :  "item_ansekyla_600.jpg",
      "thumb" : "item_ansekyla_200.jpg",
      "options" : [
        "Ridiküll",
        "Kosjakott",
        "Vardakott",
        "Peokott",
        "Tubakatasku",
        "Märss"
      ],
      "itemInfo" : "Rahvarõivad õmmeldi sageli ilma taskuteta. Selle asemel sidusid naised paremale puusale <b class='nkl-important'>lahttasku</b>. Need tehti väga uhked ja kaunistati mitmel erineval viisil aplikatsiooni, paelte ja tikandiga. Tikandis kasutati sageli värvilisest klaasist ümmargusi ja torukujulisi helmeid.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.098358, lng: 22.231077},
      placeFound : false
    },
    "info" : "<b>Anseküla</b> <i>(saksa keeles Anseküll)</i> võttis enda alla Sõrve poolsaare kitsa kaela ja Saaremaa edela&shy;poolsema nurga. Tänapäeva mõistes kattus valdav osa Anseküla kihelkonnast praeguse <b>Salme vallaga</b>. Anseküla keskaegne Maarja kirik hävis täielikult 1944. aastal maailmasõjas. Anseküla kihelkonnas peeti <b>esimene laulupidu</b> Massinõmmel <b>juba 1863. aastal</b>.",
    "costume":"costume_ansekyla.jpg",
    "view" : "view_ansekyla.jpg",
    "viewInfo" : "Omaaegne Anseküla Maarja kirik hävis Teises Maailmasõjas 1944. aastal",
    "viewCredits" : ""
  },
  {
    "name" : "Jaani",
    "item" : {
      "name" : "Ummiskingad",
      "img" :  "item_jaani_600.jpg",
      "thumb" : "item_jaani_200.jpg",
      "options" : [
        "Pidukossid",
        "Kõpsutid",
        "Hülgevarbad",
        "Härraspastlad",
        "Nakikingad"
      ],
      "itemInfo" : "Juba 1774. aastal on üles kirjutatud, et Saaremaal ei kanta viletsaid pastlaid, vaid saapaid ja <b class='nkl-important'>ummiskingi</b>. Varasemal ajal õmmeldi kingadele tald alla traadiga, hiljem tikutati – paks tallanahk kinnitati puust tikkudega.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.613415, lng: 22.915182},
      placeFound : false
    },
    "info" : "<b>Jaani</b> <i>(saksa keeles St. Johannis)</i> asus Saaremaa kirdeosas. Tänapäeva mõistes hõlmas see väike kihelkond enam-vähem praeguse Orissaare valla lääneosa. Kihelkonna keskse – <b>Jaani kiriku</b> ehitustöödega tehti algust Põhjasõja ajal. Jaani kihelkonda jäävad <b>Pulli</b> ja <b>Paramaja pank</b> ning <b>Järveküla järv</b>.",
    "costume":"costume_jaani.jpg",
    "view" : "view_jaani.jpg",
    "viewInfo" : "Jaani kirik asub merest vaid mõnesaja meetri kaugusel.",
    "viewCredits" : "By Eljas Waltari (Picasa album) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons"
  },
  {
    "name" : "Jämaja",
    "item" : {
      "name" : "Kirimüts",
      "img" :  "item_jamaja_600.jpg",
      "thumb" : "item_jamaja_200.jpg",
      "options" : [
        "Tuttpütt",
        "Pidu-pibo",
        "Poistelõks",
        "Tuulelipp",
        "Murumüts"
      ],
      "itemInfo" : "19. sajandi lõpus kanti pappalusel tanu asemel meelsamini varrastel kootud <b class='nkl-important'>kirimütsi</b> e tuttmütsi. Tavaliselt kooti musta põhja sisse punased laiemad vöödid peente valgete triipude ja tähnidega. Pika sopi otsa kinnitati tutt, mis Jämaja kihelkonnas tehti eriti suur ja uhke. Selle valmistamiseks kasutati poepitsi ja -paelu ning kirjusid riideribasid.",
      "itemFound" : false
    },

    "map" : {
      position: {lat: 58.012714, lng: 22.052888},
      placeFound : false
    },
    "info" : "<b>Jämaja</b> <i>(saksa keeles Jamma)</i> hõlmas suurema osa Sõrve poolsaarest. Poolsaarel asunud kihelkonda ümbritses pea terves ulatuses meri. Tänapäeva mõistes kattus Jämaja kihelkond üldjoontes praeguse Torgu vallaga. <b>Jämaja Kolmainu kirik</b> ehitati väga põhjalikult ümber 19. sajandi keskpaiku. Sõrve sääre tipus oleva <b>tuletorni</b> ajalugu ulatub tagasi <b>aastasse 1684</b>. Poolsaare lääne&shy;rannikul paiknev <b>Ohessaare pank</b> ei ole kuigi kõrge, kuid see-eest leidub siin rohkesti huvitavaid kivistisi.",
    "costume":"costume_ansekyla.jpg",
    "view" : "view_jamaja.jpg",
    "viewInfo" : "Päris Sõrve sääre tipus asub 52 m kõrgune tuletorn.",
    "viewCredits" : "By Ilme Parik (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons"
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
      "itemInfo" : "<b class='nkl-important'>Pinnmüts</b> e kabimüts sai oma teise nimetuse kapja meenutava kuju tõttu. Pinnmüts ei olnud eriti laialdaselt levinud ja seda kanti peamiselt linna&shy;lähedastes kihelkondades. Mütsi pappalus kaeti lillelise siid- või sitsriidega ja kaunistati kardpaeltega. Mütsi kukla peale seoti lipsu pikad lindid, mille otsad langesid seljale.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.349067, lng: 22.509372},
      placeFound : false
    },
    "info" : "<b>Kaarma</b> <i>(saksa keeles Karmel)</i> kihelkond asus Saaremaa keskel, ulatudes Kuressaare ümbruses mereni. Keskaegse <b>Peeter-Pauli kiriku</b> naabrusse jääb <b>Kaarma maalinn</b>. Kunagi tegutses Kaarmal <b>õpetajate seminar</b>, kus valmistati ette küla&shy;koolmeistreid. Kohalikust <b>dolomiidi&shy;kärjäärist</b> võetud ehituskivi leidis kasutust ka kaugel väljaspool Saaremaad.",
    "costume":"costume_kaarma.jpg",
    "view" : "view_kaarma.jpg",
    "viewInfo" : "Kaarma maalinn asub päris kiriku kõrval. Tihti ehitatigi kirikud maarahvale olulistesse paikadesse.",
    "viewCredits" : "By Piret.kuub (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons"
  },
  {
    "name" : "Karja",
    "item" : {
      "name" : "Liistik",
      "img" :  "item_karja_600.jpg",
      "thumb" : "item_karja_200.jpg",
      "options" : [
        "Porst",
        "Umps",
        "Rakmed",
        "Poistelõks",
        "Nuustik"
      ],
      "itemInfo" : "Piduülikonna juurde kuuluvat <b class='nkl-important'>liistikut</b> peeti üheks uhkemaks iluasjaks. Vanemad liistikud olid üsna lühikesed ja mitmete kaunistustega. Kaelus ja hõlmad ääristati värvilise kandiga, ette õmmeldi tavaliselt punane lapp. Hõlmad hoiti koos malide – ratta&shy;kujuliste tina&shy;naastudega, millest läbitõmmatud punane pael seoti lipsuks.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.523244, lng: 22.732552},
      placeFound : false
    },
    "info" : "<b>Karja</b> <i>(saksa keeles Karris</i>) asus Saaremaa põhjaosas Soela väina ääres. Tänapäeva mõistes hõlmas Karja kihelkond ligikaudu praeguse Leisi valla territooriumi.<br>Karja keskaegne <b>Katariina kirik</b> on tähelepanu&shy;väärne oma raid&shy;kaunistuste poolest. Tuntud on <b>Angla tuulikud</b> ja <b>vana maalinn</b> Kooljamägedel. <b>Triigi sadama</b> kaudu peeti ühendust nii Hiiumaa kui mandriga.",
    "costume":"costume_karja.jpg",
    "view" : "view_karja.jpg",
    "viewInfo" : "Anglas asub viis hästi säilinud tuulikut.",
    "viewCredits" : "By ekke vasli [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons"
  },
  {
    "name" : "Kihelkonna",
    "item" : {
      "name" : "Sariküll",
      "img" :  "item_kihelkonna_600.jpg",
      "thumb" : "item_kihelkonna_200.jpg",
      "options" : [
        "Totulotu",
        "Kikk-kõrumüts",
        "Pilotka",
        "Kikktanu",
        "Sarvikpibo"
      ],
      "itemInfo" : "Saare naise talvemütsil – punase lagi&shy;pealsega <b class='nkl-important'>sariküllil</b> oli kaks sarve. Need ja mütsi äär kaeti musta tallenahaga. Sariküllile seoti rätik peale, et see kindlamini peas püsiks ja külma eest kaitseks. Kihelkonniti oli sarikülli kandmise viis erinev. Mõnel pool seati sarved ette ja taha, teisal jälle külgedele.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.360297, lng: 22.035814},
      placeFound : false
    },
    "info" : "<b>Kihelkonna</b> <i>(saksa keeles Kielkond)</i> oli Saaremaa ja ühtlasi kogu Eesti lääne&shy;poolseim kihelkond. Tänapäeva mõistes hõlmas Kihelkonna kihelkond praeguse Kihelkonna ja endise Lümanda valla ning tüki Salme vallast. Kihelkonna keskaegne <b>Miikaeli kirik</b> sai oma sihvaka torni alles 1899. aastal. Säilinud on ka eraldi asuv <b>kellatorn</b>. Kihelkonna piiridesse jääb <b>Vilsandi saar</b> oma linnuriigiga, <b>Harilaiu poolsaar</b> viltuse majakaga, <b>Odalätsi allikad</b>, vanim ja kõrgeim koht Saaremaal – <b>Viidumäe</b>.",
    "costume":"costume_kihelkonna.jpg",
    "view" : "view_kihelkonna.jpg",
    "viewInfo" : "Harilaiu viltune majakas on viltu nagu kuulus Pisa torn Itaalias",
    "viewCredits" : "By Tuderna (http://www.panoramio.com/photo/8698124) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons"
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
        "Vaatamind",
        "Üleküla"
      ],
      "itemInfo" : "Vanemamoeline põiki&shy;triipudega seelik ehk <i>&quot;ümbrik&quot;</i> asendus 1870.–1880. aastatel <b class='nkl-important'>kiutkuuega</b>, mille kangasse kooti püstitriibud. See seelik oli pisut lühem ja kaharam ning seda volditi ainult ülaosas värvli juurest. Seeliku triibud olid kitsad ja tavaliselt tumedad. Väikesed voldid seati nii, et alati jäi üks värvitoon – enamasti punane, voldi harjale.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.333498, lng: 22.258482},
      placeFound : false
    },
    "info" : "<b>Kärla</b> <i>(saksa keeles Kergel)</i> oli ainus Saaremaa kihelkond, millel puudus merepiir. Varasema haldusjaotuse järgi hõlmas Kärla kihelkond endise Kärla valla territooriumi. Kärla <b>Maarja Magdaleena kirik</b> ehitati 19. sajandi II veerandil lammutatud keskaegse kiriku asemele. Suuremalt jaolt Kärla kihelkonda jääv <b>Karujärv</b> on Saaremaa suurim ja üks ilusaimatest järvedest. <b>Hirmuste mäel</b> on aga Saaremaa vägilase <b>Suure Tõllu viimne puhkepaik</b>.",
    "costume":"costume_karla.jpg",
    "view" : "view_karla.jpg",
    "viewInfo" : "Karujärve rand. Vahel kui merevesi on liiga külm, saab järves ujuda.",
    "viewCredits" : "By Marko Vainu (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons"
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
        "Punakrae-jakk",
        "Tsutsufrei"
      ],
      "itemInfo" : "Veidi allapoole ulatuvad <b class='nkl-important'>abukäised</b> oli avara&shy;lõikeline üleriie. Umbes abaluude kohalt algas sügav volt ja kummalgi puusal oli veel üks madal volt. Kaelus ja hõlmad kuni vöökohani kaunistati punasest kalevist kandiga.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.462323, lng: 22.235696},
      placeFound : false
    },
    "info" : "<b>Mustjala</b> <i>(saksa keeles Mustel)</i> oli mereäärne kihelkond Saaremaa loodeosas. Tänapäeva mõistes kattus Mustjala kihelkond praeguse Mustjala vallaga. Mustjala <b>Anna kirik</b> ei saanud oma nime pühaku järgi nagu see tavaliselt käis, vaid hoopis Taani asekuberneri abikaasa nime järgi. Tähelepanu&shy;väärne on <b>Panga e Mustjala pank</b>, mis on Saaremaa kõrgeim pank. Tükk maad madalam <b>Ninase (Tagaranna) pank</b> sama&shy;nimelisel poolsaarel on omapärase sakilise ülaservaga.",
    "costume":"costume_mustjala.jpg",
    "view" : "view_mustjala.jpg",
    "viewInfo" : "Panga pank on Saaremaa kõrgeim.",
    "viewCredits" : "By Margus6 (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons"
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
        "Rataskroon",
        "Aupaiste"
      ],
      "itemInfo" : "Talimütsid e üllid olid Saaremaal üsna omapärase kujuga. <b class='nkl-important'>Ratasülli</b> lagipealse läbimõõt oli 25–29 cm. Äär valmistati u 7 cm laiusest mustast lambanaha siilust. Ülli ülemist serva hoidis sõõrina sisse painutatud puuvits. Sageli rohkem uhkuseasjaks olevale üllile seoti rätik peale – nii püsis see kindlamini peas ja talvel kaitses ka külma eest.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.509506, lng: 23.049149},
      placeFound : false
    },
    "info" : "<b>Pöide</b> <i>(saksa keeles Peude)</i> kihelkond asus Saaremaa idaosas. Tänapäeva mõistes hõlmas Pöide kihelkond nüüdse Pöide valla ja Valjala ning Orissaare valla idapoolse ala. Kihelkonna keskuses olev Pöide <b>Maarja kirik on Saaremaa suurim</b>. Pöide kihelkonda jäävad <b>Maasi&shy;linna ordu&shy;linnuse</b> varemed, <b>Kahutsi maalinn</b>, <b>Koigi raba</b>, <b>Kübassaare poolsaar</b>.",
    "costume":"costume_poide.jpg",
    "view" : "view_poide.jpg",
    "viewInfo" : "Orissaare staadioni keskel kasvav tamm kuulutati 2015. a. maailma &quot;aasta puuks&quot;",
    "viewCredits" : "By Elina Kalm (Own work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons"
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
      "itemInfo" : "<b class='nkl-important'>Kirivöö</b> oli kõige levinum vöö, mis kooti villasest ja linasest lõngast. Vöö pidi ulatuma 2–3 korda ümber keha ja selle laius oli mõnikord kuni 8 cm. Vöökorrad mähiti kõik üksteise peale, paistma jäi ainult pealmine kord.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.300548, lng: 22.725704},
      placeFound : false
    },
    "info" : "<b>Püha</b> <i>(saksa keeles Pyha)</i> asus Saaremaa kaguosas. Tänapäeva mõistes kattus Püha kihelkond enamikus osas praeguse Pihtla vallaga. Püha <b>Jakobi kirikut</b> hakati rajama juba 13. sajandil. Püha kihelkonna suurimaks vaatamis&shy;väärsuseks on <b>Kaali meteoriidi&shy;kraater</b>.",
    "costume":"costume_pyha.jpg",
    "view" : "view_pyha.jpg",
    "viewInfo" : "Kaali meteoriidi&shy;katastroof kajastub väidetavalt mitte ainult Eesti vaid ka paljude teiste  rahvaste folklooris.",
    "viewCredits" : "By Pt (Self-published work by Pt) [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons"
  },
  {
    "name" : "Valjala",
    "item" : {
      "name" : "Pikk-kuub",
      "img" :  "item_valjala_600.jpg",
      "thumb" : "item_valjala_200.jpg",
      "options" : [
        "Mulgi kuub",
        "Kuft",
        "Suurtükk",
        "Tormivastane",
        "Ümbrik"
      ],
      "itemInfo" : "<b class='nkl-important'>Pikk-kuube</b> kanti kirikusse minnes. Kindlasti pidid välja paistma kuue alt kõik seljas olevad pidulikud riided. 19. sajandi alguses oli levinud avara tüüriga kuub, mille keset selga abaluude kõrguselt algasid kolm sügavalt sisse pressitud volti. Peale selja&shy;voltide oli Valjalas veel kummalgi küljel kaenla alt algav madal volt.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.408213, lng: 22.788948},
      placeFound : false
    },
    "info" : "<b>Valjala</b> <i>(saksa keeles Wolde)</i> kihelkond asus Saaremaa kaguosas. Tänapäeva mõistes hõlmas Valjala kihelkond ligikaudu praeguse Valjala valla ala. Valjala <b>Martini kirik</b> on Saaremaa kihelkonna <b>kirikutest vanim</b>, mille ehitamisega alustati kohe pärast Saaremaa alistamist. Valjalas asub ka <b>muistne maalinn</b>, mis oli Saaremaa tugevaim. Selle alistumist 1227. aastal võib pidada ka muistse vabadus&shy;võitluse lõpuks.",
    "costume":"costume_valjala.jpg",
    "view" : "view_valjala.jpg",
    "viewInfo" : "Valjala maalinn langes muistses saarlaste vabadus&shy;võitluses viimasena.",
    "viewCredits" : "By TriinuR (Own work) [CC BY-SA 3.0 ee (http://creativecommons.org/licenses/by-sa/3.0/ee/deed.en)], via Wikimedia Commons"
  }

];


export const eventBus = new Vue({
  data: {
    gameData : gameData,
    gameIndex : 0,
    finalScore : 0,
    penalty : -5,
    bonus : 20
  },
  methods : {
    startGame(){
      this.$emit("gameStarted");
    },
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
    restartGame(){
      this.$emit("gameRestarted");
    },
    /*getScore(){
      this.$emit("getGameScore");
    },*/
    /*foundPlace(){
      this.$emit("placeFound");
    },*/

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
