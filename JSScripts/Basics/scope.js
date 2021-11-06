//globl scope - all variables defined outside code blocks
//local scope - all variables defined inside code block


//In a scope you can access any variable defined in that scope, or in any parent/ancestor scope

let varOne = 'varOne'//global scope

if(true){
    console.log(varOne)
    let varTwo = 'varTwo' //local scope
    console.log(varTwo)
}

console.log(varTwo)