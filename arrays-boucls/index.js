//const elements = ["water", "fire", "earth", "wind"]
//console.table(elements)

//const ingredients = ["eggs", "milk", "butter"]
//console.log(ingredients[1])
//console.log(ingredients.indexOf ("butter"))


//const objects = ["pen", "book", "lamp"]
//objects.unshift("chair")
//console.log(objects)
//objects.shift()
//console.log(objects)
//objects.push("laptop")
//console.log(objects)
//objects.pop()
//console.log(objects)



//const numbers = [4, 10, 8, 12, 6]
//numbers.reverse()
//console.table(numbers)


//let total = 0
//const limit = 10
//for (let i = 0; i <= limit; i++) {
//total=total +i

//}
//console.log(total)



/*
const sentence = "Hello Konexio !"
let sentenceReverse = ""

for (let i = sentence.length - 1; i >= 0; sentence[i--]) {
    sentenceReverse = sentenceReverse + sentence.charAt(i)
}
console.log(sentenceReverse)

*/




/*for (let nombre = 1; nombre <= 100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) {
        console.log("FizzBuzz");

    } else if (nombre % 3 === 0) {

        console.log("Fizz")
    } else if (nombre % 5 === 0) {

        console.log("Buzz")
    } else if (nombre % 7 !== 0) {

        console.log(nombre)

    }

}*/





/*let i = 1;

while (i <= 100) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
    i++;
}
*/


//08 coorection groupe

/*let total = 0
const limit = 10
i = 0
while (i <= limit) {
    total = total + i
    i++

}
console.log("totale at the end: ", total)*/



/*
let namCollegues = ["jad", "thomas", "danh", "julien", "clara", "florez", "arthur", "edaly", "rayan", "walid1", "walid2", "aurelien", ]
let min = 0
let CollegusAll = Math.floor((Math.random() * namCollegues.length) + min)
console.log(namCollegues[CollegusAll])
*/




let arraysNumbers = []


for (let i = 0; i < 20; i++) {
    const max = 101
    const min = 0
    let namberAleatoires = Math.floor(Math.random() * max) + min
    arraysNumbers.push(namberAleatoires)



}
console.log(arraysNumbers)


//10 correction groupe 


/*
let numbers = []

for (let i = 0; i < 20; i++) {
    const min = 0
    const max = 101
    const randomNumber = Math.floor(Math.random() * max) + min

    numbers.push(randomNumber)
        // => numbers[i] = randomNumber
}
let maximum = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    console.log(numbers[i])

    if (numbers[i] > maximum) {
        maximum = numbers[i]
    }
}

console.log("maximum: ", maximum)*/