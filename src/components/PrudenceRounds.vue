<template>
  <PrudenceGame
    :payOffs="pruPayOffs"
    :lastTreatment="lastTreatment"
    v-if="experiment === `ours`"
    @end="$emit('end', true)"
  />
  <PrudenceReplication
    v-else
    @end="$emit('end', true)"
    :payOffs="pruPayOffs"
    :lastTreatment="lastTreatment"
    :experiment="experiment"
  />
</template>

<script setup>
import PrudenceGame from "./our_experiment/PrudenceGamev2.vue";
import PrudenceReplication from "./PrudenceReplication.vue";

import { defineEmits as defineEmits } from "@vue/runtime-dom";
import shuffle from "../functions/shuffle";

defineEmits(["end"]);
const props = defineProps({
  lastTreatment: {
    type: Boolean,
    default: false,
  },
  experiment: String,
});

let pruPayOffs = [
  [4, 11, 3, -3],
  [3, 9, 2, -2],
  [5, 8, 4, -4],
  [5, 10, 3, -3],
  [3, 8, 1, -1],
  [5, 9, 4, -4],
  [6, 12, 5, -5],
  [6, 10, 5, -5],
  [5, 10, 4, -4],
  [4, 6, 3, -3],
  [2, 6, 1, -1],
  [3, 6, 2, -2],
];

for (let row of pruPayOffs) {
  if (Math.floor(Math.random() * 2)) {
    let geciciPar = row[0];
    row[0] = row[1];
    row[1] = geciciPar;
  }
}

pruPayOffs = shuffle(pruPayOffs);
</script>
