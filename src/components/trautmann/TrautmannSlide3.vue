<template>
  <h1>Örnek Seçim 3</h1>
  <div class="choices">
    <div class="choice">
      <div class="title">Seçenek A</div>
      <TemperanceChoiceTrautmann
        :payOff1="5"
        :payOff2="5"
        :payOff3="3"
        :payOff4="-3"
        :payOff5="1"
        :payOff6="-1"
        :chosenNumber1="-1"
        :chosenNumber2="-1"
        :chosenNumber3="-1"
        :temperate="true"
      />
    </div>
    <div class="choice">
      <div class="title">Seçenek B</div>
      <TemperanceChoiceTrautmann
        :payOff1="5"
        :payOff2="5"
        :payOff3="3"
        :payOff4="-3"
        :payOff5="1"
        :payOff6="-1"
        :chosenNumber1="-1"
        :chosenNumber2="-1"
        :chosenNumber3="-1"
        :temperate="false"
      />
    </div>
  </div>
  <ul>
    <li>
      <p class="tutorial-text">
        Gördüğünüz gibi, örnek seçim 3'te, A seçeneği kırmızı zar 1, 2 veya 3
        gelirse, 5 puan kazandırır ve başka bir altı yüzlü zar (siyah) atılır.
        Eğer siyah zar 1, 2 veya 3 gelirse, 5 puana 3 puan <i>eklenir</i>. Aksi
        takdirde, 5 puandan 3 puan <i>çıkarılır</i>.
      </p>
      <p class="tutorial-text">
        Kırmızı zar 4, 5 veya 6 gelirse, A seçeneği yine 5 puan kazandırır ve
        başka bir altı yüzlü zar (beyaz) atılır. Beyaz zar 1, 2 veya 3 gelirse,
        5 puana 1 puan <i>eklenir</i>. Aksi takdirde, 5 puandan 1 puan
        <i>çıkarılır</i>.
      </p>
    </li>

    <li>
      <p class="tutorial-text">
        Aynı şekilde, B Seçeneği, kırmızı zarın 1,2 veya 3 gelmesi durumunda 5
        puan kazandırır.
      </p>
      <p class="tutorial-text">
        Kırmızı zar 4, 5 veya 6 gelirse, B seçeneği 5 puan kazandırır ve iki
        adet daha altı yüzlü zar (siyah ve beyaz) atılır. Beyaz zar 1, 2 veya 3
        gelirse, 5 puana 3 puan daha <i>eklenir</i>. Aksi takdirde 5 puandan 3
        puan <i>çıkarılır</i>. Buna ek olarak, siyah zar 1, 2 veya 3 gelirse, 5
        puana 1 puan <i>eklenir</i>. Aksi takdirde 5 puandan 1 puan
        <i>çıkarılır</i>.
      </p>
    </li>
  </ul>
</template>

<script setup>
import TemperanceChoiceTrautmann from "./TemperanceChoiceTrautmann.vue";
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
  width: 120ch;
  margin-inline: auto;
  margin-block: 2ch;
  text-align: left;
}

ul {
  width: 120ch;
  margin-inline: auto;
}
</style>
