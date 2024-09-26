<template>
  <div class="comprehension-question">
    <RiskChoice
      color1="#0000fe"
      color2="#fec800"
      :numberOf1="50"
      :payOff1="8"
      :payOff2="9"
      :chosenBall="-1"
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
import RiskChoice from "./RiskChoice.vue";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
const emit = defineEmits(["correct"]);

const options = [
  "100 topun 45'i mavi. Eğer bir mavi top çekersem 8 puan kazanırım.",
  "100 topun 50'si sarı. Eğer bir sarı top çekersem 8 puan kazanırım.",
  "100 topun 50'si mavi. Eğer bir mavi top çekersem 8 puan kazanırım.",
  "Herhangi bir top çekmem ve 8 puan kazanırım.",
];

const correct = 3;

const explanations = [
  "100 topun 50'si mavi.",
  "Sarı bir top çektiğinizde ona denk gelen 9 puanı kazanırsınız.",
  "",
  "Kazanacağınız puan çekilen topların renklerine bağlıdır.",
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
