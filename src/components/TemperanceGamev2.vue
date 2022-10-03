<template>
  <div class="oyunKutusu" v-if="!oyunSonu">
    <ScoreTable
      :currentGame="lastTreatment? 3:2"
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
          clickReminder:
            choices.filter((a) => a).length === 2 &&
            currentRound === 0 &&
            asama === `baslangic`,
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
      <div class="bigInputs">
        <div
          class="droppable2"
          id="i0"
          :class="{ nottoseen: choices[0] || asama !== `baslangic` }"
        >
          A
        </div>
        <div
          class="droppable2"
          id="i1"
          :class="{ nottoseen: choices[1] || asama !== `baslangic` }"
        >
          B
        </div>
      </div>
      <div class="bigInputs">
        <div
          class="droppable2"
          id="i2"
          :class="{
            nottoseen: !choices[0] || choices[2] || asama !== `baslangic`,
          }"
        >
          C
        </div>
        <div
          class="droppable2"
          id="i3"
          :class="{
            nottoseen: !choices[1] || choices[3] || asama !== `baslangic`,
          }"
        >
          D
        </div>
      </div>
      <div id="smallPipelar" v-if="asama !== `roundsonu`">
        <div
          id="smallPipe1"
          class="temperancePipe"
          oncontextmenu="return false"
          @mousedown.left="carryPipeE($event)"
          ondragstart="return false"
        >
          <div id="smallTags1">
            <div id="leftSmallTag1" class="kucukEtiket tag soletiket">
              {{ convertNumbertoString(payOffs[currentRound][2]) }}
            </div>
            <div id="rightSmallTag1" class="kucukEtiket tag sagetiket">
              {{ convertNumbertoString(payOffs[currentRound][3]) }}
            </div>
          </div>
          <img
            src="../assets/smallpipe2.svg"
            class="draggable"
            oncontextmenu="return false"
          />
        </div>
        <div
          id="smallPipe2"
          class="temperancePipe"
          oncontextmenu="return false"
          @mousedown.left="carryPipeE($event)"
          ondragstart="return false"
        >
          <div id="smallTags2">
            <div id="leftSmallTag2" class="kucukEtiket tag soletiket">
              {{ convertNumbertoString(payOffs[currentRound][4]) }}
            </div>
            <div id="rightSmallTag2" class="kucukEtiket tag sagetiket">
              {{ convertNumbertoString(payOffs[currentRound][5]) }}
            </div>
          </div>
          <img
            src="../assets/smallpipe2.svg"
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
    <!-- <p>Oyunu tamamladınız. Toplam kazancınız: {{ totalRevenue - totalLoss }}</p> -->
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
store.chosenRounds.push(roundToPay+1);

const currentDroppable = ref(null);
const choices = ref([null, null, null, null]);
const asama = ref(`baslangic`);
const baslangic = ref(new Date());
const bitis = ref(null);
const totalRevenue = ref(0);
const totalLoss = ref(0);
const earningForCurrentRound = ref(0);

const currentRound = ref(0);
const oyunSonu = ref(false);

function carryPipeE(e) {
  carryPipe(
    e,
    `droppable2`,
    asama.value,
    `temperancePipe`,
    currentDroppable,
    choices
  );
}

function hareketE(e) {
  movement(e, asama, bitis, choices, totalRevenue, totalLoss, store, currentRound.value===roundToPay,earningForCurrentRound);
}

function nextTurnE() {
  nextTurn(
    `Temperance`,
    store,
    bitis,
    baslangic,
    asama,
    props.payOffs,
    currentRound,
    choices,
    `temperancePipe`,
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
.bigInputs {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 105px;
  min-height: 167.5px;
}

#smallPipelar {
  display: flex;
  justify-content: space-evenly;
  gap: 64px;
  min-height: 167.5px;
}

.temperancePipe {
  height: 167.5px;
}

.droppable2 {
  padding-top: 12px;
  padding-bottom: 12px;
  width: 197px;
  height: 167.5px;
  font-size: 3em;
  font-weight: bold;
  border: 2px dashed turquoise;
  align-items: center;
  justify-content: center;
  display: flex;
}

.nottoseen {
  visibility: hidden;
}
</style>

<style scoped>
.oyunKutusu {
  min-height: 700px;
}
</style>
