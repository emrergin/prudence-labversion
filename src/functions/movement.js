function movement(e, asama, bitis, choices, totalRevenue, totalLoss, store, willBePaid, earningForCurrentRound) {
  if (!Array.isArray(choices.value)) {
    if (!choices.value) {
      return;
    }
  } else {
    if (choices.value.filter((a) => a).length !== 2) {
      return;
    }
  }
  if (asama.value !== "baslangic") {
    return;
  }
  bitis.value = new Date();
  asama.value = `tophareketi`;
  let footBall = e.target;
  let fakeBall = footBall.cloneNode(true);
  fakeBall.id = `fakeBall`;
  fakeBall.classList.remove(`clickReminder`);
  footBall.style.visibility = "hidden";
  footBall.after(fakeBall);
  fakeBall.style.position = "absolute";

  Down();

  function Down() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,5px)` },
          { transform: `translate(0px,62px)` },
        ],
        {
          duration: 1000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 1000);
  }

  function AsagiR() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,0px)` },
          { transform: `translate(0px,94px)` },
        ],
        {
          duration: 1000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 1000);
  }

  function Left1() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,0px) rotate(360deg)`, offset: 0 },
          { transform: `translate(-120px,0px) rotate(0deg)`, offset: 0.5 },
          { transform: `translate(-145px,12px) rotate(-75deg)`, offset: 0.625 },
          {
            transform: `translate(-152.5px,48px) rotate(-82.5deg)`,
            offset: 0.75,
          },
          { transform: `translate(-152.5px,93px) rotate(-82.5deg)`, offset: 1 },
        ],
        {
          duration: 3000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 3000);
  }
  function Right1() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
          { transform: `translate(120px,0px) rotate(360deg)`, offset: 0.5 },
          { transform: `translate(145px,12px) rotate(432deg)`, offset: 0.625 },
          {
            transform: `translate(152.5px,48px) rotate(454.5deg)`,
            offset: 0.75,
          },
          { transform: `translate(152.5px,93px) rotate(454.5deg)`, offset: 1 },
        ],
        {
          duration: 3000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 3000);
  }

  function Left2PR() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
          { transform: `translate(-40px,0px) rotate(-120deg)`, offset: 0.25 },
          { transform: `translate(-70px,15px) rotate(-210deg)`, offset: 0.5 },
          { transform: `translate(-75px,35px) rotate(-225deg)`, offset: 0.75 },
          { transform: `translate(-75px,70px) rotate(-225deg)`, offset: 1 },
        ],
        {
          duration: 2000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 2000);
  }
  function Right2PR() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
          { transform: `translate(40px,0px) rotate(120deg)`, offset: 0.25 },
          { transform: `translate(70px,15px) rotate(210deg)`, offset: 0.5 },
          { transform: `translate(75px,35px) rotate(225deg)`, offset: 0.75 },
          { transform: `translate(75px,70px) rotate(225deg)`, offset: 1 },
        ],
        {
          duration: 2000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 2000);
  }

  function Left2T() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
          {
            transform: `translate(-40px,0px) rotate(-120deg)`,
            offset: 0.125,
          },
          {
            transform: `translate(-70px,15px) rotate(-210deg)`,
            offset: 0.25,
          },
          {
            transform: `translate(-75px,35px) rotate(-225deg)`,
            offset: 0.375,
          },
          {
            transform: `translate(-70px,63px) rotate(-210deg)`,
            offset: 0.5,
          },
          {
            transform: `translate(-40px,76px) rotate(-120deg)`,
            offset: 0.625,
          },
          { transform: `translate(0px,90px) rotate(0deg)`, offset: 0.75 },
          { transform: `translate(0px,166px) rotate(0deg)`, offset: 1 },
        ],
        {
          duration: 4000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 4000);
  }
  function Right2T() {
    fakeBall
      .animate(
        [
          { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
          {
            transform: `translate(40px,0px) rotate(120deg)`,
            offset: 0.125,
          },
          {
            transform: `translate(70px,15px) rotate(210deg)`,
            offset: 0.25,
          },
          {
            transform: `translate(75px,35px) rotate(225deg)`,
            offset: 0.375,
          },
          { transform: `translate(70px,63px) rotate(210deg)`, offset: 0.5 },
          {
            transform: `translate(40px,76px) rotate(120deg)`,
            offset: 0.625,
          },
          { transform: `translate(0px,90px) rotate(0deg)`, offset: 0.75 },
          { transform: `translate(0px,166px) rotate(0deg)`, offset: 1 },
        ],
        {
          duration: 4000,
          fill: `forwards`,
          composite: `accumulate`,
        }
      )
      .persist();
    setTimeout(nextAnimation, 4000);
  }

  function nextAnimation() {
    let rect = fakeBall.getBoundingClientRect();
    fakeBall.style.display = "none";
    let elemBelow = document.elementFromPoint(
      // rect.left - 5,
      // (rect.top + rect.bottom) / 2
      (rect.left + rect.right) / 2,
      (rect.top + rect.bottom) / 2
    );
    fakeBall.style.display = "block";
    let zar = Math.floor(Math.random() * 2) + 1;

    if (elemBelow.closest(`.smallPipe,.riskBoru`)) {
      zar === 1 ? Left2PR() : Right2PR();
      zar === 1
        ? etiketBoya(elemBelow.closest(`.smallPipe,.riskBoru`), `sol`, 600)
        : etiketBoya(elemBelow.closest(`.smallPipe,.riskBoru`), `sag`, 600);
      return false;
    }
    if (elemBelow.closest(`.temperancePipe`)) {
      zar === 1 ? Left2T() : Right2T();
      zar === 1
        ? etiketBoya(elemBelow.closest(`.temperancePipe`), `sol`, 600)
        : etiketBoya(elemBelow.closest(`.temperancePipe`), `sag`, 600);

      return false;
    }
    if (elemBelow.closest(`#girisBoru`)) {
      AsagiR();
      return false;
    }
    if (elemBelow.closest(`#bigPipe`)) {
      zar === 1 ? Left1() : Right1();
      let etiketler = document.getElementById(`largeTags`);
      zar === 1
        ? etiketBoya(etiketler, `sol`, 1100)
        : etiketBoya(etiketler, `sag`, 1100);

      return false;
    }

    asama.value = `roundsonu`;
    const collection = document.getElementsByClassName("approached");
    for (let tag of collection) {
      if (+tag.textContent > 0) {
        totalRevenue.value += +tag.textContent;
        // store.kazanc += +tag.textContent;
        earningForCurrentRound.value += +tag.textContent;
      } else {
        totalLoss.value += -tag.textContent;
        // store.kazanc += +tag.textContent;
        earningForCurrentRound.value += +tag.textContent;
      }
    }

    if (willBePaid){
      store.kazanc += earningForCurrentRound.value;
    }
  }

  function etiketBoya(obje, yon, time) {
    setTimeout(() => {
      obje.querySelector(`.${yon}tag`).classList.add(`approached`);
    }, time);
  }
}

export default movement;
