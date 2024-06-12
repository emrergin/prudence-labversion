<template>
  <div class="oyunKutusu" v-if="!oyunSonu">
    <ScoreTable
      :currentGame="1"
      :totalRounds="totalRounds"
      :currentRound="currentRound"
    />
    <div class="question">
      <p>Lütfen sağdaki ya da soldaki seçeneklerden birisini seçin.</p>
      <div class="choices">
        <div class="choice" @click="secim = 1" :class="{ active: secim === 1 }">
          <div class="title">Seçenek A</div>
          <RiskChoice
            color1="#0000fe"
            color2="#fec800"
            :numberOf1="50"
            :payOff1="payOffs[currentRound][0]"
            :payOff2="payOffs[currentRound][1]"
            :chosenBall="secim === 1 ? chosenBall : -1"
          />
        </div>
        <div class="choice" @click="secim = 2" :class="{ active: secim === 2 }">
          <div class="title">Seçenek B</div>
          <RiskChoice
            color1="#0000fe"
            color2="#fec800"
            :numberOf1="50"
            :payOff1="payOffs[currentRound][2]"
            :payOff2="payOffs[currentRound][3]"
            :chosenBall="secim === 2 ? chosenBall : -1"
          />
        </div>
      </div>
    </div>
    <div id="oyunAsagi">
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
  <div v-if="oyunSonu" class="oyunKutusu">
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
const currentRound = ref(0);
const secim = ref(null);
const baslangic = ref(new Date());
const bitis = ref(null);
const chosenBall = ref(-1);

const earningForCurrentRound = ref(0);

const oyunSonu = ref(false);

defineEmits(["end"]);
const totalRounds = props.payOffs.length;

function nextTurnE() {
  nextTurn2(
    `Risk`,
    store,
    bitis,
    baslangic,
    asama,
    props.payOffs,
    currentRound,
    secim,
    oyunSonu,
    totalRounds,
    earningForCurrentRound
  );

  secim.value = null;
  chosenBall.value = -1;
}

function drawBall() {
  if (chosenBall.value !== -1) {
    return;
  }
  asama.value = "cekilis";
  bitis.value = new Date();
  chosenBall.value = Math.floor(Math.random() * 100);
  const currentPayOffs = props.payOffs[currentRound.value];
  if (secim === 1) {
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

#oyunAsagi {
  min-height: 120px;
}
</style>
