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
    

    <p>Birinci oyundan ödeme yapmak üzere {{ store.chosenRounds[0] }}. tur seçildi. O turdaki kazancınız: {{store.veriler[store.chosenRounds[0]-1][4]}} </p>
    <p>İkinci oyundan ödeme yapmak üzere {{ store.chosenRounds[1] }}. tur seçildi. O turdaki kazancınız: {{store.veriler[(store.veriler.length)/3+store.chosenRounds[1]-1][4]}}</p>
    <p>Üçüncü oyundan ödeme yapmak üzere {{ store.chosenRounds[2] }}. tur seçildi. O turdaki kazancınız: {{store.veriler[2*(store.veriler.length)/3+store.chosenRounds[2]-1][4]}}</p>

    <p>Toplam puanınız: {{ store.kazanc }}</p>
    <p>Parasal kazancınız: {{ store.kazanc }}x 1,5 + 20 = {{store.kazanc*1.5+20}}</p>
    
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
