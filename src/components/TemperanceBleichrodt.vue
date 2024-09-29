<script setup>
import TemperanceChoice from "./subcomponents/TemperanceChoice.vue";
import ScoreTable from "./ScoreTable.vue";
import nextTurn2 from "../functions/nextTurn2.js";
import { store } from "../store.js";
import { ref } from "vue";

const props = defineProps({
  payOffs: undefined,
  lastTreatment: {
    type: Boolean,
    default: false,
  },
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
    totalRounds,
    currentRound.value === roundToPay,
    earningForCurrentRound,
    currentRound === -1
  );

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

  const currentPayOffs = props.payOffs[currentRound.value];
  if (secim === 1) {
    // temperate case
    if (chosenBall1.value < 50) {
      earningForCurrentRound.value += currentPayOffs[0];
      if (chosenBall2.value < 50) {
        earningForCurrentRound.value += currentPayOffs[2];
      } else {
        earningForCurrentRound.value += currentPayOffs[3];
      }
    } else {
      earningForCurrentRound.value += currentPayOffs[1];
      if (chosenBall3.value < 50) {
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
      if (chosenBall2.value < 50) {
        earningForCurrentRound.value += currentPayOffs[2];
      } else {
        earningForCurrentRound.value += currentPayOffs[3];
      }
      if (chosenBall3.value < 50) {
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
          @click="() => setSelection(1)"
          :class="{ active: secim === 1 }"
        >
          <div class="title">Seçenek A</div>
          <TemperanceChoice
            color1="#0000fe"
            color2="#fec800"
            color3="#e74c3c"
            color4="#2ecc71"
            color5="#A020F0"
            color6="#ffA500"
            :payOff1="
              currentRound !== -1 ? payOffs[currentRound][0] : practiceValues[0]
            "
            :payOff2="
              currentRound !== -1 ? payOffs[currentRound][1] : practiceValues[1]
            "
            :payOff3="
              currentRound !== -1 ? payOffs[currentRound][2] : practiceValues[2]
            "
            :payOff4="
              currentRound !== -1 ? payOffs[currentRound][3] : practiceValues[3]
            "
            :payOff5="
              currentRound !== -1 ? payOffs[currentRound][4] : practiceValues[4]
            "
            :payOff6="
              currentRound !== -1 ? payOffs[currentRound][5] : practiceValues[5]
            "
            :chosenBall1="secim === 1 ? chosenBall1 : -1"
            :chosenBall2="secim === 1 ? chosenBall2 : -1"
            :chosenBall3="secim === 1 ? chosenBall3 : -1"
            :temperate="true"
          />
        </div>
        <div
          class="choice"
          @click="() => setSelection(2)"
          :class="{ active: secim === 2 }"
        >
          <div class="title">Seçenek B</div>
          <TemperanceChoice
            color1="#0000fe"
            color2="#fec800"
            color3="#e74c3c"
            color4="#2ecc71"
            color5="#A020F0"
            color6="#ffA500"
            :payOff1="
              currentRound !== -1 ? payOffs[currentRound][0] : practiceValues[0]
            "
            :payOff2="
              currentRound !== -1 ? payOffs[currentRound][1] : practiceValues[1]
            "
            :payOff3="
              currentRound !== -1 ? payOffs[currentRound][2] : practiceValues[2]
            "
            :payOff4="
              currentRound !== -1 ? payOffs[currentRound][3] : practiceValues[3]
            "
            :payOff5="
              currentRound !== -1 ? payOffs[currentRound][4] : practiceValues[4]
            "
            :payOff6="
              currentRound !== -1 ? payOffs[currentRound][5] : practiceValues[5]
            "
            :chosenBall1="secim === 2 ? chosenBall1 : -1"
            :chosenBall2="secim === 2 ? chosenBall2 : -1"
            :chosenBall3="secim === 2 ? chosenBall3 : -1"
            :temperate="false"
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
