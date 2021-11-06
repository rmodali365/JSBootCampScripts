let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return{
        summary : `${book.title} by ${book.author}`,
        pageCountSummary : `${book.title} is ${book.pageCount} pages long`
    }
}

console.log(getSummary(myBook).summary)
console.log(getSummary(otherBook).pageCountSummary)

//challenge

// let myTemp = {
//     farenheit: 0,
//     celsius: (farenheit-32)*(5/9),
//     kelvin: celsius+273.15
// }

let getTemp = function(farenheit){

    return{
        getFarenheit: `The temperature in farenheit is ${farenheit}`,
        getCelsius: `The temperature in celsius is ${(farenheit-32)*(5/9)}`,
        getKelvin: `The temperature in kelvin is ${(farenheit-32)*(5/9)+273.15}`
    }

}

console.log(getTemp(74))