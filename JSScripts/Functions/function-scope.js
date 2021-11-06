
//global scope(convert, iteration1, iteration2)
    //local scope(celsius, farenheit)
        //local scope(isFreezing)

let convert  = function(farenheit){
    let celsius = (farenheit-32)*(5/9)
    if(celsius<=0){
        let isFreezing = true
    }
    
    return celsius
}

let iteration1 = convert(32)
let iteration2= convert(68)
console.log(iteration1,iteration2)