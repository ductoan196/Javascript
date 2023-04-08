//Lab1
let arr1= [1, 2, 3, 4, 5, 6]
function sum1(arr){
    let sum =0
    for(let i=0; i<arr.length; i++)
        if(arr[i]%2!==0 && arr[i]%3===0) sum+= arr[i]
    return sum
}
console.log(sum1(arr1))

//Lab2
let arr2 = [2, 3, 4, 5, 6, 10, 12, 17];
function is_prime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return true;
}

function sum_prime_nums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) if (is_prime(arr[i])) sum += arr[i];
  return sum;
}
console.log(sum_prime_nums(arr2));

//Lab3
let arr3 = [4, 2, 5, 6, 2, 7];
function change_arr(arr) {
  for (let i = 0; i < arr3.length; i++) arr[i] = arr[i] % 2;
  return arr;
}
console.log(change_arr(arr3));

//Lab4
let arr4 = [4,2,5,6,2,7]
function is_included(arr,num){
    return arr.includes(num)
}
console.log(is_included(arr4,2))

//Lab5
function three_five_multiple_arr(){
    let arr5=[]
    for(let i=0; i<100; i++) if(i%15===0) arr.push(i)
    return arr5
}
console.log(three_five_multiple_arr())

//Lab6
let arr6= [1, 2, 4, 5, 8, 9, 11]
function prime_arr(arr){
    let arr_prime =[]
    for(let i=0; i<arr.length; i++) if(is_prime(arr[i])) arr_prime.push(arr[i])
    return arr_prime
}
console.log(prime_arr(arr6))
//Lab7: Đã có lời giải trong slide
//Lab8
let arr8 = [4, 2, 5, 6, 2, 7];
function remain_arr(arr) {
  return arr.map(x => x % 2);
}
console.log(remain_arr(arr8));

//Lab9: 
function copyString(str){
  let arr = []
  for(let i=0; i<10; i++) arr.push(str)
  return arr.join('')
}

//Lab10:
console.log(copyString('a'))
function copyString2(str){
  let arr = []
  for(let i=0; i<10; i++) arr.push(str)
  return arr.join('-')
}
console.log(copyString2('a'))