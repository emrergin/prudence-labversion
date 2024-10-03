<template>
  <div class="container" :class="{ wide: !temperate, narrow: temperate }">
    <img src="../../assets/reddice.png" class="trautmann-image-1" />
    <img src="../../assets/onetwothree.png" class="trautmann-image" />
    <div class="payoff-container">
      <div class="sublottery sublottery1">
        <div :class="{ chosen: chosenNumber1 < 50 && chosenNumber1 !== -1 }">
          {{ payOff1 }}
        </div>
        <div v-if="temperate">&</div>
        <img
          v-if="temperate"
          src="../../assets/blackdice.png"
          class="trautmann-image-1"
        />
        <img
          v-if="temperate"
          src="../../assets/onetwothree.png"
          class="trautmann-image"
        />
        <div class="payoff-container small-payoff-container" v-if="temperate">
          <div
            :class="{
              chosen:
                chosenNumber3 < 50 &&
                chosenNumber3 !== -1 &&
                chosenNumber1 < 50,
            }"
          >
            {{ payOff5 }}
          </div>
          <div
            :class="{
              chosen:
                chosenNumber3 >= 50 &&
                chosenNumber3 !== -1 &&
                chosenNumber1 < 50,
            }"
          >
            {{ payOff6 }}
          </div>
        </div>
      </div>
      <div class="sublottery sublottery2">
        <div :class="{ chosen: chosenNumber1 >= 50 }">
          {{ payOff2 }}
        </div>
        <div>&</div>
        <img src="../../assets/whitedice.png" class="trautmann-image-1" />
        <img src="../../assets/onetwothree.png" class="trautmann-image" />
        <div class="payoff-container small-payoff-container">
          <div
            :class="{
              chosen:
                chosenNumber2 < 50 &&
                chosenNumber2 !== -1 &&
                chosenNumber1 >= 50,
            }"
          >
            {{ payOff3 }}
          </div>
          <div
            :class="{
              chosen:
                chosenNumber2 >= 50 &&
                chosenNumber2 !== -1 &&
                chosenNumber1 >= 50,
            }"
          >
            {{ payOff4 }}
          </div>
        </div>
        <div v-if="!temperate">&</div>
        <img
          v-if="!temperate"
          src="../../assets/blackdice.png"
          class="trautmann-image-1"
        />
        <img
          v-if="!temperate"
          src="../../assets/onetwothree.png"
          class="trautmann-image"
        />
        <div class="payoff-container small-payoff-container" v-if="!temperate">
          <div
            :class="{
              chosen:
                chosenNumber3 < 50 &&
                chosenNumber3 !== -1 &&
                chosenNumber1 >= 50,
            }"
          >
            {{ payOff5 }}
          </div>
          <div
            :class="{
              chosen: chosenNumber3 >= 50 && chosenNumber1 >= 50,
            }"
          >
            {{ payOff6 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payOff1: Number,
  payOff2: Number,
  payOff3: Number,
  payOff4: Number,
  payOff5: Number,
  payOff6: Number,
  temperate: Boolean,
  chosenNumber1: Number,
  chosenNumber2: Number,
  chosenNumber3: Number,
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
  height: 400px;
}

.wide {
  width: 900px;
}

.narrow {
  width: 600px;
}

.trautmann-image-1 {
  height: 100px;
  width: auto;
}

.trautmann-image {
  height: 150px;
}

.payoff-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  font-size: 30px;
  gap: 2em;
}

.payoff-container.small-payoff-container {
  height: 160px;
}

.sublottery {
  display: flex;
  gap: 0.5em;
  align-items: center;
}
</style>
