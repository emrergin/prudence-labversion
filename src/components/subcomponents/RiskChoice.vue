<template>
  <div class="container">
    <p>Aşağıdaki torbadan bir top çekiyorsunuz.</p>
    <div>
      <span>{{ numberOf1 }}/100: mavi </span>
      <span :style="{ color: color1 }" class="ball"> ● </span>
    </div>
    <div>
      <span>{{ 100 - numberOf1 }}/100: sarı </span>
      <span :style="{ color: color2 }" class="ball"> ● </span>
    </div>
    <div class="bag-container">
      <BagOfBalls
        :color1="color1"
        :color2="color2"
        :numberOf1="numberOf1"
        :chosenBall="chosenBall"
      />
      <div>
        <p :class="{ chosen: chosenBall < 50 && chosenBall !== -1 }">
          <span>Eğer maviyse </span>
          <span :style="{ color: color1 }" class="ball"> ● </span>
          <span>, {{ payOff1 }} kazanırsınız.</span>
        </p>
        <p :class="{ chosen: chosenBall >= 50 && chosenBall !== -1 }">
          <span>Eğer sarıysa </span>
          <span :style="{ color: color2 }" class="ball"> ● </span>
          <span>, {{ payOff2 }} kazanırsınız.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BagOfBalls from "./BagOfBalls.vue";

const props = defineProps({
  color1: String,
  color2: String,
  numberOf1: {
    type: Number,
    required: true,
  },
  payOff1: Number,
  payOff2: Number,
  chosenBall: Number,
});
</script>

<style scoped>
.bag-container {
  display: flex;

  padding-right: 50px;
}
.ball {
  font-size: 1.5rem;
  text-align: end;
  display: inline-block;
}

p {
  transition: outline 0.3s linear;
}

.chosen {
  outline: 5px solid red;
}
</style>
