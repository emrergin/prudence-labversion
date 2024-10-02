<template>
  <div class="comprehension-question">
    <TemperanceChoice
      color1="#0000fe"
      color2="#fec800"
      color3="#e74c3c"
      color4="#2ecc71"
      color5="#A020F0"
      color6="#ffA500"
      :numberOf1="50"
      :payOff1="10"
      :payOff2="10"
      :payOff3="4"
      :payOff4="-4"
      :payOff5="5"
      :payOff6="-5"
      :chosenBall1="-1"
      :chosenBall2="-1"
      :chosenBall3="-1"
      :temperate="true"
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
import TemperanceChoice from "./TemperanceChoice.vue";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
const emit = defineEmits(["correct"]);

const options = [
  "Eğer mavi bir top çekersem, içinde 5 kırmızı ve 5 yeşil olan bir çantadan bir top daha çekmeliyim.",
  "Eğer sarı bir top çekersem bir başka top daha çekmeliyim. Eğer bu top morsa, toplam 5 puan kazanırım.",
  "100 topun 55'i mavi. Eğer mavi bir top çekersem bir top daha çekmeliyim.",
  "Eğer mavi bir top çekersem, bir başka top daha çekmeliyim. Bu diğer top kırmızıysa, toplam 14 puan kazanırım.",
];

const correct = 4;

const explanations = [
  "Mavi bir top çektiğinizde, içinde 50 kırmızı ve 50 yeşil olan bir top çekmelisiniz.",
  "Her iki çekilişten kazanacağınız puanların toplamını, yani 15 puan alırsınız.",
  "Topların sadece 50'si mavi.",
  "",
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
