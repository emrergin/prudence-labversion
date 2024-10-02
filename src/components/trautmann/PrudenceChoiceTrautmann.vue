<template>
  <div class="container">
    <img src="../../assets/reddice.png" class="trautmann-image-1" />
    <img src="../../assets/onetwothree.png" class="trautmann-image" />
    <div class="payoff-container">
      <div class="sublottery">
        <div :class="{ chosen: chosenNumber1 < 50 && chosenNumber1 !== -1 }">
          {{ payOff1 }}
        </div>
        <div v-if="!down">&</div>
        <img
          v-if="!down"
          src="../../assets/blackdice.png"
          class="trautmann-image-1"
        />
        <img
          v-if="!down"
          src="../../assets/onetwothree.png"
          class="trautmann-image"
        />
        <div class="payoff-container small-payoff-container" v-if="!down">
          <div
            :class="{
              chosen:
                chosenNumber2 < 50 &&
                chosenNumber2 !== -1 &&
                chosenNumber1 < 50 &&
                chosenNumber1 !== -1,
            }"
          >
            {{ payOff3 }}
          </div>
          <div
            :class="{
              chosen:
                chosenNumber2 >= 50 &&
                chosenNumber1 < 50 &&
                chosenNumber1 !== -1,
            }"
          >
            {{ payOff4 }}
          </div>
        </div>
      </div>

      <div class="sublottery">
        <div :class="{ chosen: chosenNumber1 >= 50 }">
          {{ payOff2 }}
        </div>

        <div v-if="down">&</div>
        <img
          v-if="down"
          src="../../assets/blackdice.png"
          class="trautmann-image-1"
        />
        <img
          v-if="down"
          src="../../assets/onetwothree.png"
          class="trautmann-image"
        />
        <div class="payoff-container small-payoff-container" v-if="down">
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
              chosen: chosenNumber2 >= 50 && chosenNumber1 >= 50,
            }"
          >
            {{ payOff4 }}
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
  chosenNumber1: Number,
  chosenNumber2: Number,
  down: Boolean,
});
</script>

<style scoped>
p {
  transition: outline 0.3s linear;
}

.chosen {
  outline: 5px solid turquoise;
}

.result-text {
  text-align: start;
}

.container {
  display: flex;
  align-items: center;
  padding: 3rem;
  gap: 0.5em;
  height: 400px;
}

.sublottery {
  display: flex;
  gap: 0.5em;
  align-items: center;
}

.payoff-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  font-size: 30px;
  gap: 2em;
}
</style>
