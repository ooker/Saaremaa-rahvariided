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
      "itemInfo" : "Rahvarõivastele ei õmmeldud sageli taskuid rõiva sisse, nagu tänapäeval, et pisiesemeid hoida. Selle asemel sidusid naised paelaga paremale puusale lahtise tasku - <b class='nkl-important'>lahttasku</b>. Need tehti väga uhked ja kaunistati mitmel erineval viisil aplikatsioonide, paelte ja tikandiga. Tikandis kasutati sageli värvilisest klaasist ümmargusi ja torukujulisi helmeid.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.098358, lng: 22.231077},
      placeFound : false
    },
    "info" : "<b class='nkl-important'>Anseküla</b> <i>(saksa keeles Anseküll)</i> võttis enda alla Sõrve poolsaare kitsa kaela ja Saaremaa edela&shy;poolsema nurga. Anseküla kihelkonnas peeti Saaremaa esimene laulupidu Massinõmmel 1863. aastal. Viieristi metsas lõikuvad mitu teed nii, et moodustub 5-haruline rist. Rahvapärimuse järgi pidi iga mööduja sinna midagi viskama Suure Tõllu auks. <br>Ansekülas öeldi madisepäeval nii: <i>&quot;Tuhvlid ei tohi süüa, siis kasvavad ussised.&quot;</i> Saarlased teavad, et tegemist on kartulite, mitte susside söömise keeluga.",
    "costume":"costume_ansekyla.jpg",
    "view" : "view_ansekyla.jpg",
    "viewInfo" : "Saare - Sõrvemaa, Anseküla khk, sõrulased (sõrvelased) keskhommikut söömas. Hindrek Puupu 90 a, Abram Roes 49 a",
    "viewCredits" : "ERM Fk 214:288, Eesti Rahva Muuseum, http://muis.ee/museaalview/610571"
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
      "itemInfo" : "Juba 1774. aastal on üles kirjutatud, et Saaremaal ei kanta viletsaid pastlaid, vaid saapaid ja ummiskingi. Ummiskingad on nahast jalanõud, millel on tugev tald ja konts, ja mis ei ulatu pahkluust kõrgemale. Varasemal ajal õmmeldi kingadele tald alla traadiga, hiljem tikutati – paks tallanahk kinnitati puust tikkudega.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.613415, lng: 22.915182},
      placeFound : false
    },
    "info" : "Jaani <i>(saksa keeles St. Johannis)</i> asus Saaremaa kirdeosas. Jaani kihelkonda jäävad Pulli ja Paramaja pank ning Järveküla järv. Pulli pank on Saaremaal üks väheseid kohti, kus Saaremaa aluspõhja ehitus selgesti näha on.<br>Jaani kihelkonnas kasutati pükse vahel nii: <i>&quot;Nääriomiku ei tahetud naisterahvast esimeseks. Sooviti meesterahvast esimeseks, siis pidi hea önn olema. Kui naisterahvas tuli, sellele aeti püksid piha (= pähe). Noored tüdrukud pole väljas käin mitte enne kui kirikulised kodu tuln, siis läin. Minu noorespölves tehti nii.&quot;</i>",
    "costume":"costume_jaani.jpg",
    "view" : "view_jaani.jpg",
    "viewInfo" : "Jaani kihelkond, vana naine",
    "viewCredits" : "ERM Fk 187:10, Eesti Rahva Muuseum, http://muis.ee/museaalview/628513"
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
      "itemInfo" : "Vanasti, kui naine abiellus, hakkas ta kandma peakatet, mida nimetati tanuks. 19. sajandi lõpus kanti tanu asemel meelsamini varrastel kootud kirimütsi e tuttmütsi. Tavaliselt kooti kirimütsi musta põhja sisse punased laiemad vöödid peente valgete triipude ja tähnidega. Mütsi otsa kinnitati tutt, mis Jämaja kihelkonnas tehti eriti suur ja uhke. Selle valmistamiseks kasutati pitsi, paelu ning kirjusid riideribasid.",
      "itemFound" : false
    },

    "map" : {
      position: {lat: 58.012714, lng: 22.052888},
      placeFound : false
    },
    "info" : "Jämaja <i>(saksa keeles Jamma)</i> hõlmas suurema osa Sõrve poolsaarest. Poolsaarel asunud kihelkonda ümbritses pea terves ulatuses meri. Sõrve sääre tipus oleva tuletorni ajalugu ulatub tagasi aastasse 1684. Poolsaare läänerannikul paiknev Ohessaare pank ei ole kuigi kõrge, kuid see-eest leidub seal rohkesti huvitavaid kivistisi. <br>Jämajal arvati, et vahel on hea mõnda tegu üldse ilma riieteta teha: <i>&quot;Kui suurel neljapäeval ihualaste põldu ägiga äästada, siis mügrid ei ajada põldu ära.&quot;</i>",
    "costume":"costume_jamaja.jpg",
    "view" : "view_jamaja.jpg",
    "viewInfo" : "Jämaja naised kudumas, ketramas ja villa kraasimas",
    "viewCredits" : "SM F 3761:2554 F, Saaremaa Muuseum, http://muis.ee/museaalview/2153157"
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
      "itemInfo" : "Pinnmüts e kabimüts sai oma teise nimetuse kapja meenutava kuju tõttu. Pinnmüts ei olnud eriti laialdaselt levinud ja seda kanti peamiselt linna&shy;lähedastes kihelkondades. Mütsi pappalus kaeti lillelise siid- või sitsriidega ja kaunistati kardpaeltega. Mütsi kukla peale seoti lipsu pikad lindid, mille otsad langesid seljale.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.349067, lng: 22.509372},
      placeFound : false
    },
    "info" : "Kaarma <i>(saksa keeles Karmel)</i> kihelkond asus Saaremaa keskel, ulatudes Kuressaare ümbruses mereni. Keskaegse Peeter-Pauli kiriku naabrusse jääb Kaarma maalinn. 1260.-1261. aastal oli Kaarma maalinn saarlaste vägede kogunemiskohaks ja seal lähedal peeti lahing orduväega. Kaarmal asub dolomiidi&shy;kärjäär, kust on võetud ehituskivi üle 700 aasta. <br>Kaarmal peeti ilusat ja uhket riietust oluliseks ka kadripäeval: <i>&quot;Kadrid olid uhked, valges riides ja öbepaberitega ning kardpaeltega ära ehitud. Mõned poisid olid naisteriides, mõned olid poisteriides ka seas, pagunitega olid säätud ohvitserideks. Tuli ennem nädalapäevad ehitada kui kadriks minna sai. Igaüks katsus, kes teisest ikka uhkemaks sai.&quot;</i>",
    "costume":"costume_kaarma.jpg",
    "view" : "view_kaarma.jpg",
    "viewInfo" : "Kaarma köstri M. Kallase rentnik kündmas 1894",
    "viewCredits" : "ERM Fk 172:12, Eesti Rahva Muuseum, http://muis.ee/museaalview/623515"
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
      "itemInfo" : "Piduülikonna juurde kuuluvat liistikut – vestilaadset rõivaeset – peeti üheks uhkemaks iluasjaks. Vanemad liistikud olid üsna lühikesed ja mitmete kaunistustega. Kaelus ja hõlmad ääristati värvilise kandiga, ette õmmeldi tavaliselt punane lapp. Hõlmad hoiti koos malide – ratta&shy;kujuliste tina&shy;naastudega, millest läbitõmmatud punane pael seoti lipsuks.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.523244, lng: 22.732552},
      placeFound : false
    },
    "info" : "Karja (saksa keeles Karris) asus Saaremaa põhjaosas Soela väina ääres. Karja keskaegne Katariina kirik on tähelepanu&shy;väärne oma raid&shy;kaunistuste poolest. Tuntud on Angla tuulikud ja vana maalinn Kooljamägedel. Triigi sadama kaudu peeti ühendust nii Hiiumaa kui mandriga. <br>Karjas ei pandud paelu mitte ainult liistikule lipsuks, vaid ka näärisokule sarve külge: <i>&quot;Nääripäeva hoomiku, kui kell kaksteistkümmend oli ära löönd, oli sokuks-käimine. Tükki viis-kuus ehk veel rohkem poissi panid kokku, üks tehti sokuks ja siis hakkasid perest peresse käima head uut aastat soovides. Siis andsid tüdrukud nende käijatele sukapaelu, kindaid, pähkid ja veel muid sellesarnasi asju, mis kellegil oli ehk tahtis anda, ja see käimine kestis niikaua kunni külas viimase pereni oli kõik läbi käidud ehk kunni aeg tuli kiriku minna. See sokuks-käimine pidi jällegi kosilasi tähendama.&quot;</i>",
    "costume":"costume_karja.jpg",
    "view" : "view_karja.jpg",
    "viewInfo" : "Mehed rahvarõivais, Karja",
    "viewCredits" : "ERM Fk 447:18, Eesti Rahva Muuseum, http://muis.ee/museaalview/648708"
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
    "info" : "Kihelkonna <i>(saksa keeles Kielkond)</i> oli Saaremaa ja ühtlasi kogu Eesti lääne&shy;poolseim kihelkond. Kihelkonna piiridesse jääb Vilsandi saar oma linnuriigiga, Harilaiu poolsaar viltuse majakaga, Odalätsi allikad, vanim ja kõrgeim koht Saaremaal – Viidumäe. Kihelkonna keskaegne Miikaeli kirik sai oma sihvaka torni alles 1899. aastal. Säilinud on ka eraldi asuv kellatorn. <br>Kihelkonnal arvati nii, et vahel on ka loodusel müts peas, mitte ainult inimesel: <i>&quot;Mättal piab enne jõulut seitse mütsi pees olema, siis tuleb kena vilja-aasta. Tähendab, enne jõulu piab seitse korda lund sadama.&quot;</i>",
    "costume":"costume_kihelkonna.jpg",
    "view" : "view_kihelkonna.jpg",
    "viewInfo" : "Grupp noori, neiud kannavad Kihelkonna rahvariietega sarnanevaid riideid",
    "viewCredits" : "MTM _ 25 F 25, Mihkli talumuuseum, http://muis.ee/museaalview/2546628"
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
    "info" : "Kärla <i>(saksa keeles Kergel)</i> oli ainus Saaremaa kihelkond, millel puudus merepiir. Suuremalt jaolt Kärla kihelkonda jääv Karujärv on Saaremaa suurim ja üks ilusaimatest järvedest. Hirmuste mäel on aga Saaremaa vägilase Suure Tõllu viimne puhkepaik. Kärla Maarja Magdaleena kirik ehitati 19. sajandi II veerandil lammutatud keskaegse kiriku asemele. <br>Kärla naised olid rahvapärimuse järgi kanged mitte ainult punaseid seelikuid tegema, vaid ka lehmadele kollaseid liblikaid sisse söötma: <i>&quot;Suur neljapäe läksid pereeided kuskile kõrgemasse kohta, kas aja pääle või puu otsa ning üüdsid valju äälega: &quot;Piima, koort, võid!&quot; See tähendas, et lehmad pidid sui kenasti palju piima andma. Suur neljapäe püüti ka koldseid liblikaid ja aeti need lehmadele sisse, mis tähendas palju koldset võid.&quot;</i>",
    "costume":"costume_karla.jpg",
    "view" : "view_karla.jpg",
    "viewInfo" : "Kärla, Sauvere tüdrukud 1894",
    "viewCredits" : "ERM Fk 172:19, Eesti Rahva Muuseum, http://muis.ee/museaalview/623523"
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
      "itemInfo" : "<b class='nkl-important'>Abukäised</b> oli avara&shy;lõikeline üleriie. Umbes abaluude kohalt algas sügav volt ja kummalgi puusal oli veel üks madal volt. Kaelus ja hõlmad kuni vöökohani kaunistati punasest kalevist kandiga.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.462323, lng: 22.235696},
      placeFound : false
    },
    "info" : "Mustjala <i>(saksa keeles Mustel)</i> oli mereäärne kihelkond Saaremaa loodeosas. Tähelepanu&shy;väärne on Panga e Mustjala pank, mis on Saaremaa kõrgeim pank. Rahvapärimus räägib panga kohta nii: <i>&quot;Mustjala pangal on olnud vanasti jumalakuju, kuhu andi viidud, et kalasaak hea oleks. Ebausu ajast peetakse ka maarjapäeva kalapühaks. Maarjalaupäeva õhtu tehakse samuti kui jaanilaupäeva õhtul tuld. Vanad inimesed nurisevad selle kohta, et noored seal tantsimas käivad ja seega püha kohta rüvetavad, seepärast olla ka kalasaak hoopis vähemaks jäänud, kui see vanasti on olnud.&quot;</i> Ninase (Tagaranna) pank sama&shy;nimelisel poolsaarel on omapärase sakilise ülaservaga. Mustjala Anna kirik ei saanud oma nime pühaku järgi nagu see tavaliselt käis, vaid hoopis Taani asekuberneri abikaasa nime järgi.",
    "costume":"costume_mustjala.jpg",
    "view" : "view_mustjala.jpg",
    "viewInfo" : "Mustjala rahvariides vana abielupaar",
    "viewCredits" : "SM F 3717:95 F, Saaremaa Muuseum, http://muis.ee/museaalview/2739182"
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
    "info" : "Pöide <i>(saksa keeles Peude)</i> kihelkond asus Saaremaa idaosas. Pöide kihelkonda jäävad Maasi&shy;linna ordu&shy;linnuse varemed, Kahutsi maalinn, Koigi raba, Kübassaare poolsaar. Tumala hiiemäel asub lohukivi, millesse inimesed on vanal ajal uuristanud süvendid ehk lohud viljakusmaagia või esivanemate kultuse jaoks. Kihelkonna keskuses olev Pöide Maarja kirik on Saaremaa suurim. <br>Pöides kasutati riide asemel enda katmiseks ka rukkikõrsi, nagu vanad pöidelased on mardisante kirjeldanud: <i>&quot;Mardisandid on harilikult ikka maskeeritud, nii et neid ära ei tuntaks. Maal mähkisid ja mässisid nad end rukkikõrte sisse. Kui juhtus vahel kas kogemata kombel suure müra pääle mardisandi küljest mõni õlekõrs maha kukkuma, siis võeti see mahakukkunud õlekõrs ja põletati ära.&quot;</i>",
    "costume":"costume_poide.jpg",
    "view" : "view_poide.jpg",
    "viewInfo" : "Pöide kihelkond, 92 a vanamees kaevul istumas",
    "viewCredits" : "ERM Fk 187:8, Eesti Rahva Muuseum, http://muis.ee/museaalview/628511"
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
    "info" : "Püha (saksa keeles Pyha) asus Saaremaa kaguosas. Püha kihelkonna suurimaks vaatamis&shy;väärsuseks on Kaali meteoriidi&shy;kraater. Püha Jakobi kirikut hakati rajama juba 13. sajandil. <br>Püha kihelkonnas oli vahel uskumus rõivaesemest tähtsam: kui naine madisepäeval külas käib, tulevad kärbsed tuppa, ja selle vältimiseks tuli madisepäeval külas käinud naise kuuehõlm katki rebida. <i>&quot;Naised äi tohi matsabä külas käia. Eese laiade kuueändadega nad viivad kärmpsid. Kui naine matsabä külase läheb, siis ta kuueänd tuleb lõhki lüüa.&quot;</i>",
    "costume":"costume_pyha.jpg",
    "view" : "view_pyha.jpg",
    "viewInfo" : "Saaremaa rahvariided, Püha tüdrukud",
    "viewCredits" : "SM F 3761:2526 F, Saaremaa Muuseum, http://muis.ee/museaalview/281701"
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
      "itemInfo" : "Pikk-kuube kanti kirikusse minnes nii suvel kui talvel. Kuub tõmmati kasuka peale kaitseks vihma ja määrdumise eest. Kindlasti pidid välja paistma kuue alt kõik seljas olevad pidulikud riided.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.408213, lng: 22.788948},
      placeFound : false
    },
    "info" : "Valjala <i>(saksa keeles Wolde)</i> kihelkond asus Saaremaa kaguosas. Valjalas asub muistne maalinn, mis oli Saaremaa tugevaim. Selle alistumist 1227. aastal võib pidada ka muistse vabadus&shy;võitluse lõpuks. Valjala Martini kirik on Saaremaa kihelkonna kirikutest vanim, mille ehitamisega alustati kohe pärast Saaremaa alistamist. Väkra külas asub II aastatuhandest pärit hiiekivi, mis on Saaremaa suurim ohvrikivi ja millel usuti olevat imettegev ravivõime. <br>Jõulude ajal oli Valjalas komme end haneks riietada: <i>&quot;Võeti kasukas, tõmmati see pahupidi, pandi ühest käisest kepp kooguga läbi. Käise ots seoti ümber koogu kokku, mis meenutas hane pead, kook meenutas hane nokka. Kasukas võeti endale ümber ning mindi naabriperesse – jõuluhaneks. Kepi ots hoiti peos ja sellega saadi hane kaela mitmet moodi pöörata. Vahel kõhutas hani vastu põrandat ka nokka ja tegi muid hanetempe. Haneks käidi jõulu kolmandal päeval.&quot;</i>",
    "costume":"costume_valjala.jpg",
    "view" : "view_valjala.jpg",
    "viewInfo" : "Valjala kihelkond, lõngakerija ja võitegija",
    "viewCredits" : "ERM Fk 187:27, Eesti Rahva Muuseum, http://muis.ee/museaalview/629115"
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
  created(){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1849472005329046',
        xfbml      : true,
        version    : 'v2.8'
      });

      FB.shareMyScore = function(data) {
  			FB.ui({
  				method: 'feed',
  				name: 'Mängisin Saaremaa rahvarõivaste mängu...',
  				link: data.link,
  				picture: data.image,
  				caption: data.caption,
  				description: data.description
  			}, function(response) {
  				if (response && response.post_id) {
  				  //alert('Jagamine õnnestus!');
  				} else {
  					//alert('Kahjuks jagamine ei õnnestunud :)');
  				}
  			});
  		}
		};
		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
  },
  render: h => h(App)
});
