<template>
  <div class="ball-container">
    <span
      v-for="(item, index) in [...Array(+numberOf1)]"
      :style="{ color: color1 }"
      class="ball"
      :class="{ chosen: chosenBall === index }"
    >
      ●
    </span>
    <span
      v-for="(item, index) in [...Array(100 - numberOf1)]"
      :style="{ color: color2 }"
      class="ball"
      :class="{ chosen: chosenBall === index + numberOf1 }"
    >
      ●
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  color1: String,
  color2: String,
  numberOf1: Number,
  chosenBall: Number,
});
</script>

<style scoped>
.ball {
  font-size: 2rem;
  display: inline-block;
  text-align: center;
  vertical-align: center;
  margin-top: -75%;
}

.chosen {
  /* outline: 5px solid red; */
  -webkit-text-stroke: 4px black;
  text-stroke: 4px black;
}

.ball-container {
  border: 3px black solid;
  border-top: 0;
  width: min-content;
  height: min-content;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0px;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  margin: 25px;
}
</style>
