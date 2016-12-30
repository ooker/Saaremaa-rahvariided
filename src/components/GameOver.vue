<template>
  <div class="intro nkl-zigzag">
    <div style="margin: auto; padding: 10vh 0 25vh 0;">


      <h1>Ongi kõik!</h1>

      <div style="width:100%;margin:4vh auto 2vh auto;">
        <svg viewBox="0 0 100 2">
          <path fill="none" stroke="#568" stroke-width="1px" vector-effect="non-scaling-stroke"
            d="M0,0.5 48,0.5 50,2 52,0.5 100,0.5"/>
        </svg>
      </div>

      <section class="nkl-introInfo">

        <div class="nkl-introInfo__left">
          <p class="nkl-intro__text">
            Sul õnnestus koguda <b class="nkl-important">{{this.finalScore}} punkti</b> 940-st võimalikust ja <b class="nkl-important">lisaks sellele loodetavasti ka pisut uusi teadmisi</b> Saaremaa rahvarõivaste ning kihelkondade kohta. Soovi korral võid uuesti proovida.
          </p>

        </div>
        <div class="nkl-introInfo__right">
            <button class="nkl-btn large nkl-font--special" @click="restartGame">Proovi uuesti</button>
        </div>

      </section>

      <div style="width:100%;margin:2vh auto 8vh auto;">
        <svg viewBox="0 0 100 2">
          <path fill="none" stroke="#568" stroke-width="1px" vector-effect="non-scaling-stroke"
            d="M0,1.5 48,1.5 50,0 52,1.5 100,1.5"/>
        </svg>
      </div>

      <h2>Mängu sündimisele aitasid kaasa:</h2>

      <dl>
        <li>
          <dt>rahastaja</dt>
          <dd><a href="http://www.rahvakultuur.ee/" target="_blank">Rahvakultuuri Keskus</a>
            <br />
            <small>programmist "Saarte pärimuslik kultuurikeskkond 2015-2019"</small></dd>
        </li>
        <li>
          <dt>ehitaja</dt>
          <dd><a href="https://www.facebook.com/MTÜ-Saaremaailm-140846182637341/" target="_blank">MTÜ Saaremaailm</a></dd>
        </li>
        <li>
          <dt>koostööpartner</dt>
          <dd><a href="http://www.saaremaamuuseum.ee/" target="_blank">Saaremaa muuseum</a></dd>
        </li>
        <li>
          <dt>konsultant</dt>
          <!--<dd>Maret Soorsk<br />
            <small>Saaremaa muuseumi vanemteadur</small></dd>-->
          <dd>Krista Lember
            <br />
            <small>Saare maakonna rahvakultuurispetsialist</small></dd>

        </li>
        <li>
          <dt>rahvariiete fotode autor</dt>
          <dd>Tõnu Ling
            <br />
            <small><a href="https://www.facebook.com/tonu.ling" target="_blank">https://www.facebook.com/tonu.ling</a></small></dd>
        </li>
      </dl>
      <hr />
      <p>
        Saaremaa rahvarõivaste kohta saab põhjalikumalt lugeda raamatust "Saare maakonna rahvarõivad", mis valmis Saaremaa rahvakultuuriseltsi ja Saaremaa muuseumi koostööna.
      </p>
    </div>
  </div>

</template>


<script>

  import {eventBus} from "../main";

  export default {
    data(){
      return {
        finalScore : 0
      }
    },
    methods : {
      restartGame(){
        //eventBus.changeView("nkl-guess-thing");
        eventBus.restartGame();
      }
    },
    created() {
      this.finalScore = eventBus.finalScore;
    }

  }
</script>

<style scoped lang="sass">
  @import "../assets/scss/variables.scss";
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    width: 100%;
    min-height:100vh;
    //margin: auto;
    padding: 2vh 4vw;
    text-align: center;

    @include mq-l {
      min-height: 90vh;
    }
  }
  h1 {
    font-size: 3rem;
    line-height: 1.4;
    margin: 0 auto $nkl-m auto;
    color: $nkl-yellow--pale;
    text-shadow: 0 3px 5px rgba(0,0,0,0.7);
  }
  h2 {
    color: rgba(255,255,255,0.4);
    font-size: 2rem;
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
  dl, li, dt, dd {
    color: $nkl-white;
    list-style: none;
    text-align: center;
    margin: 0;
    padding:0;
  }
  dl {
    margin: $nkl-4xl 0;
  }
  dt {
    font-weight: bold;
    //color: $nkl-yellow--pale;
    margin-top: $nkl-m;
    text-transform: uppercase;
  }
  dd, dd a {
    color: $nkl-yellow--pale;

    small, small a {
      color: rgba(255,255,255,0.5);
    }
  }


  .nkl-introInfo {
    display: flex;
    flex-direction: column;
    //margin: auto;
    //padding: $nkl-5xl 0;


    &>div {
      padding: 3vmin;
    }

    @include mq-l {
      flex-direction: row;
      align-items: center;
      min-height: 30vh;
    }
  }

  .nkl-introInfo__left {
    @include mq-l {
      flex: 1 0 66.666%;
      text-align: left;
    }
  }
  .nkl-introInfo__right {
    @include mq-l {
      flex: 1 0 33.333%;
      text-align: center;
    }
  }

  .nkl-intro__text {
    font-size: 1.2rem;
  }
</style>
