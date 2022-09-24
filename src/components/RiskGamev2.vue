<template>
  <div class="oyunKutusu" v-if="!oyunSonu">
    <ScoreTable
      :totalRevenue="totalRevenue"
      :totalLoss="totalLoss"
      :totalRounds="totalRounds"
      :currentRound="currentRound"
    />
    <div id="oyunAsagi">
      <img
        id="footBall"
        ref="footBall"
        src="../assets/soccer_ball.svg"
        oncontextmenu="return false"
        @click="hareketE($event)"
        :class="{
          clickReminder: secim && currentRound === 0 && asama === `baslangic`,
        }"
      />
      <img id="girisBoru" src="../assets/smallpipe3.svg" />
      <div id="inputlar">
        <div
          class="droppable"
          id="i1"
          :style="{ visibility: !secim ? `visible` : `hidden` }"
        >
          A
        </div>
      </div>
      <div id="smallPipelar" v-if="asama !== `roundsonu`">
        <div
          id="smallPipe1"
          class="riskPipe"
          oncontextmenu="return false"
          @mousedown.left="carryPipeE($event)"
          ondragstart="return false"
          :style="{
            visibility: secim === `2` ? `hidden` : `visible`,
          }"
        >
          <div id="smallTags1">
            <div id="leftSmallTag1" class="kucukEtiket tag soletiket">
              {{ convertNumbertoString(payOffs[currentRound][0]) }}
            </div>
            <div id="rightSmallTag1" class="kucukEtiket tag sagetiket">
              {{ convertNumbertoString(payOffs[currentRound][1]) }}
            </div>
          </div>
          <img
            src="../assets/smallpipe.svg"
            class="draggable"
            oncontextmenu="return false"
          />
        </div>
        <div
          id="smallPipe2"
          class="riskPipe"
          oncontextmenu="return false"
          @mousedown.left="carryPipeE($event)"
          ondragstart="return false"
          :style="{
            visibility: secim === `1` ? `hidden` : `visible`,
          }"
        >
          <div id="smallTags2">
            <div id="leftSmallTag2" class="kucukEtiket tag soletiket">
              {{ convertNumbertoString(payOffs[currentRound][2]) }}
            </div>
            <div id="rightSmallTag2" class="kucukEtiket tag sagetiket">
              {{ convertNumbertoString(payOffs[currentRound][3]) }}
            </div>
          </div>
          <img
            src="../assets/smallpipe.svg"
            class="draggable"
            oncontextmenu="return false"
          />
        </div>
      </div>
      <div v-if="asama === `roundsonu`">
        <button
          class="stepButton"
          id="nextRound"
          @click="nextTurnE()"
        >
          {{
            currentRound === totalRounds - 1 ? `Oyunu Bitir` : `Sıradaki Tur >>`
          }}
        </button>
      </div>
    </div>
  </div>
  <div v-if="oyunSonu" class="oyunKutusu">
    <p>Oyunu tamamladınız. Toplam kazancınız: {{ totalRevenue - totalLoss }}</p>
    <button @click="$emit('end', true)" class="stepButton">
      <span v-if="lastTreatment">Anketlere Geç</span>
      <span v-else>Diğer Oyuna Geç!</span>
    </button>
  </div>
</template>

<script setup>
import ScoreTable from "./ScoreTable.vue";
import { store } from "../store.js";
import { ref } from "vue";
import carryPipe from "../functions/carryPipe";
import movement from "../functions/movement";
import nextTurn from "../functions/nextTurn";
import { defineEmits as defineEmits } from "@vue/runtime-dom";

defineEmits(["end"]);
const props = defineProps({
  payOffs: undefined,
  lastTreatment: {
    type: Boolean,
    default: false,
  },
});
// eslint-disable-next-line
const totalRounds = props.payOffs.length;

const roundToPay = Math.floor(Math.random() * totalRounds);

const currentDroppable = ref(null);
const secim = ref(null);
const asama = ref(`baslangic`);
const baslangic = ref(new Date());
const bitis = ref(null);
const totalRevenue = ref(0);
const totalLoss = ref(0);
const earningForCurrentRound = ref(0);

const currentRound = ref(0);
const oyunSonu = ref(false);

function carryPipeE(e) {
  carryPipe(e, `droppable`, asama.value, `riskPipe`, currentDroppable, secim);
}

function hareketE(e) {
  movement(e, asama, bitis, secim, totalRevenue, totalLoss, store, currentRound.value===roundToPay,earningForCurrentRound);
}

function nextTurnE() {
  nextTurn(
    `Risk`,
    store,
    bitis,
    baslangic,
    asama,
    props.payOffs,
    currentRound,
    secim,
    `riskPipe`,
    oyunSonu,
    totalRounds,
    earningForCurrentRound
  );
}

function convertNumbertoString(number) {
  if (number === 0) {
    return ` ` + number;
  }
  return number > 0 ? `+` + number : `-` + Math.abs(number);
}
</script>

<style scoped>
#smallPipelar {
  align-items: center;
}
</style>

<style>
.clickReminder {
  filter: drop-shadow(0 0 0.5rem turquoise);
  border: 2px solid turquoise;
  border-radius: 50%;
  margin: -2px;
}
</style>
