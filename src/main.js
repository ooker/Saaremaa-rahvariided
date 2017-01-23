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
        "Peokott",
        "Tubakatasku",
        "Märss"
      ],
      "itemInfo" : "Rahvarõivastele ei õmmeldud sageli taskuid rõiva sisse, nagu tänapäeval, et pisiesemeid hoida. Selle asemel sidusid naised paelaga paremale puusale lahtise tasku - <b class='nkl-important'>lahttasku</b>. Need tehti väga uhked ja kaunistati mitmel erineval viisil aplikatsioonide, paelte ja tikandiga. Tikandis kasutati sageli värvilisest klaasist ümmargusi ja torukujulisi helmeid.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.098358, lng: 22.231077},
      placeFound : false,
      polygon : [{lat:58.022, lng:22.199},
      {lat:58.083, lng:22.149},
      {lat:58.141, lng:22.174},
      {lat:58.177, lng:22.091},
      {lat:58.204, lng:22.132},
      {lat:58.215, lng:22.224},
      {lat:58.244, lng:22.376},
      {lat:58.213, lng:22.387},
      {lat:58.179, lng:22.289},
      {lat:58.078, lng:22.268},
      {lat:58.022, lng:22.199}]
    },
    "info" : "<b class='nkl-important'>Anseküla</b> <i>(saksa keeles Anseküll)</i> võttis enda alla Sõrve poolsaare kitsa kaela ja Saaremaa edela&shy;poolsema nurga. Anseküla kihelkonnas peeti Saaremaa esimene laulupidu Massinõmmel 1863. aastal. Salmelt leiti hiljuti 8. sajandist pärinev laevavrakk, mis on vanim Eestist leitud vrakk. Seal sees olid 7 sõdalase luustik, mõõgad, odaotsad, noad, mängunupud ja täringud.<hr>Ansekülas öeldi madisepäeval nii: <i>&quot;Tuhvlid ei tohi süüa, siis kasvavad ussised.&quot;</i> Saarlased teavad, et tegemist on kartulite, mitte susside söömise keeluga.",
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
      "itemInfo" : "Juba 1774. aastal on üles kirjutatud, et Saaremaal ei kanta viletsaid pastlaid, vaid saapaid ja <b class='nkl-important'>ummiskingi</b>. Ummiskingad on nahast jalanõud, millel on tugev tald ja konts, ja mis ei ulatu pahkluust kõrgemale. Varasemal ajal õmmeldi kingadele tald alla traadiga, hiljem tikutati – paks tallanahk kinnitati puust tikkudega.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.613415, lng: 22.915182},
      placeFound : false,
      polygon : [{lat:58.596, lng:23.005},
{lat:58.531, lng:22.943},
{lat:58.482, lng:22.952},
{lat:58.492, lng:22.889},
{lat:58.511, lng:22.844},
{lat:58.580, lng:22.803},
{lat:58.626, lng:22.789},
{lat:58.623, lng:22.950},
{lat:58.596, lng:23.005}]
    },
    "info" : "Jaani <i>(saksa keeles St. Johannis)</i> asus Saaremaa kirdeosas. Jaani kihelkonda jäävad Pulli ja Paramaja pank ning Järveküla järv. Pulli pank on Saaremaal üks väheseid kohti, kus Saaremaa aluspõhja ehitus selgesti näha on.<hr>Jaani kihelkonnas kasutati pükse vahel nii: <i>&quot;Nääriomiku ei tahetud naisterahvast esimeseks. Sooviti meesterahvast esimeseks, siis pidi hea önn olema. Kui naisterahvas tuli, sellele aeti püksid piha (= pähe). Noored tüdrukud pole väljas käin mitte enne kui kirikulised kodu tuln, siis läin. Minu noorespölves tehti nii.&quot;</i>",
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
        "Poistepüüdja",
        "Majakamüts",
        "Tuuletorn"
      ],
      "itemInfo" : "Vanasti, kui naine abiellus, hakkas ta kandma peakatet, mida nimetati tanuks. 19. sajandi lõpus kanti tanu asemel meelsamini varrastel kootud <b class='nkl-important'>kirimütsi</b> e tuttmütsi. Tavaliselt kooti kirimütsi musta põhja sisse punased laiemad vöödid peente valgete triipude ja tähnidega. Mütsi otsa kinnitati tutt, mis Jämaja kihelkonnas tehti eriti suur ja uhke. Selle valmistamiseks kasutati pitsi, paelu ning kirjusid riideribasid.",
      "itemFound" : false
    },

    "map" : {
      position: {lat: 58.012714, lng: 22.052888},
      placeFound : false,
      polygon : [{lat:58.023, lng:22.209},
{lat:58.107, lng:22.108},
{lat:57.968, lng:21.950},
{lat:57.893, lng:22.069},
{lat:57.980, lng:22.219},
{lat:58.023, lng:22.209}]
    },
    "info" : "Jämaja <i>(saksa keeles Jamma)</i> hõlmas suurema osa Sõrve poolsaarest. Poolsaarel asunud kihelkonda ümbritses pea terves ulatuses meri. Sõrve sääre tipus oleva tuletorni ajalugu ulatub tagasi aastasse 1684. Ohessaare pank ei ole kuigi kõrge, kuid see-eest leidub seal rohkesti huvitavaid kivistisi. Sõrve nõidu peeti vanasti kõige vägevamateks nii saarel kui mandril.<hr>Jämajal arvati, et vahel on hea mõnda tegu üldse ilma riieteta teha: <i>&quot;Kui suurel neljapäeval ihualaste põldu ägiga äästada, siis mügrid ei ajada põldu ära.&quot;</i>",
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
        "Kabikiiver",
        "Kopsik",
        "Kongtanu",
        "Mesipuu"
      ],
      "itemInfo" : "<b class='nkl-important'>Pinnmüts</b> e kabimüts sai oma teise nimetuse kapja meenutava kuju tõttu. Pinnmüts ei olnud eriti laialdaselt levinud ja seda kanti peamiselt linna&shy;lähedastes kihelkondades. Mütsi pappalus kaeti lillelise siid- või sitsriidega ja kaunistati kardpaeltega. Mütsi kukla peale seoti lipsu pikad lindid, mille otsad langesid seljale.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.349067, lng: 22.509372},
      placeFound : false,
      polygon : [{lat:58.232, lng:22.624},
{lat:58.320, lng:22.632},
{lat:58.424, lng:22.602},
{lat:58.489, lng:22.473},
{lat:58.414, lng:22.355},
{lat:58.342, lng:22.388},
{lat:58.242, lng:22.364},
{lat:58.208, lng:22.405},
{lat:58.195, lng:22.602},
{lat:58.232, lng:22.624}]
    },
    "info" : "Kaarma <i>(saksa keeles Karmel)</i> kihelkond asus Saaremaa keskel, ulatudes Kuressaare ümbruses mereni. Keskaegse Peeter-Pauli kiriku naabrusse jääb Kaarma maalinn. 1260.-1261. aastal oli Kaarma maalinn saarlaste vägede kogunemiskoht, mille lähedal peeti lahing orduväega. Kaarmal asub dolomiidi&shy;kärjäär, kust on võetud ehituskivi üle 700 aasta.<hr>Kaarmal peeti ilusat ja uhket riietust oluliseks ka kadripäeval: <i>&quot;Kadrid olid uhked, valges riides ja öbepaberitega ning kardpaeltega ära ehitud. Mõned poisid olid naisteriides, mõned olid poiste&shy;riides ka seas, pagunitega olid säätud ohvitserideks. Tuli ennem nädala&shy;päevad ehitada kui kadriks minna sai. Igaüks katsus, kes teisest ikka uhkemaks sai.&quot;</i>",
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
      "itemInfo" : "Piduülikonna juurde kuuluvat vestilaadset rõivaeset <b class='nkl-important'>liistikut</b> peeti üheks uhkemaks iluasjaks. Vanemad liistikud olid üsna lühikesed ja mitmete kaunistustega. Kaelus ja hõlmad ääristati värvilise kandiga, ette õmmeldi tavaliselt punane lapp. Hõlmad hoiti koos malide – ratta&shy;kujuliste tina&shy;naastudega, millest läbitõmmatud punane pael seoti lipsuks.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.523244, lng: 22.732552},
      placeFound : false,
      polygon : [{lat:58.627, lng:22.789},
{lat:58.502, lng:22.874},
{lat:58.453, lng:22.707},
{lat:58.435, lng:22.630},
{lat:58.500, lng:22.482},
{lat:58.587, lng:22.417},
{lat:58.651, lng:22.543},
{lat:58.627, lng:22.789}]
    },
    "info" : "Karja <i>(saksa keeles Karris)</i> asus Saaremaa põhjaosas Soela väina ääres. Karja keskaegne Katariina kirik on tähelepanu&shy;väärne oma raid&shy;kaunistuste poolest. Tuntud on Angla tuulikud ja vana maalinn Kooljamägedel. Triigi sadama kaudu peeti ühendust nii Hiiumaa kui mandriga.<hr>Karjas ei pandud paelu mitte ainult liistikule lipsuks, vaid ka näärisokule sarve külge: <i>&quot;Nääripäeva hoomiku, kui kell kaksteistkümmend oli ära löönd, oli sokuks-käimine. Tükki viis-kuus ehk veel rohkem poissi panid kokku, üks tehti sokuks ja siis hakkasid perest peresse käima head uut aastat soovides. Siis andsid tüdrukud nende käijatele sukapaelu, kindaid, pähkid ja veel muid sellesarnasi asju, mis kellegil oli ehk tahtis anda...&quot;</i>",
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
      placeFound : false,
      polygon : [{lat:58.170, lng:22.082},
{lat:58.206, lng:22.134},
{lat:58.285, lng:22.135},
{lat:58.395, lng:22.216},
{lat:58.420, lng:22.260},
{lat:58.446, lng:22.244},
{lat:58.426, lng:22.177},
{lat:58.438, lng:22.095},
{lat:58.531, lng:22.002},
{lat:58.504, lng:21.788},
{lat:58.282, lng:21.780},
{lat:58.170, lng:22.082}]
    },
    "info" : "Kihelkonna <i>(saksa keeles Kielkond)</i> oli Saaremaa ja ühtlasi kogu Eesti lääne&shy;poolseim kihelkond. Kihelkonna piiridesse jääb Vilsandi saar oma linnuriigiga, Harilaiu poolsaar viltuse majakaga, Odalätsi allikad, vanim ja kõrgeim koht Saaremaal – Viidumäe. Kihelkonna keskaegne Miikaeli kirik sai oma sihvaka torni alles 1899. aastal. Säilinud on ka eraldi asuv kellatorn.<hr>Kihelkonnal öeldi, et vahel on ka loodusel müts peas, mitte ainult inimesel: <i>&quot;Mättal piab enne jõulut seitse mütsi pees olema, siis tuleb kena vilja-aasta. Tähendab, enne jõulu piab seitse korda lund sadama.&quot;</i>",
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
      "itemInfo" : "Vanemamoeline põiki&shy;triipudega seelik ehk ümbrik asendus 1870.–1880. aastatel <b class='nkl-important'>kiutkuuega</b>, mille kangasse kooti püstitriibud. See seelik oli ümbrikust pisut lühem ja kaharam ning seda volditi ainult ülaosas värvli juurest. Seeliku triibud olid kitsad ja tavaliselt tumedad. Väikesed voldid seati nii, et alati jäi üks värvitoon – enamasti punane, voldi harjale.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.333498, lng: 22.258482},
      placeFound : false,
      polygon : [{lat:58.243, lng:22.365},
{lat:58.222, lng:22.225},
{lat:58.284, lng:22.148},
{lat:58.340, lng:22.159},
{lat:58.395, lng:22.216},
{lat:58.434, lng:22.285},
{lat:58.411, lng:22.368},
{lat:58.346, lng:22.398},
{lat:58.243, lng:22.365}]
    },
    "info" : "Kärla <i>(saksa keeles Kergel)</i> oli ainus Saaremaa kihelkond, millel puudus merepiir. Suuremalt jaolt Kärla kihelkonda jääv Karujärv on Saaremaa suurim ja üks ilusaimatest järvedest. Hirmuste mäel on aga Saaremaa vägilase Suure Tõllu viimne puhkepaik. Kärla Maarja Magdaleena kirik ehitati 19. sajandi II veerandil lammutatud keskaegse kiriku asemele.<hr>Kärla naised olid rahvapärimuse järgi kanged mitte ainult punaseid seelikuid tegema, vaid ka lehmadele kollaseid liblikaid sisse söötma: <i>&quot;Suur neljapäe läksid pereeided kuskile kõrgemasse kohta, kas aja pääle või puu otsa ning üüdsid valju äälega: &quot;Piima, koort, võid!&quot; See tähendas, et lehmad pidid sui kenasti palju piima andma. Suur neljapäe püüti ka koldseid liblikaid ja aeti need lehmadele sisse, mis tähendas palju koldset võid.&quot;</i>",
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
      "itemInfo" : "<b class='nkl-important'>Abukäised</b> oli lühike üleriie, mis tehti lamba&shy;pruunist või mustast vanutatud villasest riidest. Avara kuue hõlmad ja seljatükk olid allapoole laienevad. Kaelus ja hõlmad kuni vöökohani kaunistati punasest kalevist kandiga.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.462323, lng: 22.235696},
      placeFound : false,
      polygon : [{lat:58.584, lng:22.429},
{lat:58.495, lng:22.495},
{lat:58.411, lng:22.371},
{lat:58.446, lng:22.243},
{lat:58.424, lng:22.176},
{lat:58.437, lng:22.103},
{lat:58.531, lng:22.114},
{lat:58.582, lng:22.287},
{lat:58.584, lng:22.429}]
    },
    "info" : "Mustjala <i>(saksa keeles Mustel)</i> oli mereäärne kihelkond Saaremaa loodeosas. Tähelepanu&shy;väärne on Panga e Mustjala pank, mis on Saaremaa kõrgeim pank. Ninase (Tagaranna) pank sama&shy;nimelisel poolsaarel on omapärase sakilise ülaservaga. Mustjala Anna kirik ei saanud oma nime pühaku järgi nagu see tavaliselt käis, vaid hoopis Taani asekuberneri abikaasa nime järgi.<hr>Rahvapärimus räägib Panga panga kohta nii: <i>&quot;Mustjala pangal on olnud vanasti jumalakuju, kuhu andi viidud, et kalasaak hea oleks. Vanad inimesed nurisevad selle kohta, et noored seal tantsimas käivad ja seega püha kohta rüvetavad, seepärast olla ka kalasaak hoopis vähemaks jäänud, kui see vanasti on olnud.&quot;</i> ",
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
        "Lendbarett",
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
      placeFound : false,
      polygon : [{lat:58.596, lng:23.005},
{lat:58.553, lng:23.142},
{lat:58.487, lng:23.297},
{lat:58.429, lng:23.349},
{lat:58.348, lng:22.992},
{lat:58.383, lng:22.956},
{lat:58.482, lng:22.952},
{lat:58.531, lng:22.943},
{lat:58.596, lng:23.005}]
    },
    "info" : "Pöide <i>(saksa keeles Peude)</i> kihelkond asus Saaremaa idaosas. Pöide kihelkonda jäävad Maasi&shy;linna ordu&shy;linnuse varemed, Kahutsi maalinn, Koigi raba, Kübassaare poolsaar. Tumala hiiemäel asub lohukivi, millesse inimesed on vanal ajal uuristanud süvendid ehk lohud viljakusmaagia või esivanemate kultuse jaoks. Kihelkonna keskuses olev Pöide Maarja kirik on Saaremaa suurim.<hr>Pöides kaunistasid mardi&shy;sandid end nii: <i>&quot;Mardisandid on harilikult ikka maskeeritud, nii et neid ära ei tuntaks. Maal mähkisid ja mässisid nad end rukkikõrte sisse. Kui juhtus vahel kas kogemata kombel suure müra pääle mardisandi küljest mõni õlekõrs maha kukkuma, siis võeti see mahakukkunud õlekõrs ja põletati ära.&quot;</i>",
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
      placeFound : false,
      polygon : [{lat:58.222, lng:22.631},
{lat:58.325, lng:22.625},
{lat:58.404, lng:22.610},
{lat:58.400, lng:22.761},
{lat:58.333, lng:22.859},
{lat:58.270, lng:22.864},
{lat:58.205, lng:22.709},
{lat:58.222, lng:22.631}]
    },
    "info" : "Püha <i>(saksa keeles Pyha)</i> asus Saaremaa kaguosas. Püha kihelkonna suurimaks vaatamis&shy;väärsuseks on Kaali meteoriidi&shy;kraater. Püha Jakobi kirikut hakati rajama juba 13. sajandil. <hr>Püha kihelkonnas olid madisepäeval naiste kuuehõlmad ohus: <i>&quot;Naised äi tohi matsabä külas käia. Eese laiade kuueändadega nad viivad kärmpsid. Kui naine matsabä külase läheb, siis ta kuueänd tuleb lõhki lüüa.&quot;</i>",
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
      "itemInfo" : "<b class='nkl-important'>Pikk-kuube</b> kanti kirikusse minnes nii suvel kui talvel. Kuub tõmmati kasuka peale kaitseks vihma ja määrdumise eest. Kindlasti pidid kuue alt välja paistma kõik seljas olevad pidulikud riided.",
      "itemFound" : false
    },
    "map" : {
      position: {lat: 58.408213, lng: 22.788948},
      placeFound : false,
      polygon : [{lat:58.291, lng:22.891},
{lat:58.334, lng:22.861},
{lat:58.399, lng:22.759},
{lat:58.410, lng:22.605},
{lat:58.444, lng:22.587},
{lat:58.449, lng:22.707},
{lat:58.489, lng:22.875},
{lat:58.473, lng:22.941},
{lat:58.347, lng:22.984},
{lat:58.297, lng:22.928}]
    },
    "info" : "Valjala <i>(saksa keeles Wolde)</i> kihelkond asus Saaremaa kaguosas. Valjalas asub muistne maalinn, mis oli Saaremaa tugevaim. Selle alistumist 1227. aastal võib pidada ka muistse vabadus&shy;võitluse lõpuks. Valjala Martini kirik on Saaremaa kihelkonna kirikutest vanim, mille ehitamisega alustati kohe pärast Saaremaa alistamist. Väkra külas asub II aastatuhandest pärit hiiekivi, mis on Saaremaa suurim ohvrikivi ja millel usuti olevat imettegev ravivõime.<hr>Jõulude ajal oli Valjalas komme end haneks riietada: <i>&quot;Võeti kasukas, tõmmati see pahupidi, pandi ühest käisest kepp kooguga läbi. Käise ots seoti ümber koogu kokku, mis meenutas hane pead, kook meenutas hane nokka. Kasukas võeti endale ümber ning mindi naabriperesse – jõuluhaneks. Kepi ots hoiti peos ja sellega saadi hane kaela mitmet moodi pöörata. Vahel kõhutas hani vastu põrandat ka nokka ja tegi muid hanetempe. Haneks käidi jõulu kolmandal päeval.&quot;</i>",
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
