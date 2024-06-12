import updateData from "./updateData";

function nextTurn2(
  treatment,
  store,
  end,
  start,
  phase,
  payOffs,
  currentRound,
  choices,
  oyunSonu,
  totalRounds,
  earningForCurrentRound
) {
  // if (Array.isArray(choices.value)) {
  //   choices.value = choices.value.map((a) => (a === null ? `_` : a));
  // }
  store.veriler.push([
    treatment,
    end.value - start.value,
    payOffs[currentRound.value],
    choices.value,
    earningForCurrentRound.value,
  ]);
  updateData();
  // if (!Array.isArray(choices.value)) {
  choices.value = null;
  // } else {
  //   choices.value = [null, null, null, null];
  // }

  earningForCurrentRound.value = 0;

  if (currentRound.value >= totalRounds - 1) {
    oyunSonu.value = true;
    return;
  }

  start.value = new Date();
  phase.value = `baslangic`;
  currentRound.value++;
}

export default nextTurn2;
