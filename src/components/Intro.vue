<template>
  <div class="nkl-intro nkl-zigzag">
    <div style="margin: auto;">

      <h1>Vahvad Saaremaa rahvarõivad</h1>
      <!-- <hr /> -->
      <div style="width:100%; margin:2vh auto 0 auto;">
        <svg viewBox="0 0 100 2">
          <path fill="none" stroke="#777" stroke-width="2px" vector-effect="non-scaling-stroke"
            d="M0,1.5 48,1.5 50,0 52,1.5 100,1.5"></path>
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
          <p>
            Siia tuleb lühem sissejuhatus. Nii on ja siis saab pikemat juttu lugeda kes tahab. Eksole. Väga palju mulinat pole kohe vaja.
          </p>
          <hr />
          <p class="nkl-important">
            Sinu ülesandeks on kõigepealt ära arvata kuidas mingit rahvariide-eset vanasti kutsuti ja seejärel kaardil pihta saada kohale, kus sellist asja kanti. Mida nutikamalt arvad, seda rohkem punkte teenid.
          </p>
        </div>
        <div class="nkl-introInfo__right">
          <img src="../assets/img/game/intro-1.jpg" class="nkl-intro__img" />
          <button class="nkl-btn huge nkl-font--special" @click="launchGame">Mängima!</button>
        </div>

      </section>

      <div style="width:100%; margin:0 auto 2vh auto;">
        <svg viewBox="0 0 100 2">
          <path fill="none" stroke="#777" stroke-width="2px" vector-effect="non-scaling-stroke"
            d="M0,0.5 48,0.5 50,2 52,0.5 100,0.5"></path>
        </svg>
      </div>



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

  }
  .nkl-introInfo__right {
    //order:0;

  }


  .nkl-intro__img {
    max-width: 360px;
    border-radius: 50%;
    border: 2px solid white;

  }

  h1 {
    font-size: 3rem;
    line-height: 1;
    margin: 0;
    color: $nkl-yellow--pale;
    text-shadow: 0 3px 5px rgba(0,0,0,0.7);
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
