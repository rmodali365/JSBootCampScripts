
let myAccount = {
    name: 'Rushil',
    expenses: 0,
    income: 0,
}

 
let addExpense = function(account, amount){
    account.expenses+=amount
}

let addIncome = function(account, amount){
    account.income+=amount
}

let resetAcc = function(account){
    account.income = 0
    account.expenses = 0
}

let getAccSummary = function(account){
    let balance = account.income - account.expenses
    return `The account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.`
}





addExpense(myAccount,2.50)
addIncome(myAccount,5)
console.log(myAccount)
let summary = getAccSummary(myAccount)
console.log(summary)
resetAcc(myAccount)
console.log(myAccount)