<template>
  <div class="oyunKutusu" v-if="!endOfGame">
    <ScoreTable
      :currentGame="1"
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
          <RiskChoice
            color1="#0000fe"
            color2="#fec800"
            :payOff1="sessionValues[currentRound + 1][0]"
            :payOff2="sessionValues[currentRound + 1][1]"
            :chosenBall="secim === 1 ? chosenBall : -1"
          />
        </div>
        <div
          class="choice"
          @click="() => setSelection(2)"
          :class="{ active: secim === 2 }"
        >
          <div class="title">Seçenek B</div>
          <RiskChoice
            color1="#0000fe"
            color2="#fec800"
            :payOff1="sessionValues[currentRound + 1][2]"
            :payOff2="sessionValues[currentRound + 1][3]"
            :chosenBall="secim === 2 ? chosenBall : -1"
          />
        </div>
      </div>
    </div>
    <div id="gameBottom">
      <button
        v-if="secim !== null && chosenBall === -1"
        class="stepButton"
        @click="drawBall()"
      >
        Top çek!
      </button>
      <div v-show="chosenBall !== -1">
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

<script setup>
import RiskChoice from "./subcomponents/RiskChoice.vue";
import ScoreTable from "./ScoreTable.vue";
import nextTurn2 from "../functions/nextTurn2";
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
const chosenBall = ref(-1);
const practiceValues = [3, 17, 7, 13];
const sessionValues = [practiceValues, ...props.payOffs];

const earningForCurrentRound = ref(0);

const endOfGame = ref(false);

defineEmits(["end"]);
const totalRounds = props.payOffs.length;
const roundToPay = Math.floor(Math.random() * totalRounds);
store.chosenRounds.push(roundToPay + 1);

function nextTurnE() {
  nextTurn2(
    `Risk`,
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

  chosenBall.value = -1;
}

function drawBall() {
  if (chosenBall.value !== -1) {
    return;
  }
  asama.value = "cekilis";
  endTime.value = new Date();
  chosenBall.value = Math.floor(Math.random() * 100);
  const currentPayOffs = sessionValues[currentRound.value + 1];
  if (secim.value === 1) {
    if (chosenBall.value < 50) {
      earningForCurrentRound.value = currentPayOffs[0];
    } else {
      earningForCurrentRound.value = currentPayOffs[1];
    }
  } else {
    if (chosenBall.value < 50) {
      earningForCurrentRound.value = currentPayOffs[2];
    } else {
      earningForCurrentRound.value = currentPayOffs[3];
    }
  }
}

function setSelection(a) {
  if (asama.value === "baslangic") {
    secim.value = a;
  }
}
</script>

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

<style>
.question p {
  margin-inline: 5ch;
  max-width: 1000px;
}
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2ch;
}
</style>
