<template>
  <div class="intro nkl-zigzag">

    <h1>Vahvad Saaremaa rahvarõivad</h1>
    <!-- <hr /> -->
    <div style="width:100%;margin:4vh auto;">
      <svg viewBox="0 0 100 2">
        <path fill="none" stroke="#777" stroke-width="2px" vector-effect="non-scaling-stroke"
          d="M0,1.5 48,1.5 50,0 52,1.5 100,1.5"/>
      </svg>
    </div>

    <p>
      Juba ürgsetest aegadest saadik on kõik rahvad kandnud uhkeid ja erilisi rahvarõivaid. Ja ega meiegi esivanemad kehvemad ei olnud. Mitte ainult tervel Eestil või Saaremaal, aga lausa igal piirkonnal (ehk kihelkonnal) olid vanasti oma erilised ja äratuntavad riided.
    </p>
    <p>
      Kui mõni tänapäevane t-särk saab juba ühe suvega prügikasti-kõlbulikuks, siis rahvarõivad olid tehtud sellise hoole ja armastusega ning nii kvaliteetselt, et neid pärandati tihti edasi ühelt põlvkonnalt teisele ja kanti vahel mitukümmend aastat! Aga ega pidulikku rahvarõivast iga päev selga pandudki - neid hoiti väga hoolikalt ja kanti ainult suurte pühade puhul või kirikusse minnes.
    </p>
    <p>
      Tänapäeval kipuvad meie esivanemate traditsioonid vägisi moodsa elu virrvarri sisse ära kaduma ja nii on kahjuks ka rahvariietega. See väike leht või mänguke siin püüab meile tutvustada vahvaid Saaremaa rahvarõivaid, nende toredaid nimesid ja pisut ka vanu Saaremaa kihelkondi. Kas sina tead, millisest kihelkonnast sinu ema või isa pärit on? Kas sa tead, mida näiteks sinu vana-vana-vana-vanaema võis kanda seljas oma pulmapäeval sada aastat tagasi?
    </p>

    <p>
      Sinu ülesandeks on kõigepealt ära arvata kuidas mingit rahvariide-eset vanasti kutsuti ja seejärel kaardil pihta saada kohale, kus sellist asja kanti. Mida nutikamalt arvad, seda rohkem punkte teenid.
    </p>


    <div style="width:100%;margin:4vh auto;">
      <svg viewBox="0 0 100 2">
        <path fill="none" stroke="#777" stroke-width="2px" vector-effect="non-scaling-stroke"
          d="M0,0.5 48,0.5 50,2 52,0.5 100,0.5"/>
      </svg>
    </div>
    <button class="nkl-button huge nkl-font--special" @click="launchGame">Mängima!</button>

  </div>

</template>


<script>

  import {eventBus} from "../main";

  export default {
    methods : {
      launchGame(){
        eventBus.changeView("nkl-guess-thing");
      }
    }

  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100vh;
    padding: 2vh 4vw;
    text-align: center;
    @include mq-l {
      height: 85vh;
    }
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
    color: $nkl-white;
    margin: 0 0 $nkl-s 0;
  }
  hr {
      width: 80%;
      margin: 4vh auto;
    }
</style>
