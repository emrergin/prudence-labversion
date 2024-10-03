<template>
  <ul class="girisMetni">
    <li>
      Hoş geldiniz. Bu deneyi belli durumlarda alınan ekonomik kararları anlamak
      için hazırladık.
    </li>
    <li v-if="experiment === `ours`">
      Deneyde her biri 12 tur sürecek 3 oyun bulunuyor. Her oyunun öncesinde o
      oyunu anlatan bir yönerge olacak. Yönergeyi okurken devam etmek için bazen
      <b><u>metnin istediği şeyi yapmanız</u></b> bazen de
      <b><u>farenin sol tuşuyla ekrana tıklamanız</u></b>
      bekleniyor.
    </li>
    <li v-else>
      Deneyde her biri 12 tur sürecek 3 oyun bulunuyor. Az sonraki ekranlarda bu
      deneyler hakkında daha fazla bilgi edineceksiniz.
    </li>
    <li>
      Oyunlarda kazancınızı "puan" cinsinden hesaplayacağız. Deney sonunda her
      üç oyunun rastgele seçtiğimiz birer turunda kazandığınız puanları
      toplayacağız. Bu, deneydeki toplam puanınız olacak. Toplam puanınızın
      parasal değerini (1 puan =
      {{
        new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 0 }).format(
          pointsToMoneyMultiplier
        )
      }}
      TL) ve ek olarak {{ participationReward }} TL katılım ücretini size deney
      sonunda nakit olarak ödeyeceğiz.
    </li>
    <li>
      Ödeme için bütün turların seçilme şansı aynıdır. Dolayısıyla her turda,
      rastgele seçilecek tur sanki o turmuş gibi kararlar almanız yerinde
      olacaktır.
    </li>
    <li>
      Oyunları tamamladıktan sonra size dair bazı demografik bilgileri, belli
      durumlardaki tutumlarınızı ve tercihlerinizi sorduğumuz bir anket olacak.
    </li>
    <li>
      Deneyden erken ayrılabilirsiniz. Bulunduğunuz sayfayı değiştirmeniz ve
      yenilemeniz gibi durumlarda da deneyden erken ayrılmış sayılacaksınız.
      Erken ayrılmanız durumunda o zamana kadarki kararlarınız
      değerlendirilecek.
    </li>
  </ul>

  <p>Çalışmaya katılmayı kabul ediyorum.</p>
  <input
    style="display: block; margin-inline: auto"
    v-model="store.isim"
    placeholder="Ad Soyad"
  />
  <button
    v-if="store.isim"
    @click="
      logData();
      fullScreen();
      $emit('end', true);
    "
    class="stepButton"
  >
    <span>Deneye başla!</span>
  </button>
</template>

<script setup>
import { store } from "../store.js";
import { defineEmits as defineEmits } from "@vue/runtime-dom";
import { participationReward } from "../constants.js";
import { pointsToMoneyMultiplier } from "../constants.js";

const props = defineProps({
  experiment: String,
});

defineEmits(["end"]);
function logData() {
  const someData = {
    title: "kisi verileri",
    kisiVerisi: store.veriler,
    odeme: store.kazanc,
    isim: store.isim,
    _id: store._id,
    demografi: store.demografi,
    gps: store.gps,
  };
  const postMethod = {
    method: `POST`,
    body: JSON.stringify(someData),
    headers: {
      "Content-type": "application/json  ; charset=UTF-8", // Indicates the content
    },
  };
  fetch(`https://ekonomideneyleri.com.tr/prudence/api/kisiveri`, postMethod);
}
function fullScreen() {
  var requestMethod =
    document.documentElement.requestFullScreen ||
    document.documentElement.webkitRequestFullScreen ||
    document.documentElement.mozRequestFullScreen ||
    document.documentElement.msRequestFullscreen;
  requestMethod.call(document.documentElement);
  return false;
}
</script>

<style>
.girisMetni {
  text-align: left;
  font-size: 1.5rem;
  width: 75ch;
  margin: 5.5rem auto 1rem auto;
}

.girisMetni > li + li {
  margin-top: 0.75em;
}

#mainWrapper > input:last-child {
  margin-bottom: 6ch;
}
</style>

<style scoped>
.stepButton {
  margin: 1em auto 20px auto;
}
</style>
