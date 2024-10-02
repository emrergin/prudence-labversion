<template>
  <div id="mobileWarning">
    <div>Daha geniş bir ekrana ihtiyacınız var.</div>
  </div>
  <div id="mainWrapper">
    <IntroScreen
      v-if="currentPhase === `intro`"
      @end="currentPhase = treatments[`intro`]"
    />
    <Tutorial2
      v-if="currentPhase === `tut2`"
      @end="currentPhase = `rskGam`"
      experiment="traut"
    />

    <RiskTutorial
      v-if="currentPhase === `rskTut`"
      @end="currentPhase = `rskGam`"
    />
    <RiskRounds
      :experiment="experiment"
      v-if="currentPhase === `rskGam`"
      @end="currentPhase = treatments[`rskGam`]"
    />

    <PrudenceTutorial
      v-if="currentPhase === `pruTut`"
      @end="currentPhase = `pruGam`"
    />
    <PrudenceRounds
      :experiment="experiment"
      v-if="currentPhase === `pruGam`"
      @end="currentPhase = treatments[`pruGam`]"
    />

    <TemperanceRounds
      :experiment="experiment"
      v-if="currentPhase === `temGam`"
      @end="currentPhase = treatments[`temGam`]"
    />

    <TemperanceTutorial
      v-if="currentPhase === `temTut`"
      @end="currentPhase = `temGam`"
    />

    <DemographicQuestions
      v-if="currentPhase === `dem`"
      @end="currentPhase = 'gps'"
    />
    <GPSQuestions v-if="currentPhase === `gps`" @end="currentPhase = 'son'" />
    <ResultScreen v-if="currentPhase === `son`" @end="endOfExperiment = true" />
  </div>

  <footer v-if="endOfExperiment === true || currentPhase === `intro`">
    <a href="https://github.com/emrergin" target="_blank">Emre Ergin</a>
    tarafından yapılmıştır.
  </footer>
</template>

<script>
import IntroScreen from "./components/IntroScreen.vue";
import PrudenceTutorial from "./components/our_experiment/PrudenceTutorial.vue";
import TemperanceTutorial from "./components/our_experiment/TemperanceTutorial.vue";
import RiskTutorial from "./components/our_experiment/RiskTutorial.vue";
import ResultScreen from "./components/ResultScreen.vue";
import DemographicQuestions from "./components/DemographicQuestions.vue";
import GPSQuestions from "./components/GPSQuestions.vue";
import Tutorial2 from "./components/Tutorial2.vue";
import RiskRounds from "./components/RiskRounds.vue";
import PrudenceRounds from "./components/PrudenceRounds.vue";
import TemperanceRounds from "./components/TemperanceRounds.vue";
import { store } from "./store.js";

export default {
  name: "App",
  components: {
    IntroScreen,
    PrudenceTutorial,
    TemperanceTutorial,
    RiskTutorial,
    ResultScreen,
    DemographicQuestions,
    GPSQuestions,
    Tutorial2,
    RiskRounds,
    PrudenceRounds,
    TemperanceRounds,
  },
  data() {
    return {
      currentPhase: `intro`,
      store,
      endOfExperiment: false,
      treatments: null,

      nextTreatment: [
        {
          intro: `rskTut`,
          rskGam: `pruTut`,
          pruGam: `temTut`,
          temGam: `dem`,
        },
        {
          intro: `rskTut`,
          rskGam: `temTut`,
          temGam: `pruTut`,
          pruGam: `dem`,
        },
      ],
      nextTreatment2: [
        {
          intro: `tut2`,
          rskGam: `pruGam`,
          pruGam: `temGam`,
          temGam: `dem`,
        },
        {
          intro: `tut2`,
          rskGam: `temGam`,
          temGam: `pruGam`,
          pruGam: `dem`,
        },
        // {
        //   intro: `pruGam`,
        //   rskGam: `temGam`,
        //   temGam: `pruGam`,
        //   pruGam: `dem`,
        // },
      ],
      // traut || bleich || ours
      experiment: "bleich",
    };
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
    if (this.experiment !== "ours") {
      this.treatments =
        this.nextTreatment2[
          Math.floor(Math.random() * this.nextTreatment2.length)
        ];
    } else {
      this.treatments =
        this.nextTreatment[
          Math.floor(Math.random() * this.nextTreatment.length)
        ];
    }

    const url = window.location.href;
    if (url.endsWith("/fork/") || url.endsWith("/fork")) {
      this.experiment = "ours";
    }
    if (url.endsWith("/trautmann/") || url.endsWith("/trautmann")) {
      this.experiment = "traut";
    }
    if (url.endsWith("/bleichrodt/") || url.endsWith("/bleichrodt")) {
      this.experiment = "bleich";
    }
    console.log(location.href);
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
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 55px;
  left: 0px;
  text-align: right;
  font-weight: 800;
  padding: 20px;
  padding-bottom: 20px;
  padding-right: calc(50vw - 600px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: turquoise;
  margin-top: auto;
}

#mainWrapper {
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
