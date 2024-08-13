<template>
  <div class="inner">
    <div>
      <span>{{ numberOf1 }}/100: kırmızı </span>
      <span :style="{ color: color1 }" class="ball"> ● </span>
    </div>
    <div>
      <span>{{ 100 - numberOf1 }}/100: yeşil </span>
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
          <span>Eğer {{ colorName1 }} </span>
          <span :style="{ color: color1 }" class="ball"> ● </span>
          <span
            >, {{ Math.abs(payOff1) }}
            {{ payOff1 > 0 ? "kazanırsınız" : "kaybedersiniz" }}.</span
          >
        </p>
        <p :class="{ chosen: chosenBall >= 50 && chosenBall !== -1 }">
          <span>Eğer {{ colorName2 }} </span>
          <span :style="{ color: color2 }" class="ball"> ● </span>
          <span
            >, {{ Math.abs(payOff2) }}
            {{ payOff2 > 0 ? "kazanırsınız" : "kaybedersiniz" }}.</span
          >
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
  colorName1: String,
  colorName2: String,
});
</script>

<style scoped>
.inner {
  margin-top: -40px;
  margin-bottom: -30px;
}
</style>
