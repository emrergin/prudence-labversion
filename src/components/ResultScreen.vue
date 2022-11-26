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
    <p>Parasal kazancınız: ({{ store.kazanc }} x 1,5) + 20 = {{new Intl.NumberFormat('tr-TR', {minimumFractionDigits: 0}).format(store.kazanc*1.5+20)}} TL</p>
    
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
</style>
