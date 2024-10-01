export default function shuffle(array) {
  let resArray = array;
  for (let i = resArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [resArray[i], resArray[j]] = [resArray[j], resArray[i]];
  }
  return resArray;
}
