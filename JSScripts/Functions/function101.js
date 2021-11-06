

let greetUser = function(){
    console.log('Welcome User')
}

greetUser()

let square = function(num){
    let squaredNum = num*num
    return squaredNum
}

console.log(square(3))


//challenge

//convert Farenheit to Celsius

let convert  = function(farenheit){
    let celsius = (farenheit-32)*(5/9)
    return celsius
}

let iteration1 = convert(32)
let iteration2 = convert(68)
console.log(iteration1,iteration2)