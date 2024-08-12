import updateData from "./updateData";

function nextTurn2(
  treatment,
  store,
  end,
  start,
  phase,
  payOffs,
  currentRound,
  choice,
  oyunSonu,
  totalRounds,
  willBePaid,
  earningForCurrentRound
) {
  if (willBePaid) {
    store.kazanc += earningForCurrentRound.value;
  }
  store.veriler.push([
    treatment,
    end.value - start.value,
    payOffs[currentRound.value],
    choice.value,
    earningForCurrentRound.value,
  ]);
  // updateData();
  choice.value = null;

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
