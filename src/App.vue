<template>
  <!-- <div id="languagePicker" v-if="currentPhase === `intro`">
    <button v-if="isTurkish" @click="isTurkish = false">English</button>
    <button v-else @click="isTurkish = true">Türkçe</button>
  </div> -->
  <div id="mobileWarning">
    <div >Daha geniş bir ekrana ihtiyacınız var.</div>
    <!-- <div v-else>You need a larger screen for this.</div> -->
  </div>
  <div id="mainWrapper">
    <IntroScreen
      v-if="currentPhase === `intro`"
      @end="currentPhase = treatments[`intro`]"
    />
    <PrudenceTutorial
      v-if="currentPhase === `pruTut`"
      @end="currentPhase = `pruGam`"
    />
    <PrudenceGame
      :payOffs="pruPayOffs"
      :lastTreatment="treatments[`pruGam`] === `son`"
      v-if="currentPhase === `pruGam`"
      @end="currentPhase = treatments[`pruGam`]"
    />
    <TemperanceTutorial
      v-if="currentPhase === `temTut`"
      @end="currentPhase = `temGam`"
    />
    <TemperanceGame
      :payOffs="temPayOffs"
      :lastTreatment="treatments[`temGam`] === `son`"
      v-if="currentPhase === `temGam`"
      @end="currentPhase = treatments[`temGam`]"
    />
    <RiskTutorial
      v-if="currentPhase === `rskTut`"
      @end="currentPhase = `rskGam`"
    />
    <RiskGame
      :payOffs="rskPayOffs"
      :lastTreatment="treatments[`rskGam`] === `son`"
      v-if="currentPhase === `rskGam`"
      @end="currentPhase = treatments[`rskGam`]"
    />
    <DemographicQuestions v-if="currentPhase === `dem`"/>
    <GSPQuestionsVue v-if="currentPhase === `gsp`"/>
    <SonucEkrani
      v-if="currentPhase === `son`"
      @end="endOfExperiment = true"
    />
  </div>

  <footer
    v-if="(endOfExperiment === true || currentPhase === `intro`)"
  >
    <a href="https://github.com/emrergin" target="_blank">Emre Ergin</a>
    tarafından yapılmıştır.
  </footer>
</template>

<script>
import IntroScreen from "./components/IntroScreen.vue";
import PrudenceTutorial from "./components/PrudenceTutorial.vue";
import PrudenceGame from "./components/PrudenceGamev2.vue";
import TemperanceTutorial from "./components/TemperanceTutorial.vue";
import TemperanceGame from "./components/TemperanceGamev2.vue";
import RiskGame from "./components/RiskGamev2.vue";
import RiskTutorial from "./components/RiskTutorial.vue";
import SonucEkrani from "./components/SonucEkrani.vue";
import DemographicQuestions from "./components/DemographicQuestions.vue";
import GSPQuestionsVue from "./components/GSPQuestions.vue";
import { store } from "./store.js";

export default {
  name: "App",
  components: {
    IntroScreen,
    PrudenceGame,
    PrudenceTutorial,
    TemperanceGame,
    TemperanceTutorial,
    RiskGame,
    RiskTutorial,
    SonucEkrani,
    DemographicQuestions,
    GSPQuestionsVue
  },
  data() {
    return {
      currentPhase: `gsp`,
      mode: `notDemo`,
      store,
      endOfExperiment: false,
      treatments: null,
      // isTurkish: false,
      pruPayOffs: [
        [4, 11, 3, -3],
        [3, 9, 2, -2],
        [5, 8, 4, -4],
        [5, 10, 3, -3],
        [3, 8, 1, -1],
        [5, 9, 4, -4],
        [6, 12, 5, -5],
        [6, 10, 5, -5],
        [5, 10, 4, -4],
        [4, 6, 3, -3],
        [2, 6, 1, -1],
        [3, 6, 2, -2],
      ],
      rskPayOffs: [
        [8, 9, 1, 16],
        [7, 9, 2, 14],
        [9, 11, 4, 16],
        [7, 9, 3, 13],
        [4, 5, 1, 8],
        [5, 7, 2, 10],
        [6, 7, 3, 10],
        [7, 9, 4, 12],
        [6, 8, 3, 11],
        [8, 9, 5, 12],
        [8, 9, 3, 14],
        [6, 7, 1, 12],
      ],
      temPayOffs: [
        [7, 7, 2, -2, 4, -4],
        [7, 7, 3, -3, 3, -3],
        [5, 5, 1, -1, 2, -2],
        [5, 5, 1, -1, 3, -3],
        [8, 8, 2, -2, 3, -3],
        [9, 9, 2, -2, 6, -6],
        [8, 8, 3, -3, 4, -4],
        [8, 8, 2, -2, 5, -5],
        [10, 10, 3, -3, 6, -6],
        [10, 10, 4, -4, 5, -5],
        [8, 8, 1, -1, 6, -6],
        [5, 5, 2 - 2, 2, -2],
      ],
      nextTreatment: [
        {
          intro: `rskTut`,
          rskGam: `pruTut`,
          pruGam: `temTut`,
          temGam: `son`,
        },
        {
          intro: `rskTut`,
          rskGam: `temTut`,
          temGam: `pruTut`,
          pruGam: `son`,
        },
      ],
    };
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
    this.treatments =
      this.nextTreatment[Math.floor(Math.random() * this.nextTreatment.length)];
    for (let row of this.pruPayOffs) {
      if (Math.floor(Math.random() * 2)) {
        let geciciPar = row[0];
        row[0] = row[1];
        row[1] = geciciPar;
      }
    }
    for (let row of this.rskPayOffs) {
      if (Math.floor(Math.random() * 2)) {
        let geciciPar1 = row[0];
        let geciciPar2 = row[1];
        row[0] = row[2];
        row[1] = row[3];
        row[2] = geciciPar1;
        row[3] = geciciPar2;
      }
    }
    for (let row of this.temPayOffs) {
      if (Math.floor(Math.random() * 2)) {
        let geciciPar1 = row[2];
        let geciciPar2 = row[3];
        row[2] = row[4];
        row[3] = row[5];
        row[4] = geciciPar1;
        row[5] = geciciPar2;
      }
    }
    function shuffle(array) {
      let resArray = array;
      for (let i = resArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [resArray[i], resArray[j]] = [resArray[j], resArray[i]];
      }
      return resArray;
    }
    this.pruPayOffs = shuffle(this.pruPayOffs);
    this.rskPayOffs = shuffle(this.rskPayOffs);
    this.temPayOffs = shuffle(this.temPayOffs);
    // console.log(this.pruPayOffs, this.rskPayOffs, this.temPayOffs);

    // if (navigator.language === `tr-TR`) {
    //   this.isTurkish = true;
    // }
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.preventNav);
  },
  methods: {
    preventNav(event) {
      if (store.isim && !this.endOfExperiment) {
        event.preventDefault();
        event.returnValue = "";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  min-height: calc(100vh - 6px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
}

footer {
  width: 100%;
  text-align: right;
  font-weight: 800;
  padding: 20px;
  background-color: turquoise;
  margin-top: auto;
}

#mainWrapper{
  background-color: #ffffff;
}

#mobileWarning {
  font-size: 1.5rem;
  padding-block: 10rem;
  display: none;
}


@media (max-width: 1200px) {
  #mobileWarning {
    display: block;
  }
  #mainWrapper {
    display: none;
  }
}

</style>