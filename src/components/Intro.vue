<template>
  <div class="nkl-intro">
    <div style="margin: auto;">

      <h1>Saaremaa rahvarõivad</h1>
      <!-- <hr /> -->
      <div style="width:100%; margin:2vh auto 0 auto;">
        <!--<svg viewBox="0 0 100 2">
          <path fill="none" stroke="#777" stroke-width="1px" vector-effect="non-scaling-stroke"
            d="M0,1.5 48,1.5 50,0 52,1.5 100,1.5"></path>
        </svg>-->
        <svg viewBox="0 0 100 2">
          <path fill="none" stroke="#568" stroke-width="1px" vector-effect="non-scaling-stroke"
            d="M0,0.5 48,0.5 50,2 52,0.5 100,0.5"></path>
        </svg>

      </div>

      <section class="nkl-introInfo">

        <div class="nkl-introInfo__left">
          <!--<p>
            Juba ürgsetest aegadest saadik on kõik rahvad kandnud uhkeid ja erilisi rahvarõivaid. Ja ega meiegi esivanemad teistest kehvemad ei olnud. Mitte ainult tervel Eestil või Saaremaal, aga lausa igal piirkonnal (ehk kihelkonnal) olid vanasti oma erilised ja äratuntavad riided.
          </p>
          <p>
            Kui mõni tänapäevane t-särk saab juba ühe suvega prügikasti-kõlbulikuks, siis rahvarõivad olid tehtud sellise hoole ja armastusega ning nii kvaliteetselt, et neid pärandati tihti edasi ühelt põlvkonnalt teisele ja kanti vahel mitukümmend aastat! Aga ega pidulikku rahvarõivast iga päev selga pandudki - neid hoiti väga hoolikalt ja kanti ainult suurte pühade puhul või kirikusse minnes.
          </p>
          <p>
            Tänapäeval kipuvad meie esivanemate traditsioonid vägisi moodsa elu virrvarri sisse ära kaduma ja nii on kahjuks ka rahvariietega. See väike leht või mänguke siin püüab meile tutvustada vahvaid Saaremaa rahvarõivaid, nende toredaid nimesid ja pisut ka vanu Saaremaa kihelkondi. Kas sina tead, millisest kihelkonnast sinu ema või isa pärit on? Kas sa tead, mida näiteks sinu vana-vana-vana-vanaema võis kanda seljas oma pulmapäeval sada aastat tagasi?
          </p>-->
          <p class="nkl-intro__text">
            Pikki sajandeid on meie esivanemad Saaremaal kandnud rõivaid, mida tänapäeval nimetatakse rahvarõivasteks. Neid kantakse uhkusega laulu- ja tantsupidudel, rahvaüritustel ja isegi presidendi vastuvõtul. Vanal ajal erinesid rõivad, mida talupojad ja -naised kandsid, kihelkondade kaupa. Nii võis rõivaste järgi aru saada, kust kandist inimene pärit on. Ka tänapäeval valitakse ja valmistatakse omale rahvarõivad selle järgi, kust ema või isa pärit on.
          </p>
          <p class="nkl-intro__text">
            See väike mäng siin on mõeldud abivahendiks õpetajale, lapsevanemale või lapsevanavanemale, et koos teisme-ealistega tutvust teha Saaremaa oma-aegsete kihelkondade ja nende rahvarõivastega. Loomulikult on ka kõik teised teretulnud oma teadmisi proovima.
          </p>
          <hr style="border-bottom:1px dotted #777;" />
          <p class="nkl-intro__text nkl-important">
            Igast kihelkonnast on välja toodud üks rahvariide-ese, mille nimetus tuleb ära arvata. Seejärel tuleb kaardilt üles leida kihelkond, kust ese pärit on.
          </p>
          <p>Mängu alguses on igal mängijal 500 punkti. Iga valesti arvatud variant võtab sealt 5 punkti maha, aga õige vastus annab 20 punkti juurde. Olge nutikad!
          </p>


        </div>
        <div class="nkl-introInfo__right">
            <img src="../assets/img/game/intro-1.jpg" class="nkl-intro__img" />
            <button class="nkl-btn huge nkl-font--special nkl-btn__launchGame" @click="launchGame">Ava mäng!</button>
        </div>

      </section>
      <svg viewBox="0 0 100 2">
        <path fill="none" stroke="#568" stroke-width="1px" vector-effect="non-scaling-stroke"
          d="M0,1.5 48,1.5 50,0 52,1.5 100,1.5"></path>
      </svg>
      <!--<div style="width:100%; margin:0 auto 2vh auto;">
        <svg viewBox="0 0 100 2">
          <path fill="none" stroke="#777" stroke-width="1px" vector-effect="non-scaling-stroke"
            d="M0,0.5 48,0.5 50,2 52,0.5 100,0.5"></path>
        </svg>
      </div>-->

    </div>

  </div>
</template>


<script>
  import {eventBus} from "../main";

  export default {
    methods : {
      launchGame(){
        eventBus.changeView("nkl-guess-thing");
        eventBus.startGame();
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";

  .nkl-intro {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 15vh 6vw 10vh 6vw;
    text-align: center;
    color: $nkl-white;

    @include mq-l {
      height: 100vh;
    }
  }

  .nkl-introInfo {
    display: flex;
    flex-direction: column;
    margin: auto;

    &>div {
      padding: 3vmin;
    }

    @include mq-l {
      flex-direction: row;
      align-items: center;
    }
  }

  .nkl-introInfo__left {
    //order:1;
    @include mq-l {
      flex: 1 0 66.666%;
    }
  }
  .nkl-introInfo__right {
    //order:0;
    @include mq-l {
      flex: 1 0 33.333%;
      align-self: flex-start;
    }

  }

  .nkl-intro__text {
    font-size: 1.2rem;
  }

  .nkl-intro__img {
    max-width: 300px;
    border-radius: 50%;
    border: 2px solid white;
  }

    .nkl-btn__launchGame {
      //position: fixed;
      //bottom: 10vh;
      //right: 1vw;
      position: relative;
      top:-60px;
      border: 2px solid white;
    }

  h1 {
    font-size: 3rem;
    line-height: 1;
    margin: 0;
    color: $nkl-yellow--pale;
    text-shadow: 0 3px 5px rgba(0,0,0,0.7);
    @include mq-m {
      font-size: 4rem;
    }
  }
  p {
    line-height: 1.6;
    // color: $nkl-white;
    margin: 0 0 $nkl-s 0;
  }
  hr {
      width: 100%;
      margin: 4vh auto;
    }
</style>
