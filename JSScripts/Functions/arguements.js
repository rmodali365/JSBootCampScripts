
//multiple arguements
let add = function(num1, num2, num3){

    return num1+num2+num3
}

let result = add(12,12,12)
console.log(result)

//default arguements

let getScoreText = function(name = 'Anonymous', score = 0){

    return `Name: ${name}, Score: ${score}`
    // return 'Name: ' + name + ', Score: ' + score
}

let scoreText = getScoreText(undefined,100)
console.log(scoreText)

//Challenge

let getTip = function(total, tipPercent = 0.20){//calculate tip

    return `The total tip is ${total*tipPercent}`
    // return "The total tip is $"+(total*tipPercent)
}

let tip = getTip(25,0.5)
console.log(tip)

