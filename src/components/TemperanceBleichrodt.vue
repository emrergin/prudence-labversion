<template>
  <div>Temperance Treatment Placeholder</div>

  <button @click="$emit('end', true)" class="stepButton">
    <span v-if="lastTreatment">Anketlere Geç</span>
    <span v-else>Diğer Oyuna Geç!</span>
  </button>
</template>

<script setup>
// import PrudenceChoice from "./subcomponents/PrudenceChoice.vue";
// import ScoreTable from "./ScoreTable.vue";
// import nextTurn2 from "../functions/nextTurn2.js";
// import { store } from "../store.js";
// import { ref } from "vue";

const props = defineProps({
  payOffs: undefined,
  lastTreatment: {
    type: Boolean,
    default: false,
  },
});

// const asama = ref(`baslangic`);
// const currentRound = ref(0);
// const secim = ref(null);
// const baslangic = ref(new Date());
// const bitis = ref(null);
// const chosenBall1 = ref(-1);
// const chosenBall2 = ref(-1);

// const earningForCurrentRound = ref(0);

// const oyunSonu = ref(false);

defineEmits(["end"]);
</script>
