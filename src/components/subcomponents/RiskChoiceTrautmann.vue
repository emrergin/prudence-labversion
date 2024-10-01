<template>
  <div class="container">
    <img src="../../assets/reddice.png" class="trautmann-image-1" />
    <img src="../../assets/onetwothree.png" class="trautmann-image" />
    <div class="payoff-container">
      <div :class="{ chosen: chosenNumber < 50 && chosenNumber !== -1 }">
        {{ payOff1 }}
      </div>
      <div :class="{ chosen: chosenNumber >= 50 && chosenNumber !== -1 }">
        {{ payOff2 }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payOff1: Number,
  payOff2: Number,
  chosenNumber: Number,
});
</script>

<style scoped>
p {
  transition: outline 0.3s linear;
}

.chosen {
  outline: 5px solid turquoise;
}

.container {
  display: flex;
  align-items: center;
  padding: 3rem;
  gap: 0.5em;
}

.trautmann-image-1 {
  height: 100px;
  width: auto;
}

.payoff-container {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3em;
  text-align: left;
  font-size: 1.5em;
}
</style>
