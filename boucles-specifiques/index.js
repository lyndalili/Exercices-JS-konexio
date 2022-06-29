// const numbers = [1, 2, 3, 4, 5, 6, 7,8]

//  const doubles = numbers.map((number) => {
//   return (number * 2)
//  })

//  console.log(doubles)



//const longNames = [
// 	{
// 		firstName: "john",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]

// const shortNames = longNames.map((longName) => {
//   return {
//     name:  `${longName.firstName} ${longName.lastName}`
//   }
// })

// console.log(shortNames)
















03 correction benoit a revoir ce soir



const elements = [1, "toto", 34, "javascript", 8]

// 1ere methode dégueu 
// const numbers = elements.filter((element) => {
//   console.log(element)
//   return element > 0 || element <= 0
// })

// 2eme methode encore pire parce que perverse
// const numbers = elements.filter((element) => {
//   console.log(element / element === 1)
//   return element / element === 1
// })

// 3eme sans commentaires
// const numbers = elements.filter((element) => {
//   console.log(parseInt(element))
//   return parseInt(element)
// })

// Méthode clean
// const numbers = elements.filter((element) => {
//   return typeof element === "number"
// })

// console.log(numbers)

// fonction
// const filterNumbers = array => {
//   const filteredArray = array.filter((element) => {
//     return typeof element === "number"
//   })

//   return filteredArray
// }

// const exo3 = filterNumbers([1, "toto", 34, "javascript", 8])
// const exo9 = filterNumbers([12, 55, "hello", true, { isStudent: false }, 3])
// console.log(exo3)
// console.log(exo9)

// 04
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const even = numbers.filter((number) => {
//   return number % 2 === 0
// })

// console.log(even)

// 05
const cakes = [{
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]

// clean
// const chocolates = cakes.filter((cake) => {
//   return cake.flavor === "chocolate"
// })

// console.log(chocolates)

// 1ere methode dégueu
// le filter il doit juste filtrer
// et la callback elle doit juste retourner un
// boolean, et pas une assignation
// const soldOuts = chocolates.map((chocolate) => {
//   return chocolate.status = "sold out!"
// })

// 1ere methode, la plus clean
// const soldOuts = chocolates.map((chocolate) => {
//   chocolate.status = "sold out"
//   return chocolate
// })

// 2eme methode
// const soldOuts = chocolates.map((chocolate) => {
//   return {
//     name: chocolate.name,
//     flavor: chocolate.flavor,
//     status: "sold out"
//   }
// })

// console.log(soldOuts)


// 06
// const pie = cakes.find((cake) => {
//   return cake.name === "pie"
// })

// console.log(pie)

// 07 - Factorielle
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let result = 1

// numbers.forEach(number => {
//   result = result * number
// })

// console.log(result)

// 08 - Chess board
const length = [0, 1, 2, 3, 4, 5, 6, 7]

// solution tres clean - Arthur
length.forEach((line, i) => {
    let stringLine = ""

    length.forEach((square, j) => {
        if ((i + j) % 2 === 0) {
            stringLine = stringLine + `[ ]`
        } else {
            stringLine = stringLine + `[x]`
        }
    })

    console.log(stringLine)
})

// soluition dushen
// length.forEach((line, i) => {
//   let stringLine = ""

//   length.forEach((square, j) => {
//     if (i % 2 === 0) {
//       if (j % 2 === 0) {
//         stringLine = stringLine + `[ ]`
//       } else {
//         stringLine = stringLine + `[x]`
//       }
//     } else {
//       if (j % 2 !== 0) {
//         stringLine = stringLine + `[ ]`
//       } else {
//         stringLine = stringLine + `[x]`
//       }
//     }
//   })

//   console.log(stringLine)
// })