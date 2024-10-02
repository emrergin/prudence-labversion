<template>
  <p>
    İlerleyen ekranlardaki kazanacağınız puanların tamamı bir ya da daha fazla
    torbadan çekilen topların renkleriyle alakalı olacak.
  </p>

  <div class="tutorial-flex">
    <img src="../../assets/tutorial2.png" class="tutorial-image" />

    <div class="tutorial-text">
      <p>
        Solda örnek bir resim görebilirsiniz. Bu resme göre, başlangıçta, içinde
        elli mavi top ve elli sarı top olan bir torbadan rastgele bir top
        çekiyorsunuz.
      </p>
      <p>
        Eğer bu ilk top mavi ise <b>8 puan</b> kazanırsınız ve bunun yanında,
        içerisinde 50 kırmızı ve 50 yeşil top olan başka bir torbadan bir top
        daha çekersiniz.
      </p>
      <p>
        Bu ikinci topu çekmeniz durumunda, top kırmızıysa <b>1 puan</b> daha
        (yani toplam 8+1 = 9 puan) kazanırsınız, top yeşilse
        <b>1 puan</b> kaybedersiniz (yani toplam 8-1 = 7 puan kazanırsınız) .
      </p>
      <p>
        Eğer bu ilk top sarı ise <b>8 puan</b> kazanırsıniz ve bunun yanında,
        içerisinde 50 mor ve 50 turuncu top olan başka bir torbadan bir top daha
        çekersiniz.
      </p>
      <p>
        Bu ikinci topu çekmeniz durumunda, top morsa <b>6 puan</b> daha (yani
        toplam 8+6 = 14 puan) kazanırsınız, top turuncuysa
        <b>6 puan</b> kaybedersiniz (yani toplam 8-6 = 2 puan kazanırsınız) .
      </p>
    </div>
  </div>

  <p>
    Deney turlarımıza başlamadan önce önümüzdeki oyunlarla alakalı kavrayışınıza
    dair bazı sorular yanıtlamanız gerekiyor.
  </p>
</template>

<style scoped>
.tutorial-flex {
  display: flex;
  margin: 2rem;
  /* align-items: center; */
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
