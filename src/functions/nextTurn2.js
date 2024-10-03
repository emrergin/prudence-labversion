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
  endOfGame,
  willBePaid,
  earningForCurrentRound,
  practice
) {
  if (!practice) {
    if (willBePaid) {
      store.kazanc += earningForCurrentRound.value;
    }
    store.veriler.push([
      treatment,
      end.value - start.value,
      payOffs[currentRound.value],
      treatment !== "Temperance"
        ? choice.value
        : [choice.value, null, null, null],
      earningForCurrentRound.value,
    ]);
    console.log({
      round: currentRound.value + 1,
      payOffs: payOffs[currentRound.value],
      choice:
        treatment !== "Temperance"
          ? choice.value
          : [choice.value, null, null, null],
      earningForCurrentRound: earningForCurrentRound.value,
    });
    updateData();
  }
  choice.value = null;

  earningForCurrentRound.value = 0;

  if (currentRound.value >= payOffs.length - 1) {
    endOfGame.value = true;
    return;
  }

  start.value = new Date();
  phase.value = `baslangic`;
  currentRound.value++;
}

export default nextTurn2;
