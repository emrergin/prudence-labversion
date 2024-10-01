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
  willBePaid,
  earningForCurrentRound,
  deneme
) {
  if (!deneme) {
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
    console.log(store.veriler);
    updateData();
  }
  choice.value = null;

  earningForCurrentRound.value = 0;

  if (currentRound.value >= payOffs.length - 1) {
    oyunSonu.value = true;
    return;
  }

  start.value = new Date();
  phase.value = `baslangic`;
  currentRound.value++;
}

export default nextTurn2;
