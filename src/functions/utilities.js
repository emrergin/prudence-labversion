export const checkValidityOfAllInputs = () => {
  var inputs, index;

  inputs = document.getElementsByTagName("input");
  for (index = 0; index < inputs.length; ++index) {
    inputs[index].reportValidity();
    if (!inputs[index].checkValidity()) {
      return false;
    }
  }

  return true;
};

export const getElementBelow = (node) => {
  let rect = node.getBoundingClientRect();
  node.style.display = "none";
  let elemBelow = document.elementFromPoint(
    (rect.left + rect.right) / 2,
    (rect.top + rect.bottom) / 2
  );
  node.style.display = "initial";

  return elemBelow;
};
