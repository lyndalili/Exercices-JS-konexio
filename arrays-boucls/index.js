//const elements = ["water", "fire", "earth", "wind"]
//console.table(elements)

//const ingredients = ["eggs", "milk", "butter"]
//console.log(ingredients[1])
//console.log(ingredients[2])


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
//console.log(numbers)


//let totale = 0
//const limit = 10
//for (let i = 0; i < limit; i++) {
//console.log(i)

//}



/*const sentence = "Hello Konexio !"
for (let i = sentence.length - 1; i >= 0; sentence[i--])
console.log(sentence[i]) */



/*
for (let nombre = 1; nombre <= 100; nombre++) {

    if (nombre % 3 === 0) {

        console.log("Fizz")
    }
    if (nombre % 5 === 0) {

        console.log("Buzz")
    }
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) {
        console.log("FizzBuzz");
    }
    console.log(nombre)
}
*/




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





/*let namCollegues = ["jad", "thomas", "danh", "julien", "clara", "florez", "arthur", "edaly", "rayan", "walid1", "walid2", "aurelien", ".."]
let CollegusAll = Math.floor(Math.random() * namCollegues.length)
let collegusAleatoires = namCollegues[CollegusAll]
    //console.log(collegusAleatoires)

for (let i = 0; i < CollegusAll; i++) {
    console.log(collegusAleatoires)
}*/



let arrays = []
let max = 100
let min = 0
let namberAleatoires = Math.floor(Math.random() * (max)) + min
let addNamberArray = arrays.push(namberAleatoires)


for (let i = 0; i < 20; i++) {
    console.log(arrays)
}