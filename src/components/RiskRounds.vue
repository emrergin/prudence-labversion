<template>
  <RiskGame
    :payOffs="rskPayOffs"
    :lastTreatment="lastTreatment"
    v-if="experiment === `ours`"
    @end="$emit('end', true)"
  />
  <RiskReplication
    v-else
    @end="$emit('end', true)"
    :payOffs="rskPayOffs"
    :lastTreatment="lastTreatment"
    :experiment="experiment"
  />
</template>

<script setup>
import RiskGame from "./RiskGamev2.vue";
import RiskReplication from "./RiskReplication.vue";

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

let rskPayOffs = [
  [8, 9, 1, 16],
  [7, 9, 2, 14],
  [9, 11, 4, 16],
  [7, 9, 3, 13],
  [4, 5, 1, 8],
  [5, 7, 2, 10],
  [6, 7, 3, 10],
  [7, 9, 4, 12],
  [6, 8, 3, 11],
  [8, 9, 5, 12],
  [8, 9, 3, 14],
  [6, 7, 1, 12],
];

for (let row of rskPayOffs) {
  if (Math.floor(Math.random() * 2)) {
    let geciciPar1 = row[0];
    let geciciPar2 = row[1];
    row[0] = row[2];
    row[1] = row[3];
    row[2] = geciciPar1;
    row[3] = geciciPar2;
  }
}

rskPayOffs = shuffle(rskPayOffs);
</script>
