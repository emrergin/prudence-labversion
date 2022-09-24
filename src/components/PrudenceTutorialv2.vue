<template>
    <div class="oyunKutusu">
      <div id="oyunAsagi">
        <img
          id="footBall"
          ref="footBall"
          src="../assets/soccer_ball.svg"
          oncontextmenu="return false"
          @click="hareketE($event)"
        />
                  <!-- 
          :class="{
            clickReminder: secim && currentRound === 0 && asama === `baslangic`,
          }" -->
        <div id="buyukBoru">
          <div id="largeTags">
            <div id="leftLargeTag" class="buyukEtiket etiket soletiket">
              +7
            </div>
            <div id="rightLargeTag" class="buyukEtiket etiket sagetiket">
              +4
            </div>
          </div>
          <img src="../assets/buyukboru.svg" />
        </div>
        <div id="inputlar">
          <div
            class="droppable"
            id="i1"
            
          >
          <!-- :style="{ visibility: !secim ? `visible` : `hidden` }" -->
            A
          </div>
          <div
            class="droppable"
            id="i2"
            
          >
          <!-- :style="{ visibility: !secim ? `visible` : `hidden` }" -->
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
            data-intro="Bu oyunda bu boruyu"
          >
            <div id="smallTags">
              <div id="solKucukEtiket" class="kucukEtiket etiket soletiket">
                +2
              </div>
              <div id="sagKucukEtiket" class="kucukEtiket etiket sagetiket">
                -2
              </div>
            </div>
            <img
              src="../assets/kucukboru.svg"
              class="draggable"
              oncontextmenu="return false"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import carryPipe from "../functions/carryPipe";
  import hareket from "../functions/hareket";
  import { defineEmits as defineEmits } from "@vue/runtime-dom";
  // import {introJs} from "intro.js";

  // introJs().start();
  
  defineEmits(["end"]);
  
  const currentDroppable = ref(null);
  const secim = ref(null);
  const asama = ref(`baslangic`);
  const baslangic = ref(new Date());
  const bitis = ref(null);
  
  const oyunSonu = ref(false);
  
  function carryPipeE(e) {
    carryPipe(e, `droppable`, asama.value, `smallPipe`, currentDroppable, secim);
  }
  
  function hareketE(e) {
    movement(e, asama, bitis, secim, totalRevenue, totalLoss, store, currentRound.value===roundToPay,earningForCurrentRound);
  }
  
  function siradakiTurE() {
    siradakiTur(
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
  
  </script> -->
  
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
  
  .buyukEtiket {
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
  