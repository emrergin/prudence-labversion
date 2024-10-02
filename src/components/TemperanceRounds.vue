<template>
  <TemperanceGame
    :payOffs="temPayOffs"
    :lastTreatment="lastTreatment"
    v-if="experiment === `ours`"
    @end="$emit('end', true)"
  />
  <TemperanceReplication
    v-else
    @end="$emit('end', true)"
    :payOffs="temPayOffs"
    :lastTreatment="lastTreatment"
    :experiment="experiment"
  />
</template>

<script setup>
import TemperanceGame from "./our_experiment/TemperanceGamev2.vue";
import TemperanceReplication from "./TemperanceReplication.vue";

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

let temPayOffs = [
  [7, 7, 2, -2, 4, -4],
  [7, 7, 3, -3, 3, -3],
  [5, 5, 1, -1, 2, -2],
  [5, 5, 1, -1, 3, -3],
  [8, 8, 2, -2, 3, -3],
  [9, 9, 2, -2, 6, -6],
  [8, 8, 3, -3, 4, -4],
  [8, 8, 2, -2, 5, -5],
  [10, 10, 3, -3, 6, -6],
  [10, 10, 4, -4, 5, -5],
  [8, 8, 1, -1, 6, -6],
  [5, 5, 2, -2, 2, -2],
];

for (let row of temPayOffs) {
  if (Math.floor(Math.random() * 2)) {
    let geciciPar1 = row[2];
    let geciciPar2 = row[3];
    row[2] = row[4];
    row[3] = row[5];
    row[4] = geciciPar1;
    row[5] = geciciPar2;
  }
}

temPayOffs = shuffle(temPayOffs);
</script>
