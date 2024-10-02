<template>
  <div class="tutorialBox">
    <div class="column1">
      <transition-group tag="div" name="tutorial" class="tutorialText">
        <p :key="1" v-if="step > 0">
          Bu oyunda,
          <span :style="{ visibility: step > 1 ? `visible` : `hidden` }">
            alttaki borulardan hangisini</span
          >
          <span :style="{ visibility: step > 2 ? `visible` : `hidden` }">
            işaretli yere
          </span>
          <span :style="{ visibility: step > 3 ? `visible` : `hidden` }">
            yerleştireceğinizi seçeceksiniz.</span
          >
        </p>
        <p :key="2" v-if="step > 4">
          Seçtiğiniz boruyu verilen yere sürükleyin.
        </p>
        <p :key="4" v-if="step > 5">Şimdi, topa tıklayın.</p>

        <p :key="8" v-if="step > 6">
          Top bunun gibi yol ayrımlarında <b>yüzde elli ihtimalle</b> sağa,
          <b>yüzde elli ihtimalle</b> sola gidecek.
        </p>

        <p :key="9" v-if="step > 9">
          Topun izlediği yol üzerindeki sayılar kazanacağınız ya da
          kaybedeceğiniz puanı göstermektedir.
        </p>

        <p :key="10" v-if="step > 10">
          Bu örnek turda {{ calculateOutcome() }} puan kazandınız. Her tur
          puanınız böyle belirlenecek.
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
        class="phaseIn"
        :class="[
          { redBordered: step === 6 },
          { focused: step > 5 },
          { unfocused: step <= 5 },
        ]"
      >
        <div
          :class="[{ canbeseen: step === 7 }, { notseen: step !== 7 }]"
          class="phaseIn redArrows"
        >
          <div>◄</div>
          <div>►</div>
        </div>
        <img src="../../assets/soccer_ball.svg" style="align-self: flex-end" />
      </div>

      <img
        id="girisBoru"
        src="../../assets/smallpipe3.svg"
        class="phaseIn"
        :class="[{ focused: step > 2 }, { unfocused: step <= 2 }]"
      />
      <div class="inputlar">
        <div
          class="droppable phaseIn"
          id="i1"
          :class="[
            { redBordered: step === 3 },
            { focused: step > 2 },
            { unfocused: step <= 2 },
          ]"
          :style="{ visibility: !secim ? `visible` : `hidden` }"
        >
          A
        </div>
      </div>

      <div
        id="smallPipes"
        class="canbeseen"
        :class="[{ nottoseen: step >= 6 }]"
      >
        <div
          id="smallPipe1"
          oncontextmenu="return false"
          @mousedown.left="carryPipe($event)"
          ondragstart="return false"
          class="riskPipe"
        >
          <div
            id="smallTags1"
            class="phaseIn"
            :class="[
              { redBordered: step === 10 },
              { focused: step > 9 },
              { unfocused: step <= 9 },
            ]"
          >
            <div id="leftSmallTag1" class="kucukEtiket tag">+3</div>
            <div id="rightSmallTag1" class="kucukEtiket tag">+14</div>
          </div>
          <img
            src="../../assets/smallpipe.svg"
            class="draggable phaseIn"
            oncontextmenu="return false"
            :class="[
              { redBordered: step === 2 },
              { focused: step > 1 },
              { unfocused: step <= 1 },
            ]"
          />
        </div>
        <div
          id="smallPipe2"
          oncontextmenu="return false"
          @mousedown.left="carryPipe($event)"
          ondragstart="return false"
          class="riskPipe"
        >
          <div
            id="smallTags2"
            class="phaseIn"
            :class="[
              { redBordered: step === 10 },
              { focused: step > 9 },
              { unfocused: step <= 9 },
            ]"
          >
            <div id="leftSmallTag2" class="kucukEtiket tag">+10</div>
            <div id="rightSmallTag2" class="kucukEtiket tag">+7</div>
          </div>
          <img
            src="../../assets/smallpipe.svg"
            class="draggable phaseIn"
            oncontextmenu="return false"
            :class="[
              { redBordered: step === 2 },
              { focused: step > 1 },
              { unfocused: step <= 1 },
            ]"
          />
        </div>
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
      currentDroppable: null,
    };
  },
  emits: ["end"],
  mounted: function () {
    window.addEventListener("click", this.nextStep);
  },
  beforeUnmount() {
    document.querySelectorAll(".riskPipe").forEach((e) => e.remove());
    window.removeEventListener("click", this.nextStep);
  },
  methods: {
    nextStep() {
      if (
        this.step !== 5 &&
        this.step !== 6 &&
        this.step !== 8 &&
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
      if (this.step !== 5) {
        return false;
      }
      let smallPipe = e.target.closest(`.riskPipe`);
      var vm = this;

      smallPipe.style.cursor = "grabbing";
      if (this.secim === smallPipe.id.slice(9)) {
        this.secim = null;
      }

      let shiftX = e.clientX - smallPipe.getBoundingClientRect().left;
      let shiftY = e.clientY - smallPipe.getBoundingClientRect().top;

      if (!document.getElementById(`fakePipe`)) {
        var fakePipe = smallPipe.cloneNode(true);
        fakePipe.id = `fakePipe`;
        fakePipe.style.visibility = "hidden";
        smallPipe.after(fakePipe);
      }

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
            leaveDroppable(vm.currentDroppable);
          }
          vm.currentDroppable = droppableBelow;
          if (vm.currentDroppable) {
            enterDroppable(vm.currentDroppable);
          }
        }
      }

      document.addEventListener("mousemove", onMouseMove);

      smallPipe.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        smallPipe.style.cursor = "grab";

        if (vm.currentDroppable) {
          vm.currentDroppable.parentNode.insertBefore(
            smallPipe,
            vm.currentDroppable
          );
          vm.secim = smallPipe.id.slice(9);
          vm.currentDroppable.remove();
          smallPipe.style.left = "0px";
          smallPipe.style.top = "0px";
          smallPipe.style.position = `relative`;

          if (document.querySelector("#app> .riskPipe")) {
            document.querySelector("#app> .riskPipe").remove();
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
      if (!this.secim) {
        return;
      }
      if (this.step !== 6) {
        return;
      }

      let vm = this;
      let footBall = this.$refs.footBall;
      footBall.style.zIndex = 4;
      footBall.classList.remove(`redBordered`);
      let fakeBall = footBall.cloneNode(true);
      fakeBall.id = `fakeBall`;
      fakeBall.style.visibility = "hidden";
      footBall.after(fakeBall);
      footBall.style.position = "absolute";

      Down();

      function Down() {
        footBall
          .animate(
            [
              { transform: `translate(0px,5px)` },
              { transform: `translate(0px,156px)` },
            ],
            {
              duration: 2000,
              fill: `forwards`,
              composite: `accumulate`,
            }
          )
          .persist();
        setTimeout(() => {
          vm.step++;
        }, 2000);
      }
    },
    movement2() {
      let footBall = this.$refs.footBall;
      let vm = this;
      this.step++;
      let zar = Math.floor(Math.random() * 2) + 1;
      zar === 1 ? Sol() : Sag();
      let ilgiliEtiket = ``;
      ilgiliEtiket = zar === 1 ? `leftSmallTag` : `rightSmallTag`;
      ilgiliEtiket += vm.secim;
      setTimeout(() => {
        smallTags(ilgiliEtiket);
      }, 400);
      function Sol() {
        footBall
          .animate(
            [
              { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
              {
                transform: `translate(-40px,0px) rotate(-120deg)`,
                offset: 0.25,
              },
              {
                transform: `translate(-70px,15px) rotate(-210deg)`,
                offset: 0.5,
              },
              {
                transform: `translate(-75px,35px) rotate(-225deg)`,
                offset: 0.75,
              },
              { transform: `translate(-75px,70px) rotate(-225deg)`, offset: 1 },
            ],
            {
              duration: 2000,
              fill: `forwards`,
              composite: `accumulate`,
            }
          )
          .persist();
        setTimeout(() => {
          vm.step++;
        }, 2000);
      }
      function Sag() {
        footBall
          .animate(
            [
              { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
              { transform: `translate(40px,0px) rotate(120deg)`, offset: 0.25 },
              { transform: `translate(70px,15px) rotate(210deg)`, offset: 0.5 },
              {
                transform: `translate(75px,35px) rotate(225deg)`,
                offset: 0.75,
              },
              { transform: `translate(75px,70px) rotate(225deg)`, offset: 1 },
            ],
            {
              duration: 2000,
              fill: `forwards`,
              composite: `accumulate`,
            }
          )
          .persist();
        setTimeout(() => {
          vm.step++;
        }, 2000);
      }

      function smallTags(idtext) {
        document.getElementById(idtext).classList.add(`approached`);
      }
    },
    calculateOutcome() {
      const collection = document.getElementsByClassName("approached");
      return +collection[0].textContent;
    },
  },
};
</script>

<style scoped>
#footBall,
#fakeBall {
  display: flex;
  align-items: flex-end;
  position: relative;
}

.stepButton {
  display: block;
}

.redBordered {
  border: 10px solid red;
}
.notseen {
  display: none !important;
}

#smallPipes {
  min-width: 458px;
}
</style>
