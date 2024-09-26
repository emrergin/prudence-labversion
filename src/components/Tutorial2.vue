<template>
  <ImageInstruction v-if="step === 1" />

  <div :key="11" v-if="step === 4" class="centered">
    Hazırsanız başlayalım mı?
  </div>
  <div :key="12" class="centered">
    <button v-if="step === 4" @click="$emit('end', true)" class="stepButton">
      Hazırım!
    </button>
    <button v-if="step > 1 && step < 4" @click="nextStep" class="stepButton">
      Sıradaki soru
    </button>
    <button v-if="step === 1" @click="nextStep" class="stepButton">
      Soruları gör
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
import ImageInstruction from "./subcomponents/ImageInstruction.vue";

const emit = defineEmits(["end"]);
const step = ref(1);

function nextStep() {
  step.value++;
}
</script>
