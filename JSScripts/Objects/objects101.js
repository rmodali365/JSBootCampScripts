let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`The title of the book is ${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`The title of the book is ${myBook.title} by ${myBook.author}`)

//Challenge

let myPerson = {
    
    name: 'Rushil',
    age: 18,
    location: 'Maryland'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`)
myPerson.age++
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`)
