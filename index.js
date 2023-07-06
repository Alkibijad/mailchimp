let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];

function firstHalf() {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    newArray.push(array[i]);
  }
}
function secondHalf() {
  for (let i = array.length - 1; i > Math.floor(array.length / 2) - 1; i--) {
    newArray.push(array[i]);
  }
}
firstHalf();
secondHalf();

console.log(newArray);
