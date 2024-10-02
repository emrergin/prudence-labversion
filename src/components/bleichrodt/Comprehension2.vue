<template>
  <div class="comprehension-question">
    <PrudenceChoice
      color1="#0000fe"
      color2="#fec800"
      color3="#e74c3c"
      color4="#2ecc71"
      :numberOf1="50"
      :payOff1="3"
      :payOff2="8"
      :payOff3="1"
      :payOff4="-1"
      :chosenBall1="-1"
      :chosenBall2="-1"
    />
    <ComprehensionQuestion
      :options="options"
      :explanations="explanations"
      :correct="correct"
      @correctanswer="() => emit('correct')"
    />
  </div>
</template>

<script setup>
import ComprehensionQuestion from "./ComprehensionQuestion.vue";
import PrudenceChoice from "./PrudenceChoice.vue";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
const emit = defineEmits(["correct"]);

const options = [
  "100 topun 50'si mavi. Eğer bir mavi top çekersem hiçbir şey kazanmayacağım.",
  "Eğer sarı bir top çekersem bir başka top daha çekmeliyim. Eğer bu top yeşilse, toplam 7 puan kazanırım.",
  "Eğer sarı bir top çekersem bir başka top daha çekmeliyim. Eğer bu top kırmızıysa, toplam 1 puan kazanırım.",
  "Eğer mavi bir top çekersem, bir başka top daha çekmeliyim. Bu diğer top kırmızıysa, toplam 4 puan kazanırım.",
];

const correct = 2;

const explanations = [
  "Mavi bir top çektiğinizde, 3 puan kazanırsınız.",
  "",
  "Her iki çekilişten kazanacağınız puanların toplamını, yani 9 puan alırsınız.",
  "Mavi bir top çektiğinizde başka bir top çekmezsiniz.",
];
</script>

<style>
.comprehension-question {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 2em;
  align-items: center;
}
</style>
