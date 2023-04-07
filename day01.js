//Lab1
function duplicate_string(inputString, n) {
  let rs = inputString + "-";
  rs += inputString.repeat(n - 1).split("").join("-");
  return rs;
}

console.log(duplicate_string("a",10))

//Lab2
function sum_of_multiple_of_five(){
  let result = 0
  for(i=0; i<=100; i+=5){
    result= result+i
  }
  return result
}
console.log(sum_of_multiple_of_five ())

//Lab3
function sum_of_between_two_intergers(a,b){
    let start = Math.min(a,b)
    let end = Math.max(a,b)
    let rs=0
    for(i=start+1; i<end; i++ ){
        rs= rs+i
    }
    return rs
}
console.log(sum_of_between_two_intergers(5,1))

//Lab4
function is_prime(number){
    if(number<=1) {
        return false
    }
    for(let i=2; i<=Math.sqrt(number); i++){
        if(number%i ===0){
            return false
        } 
    }
    return true
}

//Lab5
function sum_prime_number(n){
    let sum=0
    for(let i=2; i<=n; i++){
        if(is_prime(i)) {
            sum += i
        }
    }
    return sum
}

//Lab6
console.log(sum_prime_number(6))

function sum_divisor(n){
    let sum = 0
    for(i=1; i<=n; i++){
        if(is_divisor(n,i)){
            sum +=i
        }
    }
    return sum
}

//Lab7
function is_divisor(number, a){
    if(number % a==0){
        return true
    }
    return false
}
console.log(sum_divisor(6))

function find_max(a,b){
  if(a>b) console.log(a) 
  else console.log(b)
}

find_max(1,2)