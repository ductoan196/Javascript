//Lab1: 
let arr1= [1,2,3,4,5]
function checkElementExist(arr,num){
    return arr.includes(num)
}
console.log(checkElementExist(arr1,5))
console.log(checkElementExist(arr1,6))

//Lab2: 
let arr2 = [1, 2, 3, 4, 5];
function getElementGreater(arr, num) {
  return arr.filter(x => x > num);
}
console.log(getElementGreater(arr2, 3));
console.log(getElementGreater(arr2, 5));

//Lab3: 