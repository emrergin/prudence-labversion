<script setup>
import TemperanceChoice from "./bleichrodt/TemperanceChoice.vue";
import ScoreTable from "./ScoreTable.vue";
import nextTurn2 from "../functions/nextTurn2.js";
import { store } from "../store.js";
import { ref, computed } from "vue";
import TemperanceChoiceTrautmann from "./trautmann/TemperanceChoiceTrautmann.vue";

const props = defineProps({
  payOffs: undefined,
  lastTreatment: {
    type: Boolean,
    default: false,
  },
  experiment: String,
});

const asama = ref(`baslangic`);
const currentRound = ref(-1);
const secim = ref(null);
const startTime = ref(new Date());
const endTime = ref(null);
const chosenBall1 = ref(-1);
const chosenBall2 = ref(-1);
const chosenBall3 = ref(-1);
const practiceValues = [13, 13, 2, -2, 7, -7];
const sessionValues = [practiceValues, ...props.payOffs];
//true if temperate choice is the left choice
const isLeft = ref(Math.random() > 0.5);
const isTemperateChosen = computed(() => {
  return secim.value === (isLeft.value ? 1 : 2);
});

const earningForCurrentRound = ref(0);

const endOfGame = ref(false);

defineEmits(["end"]);
const totalRounds = props.payOffs.length;
const roundToPay = Math.floor(Math.random() * totalRounds);
store.chosenRounds.push(roundToPay + 1);

function nextTurnE() {
  nextTurn2(
    `Temperance`,
    store,
    endTime,
    startTime,
    asama,
    props.payOffs,
    currentRound,
    secim,
    endOfGame,
    currentRound.value === roundToPay,
    earningForCurrentRound,
    currentRound.value === -1
  );
  isLeft.value = Math.random() > 0.5;

  chosenBall1.value = -1;
  chosenBall2.value = -1;
  chosenBall3.value = -1;
}

function drawBall() {
  if (chosenBall1.value !== -1) {
    return;
  }
  asama.value = "cekilis";
  endTime.value = new Date();
  chosenBall1.value = Math.floor(Math.random() * 100);
  chosenBall2.value = Math.floor(Math.random() * 100);
  chosenBall3.value = Math.floor(Math.random() * 100);

  const currentPayOffs = sessionValues[currentRound.value + 1];

  if (secim.value === 1) {
    // temperate case
    if (chosenBall1.value < 50) {
      earningForCurrentRound.value += currentPayOffs[0];
      if (
        (props.experiment === "bleich" && chosenBall2.value < 50) ||
        (props.experiment === "traut" && chosenBall3.value < 50)
      ) {
        earningForCurrentRound.value += currentPayOffs[2];
      } else {
        earningForCurrentRound.value += currentPayOffs[3];
      }
    } else {
      earningForCurrentRound.value += currentPayOffs[1];
      if (
        (props.experiment === "bleich" && chosenBall3.value < 50) ||
        (props.experiment === "traut" && chosenBall2.value < 50)
      ) {
        earningForCurrentRound.value += currentPayOffs[4];
      } else {
        earningForCurrentRound.value += currentPayOffs[5];
      }
    }
  } else {
    // intemperate case
    if (chosenBall1.value < 50) {
      earningForCurrentRound.value += currentPayOffs[0];
    } else {
      earningForCurrentRound.value += currentPayOffs[1];
      if (
        (props.experiment === "bleich" && chosenBall2.value < 50) ||
        (props.experiment === "traut" && chosenBall3.value < 50)
      ) {
        earningForCurrentRound.value += currentPayOffs[2];
      } else {
        earningForCurrentRound.value += currentPayOffs[3];
      }
      if (
        (props.experiment === "bleich" && chosenBall3.value < 50) ||
        (props.experiment === "traut" && chosenBall2.value < 50)
      ) {
        earningForCurrentRound.value += currentPayOffs[4];
      } else {
        earningForCurrentRound.value += currentPayOffs[5];
      }
    }
  }
}

function setSelection(a) {
  if (asama.value === "baslangic") {
    secim.value = a;
  }
}
</script>

<template>
  <div class="oyunKutusu" v-if="!endOfGame">
    <ScoreTable
      :currentGame="lastTreatment ? 3 : 2"
      :totalRounds="totalRounds"
      :currentRound="currentRound"
      v-if="currentRound !== -1"
    />
    <div class="question">
      <p v-if="currentRound !== -1">
        Lütfen sağdaki ya da soldaki seçeneklerden birisini seçin.
      </p>
      <p v-else>
        <b>Deneme Turu:</b> Gerçek deney turlarından önce, bir deneme sorusuyla
        başlayalım. Lütfen tercih ettiğiniz seçeneğe tıklayın. Diğer seçeneğe
        tıklayarak seçiminizi değiştirebilirsiniz. Parasal ödül için rastgele
        seçeceğimiz tur bu olmayacak.
      </p>
      <div class="choices">
        <div
          class="choice"
          @click="() => setSelection(isLeft ? 1 : 2)"
          :class="{ active: isTemperateChosen }"
        >
          <div class="title">Seçenek A</div>
          <TemperanceChoice
            :payOff1="sessionValues[currentRound + 1][0]"
            :payOff2="sessionValues[currentRound + 1][1]"
            :payOff3="sessionValues[currentRound + 1][2]"
            :payOff4="sessionValues[currentRound + 1][3]"
            :payOff5="sessionValues[currentRound + 1][4]"
            :payOff6="sessionValues[currentRound + 1][5]"
            :chosenBall1="isTemperateChosen ? chosenBall1 : -1"
            :chosenBall2="isTemperateChosen ? chosenBall2 : -1"
            :chosenBall3="isTemperateChosen ? chosenBall3 : -1"
            :temperate="isLeft"
            v-if="experiment === `bleich`"
          />
          <TemperanceChoiceTrautmann
            :payOff1="sessionValues[currentRound + 1][0]"
            :payOff2="sessionValues[currentRound + 1][1]"
            :payOff3="sessionValues[currentRound + 1][2]"
            :payOff4="sessionValues[currentRound + 1][3]"
            :payOff5="sessionValues[currentRound + 1][4]"
            :payOff6="sessionValues[currentRound + 1][5]"
            :chosenNumber1="isTemperateChosen ? chosenBall1 : -1"
            :chosenNumber2="isTemperateChosen ? chosenBall2 : -1"
            :chosenNumber3="isTemperateChosen ? chosenBall3 : -1"
            :temperate="isLeft"
            v-else
          />
        </div>
        <div
          class="choice"
          @click="() => setSelection(isLeft ? 2 : 1)"
          :class="{ active: secim && !isTemperateChosen }"
          style=""
        >
          <div class="title">Seçenek B</div>
          <TemperanceChoice
            :payOff1="sessionValues[currentRound + 1][0]"
            :payOff2="sessionValues[currentRound + 1][1]"
            :payOff3="sessionValues[currentRound + 1][2]"
            :payOff4="sessionValues[currentRound + 1][3]"
            :payOff5="sessionValues[currentRound + 1][4]"
            :payOff6="sessionValues[currentRound + 1][5]"
            :chosenBall1="!isTemperateChosen ? chosenBall1 : -1"
            :chosenBall2="!isTemperateChosen ? chosenBall2 : -1"
            :chosenBall3="!isTemperateChosen ? chosenBall3 : -1"
            :temperate="!isLeft"
            v-if="experiment === `bleich`"
          />
          <TemperanceChoiceTrautmann
            :payOff1="sessionValues[currentRound + 1][0]"
            :payOff2="sessionValues[currentRound + 1][1]"
            :payOff3="sessionValues[currentRound + 1][2]"
            :payOff4="sessionValues[currentRound + 1][3]"
            :payOff5="sessionValues[currentRound + 1][4]"
            :payOff6="sessionValues[currentRound + 1][5]"
            :chosenNumber1="!isTemperateChosen ? chosenBall1 : -1"
            :chosenNumber2="!isTemperateChosen ? chosenBall2 : -1"
            :chosenNumber3="!isTemperateChosen ? chosenBall3 : -1"
            :temperate="!isLeft"
            v-else
          />
        </div>
      </div>
    </div>
    <div id="gameBottom">
      <button
        v-if="secim !== null && chosenBall1 === -1"
        class="stepButton"
        @click="drawBall()"
      >
        Top çek!
      </button>
      <div v-show="chosenBall1 !== -1">
        <button class="stepButton" id="nextRound" @click="nextTurnE()">
          {{
            currentRound === totalRounds - 1 ? `Oyunu Bitir` : `Sıradaki Tur >>`
          }}
        </button>
      </div>
    </div>
  </div>
  <div v-if="endOfGame" class="oyunKutusu">
    <button @click="$emit('end', true)" class="stepButton">
      <span v-if="lastTreatment">Anketlere Geç</span>
      <span v-else>Diğer Oyuna Geç!</span>
    </button>
  </div>
</template>

<style scoped>
.choices {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 100px;
}

.choice {
  border: 2px solid black;
  transition: outline 0.3s linear;
}

.choice.active {
  background-color: rgb(231, 254, 247);
}

.choice:hover {
  outline: 5px solid #3fdccd;
}

.title {
  border-bottom: 2px solid black;
}

#gameBottom {
  min-height: 120px;
}
</style>
