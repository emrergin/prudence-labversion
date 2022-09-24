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
      <div id="bigPipe">
        <div id="largeTags">
          <div id="leftLargeTag" class="largeTag tag soletiket">
            {{ convertNumbertoString(payOffs[currentRound][0]) }}
          </div>
          <div id="rightLargeTag" class="largeTag tag sagetiket">
            {{ convertNumbertoString(payOffs[currentRound][1]) }}
          </div>
        </div>
        <img src="../assets/bigpipe.svg" />
      </div>
      <div id="inputlar">
        <div
          class="droppable"
          id="i1"
          :style="{ visibility: !secim ? `visible` : `hidden` }"
        >
          A
        </div>
        <div
          class="droppable"
          id="i2"
          :style="{ visibility: !secim ? `visible` : `hidden` }"
        >
          B
        </div>
      </div>
      <div v-if="asama !== `roundsonu`">
        <div
          id="smallPipe"
          class="smallPipe"
          oncontextmenu="return false"
          @mousedown.left="carryPipeE($event)"
          ondragstart="return false"
        >
          <div id="smallTags">
            <div id="leftSmallTag" class="kucukEtiket tag soletiket">
              {{ convertNumbertoString(payOffs[currentRound][2]) }}
            </div>
            <div id="rightSmallTag" class="kucukEtiket tag sagetiket">
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
      <button
        class="stepButton"
        id="nextRound"
        v-if="asama === `roundsonu`"
        @click="nextTurnE()"
      >
        {{
          currentRound === totalRounds - 1 ? `Oyunu Bitir` : `Sıradaki Tur >>`
        }}
      </button>
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
  carryPipe(e, `droppable`, asama.value, `smallPipe`, currentDroppable, secim);
}

function hareketE(e) {
  movement(e, asama, bitis, secim, totalRevenue, totalLoss, store, currentRound.value===roundToPay,earningForCurrentRound);
}

function nextTurnE() {
  nextTurn(
    `Prudence`,
    store,
    bitis,
    baslangic,
    asama,
    props.payOffs,
    currentRound,
    secim,
    `smallPipe`,
    oyunSonu,
    totalRounds,
    earningForCurrentRound
  );
}

function convertNumbertoString(number) {
  if (number === 0) {
    return `${number}`;
  }
  return number > 0 ? `+` + number : `-` + Math.abs(number);
}
</script>

<style>
.oyunKutusu {  
  display: flex;
  flex-direction: column;
  margin: 0px;
  min-height: 433px;
}
#oyunAsagi {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

#largeTags {
  position: absolute;
  display: flex;
  gap: 200px;
  justify-content: space-evenly;
  width: 100%;
  /* top: 28px; */
}

.largeTag {
  border: 2px solid black;
  border-radius: 8px;
  padding: 2px;
}
#smallPipe,
#smallPipe1,
#smallPipe2,
#bigPipe {
  position: relative;
}

img {
  display: block;
}

#smallTags,
#smallTags1,
#smallTags2 {
  position: absolute;
  left: 30px;
  gap: 85px;
  display: flex;
  justify-content: space-between;
}

.kucukEtiket {
  border: 2px solid black;
  border-radius: 8px;
  padding: 2px;
  min-width: 3ch;
}

.approached {
  background-color: green;
  color: #f8f8f8;
}

#inputlar {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 105px;
}

.draggable {
  cursor: grab;
}

.droppable {
  padding-top: 12px;
  padding-bottom: 12px;
  width: 197px;
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  border: 2px dashed turquoise;
}

#footBall {
  cursor: pointer;
}

#fakeBall {
  z-index: 4;
}

.stepButton {
  padding: 5px;
  font-size: 1.5em;
  margin: 60px auto 20px auto;
}
</style>
