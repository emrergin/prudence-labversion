<template>
  <h1>Örnek Seçim 1</h1>
  <div class="choices">
    <div class="choice">
      <div class="title">Seçenek A</div>

      <RiskChoiceTrautmann :payOff1="4" :payOff2="1" :chosenNumber="-1" />
    </div>
    <div class="choice">
      <div class="title">Seçenek B</div>
      <RiskChoiceTrautmann :payOff1="3" :payOff2="2" :chosenNumber="-1" />
    </div>
  </div>
  <p class="tutorial-text">
    Gördüğünüz gibi, örnek seçim 1'de, A seçeneği kırmızı zarın 1,2 veya 3
    gelmesi durumunda 4 puan kazandırır. Kırmızı zar 4, 5 veya 6 gelirse, 1 puan
    kazandırır.
  </p>
  <p class="tutorial-text">
    Aynı şekilde, B Seçeneği, kırmızı zarın 1,2 veya 3 gelmesi durumunda 3 puan
    kazandırır. Kırmızı zar 4, 5 veya 6 gelirse, 2 puan kazandırır.
  </p>
</template>

<script setup>
import RiskChoiceTrautmann from "./RiskChoiceTrautmann.vue";
</script>

<style scoped>
.choices {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 100px;
}

.choice {
  border: 2px solid black;
  transition: outline 0.3s linear;
}

.tutorial-text {
  width: 85ch;
  margin-inline: auto;
  margin-block: 2ch;
}
</style>
