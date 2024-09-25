<template>
  <div class="container">
    <div class="top-bag">
      <p>Aşağıdaki torbadan bir top çekiyorsunuz.</p>
      <div>
        <span>{{ numberOf1 }}/100: mavi </span>
        <span :style="{ color: color1 }" class="ball"> ● </span>
      </div>
      <div>
        <span>{{ 100 - numberOf1 }}/100: sarı </span>
        <span :style="{ color: color2 }" class="ball"> ● </span>
      </div>
    </div>
    <div class="bag-container">
      <BagOfBalls
        :color1="color1"
        :color2="color2"
        :numberOf1="numberOf1"
        :chosenBall="chosenBall1"
      />
      <div>
        <p
          :class="{ chosen: chosenBall1 < 50 && chosenBall1 !== -1 }"
          class="result-text"
        >
          <span>Eğer maviyse </span>
          <span :style="{ color: color1 }" class="ball"> ● </span>
          <span
            >, {{ payOff1 }} kazanırsınız
            {{
              temperate ? " ve aşağıdaki torbadan bir top çekersiniz" : ""
            }}.</span
          >
        </p>
        <InnerBag
          v-if="temperate"
          :color1="color3"
          :color2="color4"
          :payOff1="payOff3"
          :payOff2="payOff4"
          :numberOf1="50"
          :chosenBall="
            chosenBall1 < 50 && chosenBall1 !== -1 ? chosenBall2 : -1
          "
          colorName1="kırmızıysa"
          colorName2="yeşilse"
        />
        <hr />
        <p
          :class="{ chosen: chosenBall1 >= 50 && chosenBall1 !== -1 }"
          class="result-text"
        >
          <span>Eğer sarıysa </span>
          <span :style="{ color: color2 }" class="ball"> ● </span>
          <span
            >, {{ payOff2 }} kazanırsınız
            {{
              temperate
                ? " ve aşağıdaki torbadan bir top çekersiniz"
                : "ve aşağıdaki torbalardan birer top çekersiniz"
            }}.</span
          >
        </p>
        <InnerBag
          v-if="!temperate"
          :color1="color3"
          :color2="color4"
          :payOff1="payOff3"
          :payOff2="payOff4"
          :numberOf1="50"
          :chosenBall="
            chosenBall1 >= 50 && chosenBall1 !== -1 ? chosenBall2 : -1
          "
          colorName1="kırmızıysa"
          colorName2="yeşilse"
          colorName1short="kırmızı"
          colorName2short="yeşil"
        />
        <InnerBag
          :color1="color5"
          :color2="color6"
          :payOff1="payOff5"
          :payOff2="payOff6"
          :numberOf1="50"
          :chosenBall="
            chosenBall1 >= 50 && chosenBall1 !== -1 ? chosenBall2 : -1
          "
          colorName1="morsa"
          colorName2="turuncuysa"
          colorName1short="mor"
          colorName2short="turuncu"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BagOfBalls from "./BagOfBalls.vue";
import InnerBag from "./InnerBag.vue";

const props = defineProps({
  color1: String,
  color2: String,
  color3: String,
  color4: String,
  color5: String,
  color6: String,
  numberOf1: {
    type: Number,
    required: true,
  },
  payOff1: Number,
  payOff2: Number,
  payOff3: Number,
  payOff4: Number,
  payOff5: Number,
  payOff6: Number,
  temperate: Boolean,
  chosenBall1: Number,
  chosenBall2: Number,
  chosenBall3: Number,
});
</script>

<style>
.bag-container {
  display: flex;

  padding-right: 50px;
}

p {
  transition: outline 0.3s linear;
}

.chosen {
  outline: 5px solid turquoise;
}
</style>

<style scoped>
.inner {
  border: 1px solid black;
  scale: 0.8;
}
.ball {
  font-size: 1.5rem;
  text-align: end;
  display: inline-block;
}

.result-text {
  text-align: start;
}

.top-bag {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
}
</style>
