<template>
  <div v-if="!bitis" class="p-v-15">
    <button      
      @click="
        bitis = true;
        $emit('end', true);
        exitFullscreen();
      "
      class="stepButton"
    >
      Verileri Gör
    </button>
    
  </div>
  <div v-else>
    <h2>Deney bitti. Katılımınız için teşekkürler.</h2>    
    <h3>Verileriniz</h3>    
    <p>Kullanıcı ID: {{ store._id }}</p>    
    <p>İsminiz: {{ store.isim }}</p>    
    

    <p>Birinci oyundan ödeme yapmak üzere {{ store.chosenRounds[0] }}. tur seçildi.</p>
    <p>İkinci oyundan ödeme yapmak üzere {{ store.chosenRounds[1] }}. tur seçildi.</p>
    <p>Üçüncü oyundan ödeme yapmak üzere {{ store.chosenRounds[2] }}. tur seçildi.</p>

    <p>Toplam kazancınız: {{ store.kazanc }}</p>
    
    <!-- <table>
      <tr>
        <th>Deney</th>        
        <th>Karar Süresi (ms)</th>        
        <th>Değerler</th>        
        <th>Seçim</th>
        <th>Kazanç</th>
        
      </tr>
      <tr v-for="veriSatiri in store.veriler" :key="veriSatiri[3]">
        <td>{{ veriSatiri[0] }}</td>
        <td>{{ veriSatiri[1] }}</td>
        <td>{{ veriSatiri[2] }}</td>
        <td>{{ veriSatiri[3] }}</td>
        <td>{{ veriSatiri[4] }}</td>
      </tr>

    </table>
    <div style="display:flex;padding-inline:10ch;gap:2rem;justify-content: center;">
    <div>
      <h3>GPS</h3>  
        <p>general risk: {{store.gps.risk_istegi}}</p>
        <p>willingness to act: {{store.gps.gelecekfayda}} - {{store.gps.cezakendi}} - {{store.gps.cezabaskasi}} - {{store.gps.hayir}}</p>
        <p>describe: {{store.gps.d1}} - {{store.gps.d2}} - {{store.gps.d3}} - {{store.gps.d4}} - {{store.gps.d5}}</p>
        <p>staircase risk: {{store.gps.stairrisk}}</p>
        <p>gift exchange: {{store.gps.gift}}</p>
        <p>hypothetic donation: {{store.gps.donation}}</p>
        <p>staircase patience: {{store.gps.stairpatience}}</p>
    </div>
    <div style="margin-bottom:5ch;">
      <h3>Demografi</h3>
      <p>Yaş: {{store.demografi.age}}</p>
      <p>GNO: {{store.demografi.gpa}}</p>
      <p>Cinsiyet: {{['kadın','erkek','diger'][store.demografi.sex]}}</p>
      <p>Deneyim: {{Boolean(Number(store.demografi.preExp))}}</p>
      <p>Bölüm: {{store.demografi.dep}}</p> 
      <p> Ekonomi Dersi: {{store.demografi.econ}}</p>
      <p> Algılanan zorluk: {{store.demografi.diff}}</p>
      <p>Eminlik: {{store.demografi.sure}}</p>
    </div> -->
    
    <!-- </div> -->
  </div>
</template>
<script setup>
import { store } from "../store.js";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
import { ref } from "vue";

defineEmits(["end"]);

const bitis = ref(false);

function exitFullscreen() {
  var requestMethod =
    document.cancelFullScreen ||
    document.webkitCancelFullScreen ||
    document.mozCancelFullScreen ||
    document.exitFullscreen ||
    document.webkitExitFullscreen;
  if (requestMethod) {
    // cancel full screen.
    requestMethod.call(document);
  }
  return false;
}
</script>

<style scoped>
.p-v-15{
  padding-block:15ch;
}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: left;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: turquoise;
}
</style>
