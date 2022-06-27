// class Users {
//     constructor(firstname, lastname) {

//         this.firstname = firstname
//         this.lastname = lastname
//     }

//     get FullName() {
//         return this.getFullName

//     }
//     getFullName() {

//         return this.firstname + ' ' + this.lastname
//     }
// }
// let user = new Users('John', 'smith')
// console.log(user.FullName)  



//1 - Batmobile

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }
//     accelerate = (speed) => {
//         this.speed += speed
//         console.log(`${this.brand} roule avec une vitesse de ${this.speed} km/h.`)
//         console.log(`${this.brand} running ${this.speed} km/h`)
//     }
//     brake = (x) => {
//         this.speed = x - this.speed
//         console.log(`${this.brand} s'arrete sur une distance de ${this.speed} km/h.`)


//     }
//     describe = () => {
//         console.log(`${this.brand} running ${this.speed} km/h`)


//     }


// }

// const myFirstCar = new Car("Ford", 0)
// myFirstCar.accelerate(60)
// myFirstCar.brake(80)

// const mySecondCar = new Car('Toyota', 0)
// mySecondCar.accelerate(80)
// mySecondCar.brake(100)
// console.log(myFirstCar)


//2 - TV

/*
class TV {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50

    }

}
controlVolumePlus = (volume) => {

    if (getFullValue < 0 && volume > 100) {
        this.volume = volume;
        console.assert("the volume is max")
            //let getFullValueLess = this.volume += volume


    } else {
        return getFullValue
    }
}
controlVolumeLess = (volume) => {
    //let getFullValueLess = this.volume -= volume

    if (volume < 0) {
        this.volume = volume
        console.assert("le volume est bas au max")

    } else {
        return getFullValueLess
    }
}
const addVolume = new TV('samsung', 3, 86)
controlVolumePlus(40)
controlVolumeLess(3)*/


//3 - Video games


// class Paddle {
//     constructor(game) {
//         this.gameWidth = game.gameWidth;

//         this.width = 150
//         this.height = 20

//         this.maxSpeed = 7
//         this.speed = 0

//         this.position = {
//             x: game.gameWidth / 2 - this.width / 2,
//             y: game.gameHeight - this.height - 10
//         }
//     }
//     moveLeft() {
//         this.speed = -this.maxSpeed
//     }

//     moveRight() {
//         this.speed = this.maxSpeed
//     }

//     stop() {
//         this.speed = 0
//     }
//     draw(ctx) {
//         ctx.fillStyle = "#0ff";
//         ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
//     }

//     update(deltaTime) {
//         this.position.x += this.speed

//         if (this.position.x < 0) this.position.x = 0

//         if (this.position.x + this.width > this.gameWidth)
//             this.position.x = this.gameWidth - this.width
//     }
// }