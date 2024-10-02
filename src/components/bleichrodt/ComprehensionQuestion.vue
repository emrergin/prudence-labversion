<template>
  <div class="comprehension-text">
    <p>
      Diyelim ki sonucu paraya çevrilecek bir turda, soldaki resimdeki seçeneği
      seçtiniz. Aşağıdaki ifadelerden hangisi doğrudur?
    </p>
    <div
      v-for="(option, index) in options"
      class="comprehension-option"
      @click="tryAnswer(index, $event)"
    >
      {{ option }}
    </div>
    <div v-if="explanation !== ``">{{ explanation }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
const emit = defineEmits(["correctanswer"]);
const props = defineProps({
  options: undefined,
  explanations: undefined,
  correct: Number,
});

const explanation = ref("");

function tryAnswer(num) {
  if (num + 1 !== props.correct) {
    explanation.value =
      "Yanlış cevap. " + props.explanations[num] + " Lütfen tekrar deneyin!";
    event.target.classList.add("incorrect");
  } else {
    explanation.value = "Doğru cevap! Lütfen aşağıdaki düğmeyle devam edin.";
    event.target.classList.add("correct");
    emit("correctanswer");
  }
}
</script>

<style>
.comprehension-option {
  background: aliceblue;
  border: 1px solid #84c5fe;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 17px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comprehension-option:hover {
  color: #004085;
  background: #cce5ff;
  border: 1px solid #b8daff;
}

.comprehension-option.correct {
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}

.comprehension-option.incorrect {
  color: #721c24;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}
</style>
