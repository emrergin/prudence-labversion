<template>
  <h1>Örnek Seçim 2</h1>
  <div class="choices">
    <div class="choice">
      <div class="title">Seçenek A</div>
      <PrudenceChoiceTrautmann
        :payOff1="5"
        :payOff2="3"
        :payOff3="2"
        :payOff4="-2"
        :chosenNumber1="-1"
        :chosenNumber2="-1"
        :down="true"
      />
    </div>
    <div class="choice">
      <div class="title">Seçenek B</div>
      <PrudenceChoiceTrautmann
        :payOff1="5"
        :payOff2="3"
        :payOff3="2"
        :payOff4="-2"
        :chosenNumber1="-1"
        :chosenNumber2="-1"
        :down="false"
      />
    </div>
  </div>
  <ul>
    <li>
      <p class="tutorial-text">
        Gördüğünüz gibi, örnek seçim 2'de, A seçeneği, kırmızı zarın 1, 2 veya 3
        gelmesi durumunda 5 puan kazandırır.
      </p>
      <p class="tutorial-text">
        Kırmızı zar 4, 5 veya 6 gelirse, A seçeneği 3 puan kazandırır ve başka
        bir altı yüzlü zar (siyah) daha atılır. Siyah zar 1, 2 veya 3 gelirse,
        az önceki miktar olan 3 puana 2 puan
        <i>ilave edilir</i>. Aksi takdirde, 3 puandan 2 puan <i>çıkarılır</i>.
      </p>
    </li>

    <li>
      <p class="tutorial-text">
        Benzer şekilde, kırmızı zarın 4, 5 veya 6 gelmesi durumunda 5 puan
        kazandırır.
      </p>
      <p class="tutorial-text">
        Kırmızı zar 1, 2 veya 3 gelirse, B seçeneği 5 puan kazandırır ve başka
        bir altı yüzlü zar (siyah) daha atılır. Siyah zar 1, 2 veya 3 gelirse,
        az önceki miktar olan 5 puana 2 puan <i>ilave edilir</i>. Aksi takdirde,
        5 puandan 2 puan <i>çıkarılır</i>.
      </p>
    </li>
  </ul>
</template>

<script setup>
import PrudenceChoiceTrautmann from "./PrudenceChoiceTrautmann.vue";
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
  text-align: left;
}

ul {
  width: 85ch;
  margin-inline: auto;
}
</style>
