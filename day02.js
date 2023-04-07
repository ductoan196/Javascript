//Lab1: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn.
function find_max(a,b){
    console.log(Math.max(a,b))
}
find_max(3,1)

//Lab2: Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
function is_even(number){
    if(number%2 ===0){
       return console.log("Số chẵn")
    }
    return console.log("Số lẻ")
}
is_even(4)

//Lab3: Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không.
function is_multiple_three_and_five(number){
    if(number%15 ===0){
        return true
    }
    return false
}
console.log(is_multiple_three_and_five(45))

//Lab4: Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?
function check_sum(a,b,c){
    if(c==(a+b)){
        return true
    }
    return false
}
console.log(check_sum(1,2,3))
//Lab5:
function check_mark(mark){
    if(mark >= 85){
        console.log("A")
    }
    else if(mark>=70){
        console.log("B")
    }
    else if(mark>=40){
        console.log("C")
    }
    else{
        console.log("D")
    }
}
check_mark(60)

//Lab6: 
let day = 1

switch(day){
    case 0: {
        console.log("Hôm nay là chủ nhật")
        break
    }
    case 1: {
        console.log("Hôm nay là thứ 2")
        break
    }
    case 2: {
        console.log("Hôm nay là thứ 3")
        break
    }
    case 3: {
        console.log("Hôm nay là thứ 4")
        break
    }
    case 4: {
        console.log("Hôm nay là thứ 5")
        break
    }
    case 5: {
        console.log("Hôm nay là thứ 6")
        break
    }
    case 6: {
        console.log("Hôm nay là thứ 7")
        break
    }
    default :{
        console.log("Không có ngày phù hợp")
        break
    }
}

//Lab7: 
let month = 8;

switch(month) {
  case 1:
  case 2:
  case 3:
    console.log("Mùa xuân");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Mùa hạ");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Mùa thu");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Mùa đông");
    break;
  default:
    season = "Không hợp lệ";
}

function sum1(arr){
    let sum= 0
    for(let i=0; i<arr.length; i++){
        if(is_prime(arr[i])) sum+= arr[i]
    }
    return sum
}
console.log(sum1(arr))

let arr=[1,2,4,5,6,8]

function insertElement(arr,n,x, pos){
    var i = n
    for(i; i>=pos; i--){
        arr[i+1] = arr[i]
    }
    arr[pos] =x
}
insertElement(arr,2,8,2)
console.log(arr)

