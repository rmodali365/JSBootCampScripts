
let name //undefined name

name = 'jen'

if(name === undefined){
    console.log("PLease provide a name")

}else{
    console.log(name)
}


//undefined for function arguements
//undefined as function return default value
let square = function(num){
    console.log(num)

}

let result = square()//no value given to num
console.log(result)

//null as assigned value(undefined given by system)
let age = 5
age = null

console.log(age)