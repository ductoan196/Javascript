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

//Lab2
function insert_element(arr, pos, key) {
  arr.splice(pos, 0, key);
  return arr;
}

//Lab3
function is_square(num) {
  return Math.sqrt(num) % 1 === 0;
}
function filter_square_number(arr) {
  return arr.filter(x => is_square(x));
}

//Lab4
function is_prime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return true;
}
function find_big_prime_num(arr) {
  return Math.max(...arr.filter(x => is_prime(x)));
}

//Lab5
function replace(arr) {
  for (let i = 0; i < arr.length; i++) if (arr[i] < 0) arr[i] = 0;
  return arr;
}

//Lab6
function delete_prime_num(arr) {
  return arr.filter(x => !is_prime(x));
}
