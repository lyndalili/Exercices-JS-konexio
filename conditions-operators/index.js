//const test = 142
//const bis = 219
//if (test === bis) {
// console.log("test est egale à bis ")

//} else {
// console.log("test n'est pas egale à bis ")
//}

//const test = 142
//const bis = 219
//if (test < bis) {
// console.log("test est superieur à bis ")

//} else {
// console.log("test est inferieur à bis ")
//}


//const limit = 58
//const score = 64
//if (score >= limit) {
// console.log("Ok Good! ")

//} else {
// console.log("Oh noo...")
//}


//const password = "azerty"
//if (password == 5) {
// console.log("the password is secure")

//} else {
//console.log("the password is not secure")
//}




//const roundedNumber = [1, 2, 3, 4, 5, 6]
//const rand = Math.floor(Math.random() * roundedNumber);
//const rValue = roundedNumber[rand];

//if (rValue == 6) {
//console.log("yes I win !")

//} else {
// console.log("So close")
//}


///const month = "January"
//switch (month) {
// case "march":
//  console.log("spring")
// break;
//case "August":
//console.log("Summer")
// break;
//case "Novembre":
// console.log("Autumn")
// break;
// case "January":
//console.log("winter")
// break;
// default:
//console.log("That's not a season...")
//}






//08 - Rounded but better, Méthode 2
//const roundedNumber = 4.8;
//const stringNumber = roundedNumber.toString()    ///transformer en string
//const firstPosition = stringNumber.indexOf('.') + 1   ///chercher la position du point et la position
//const secondPosition = stringNumber.length
//const thePosition = stringNumber.substring(firstPosition, secondPosition)

//if (thePosition >= 5) {
// console.log(6)


//} else {
// console.log(4)
//}




//09 - Rounded but better, Méthode 3 (2methode)
//const roundedNumber = 5.4
//let decimalPart = roundedNumber.toString().split(".")[1]


//if (decimalPart >= 5) {
// console.log(Math.ceil(roundedNumber))

//} else {
// console.log(Math.floor(roundedNumber))

//}


//09 - Rounded but better, Méthode 3

//const roundedNumber = 5.2
//const stringNumber = roundedNumber.toString()
//const firstPosition = stringNumber.split(".")[1]

//if (firstPosition >= 5) {
// console.log(6)

//} else {
//console.log(5)

//}


//07 - Rounded but better

//const roundedNumber = 4.8;


//if ((roundedNumber - Math.floor(roundedNumber)) >= 0.5) {


//  console.log(Math.ceil(roundedNumber))

//} else {
// console.log(Math.floor(roundedNumber))
//}