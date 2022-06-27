/*let cat = {
    name: "Garfiled",
    age: 3,
    isCute: true,

}
console.log(cat.age)

if (cat.isCute) {
    console.log("So Cut !")
}
*/

/*let cat2 = {
    name: "felix",
    isCute: false,
}

const cats = [cat, cat2]
console.log(cat2[0].age)
console.log(cat2[1].isCute)*/







/*const checkIfEven = (num) => {
    if (num % 2 == 0) {
        console.log("even")
    } else {
        c
        console.log("odd")
    }
}
checkIfEven(2)*/




/*const sum = (x, y) => {

    if (x > y) {
        console.log("X is Bigger")


    } else if (x < y) {
        console.log("y is Bigger")

    } else if (x === y) {
        console.log("both are same ")

    }
}

const Compare = sum(5, 5)*/



/*
const addUP = (num) => {
    let total = 0

    for (let i = 1; i <= num; i++) {
        total = total + i

    }
    console.log(total)
}
addUP(12)*/



/*
const conversionSeconde = (time) => {
    var reste = time
    var result = ''

    var nbJours = Math.floor(reste / (3600 * 24))
    reste -= nbJours * 24 * 3600

    var nbHours = Math.floor(reste / 3600)
    reste -= nbHours * 3600

    var nbMinutes = Math.floor(reste / 60);
    reste -= nbMinutes * 60

    var nbSeconds = reste;

    if (nbJours > 0) {
        result = result + nbJours + 'Jour'

    }

    if (nbHours > 0) {
        result = result + nbHours + ':'

    }

    if (nbMinutes > 0) {
        result = result + nbMinutes + ':'

    }

    if (nbSeconds > 0) {
        result = result + nbSeconds

    }
    console.log(result)
    return result;


}

conversionSeconde(3700)*/





/*
const generatePassword = (num) => {

    alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    random = Math.ceil(Math.random() * num);


    let passwordAleatoire = alphabet[random];
    password = ""

    for (let i = 0; i < num; i++) {
        password += passwordAleatoire


    }
    console.log(password)


}
generatePassword(8)*/



//correction 


// 07
// const generateRandomCapitalLetter = () => {
//   const min = 65
//   const max = 90 - min + 1
//   const random = Math.floor((Math.random() * max) + min)
//   const letter = String.fromCharCode(random)

//   return letter
// }

// const generatePassword = num => {
//   if (num >= 6 && num <= 15) {
//     let password = ""

//     for (let i = 0; i < num; i++) {
//       const letter = generateRandomCapitalLetter()
//       password = password + letter
//     }

//     console.log(password)
//   } else {
//     console.log("error")
//   }
// }

// generatePassword(8)

// 08
// const getDiceResult = () => {
//   const min = 1
//   const max = 6
//   const random = Math.floor(Math.random() * max) + min

//   return random
// }

// const launchDice = numberOfDice => {
//   let total = 0

//   for (let i = 0; i < numberOfDice; i++) {
//     const random = getDiceResult()
//     total = total + random
//   }

//   return total
// }

// const player1 = launchDice(5)
// const player2 = launchDice(5)

// if (player1 < player2) {
//   console.log(`Player 2 wins with ${player2}`)
// } else if (player1 > player2) {
//   console.log(`Player 1 wins with ${player1}`)
// } else {
//   console.log("Egalité")
// }