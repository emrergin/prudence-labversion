<template>
  <ul class="girisMetni">
    <li>
      Hoş geldiniz. Bu deneyi belli durumlarda alınan ekonomik kararları anlamak
      için hazırladık.
    </li>
    <!-- <li>
      Deneyde fare kullanmanız beklendiğinden, mobil cihazlar deneye uygun
      değildir.
    </li>
    <li>
      Deney, <i>Internet Explorer</i> ve <i>Safari</i> üzerinden
      çalışmamaktadır. Lütfen kullandığınız tarayıcının güncel olduğuna emin
      olun.
    </li> -->
    <li>
      Deneyde her biri 12 tur sürecek 3 oyun bulunuyor. Her oyunun öncesinde o
      oyunu anlatan bir yönerge olacak. Yönergeyi okurken devam etmek için bazen
      <b>metnin istediği şeyi yapmanız</b> bazen de <b>farenin sol tuşuyla ekrana tıklamanız</b>
      bekleniyor.
    </li>
    <li>
      Oyunlarda kazancınızı "puan" cinsinden hesaplayacağız. Toplam kazancınız
      deney boyunca topladığınız puanlara eşittir.
    </li>
    <li>
      Deneyden erken ayrılabilirsiniz. Bulunduğunuz sayfayı değiştirmeniz ve
      yenilemeniz gibi durumlarda da deneyden erken ayrılmış sayılacaksınız.
      Erken ayrılmanız durumunda o zamana kadarki kararlarınız
      değerlendirilecek.
    </li>
  </ul>

  <p >Çalışmaya katılmayı kabul ediyorum.</p>
  <input
    style="display: block; margin-inline: auto;"
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
    <span >Deneye başla!</span>
  </button>
</template>

<script setup>
import { store } from "../store.js";
import { defineEmits as defineEmits } from "@vue/runtime-dom";

defineEmits(["end"]);
function logData() {
  const someData = {
    title: "kisi verileri",
    kisiVerisi: store.veriler,
    odeme: store.kazanc,
    isim: store.isim,
    _id: store._id,
    demografi: store.demografi,
    gps: store.gps
  };
  const postMethod = {
    method: `POST`,
    body: JSON.stringify(someData),
    headers: {
      "Content-type": "application/json  ; charset=UTF-8", // Indicates the content
    },
  };
  fetch(`https://prudencetemperance.herokuapp.com/api/kisiveri`, postMethod);
}
function fullScreen() {
  var requestMethod =
    // document.requestFullScreen ||
    // document.webkitRequestFullScreen ||
    // document.mozRequestFullScreen ||
    // document.msRequestFullscreen;
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

#mainWrapper>input:last-child{
  margin-bottom:6ch;
}
</style>

<style scoped>
.stepButton {
  margin: 1em auto 20px auto;
}



</style>
