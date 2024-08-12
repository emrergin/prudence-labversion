<template>
  <p>
    İlerleyen ekranlardaki kazanacağınız puanların tamamı bir ya da daha fazla
    torbadan çekilen topların renkleriyle alakalı olacak.
  </p>

  <div class="tutorial-flex">
    <img src="../assets/tutorial2.png" class="tutorial-image" />

    <div class="tutorial-text">
      <p>
        Solda örnek bir resim görebilirsiniz. Bu resme göre, başlangıçta, içinde
        elli mavi top ve elli sarı top olan bir torbadan rastgele bir top
        çekiyorsunuz.
      </p>
      <p>Eğer bu ilk top mavi ise <b>4 puan</b> kazanırsınız.</p>
      <p>
        Eğer bu ilk top sarı ise <b>12 puan</b> kazanırsıniz ve bunun yanında,
        içerisinde 50 kırmızı ve 50 yeşil top olan başka bir torbadan bir top
        daha çekersiniz.
      </p>
      <p>
        Bu ikinci topu çekmeniz durumunda, top kırmızıysa <b>7 puan</b> daha
        (yani toplam 7+12, 19 puan), top yeşilse <b>9 puan</b> daha (yani toplam
        9+12, 21 puan) kazanırsınız.
      </p>
    </div>
  </div>

  <div :key="11" class="centered">Hazırsanız başlayalım mı?</div>
  <div :key="12" class="centered">
    <button @click="$emit('end', true)" class="stepButton">Hazırım!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      secim: null,
      currentDroppable: null,
    };
  },
  emits: ["end"],
};
</script>

<style scoped>
.tutorial-flex {
  display: flex;
  margin: 2rem;
}

.tutorial-image {
  width: 33vw;
  height: auto;
}

.tutorial-text {
  text-align: left;
  width: 44vw;
}
</style>
