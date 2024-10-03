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
          <span>, {{ payOff1 }} kazanırsınız.</span>
        </p>
        <hr />
        <p
          :class="{ chosen: chosenBall1 >= 50 && chosenBall1 !== -1 }"
          class="result-text"
        >
          <span>Eğer sarıysa </span>
          <span :style="{ color: color2 }" class="ball"> ● </span>
          <span
            >, {{ payOff2 }} kazanırsınız ve aşağıdaki torbadan bir top
            çekersiniz.</span
          >
        </p>
        <div class="inner">
          <div>
            <span>{{ numberOf1 }}/100: kırmızı </span>
            <span :style="{ color: color3 }" class="ball"> ● </span>
          </div>
          <div>
            <span>{{ 100 - numberOf1 }}/100: yeşil </span>
            <span :style="{ color: color4 }" class="ball"> ● </span>
          </div>
          <div class="bag-container">
            <BagOfBalls
              :color1="color3"
              :color2="color4"
              :numberOf1="numberOf1"
              :chosenBall="chosenBall2"
            />
            <div>
              <p :class="{ chosen: chosenBall2 < 50 && chosenBall2 !== -1 }">
                <span>Eğer kırmızıysa </span>
                <span :style="{ color: color3 }" class="ball"> ● </span>
                <span
                  >, {{ Math.abs(payOff3) }}
                  {{ payOff3 > 0 ? " kazanırsınız." : " kaybedersiniz." }}.
                </span>
              </p>
              <p :class="{ chosen: chosenBall2 >= 50 }">
                <span>Eğer yeşilse </span>
                <span :style="{ color: color4 }" class="ball"> ● </span>
                <span
                  >, {{ Math.abs(payOff4) }}
                  {{
                    payOff4 > 0 ? " kazanırsınız." : " kaybedersiniz."
                  }}.</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BagOfBalls from "./BagOfBalls.vue";

const props = defineProps({
  color1: {
    type: String,
    required: false,
    default: "#0000fe",
  },
  color2: {
    type: String,
    required: false,
    default: "#fec800",
  },
  color3: {
    type: String,
    required: false,
    default: "#e74c3c",
  },
  color4: {
    type: String,
    required: false,
    default: "#2ecc71",
  },
  numberOf1: {
    type: Number,
    required: false,
    default: 50,
  },
  payOff1: Number,
  payOff2: Number,
  payOff3: Number,
  payOff4: Number,
  chosenBall1: Number,
  chosenBall2: Number,
});
</script>

<style scoped>
.bag-container {
  display: flex;

  padding-right: 50px;
}

.inner {
  border: 1px solid black;
  scale: 0.8;
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
  outline: 5px solid turquoise;
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
