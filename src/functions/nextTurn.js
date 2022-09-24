import updateData from "./updateData";

function nextTurn(
  treatment,
  store,
  bitis,
  baslangic,
  asama,
  payOffs,
  currentRound,
  choices,
  boruClass,
  oyunSonu,
  totalRounds,
  earningForCurrentRound
) {
  if (Array.isArray(choices.value)) {
    choices.value = choices.value.map((a) => (a === null ? `_` : a));
  }
  store.veriler.push([
    treatment,
    bitis.value - baslangic.value,
    payOffs[currentRound.value],
    choices.value,
    earningForCurrentRound
  ]);
  updateData();
  if (!Array.isArray(choices.value)) {
    choices.value = null;
  } else {
    choices.value = [null, null, null, null];
  }

  earningForCurrentRound.value=0;

  const smallPipelar = document.querySelectorAll(`.${boruClass}`);
  smallPipelar.forEach((smallPipe) => smallPipe.remove());

  if (currentRound.value >= totalRounds - 1) {
    oyunSonu.value = true;
    return;
  }

  const etiketler = document.querySelectorAll(".tag");
  etiketler.forEach((tag) => tag.classList.remove(`approached`));

  document.getElementById(`fakeBall`).remove();
  document.getElementById("footBall").style.visibility = "visible";

  baslangic.value = new Date();
  asama.value = `baslangic`;
  currentRound.value++;
}

export default nextTurn;
