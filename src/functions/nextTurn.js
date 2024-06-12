import updateData from "./updateData";

function nextTurn(
  treatment,
  store,
  end,
  start,
  phase,
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
    end.value - start.value,
    payOffs[currentRound.value],
    choices.value,
    earningForCurrentRound.value,
  ]);
  updateData();
  if (!Array.isArray(choices.value)) {
    choices.value = null;
  } else {
    choices.value = [null, null, null, null];
  }

  earningForCurrentRound.value = 0;

  const smallPipes = document.querySelectorAll(`.${boruClass}`);
  smallPipes.forEach((smallPipe) => smallPipe.remove());

  if (currentRound.value >= totalRounds - 1) {
    oyunSonu.value = true;
    return;
  }

  const etiketler = document.querySelectorAll(".tag");
  etiketler.forEach((tag) => tag.classList.remove(`approached`));

  document.getElementById(`fakeBall`).remove();
  document.getElementById("footBall").style.visibility = "visible";

  start.value = new Date();
  phase.value = `baslangic`;
  currentRound.value++;
}

export default nextTurn;
