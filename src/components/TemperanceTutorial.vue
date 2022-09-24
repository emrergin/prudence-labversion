<template>
  <div class="tutorialBox">
    <div class="column1" >
      <transition-group tag="div" name="tutorial" class="tutorialText">
        <p :key="1" v-if="step > 0">
          Bu oyunda,
          <span :style="{ visibility: step > 1 ? `visible` : `hidden` }">
            alttaki boruları</span
          >
          <span :style="{ visibility: step > 2 ? `visible` : `hidden` }">
            nerelere yerleştireceğinizi</span
          >
          <span :style="{ visibility: step > 3 ? `visible` : `hidden` }">
            seçeceksiniz.</span
          >
        </p>
        <p :key="2" v-if="step > 4">
          Alttaki borulardan birine tıklayın ve onu seçtiğiniz yere sürükleyin.
        </p>
        <p :key="3" v-if="step > 5">
          Şimdi diğer boruyu {{ remainingPlaces }}'ye yerleştirin.
        </p>
        <p :key="4" v-if="step > 6">Şimdi, topa tıklayın.</p>

        <p :key="8" v-if="step > 7">
          Top bunun gibi yol ayrımlarında <b>yüzde elli ihtimalle</b> sağa,
          <b>yüzde elli ihtimalle</b> sola gidecek.
        </p>

        <p :key="9" v-if="step > 10">
          Topun izlediği yol üzerindeki sayılar kazanacağınız ya da
          kaybedeceğiniz puanı göstermektedir.
        </p>

        <p :key="10" v-if="step > 11">
          Bu örnek turda {{ calculateOutcome() }} puan kazandınız. Her tur puanınız
          böyle belirlenecek.
        </p>

        <div :key="11" v-if="step > 12" class="centered">
          Hazırsanız başlayalım mı?
        </div>
        <div :key="12" class="centered" v-if="step > 13">
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
          { redBordered: step === 7 },
          { focused: step > 6 },
          { unfocused: step <= 6 },
        ]"
      >
        <div
          :class="[{ canbeseen: step === 8 }, { notseen: step !== 8 }]"
          class="phaseIn redArrows"
        >
          <div>◄</div>
          <div>►</div>
        </div>
        <img src="../assets/soccer_ball.svg" style="align-self: flex-end" />
      </div>
      <div
        id="bigPipe"
        src="../assets/bigpipe.svg"
        class="phaseIn"
        :class="[{ focused: step > 2 }, { unfocused: step <= 2 }]"
      >
        <div
          id="largeTags"
          class="phaseIn"
          :class="[
            { redBordered: step === 11 },
            { focused: step > 10 },
            { unfocused: step <= 10 },
          ]"
        >
          <div id="leftLargeTag" class="largeTag tag">+9</div>
          <div id="rightLargeTag" class="largeTag tag">+9</div>
        </div>
        <img src="../assets/bigpipe.svg" />
      </div>
      <div class="bigInputs">
        <div
          class="droppable2 phaseIn"
          id="i0"
          :class="[
            { redBordered: step === 3 },
            { focused: step > 2 },
            { unfocused: step <= 2 },
            { nottoseen: choices[0] },
          ]"
        >
          A
        </div>
        <div
          class="droppable2 phaseIn"
          id="i1"
          :class="[
            { redBordered: step === 3 },
            { focused: step > 2 },
            { unfocused: step <= 2 },
            { nottoseen: choices[1] },
          ]"
        >
          B
        </div>
      </div>
      <div class="bigInputs">
        <div
          class="droppable2 phaseIn"
          id="i2"
          :class="[
            { redBordered: step === 3 },
            { focused: step > 2 },
            { unfocused: step <= 2 },
            { nottoseen: (!choices[0] || choices[2]) && step !== 3 },
          ]"
        >
          C
        </div>
        <div
          class="droppable2 phaseIn"
          id="i3"
          :class="[
            { redBordered: step === 3 },
            { focused: step > 2 },
            { unfocused: step <= 2 },
            { nottoseen: (!choices[1] || choices[3]) && step !== 3 },
          ]"
        >
          D
        </div>
      </div>
      <div id="smallPipelar">
        <div
          id="smallPipe1"
          oncontextmenu="return false"
          @mousedown.left="carryPipe($event)"
          ondragstart="return false"
          class="temperancePipe"
        >
          <div
            id="smallTags1"
            class="phaseIn"
            :class="[
              { redBordered: step === 11 },
              { focused: step > 10 },
              { unfocused: step <= 10 },
            ]"
          >
            <div id="leftSmallTag1" class="kucukEtiket tag">+2</div>
            <div id="rightSmallTag1" class="kucukEtiket tag">-2</div>
          </div>
          <img
            src="../assets/smallpipe2.svg"
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
          class="temperancePipe"
        >
          <div
            id="smallTags2"
            class="phaseIn"
            :class="[
              { redBordered: step === 11 },
              { focused: step > 10 },
              { unfocused: step <= 10 },
            ]"
          >
            <div id="leftSmallTag2" class="kucukEtiket tag">+3</div>
            <div id="rightSmallTag2" class="kucukEtiket tag">-3</div>
          </div>
          <img
            src="../assets/smallpipe2.svg"
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
      choices: [null, null, null, null],
      dices: [],
      currentDroppable: null,
      remainingPlaces: ``,
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
        this.step !== 5 &&
        this.step !== 6 &&
        this.step !== 7 &&
        this.step !== 9 &&
        this.step !== 10
      ) {
        this.step++;
      }
      if (this.step === 9) {
        this.movement2();
      }
    },
    carryPipe(e) {
      if (this.step !== 5 && this.step !== 6) {
        return false;
      }
      var vm = this;
      let smallPipe = e.target.closest(`.temperancePipe`);
      let index = vm.choices.findIndex((a) => a === smallPipe.id.slice(9));
      if (index !== -1) {
        return false;
      }

      smallPipe.style.cursor = "grabbing";

      let shiftX = e.clientX - smallPipe.getBoundingClientRect().left;
      let shiftY = e.clientY - smallPipe.getBoundingClientRect().top;

      if (!document.getElementById(`fakePipe`)) {
        var fakePipe = smallPipe.cloneNode(true);
        fakePipe.id = `fakePipe`;
        fakePipe.style.visibility = "hidden";
        fakePipe.classList.remove("temperancePipe");
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

        if (!elemBelow) {return};

        let droppableBelow = elemBelow.closest(".droppable2");

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
      smallPipe.addEventListener("mouseup", onMouseUp);

      function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        smallPipe.style.cursor = "grab";

        if (vm.currentDroppable) {
          vm.currentDroppable.parentNode.insertBefore(
            smallPipe,
            vm.currentDroppable
          );
          vm.choices[vm.currentDroppable.id.slice(1)] = smallPipe.id.slice(9);
          vm.currentDroppable.remove();
          smallPipe.style.left = "0px";
          smallPipe.style.top = "0px";
          smallPipe.style.position = `relative`;
          vm.step++;

          if (vm.remainingPlaces === ``) {          
              if (vm.choices[1]) {
                vm.remainingPlaces = "A'ya veya D";
              } else {
                vm.remainingPlaces = "C'ye veya B";
              }            
          }
        }
        smallPipe.removeEventListener("mouseup", onMouseUp);
      };
      function enterDroppable(elem) {
        elem.style.background = "#F0FFF0";
      }
      function leaveDroppable(elem) {
        elem.style.background = "";
      }
    },
    movement() {
      if (this.choices.filter((a) => a).length !== 2) {
        return;
      }
      if (this.step !== 7) {
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
              { transform: `translate(0px,62px)` },
            ],
            {
              duration: 1000,
              fill: `forwards`,
              composite: `accumulate`,
            }
          )
          .persist();
        setTimeout(() => {
          vm.step++;
        }, 1000);
      }
    },
    movement2() {
      let vm = this;
      this.step++;
      let footBall = this.$refs.footBall;
      let zar = Math.floor(Math.random() * 2) + 1;
      zar === 1 ? Left1() : Right1();
      zar === 1 ? setTimeout(leftBTag, 1100) : setTimeout(rightBTag, 1100);
      vm.dices.push(zar);
      function Left1() {
        footBall
          .animate(
            [
              { transform: `translate(0px,0px) rotate(360deg)`, offset: 0 },
              { transform: `translate(-120px,0px) rotate(0deg)`, offset: 0.5 },
              {
                transform: `translate(-145px,12px) rotate(-75deg)`,
                offset: 0.625,
              },
              {
                transform: `translate(-152.5px,48px) rotate(-82.5deg)`,
                offset: 0.75,
              },
              {
                transform: `translate(-152.5px,93px) rotate(-82.5deg)`,
                offset: 1,
              },
            ],
            {
              duration: 3000,
              fill: `forwards`,
              composite: `accumulate`,
            }
          )
          .persist();
        setTimeout(continueAnimation, 3000);
      }
      function Right1() {
        footBall
          .animate(
            [
              { transform: `translate(0px,0px) rotate(0deg)`, offset: 0 },
              { transform: `translate(120px,0px) rotate(360deg)`, offset: 0.5 },
              {
                transform: `translate(145px,12px) rotate(432deg)`,
                offset: 0.625,
              },
              {
                transform: `translate(152.5px,48px) rotate(454.5deg)`,
                offset: 0.75,
              },
              {
                transform: `translate(152.5px,93px) rotate(454.5deg)`,
                offset: 1,
              },
            ],
            {
              duration: 3000,
              fill: `forwards`,
              composite: `accumulate`,
            }
          )
          .persist();
        setTimeout(continueAnimation, 3000);
      }
      function Left2() {
        footBall
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
        setTimeout(continueAnimation, 4000);
      }
      function Right2() {
        footBall
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
        setTimeout(continueAnimation, 4000);
      }
      function continueAnimation() {
        if (vm.isMovementOver()) {
          vm.step++;
        } else {
          let dice = Math.floor(Math.random() * 2) + 1;
          let relatedSmallPipe =
            vm.dices.length === 1
              ? vm.choices[vm.dices[0] - 1]
              : 3 - +vm.choices[vm.dices[0] - 1];
          dice === 1 ? Left2() : Right2();
          vm.dices.push(dice);
          setTimeout(() => {
            smallTags(relatedSmallPipe, dice);
          }, 750);
        }
      }
      function leftBTag() {
        document.getElementById(`leftLargeTag`).classList.add(`approached`);
      }
      function rightBTag() {
        document.getElementById(`rightLargeTag`).classList.add(`approached`);
      }
      function smallTags(id, yon) {
        let idtext = yon === 1 ? `leftSmallTag` : `rightSmallTag`;
        idtext += id;
        document.getElementById(idtext).classList.add(`approached`);
      }
    },
    isMovementOver() {
      let rect = this.$refs.footBall.getBoundingClientRect();
      let elemBelow = document.elementFromPoint(
        (rect.left + rect.right) / 2,
        rect.top - 5
      );
      return !elemBelow.closest(`.temperancePipe,#bigPipe`);
    },
    calculateOutcome() {
      let outcomeText = ``;
      let outcomeNumber = 0;
      const collection = document.getElementsByClassName("approached");
      if (collection.length === 1) {
        return +collection[0].textContent;
      }
      for (let tag of collection) {
        outcomeNumber += +tag.textContent;
        if (outcomeText) {
          +tag.textContent > 0
            ? (outcomeText += `+` + +tag.textContent)
            : (outcomeText += +tag.textContent);
        } else {
          +tag.textContent > 0
            ? (outcomeText += +tag.textContent)
            : (outcomeText += +tag.textContent);
        }
      }
      outcomeText += `=` + outcomeNumber;
      return outcomeText;
    },
  },
};
</script>

<style scoped>
.bigInputs {
  gap: 109px;
}

.tutorialBox{
  position: relative;
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

.redBordered {
  border: 10px solid red;
}

.tutorialBox {
  min-height: 618px;
}

</style>
