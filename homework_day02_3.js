//Lab1: 
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}

function multiple(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) result *= arr[i];
  return result;
}

function average(arr){
  return result= sum(arr)/arr.length
}

function bigger_key(arr, key){
  return arr.filter(x => x>key)
}