function carryPipe(e, dropClass, asama, boruClass, currentDroppable, choices) {
  if (asama !== `baslangic`) {
    return false;
  }
  let smallPipe = e.target.closest(`.${boruClass}`);
  smallPipe.style.cursor = "grabbing";

  if (!Array.isArray(choices.value)) {
    choices.value = null;
  } else {
    let index = choices.value.findIndex((a) => a === smallPipe.id.slice(9));
    if (index !== -1 && choices.value[index + 2]) {
      return false;
    } else {
      choices.value[index] = null;
    }
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

    let droppableBelow = elemBelow.closest(`.${dropClass}`);

    if (currentDroppable.value != droppableBelow) {
      if (currentDroppable.value) {
        leaveDroppable(currentDroppable.value);
      }
      currentDroppable.value = droppableBelow;

      if (currentDroppable.value) {
        enterDroppable(currentDroppable.value);
      }
    }
  }

  document.addEventListener("mousemove", onMouseMove);
  smallPipe.addEventListener("mouseup", onMouseUp);

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    smallPipe.style.cursor = "grab";

    if (currentDroppable.value) {
      var rect = currentDroppable.value.getBoundingClientRect();
      currentDroppable.value.style.background = "";
      smallPipe.style.left = `${rect.left + window.scrollX}px`;
      smallPipe.style.top = `${rect.top + window.scrollY}px`;

      if (!Array.isArray(choices.value)) {
        if (boruClass === `riskPipe`) {
          choices.value = smallPipe.id.slice(9);
        } else {
          choices.value = currentDroppable.value.id.slice(1);
        }
      } else {
        choices.value[currentDroppable.value.id.slice(1)] =
          smallPipe.id.slice(9);
        currentDroppable.value = null;
      }
    }

    smallPipe.removeEventListener("mouseup", onMouseUp);
  }

  function enterDroppable(elem) {
    elem.style.background = "#F0FFF0";
  }
  function leaveDroppable(elem) {
    elem.style.background = "";
  }
}

export default carryPipe;
