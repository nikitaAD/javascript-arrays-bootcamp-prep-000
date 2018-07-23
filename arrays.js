var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(arr, element){
  return arr.push(element);
}

function destructivelyAddElementToEndOfArray(array, element){
  return [element, ...arr];
}