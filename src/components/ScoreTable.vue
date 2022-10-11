<template>
  <ul class="plainList" id="oyunVerileri">
    <li>
      <span>Tur </span
      ><span class="veriKare" id="oyunRound">{{
        currentRound + 1 + `/` + totalRounds
      }}</span>
    </li>
    <li>
    <span>Oyun </span
      ><span class="veriKare" id="currentGame">{{
        currentGame + `/` + `3`
      }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: [
    `currentGame`,
    `currentRound`,
    `totalRounds`,
  ],
};
</script>
<style>
.plainList {
  list-style-type: none;
  padding-left: 0px;
}

#oyunVerileri {
  background-color: #d0d0d0;
  padding: 10px;
  display: flex;
  gap: 10px;
  margin-top: 0px;
}

.veriKare {
  padding: 5px 10px;
  background-color: #f7f7f7;
}
</style>
