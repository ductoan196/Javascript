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
let arr3 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
function getHex(){
    let color ='#'
    for(let i=0; i<6;i++)
    color += arr3[Math.floor(Math.random()*16)]
    return color
}
console.log(getHex())