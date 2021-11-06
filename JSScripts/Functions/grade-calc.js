
let gradeCalc = function(numerator,denominator){

    let score = (numerator/denominator)*100
    
    let letterGrade = ''
    if(score>=90 && score<=100){
        letterGrade = 'A'
    }
    else if(score>=80){
        letterGrade = 'B'
    }
    else if(score>=70){
        letterGrade = 'C'
    }
    else if(score>=60){
        letterGrade = 'D'
    }
    else{
        letterGrade = 'F'
    }
    
    return `You got a ${letterGrade} (${score}%)!`
}

let example1 = gradeCalc(15,20)
let example2 = gradeCalc(12,20)

console.log(example1)
console.log(example2)