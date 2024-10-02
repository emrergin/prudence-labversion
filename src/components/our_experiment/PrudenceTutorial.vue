<template>
  <div class="tutorialBox">
    <div class="column1">
      <transition-group tag="div" name="tutorial" class="tutorialText">
        <p :key="5" v-if="step > 0">
          Bu oyunda,
          <span :style="{ visibility: step > 1 ? `visible` : `hidden` }">
            alttaki boruyu</span
          >
          <span :style="{ visibility: step > 2 ? `visible` : `hidden` }">
            üstteki borunun</span
          >
          <span :style="{ visibility: step > 3 ? `visible` : `hidden` }">
            hangi ucuna</span
          >
          <span :style="{ visibility: step > 4 ? `visible` : `hidden` }">
            takacağınızı seçeceksiniz.</span
          >
        </p>
        <p :key="6" v-if="step > 5">
          Alttaki boruya tıklayın ve onu seçtiğiniz yere sürükleyin.
        </p>
        <p :key="7" v-if="step > 6">Şimdi, topa tıklayın.</p>
        <p :key="8" v-if="step > 7">
          Top bunun gibi yol ayrımlarında <b>yüzde elli ihtimalle</b> sağa,
          <b>yüzde elli ihtimalle</b> sola gidecek.
        </p>
        <p :key="9" v-if="step > 9">
          Topun izlediği yol üzerindeki sayılar kazanacağınız ya da
          kaybedeceğiniz puanı göstermektedir.
        </p>
        <p :key="10" v-if="step > 10">
          Bu örnek turda
          {{
            odenek[durum - 1].length === 1
              ? odenek[durum - 1][0]
              : `${odenek[durum - 1][0]}${odenek[durum - 1][1]}=${
                  odenek[durum - 1][2]
                }`
          }}
          puan kazandınız. Her tur puanınız böyle belirlenecek.
        </p>
        <div :key="11" v-if="step > 11" class="centered">
          Hazırsanız başlayalım mı?
        </div>
        <div :key="12" class="centered" v-if="step > 12">
          <button @click="$emit('end', true)" class="stepButton">
            Hazırım!
          </button>
        </div>
      </transition-group>
    </div>

    <div class="column2" id="sut2">
      <div
        id="footBall"
        ref="footBall"
        oncontextmenu="return false"
        @click="movement()"
      >
        <div
          :class="[{ canbeseen: step === 8 }, { notseen: step !== 8 }]"
          class="phaseIn redArrows"
        >
          <div>◄</div>
          <div>►</div>
        </div>
        <img
          src="../../assets/soccer_ball.svg"
          style="align-self: flex-end"
          id="topResim"
          :class="[
            { redBordered: step === 7 },
            { focused: step > 6 },
            { unfocused: step <= 6 },
          ]"
          class="phaseIn"
        />
      </div>
      <div
        id="bigPipe"
        class="phaseIn"
        :class="[
          { redBordered: step === 3 },
          { focused: step > 2 },
          { unfocused: step <= 2 },
        ]"
      >
        <div
          id="largeTags"
          class="phaseIn"
          :class="[
            { redBordered: step === 10 },
            { focused: step > 9 },
            { unfocused: step <= 9 },
          ]"
        >
          <div id="leftLargeTag" class="largeTag tag">+7</div>
          <div id="rightLargeTag" class="largeTag tag">+4</div>
        </div>
        <img src="../../assets/bigpipe.svg" />
      </div>
      <div id="inputlar">
        <div
          class="droppable phaseIn"
          id="i1"
          :class="[
            { redBordered: step === 4 },
            { focused: step > 3 },
            { unfocused: step <= 3 },
          ]"
        >
          A
        </div>
        <div
          class="droppable phaseIn"
          id="i2"
          :class="[
            { redBordered: step === 4 },
            { focused: step > 3 },
            { unfocused: step <= 3 },
          ]"
        >
          B
        </div>
      </div>
      <div
        id="smallPipe"
        ref="smallPipe"
        oncontextmenu="return false"
        @mousedown.left="carryPipe($event)"
        ondragstart="return false"
        class="draggable phaseIn"
        :class="[
          { redBordered: step === 2 },
          { focused: step > 1 },
          { unfocused: step <= 1 },
        ]"
      >
        <div
          id="smallTags"
          class="phaseIn"
          :class="[
            { redBordered: step === 10 },
            { focused: step > 9 },
            { unfocused: step <= 9 },
          ]"
        >
          <div id="leftSmallTag" class="kucukEtiket tag">+2</div>
          <div id="rightSmallTag" class="kucukEtiket tag">-2</div>
        </div>
        <img src="../../assets/smallpipe.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      secim: null,
      durum: null,
      odenek: [[4, -2, 2], [4, `+2`, 6], [4], [7, `+2`, 9], [7, -2, 5], [7]],
    };
  },
  emits: ["end"],
  mounted: function () {
    window.addEventListener("click", this.nextStep);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.nextStep);
  },
  methods: {
    nextStep() {
      if (
        this.step !== 6 &&
        this.step !== 7 &&
        this.step !== 8 &&
        this.step !== 9
      ) {
        this.step++;
      }
      if (this.step === 8) {
        this.movement2();
      }
    },
    carryPipe(e) {
      if (this.step !== 6) {
        return false;
      }
      let smallPipe = this.$refs.smallPipe;
      var vm = this;
      smallPipe.style.cursor = "grabbing";

      let shiftX = e.clientX - smallPipe.getBoundingClientRect().left;
      let shiftY = e.clientY - smallPipe.getBoundingClientRect().top;

      smallPipe.style.position = "absolute";
      smallPipe.style.zIndex = 3;
      document.getElementById(`app`).append(smallPipe);

      moveAt(e.pageX, e.pageY);

      function moveAt(pageX, pageY) {
        smallPipe.style.left = pageX - shiftX + "px";
        smallPipe.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        smallPipe.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);

        smallPipe.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest(".droppable");

        if (vm.currentDroppable != droppableBelow) {
          if (vm.currentDroppable) {
            // null when we were not over a droppable before this event
            leaveDroppable(vm.currentDroppable);
          }
          vm.currentDroppable = droppableBelow;
          if (vm.currentDroppable) {
            // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(vm.currentDroppable);
          }
        }
      }

      document.addEventListener("mousemove", onMouseMove);

      smallPipe.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        smallPipe.style.cursor = "grab";

        if (vm.currentDroppable) {
          vm.currentDroppable.style.background = "";
          vm.currentDroppable.parentNode.insertBefore(
            smallPipe,
            vm.currentDroppable
          );
          vm.secim = vm.currentDroppable.id.slice(1);
          vm.currentDroppable.remove();
          smallPipe.style.left = "0px";
          smallPipe.style.top = "0px";
          smallPipe.style.position = `relative`;
          const collection = document.getElementsByClassName("droppable");
          for (let i = 0; i < collection.length; i++) {
            collection[i].style.visibility = "hidden";
          }
          vm.step++;
        }
        smallPipe.onmouseup = null;
      };
      function enterDroppable(elem) {
        elem.style.background = "#F0FFF0";
      }
      function leaveDroppable(elem) {
        elem.style.background = "";
      }
    },
    movement() {
      if (!this.secim || !(this.step === 7)) {
        return;
      }
      let footBall = this.$refs.footBall;
      footBall.style.zIndex = 4;
      document.getElementById(`topResim`).classList.remove(`redBordered`);
      let fakeBall = footBall.cloneNode(true);
      fakeBall.id = `fakeBall`;
      fakeBall.style.visibility = "hidden";

      footBall.after(fakeBall);
      footBall.style.position = "absolute";

      footBall.classList.add(`asagiHareketli0PT`);

      footBall.onanimationend = () => {
        this.step++;
      };
    },
    movement2() {
      this.step++;
      let footBall = this.$refs.footBall;
      let zar = Math.floor(Math.random() * 100);
      footBall.classList.remove(`asagiHareketli0PT`);

      if (this.secim === `2`) {
        if (zar > 75) {
          footBall.classList.add(`asagiHareketli1PT`);
          this.durum = 1;
          setTimeout(rightBTag, 1100);
          setTimeout(sagKEtiket, 2650);
        } else if (zar > 50) {
          footBall.classList.add(`asagiHareketli2PT`);
          this.durum = 2;
          setTimeout(rightBTag, 1100);
          setTimeout(solKEtiket, 2650);
        } else {
          footBall.classList.add(`asagiHareketli6PT`);
          this.durum = 6;
          setTimeout(leftBTag, 1100);
        }
      }
      if (this.secim === `1`) {
        if (zar > 75) {
          footBall.classList.add(`asagiHareketli4PT`);
          this.durum = 4;
          setTimeout(leftBTag, 1100);
          setTimeout(solKEtiket, 2650);
        } else if (zar > 50) {
          footBall.classList.add(`asagiHareketli5PT`);
          this.durum = 5;
          setTimeout(leftBTag, 1100);
          setTimeout(sagKEtiket, 2650);
        } else {
          footBall.classList.add(`asagiHareketli3PT`);
          this.durum = 3;
          setTimeout(rightBTag, 1100);
        }
      }

      footBall.onanimationend = () => {
        this.step++;
      };

      function leftBTag() {
        document.getElementById(`leftLargeTag`).classList.add(`approached`);
      }
      function rightBTag() {
        document.getElementById(`rightLargeTag`).classList.add(`approached`);
      }
      function solKEtiket() {
        document.getElementById(`leftSmallTag`).classList.add(`approached`);
      }
      function sagKEtiket() {
        document.getElementById(`rightSmallTag`).classList.add(`approached`);
      }
    },
  },
};
</script>
<style>
.tutorialBox {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  margin: 0px;
  min-height: 568px;
  justify-content: center;
  gap: 12ch;
  padding: 20px;
  padding-top: 8ch;
}

.tutorial-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.tutorial-enter-to {
  opacity: 1;
  transform: scale(1);
}

.tutorial-enter-active {
  transition: all 0.5s ease;
}

.tutorialText {
  text-align: left;
  margin-right: auto;
}

.centered {
  text-align: center;
}

.column1 {
  padding-left: 10ch;
  padding-right: 10ch;
  inline-size: 70ch;
  max-width: 66%;
}

.column2 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  scale: 0.8;
}
.droppable.redBordered,
.droppable2.redBordered,
.redBordered {
  border: 10px solid red;
}

.focused {
  opacity: 1;
}

.unfocused {
  opacity: 0.5;
}

.phaseIn {
  transition: all 0.5s ease-in;
}
.redArrows {
  color: red;
  font-size: 50px;
  position: absolute;
  display: flex;
  left: -45px;
  top: -7px;
  gap: 30px;
  justify-content: space-between;
}

.canbeseen {
  display: flex;
}
.notseen {
  display: none;
}
.asagiHareketli0PT {
  position: absolute;
  -webkit-animation: PTtoDown0 1000ms linear 1;
  animation: PTtoDown0 1000ms linear 1;
  animation-fill-mode: forwards;
}

.asagiHareketli1PT {
  position: absolute;
  -webkit-animation: PTtoDown1 4000ms linear 1;
  animation: PTtoDown1 4000ms linear 1;
  animation-fill-mode: forwards;
}

.asagiHareketli2PT {
  position: absolute;
  -webkit-animation: PTtoDown2 4000ms linear 1;
  animation: PTtoDown2 4000ms linear 1;
  animation-fill-mode: forwards;
}

.asagiHareketli3PT {
  position: absolute;
  -webkit-animation: PTtoDown3 3000ms linear 1;
  animation: PTtoDown3 3000ms linear 1;
  animation-fill-mode: forwards;
}

.asagiHareketli4PT {
  position: absolute;
  -webkit-animation: PTtoDown4 4000ms linear 1;
  animation: PTtoDown4 4000ms linear 1;
  animation-fill-mode: forwards;
}

.asagiHareketli5PT {
  position: absolute;
  -webkit-animation: PTtoDown5 4000ms linear 1;
  animation: PTtoDown5 4000ms linear 1;
  animation-fill-mode: forwards;
}

.asagiHareketli6PT {
  position: absolute;
  -webkit-animation: PTtoDown6 3000ms linear 1;
  animation: PTtoDown6 3000ms linear 1;
  animation-fill-mode: forwards;
}

@-webkit-keyframes PTtoDown0 {
  0% {
    transform: translate(0px, 5px) rotate(0deg);
  }
  100% {
    transform: translate(0px, 62px) rotate(0deg);
  }
}
@keyframes PTtoDown0 {
  0% {
    transform: translate(0px, 5px) rotate(0deg);
  }
  100% {
    transform: translate(0px, 62px) rotate(0deg);
  }
}
@keyframes PTtoDown1 {
  0% {
    transform: translate(0px, 62px) rotate(0deg);
  }
  33% {
    transform: translate(120px, 62px) rotate(360deg);
  }
  42% {
    transform: translate(145px, 78px) rotate(432deg);
  }
  50% {
    transform: translate(152.5px, 110px) rotate(454.5deg);
  }
  67% {
    transform: translate(152.5px, 155px) rotate(454.5deg);
  }
  83% {
    transform: translate(212.5px, 155px) rotate(634.5deg);
  }
  98% {
    transform: translate(230px, 200px) rotate(732deg);
  }
  100% {
    transform: translate(230px, 220px) rotate(732deg);
  }
}
@-webkit-keyframes PTtoDown1 {
  0% {
    transform: translate(0px, 62px) rotate(0deg);
  }
  33% {
    transform: translate(120px, 62px) rotate(360deg);
  }
  42% {
    transform: translate(145px, 78px) rotate(432deg);
  }
  50% {
    transform: translate(152.5px, 110px) rotate(454.5deg);
  }
  67% {
    transform: translate(152.5px, 155px) rotate(454.5deg);
  }
  83% {
    transform: translate(212.5px, 155px) rotate(634.5deg);
  }
  98% {
    transform: translate(230px, 200px) rotate(732deg);
  }
  100% {
    transform: translate(230px, 220px) rotate(732deg);
  }
}

@-webkit-keyframes PTtoDown2 {
  0% {
    transform: translate(0px, 62px) rotate(0deg);
  }
  33% {
    transform: translate(120px, 62px) rotate(360deg);
  }
  42% {
    transform: translate(145px, 78px) rotate(432deg);
  }
  50% {
    transform: translate(152.5px, 110px) rotate(454.5deg);
  }
  67% {
    transform: translate(152.5px, 155px) rotate(454.5deg);
  }
  83% {
    transform: translate(92.5px, 155px) rotate(274.5deg);
  }
  98% {
    transform: translate(75px, 200px) rotate(327deg);
  }
  100% {
    transform: translate(75px, 220px) rotate(327deg);
  }
}

@-webkit-keyframes PTtoDown3 {
  0% {
    transform: translate(0px, 62px) rotate(0deg);
  }
  50% {
    transform: translate(120px, 62px) rotate(360deg);
  }
  62% {
    transform: translate(145px, 78px) rotate(432deg);
  }
  75% {
    transform: translate(152.5px, 110px) rotate(454.5deg);
  }
  100% {
    transform: translate(152.5px, 155px) rotate(454.5deg);
  }
}

@-webkit-keyframes PTtoDown4 {
  0% {
    transform: translate(0px, 62px) rotate(360deg);
  }
  33% {
    transform: translate(-120px, 62px) rotate(0deg);
  }
  42% {
    transform: translate(-145px, 78px) rotate(-75deg);
  }
  50% {
    transform: translate(-152.5px, 110px) rotate(-82.5deg);
  }
  67% {
    transform: translate(-152.5px, 155px) rotate(-82.5deg);
  }
  83% {
    transform: translate(-212.5px, 155px) rotate(-262.5deg);
  }
  98% {
    transform: translate(-230px, 200px) rotate(-315deg);
  }
  100% {
    transform: translate(-230px, 220px) rotate(-315deg);
  }
}

@-webkit-keyframes PTtoDown5 {
  0% {
    transform: translate(0px, 62px) rotate(360deg);
  }
  33% {
    transform: translate(-120px, 62px) rotate(0deg);
  }
  42% {
    transform: translate(-145px, 78px) rotate(-75deg);
  }
  50% {
    transform: translate(-152.5px, 110px) rotate(-82.5deg);
  }
  67% {
    transform: translate(-152.5px, 155px) rotate(-82.5deg);
  }
  83% {
    transform: translate(-92.5px, 155px) rotate(97.5deg);
  }
  98% {
    transform: translate(-75px, 200px) rotate(150deg);
  }
  100% {
    transform: translate(-75px, 220px) rotate(150deg);
  }
}

@-webkit-keyframes PTtoDown6 {
  0% {
    transform: translate(0px, 62px) rotate(360deg);
  }
  50% {
    transform: translate(-120px, 62px) rotate(0deg);
  }
  62% {
    transform: translate(-145px, 78px) rotate(-75deg);
  }
  75% {
    transform: translate(-152.5px, 110px) rotate(-82.5deg);
  }
  100% {
    transform: translate(-152.5px, 155px) rotate(-82.5deg);
  }
}
@keyframes PTtoDown2 {
  0% {
    transform: translate(0px, 62px) rotate(0deg);
  }
  33% {
    transform: translate(120px, 62px) rotate(360deg);
  }
  42% {
    transform: translate(145px, 78px) rotate(432deg);
  }
  50% {
    transform: translate(152.5px, 110px) rotate(454.5deg);
  }
  67% {
    transform: translate(152.5px, 155px) rotate(454.5deg);
  }
  83% {
    transform: translate(92.5px, 155px) rotate(274.5deg);
  }
  98% {
    transform: translate(75px, 200px) rotate(327deg);
  }
  100% {
    transform: translate(75px, 220px) rotate(327deg);
  }
}

@keyframes PTtoDown3 {
  0% {
    transform: translate(0px, 62px) rotate(0deg);
  }
  50% {
    transform: translate(120px, 62px) rotate(360deg);
  }
  62% {
    transform: translate(145px, 78px) rotate(432deg);
  }
  75% {
    transform: translate(152.5px, 110px) rotate(454.5deg);
  }
  100% {
    transform: translate(152.5px, 155px) rotate(454.5deg);
  }
}

@keyframes PTtoDown4 {
  0% {
    transform: translate(0px, 62px) rotate(360deg);
  }
  33% {
    transform: translate(-120px, 62px) rotate(0deg);
  }
  42% {
    transform: translate(-145px, 78px) rotate(-75deg);
  }
  50% {
    transform: translate(-152.5px, 110px) rotate(-82.5deg);
  }
  67% {
    transform: translate(-152.5px, 155px) rotate(-82.5deg);
  }
  83% {
    transform: translate(-212.5px, 155px) rotate(-262.5deg);
  }
  98% {
    transform: translate(-230px, 200px) rotate(-315deg);
  }
  100% {
    transform: translate(-230px, 220px) rotate(-315deg);
  }
}

@keyframes PTtoDown5 {
  0% {
    transform: translate(0px, 62px) rotate(360deg);
  }
  33% {
    transform: translate(-120px, 62px) rotate(0deg);
  }
  42% {
    transform: translate(-145px, 78px) rotate(-75deg);
  }
  50% {
    transform: translate(-152.5px, 110px) rotate(-82.5deg);
  }
  67% {
    transform: translate(-152.5px, 155px) rotate(-82.5deg);
  }
  83% {
    transform: translate(-92.5px, 155px) rotate(97.5deg);
  }
  98% {
    transform: translate(-75px, 200px) rotate(150deg);
  }
  100% {
    transform: translate(-75px, 220px) rotate(150deg);
  }
}

@keyframes PTtoDown6 {
  0% {
    transform: translate(0px, 62px) rotate(360deg);
  }
  50% {
    transform: translate(-120px, 62px) rotate(0deg);
  }
  62% {
    transform: translate(-145px, 78px) rotate(-75deg);
  }
  75% {
    transform: translate(-152.5px, 110px) rotate(-82.5deg);
  }
  100% {
    transform: translate(-152.5px, 155px) rotate(-82.5deg);
  }
}
</style>

<style scoped>
.centered {
  margin-top: 30px;
  margin-bottom: -40px;
}

#inputlar {
  gap: 109px;
}

#footBall,
#fakeBall {
  display: flex;
  align-items: flex-end;
  position: relative;
}

.stepButton {
  display: block;
}
</style>
