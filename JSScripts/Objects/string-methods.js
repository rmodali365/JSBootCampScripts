let name = 'Rushil Modali'

//string length property
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())//does not affect the original

//convert to lowercase
console.log(name.toLowerCase())

//includes method

let pass = 'abc123password098'
console.log(pass.includes('abc'))

//trim method

let form = '   data     '
console.log(form)
let newForm = form.trim()
console.log(newForm)

let isValidPassword = function(password){
    let trimmedPass = password.trim()
    if(trimmedPass.length>8 && !trimmedPass.includes('password')){
        return true
    }
    else{
        return false
    }
}
console.log(isValidPassword("     sdlkfpasswordjhkjh       "))
console.log(isValidPassword("     sdjhkjh       "))
console.log(isValidPassword("     sdlkfpaskjh       "))


