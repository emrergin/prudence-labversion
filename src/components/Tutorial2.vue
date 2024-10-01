<template>
  <template v-if="experiment === `bleich`">
    <BleichInstruction v-if="step === 1" />
    <Comprehension1 v-if="step === 2" @correct="enableButton(1)" />
    <Comprehension2 v-if="step === 3" @correct="enableButton(2)" />
    <Comprehension3 v-if="step === 4" @correct="enableButton(3)" />

    <div v-if="step === 4 && !disabled[2]" class="centered">
      Hazırsanız başlayalım mı?
    </div>
    <div class="centered">
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

  <template v-else>
    <div>
      Bu deneyde, Seçenek A ve Seçenek B olarak adlandırılan iki seçenek
      arasında bir dizi seçim yapmanız istenecektir. Her iki seçenek de
      bilgisayar tarafından atılan üç standart 6 yüzlü zara (kırmızı, siyah ve
      beyaz) bağlı olarak ödüller kazandırmaktadır. Aşağıda birkaç örnek seçenek
      gösterilmiştir. Lütfen bunları dikkatle inceleyiniz.
    </div>
    <div class="centered">Hazırsanız başlayalım mı?</div>
    <div v-if="step === 4 && !disabled[2]" class="centered">
      Hazırsanız başlayalım mı?
    </div>
    <div class="centered">
      <button @click="$emit('end', true)" class="stepButton">Hazırım!</button>
    </div>
  </template>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
import BleichInstruction from "./subcomponents/BleichInstruction.vue";
import Comprehension3 from "./subcomponents/Comprehension3.vue";
import Comprehension2 from "./subcomponents/Comprehension2.vue";
import Comprehension1 from "./subcomponents/Comprehension1.vue";

const props = defineProps({
  experiment: String,
});

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
