<template>
  <ImageInstruction v-if="step === 1" />
  <Comprehension1 v-if="step === 2" @correct="enableButton(1)" />
  <Comprehension2 v-if="step === 3" @correct="enableButton(2)" />
  <Comprehension3 v-if="step === 4" @correct="enableButton(3)" />

  <div :key="11" v-if="step === 4 && !disabled[2]" class="centered">
    Hazırsanız başlayalım mı?
  </div>
  <div :key="12" class="centered">
    <button
      v-if="step === 4"
      :disabled="disabled[2]"
      @click="$emit('end', true)"
      class="stepButton"
    >
      Hazırım!
    </button>
    <button
      v-if="step > 1 && step < 4"
      :disabled="disabled[step - 2]"
      @click="nextStep"
      class="stepButton"
    >
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
import Comprehension3 from "./subcomponents/Comprehension3.vue";
import Comprehension2 from "./subcomponents/Comprehension2.vue";
import Comprehension1 from "./subcomponents/Comprehension1.vue";

const emit = defineEmits(["end"]);
const step = ref(1);
const disabled = ref([true, true, true]);

function nextStep() {
  step.value++;
}

function enableButton(num) {
  disabled.value[num - 1] = false;
}
</script>
