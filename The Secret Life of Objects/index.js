
// let rabbit = {};
// rabbit.speak = function (line) {
//     console.log(`The rabbit says '${line}'`)
// }

// rabbit.speak("I'm alive.")

// 全局变量
// globalThis.type = "test"
// global.type = "test"

// function speak(line) {
//     // console.log("this", this)
//     console.log(`The ${this.type} rabbit says '${line}'`)
// }

// let whiteRabbit = { type: "white", speak}
// let hungryRabbit = { type: "hunbry", speak}

// whiteRabbit.speak("shit white");
// hungryRabbit.speak("shit hungry")
// speak.call(hungryRabbit, "hungry shit")

// speak("hello world")

// function normalize() {
//     console.log(this.coords.map(n => n / this.length));
// }

// normalize.call({ coords: [0, 1, 2], length: 5})

// console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);

// function makeRabbit(type) {
//     let rabbit = Object.create({ color: "white" })
//     rabbit.type = type;
//     return rabbit;
// }

// let rabbit01 = makeRabbit("01")
// let rabbit02 = makeRabbit("02")
// console.log(rabbit01.color, rabbit02)


// function Rabbit(type) {
//     this.type = type;
// }

// Rabbit.prototype.speak = function (line) {
//     console.log(`The ${this.type} rabbit says '${line}'`)
// }

// let weirdRabbit = new Rabbit("weird")

// console.log(weirdRabbit)

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let killerRabbit = new Rabbit("killer")
let blackRabbit = new Rabbit("black")

// console.log(killerRabbit, blackRabbit)

Rabbit.prototype.teeth = "smaill"
// console.log(killerRabbit.teeth)

killerRabbit.teeth = "long, sharp and bloody"
// console.log("killerRabbit teeth", killerRabbit.teeth)
// console.log("blackRabbit teeth", blackRabbit.teeth)

// console.log(Array.prototype.toString === Object.prototype.toString)
// console.log([1, 2].toString())

// console.log("toString" in Object.create(null)) // false

// let ages = new Map();
// ages.set("Boris", 39)
// ages.set("Liang", 22)
// ages.set("Julia", 62)

// console.log(ages)

// console.log({ x: 1 }.toString())
// console.log([1, 2].toString())
// Rabbit.prototype.toString = function () {
//     return `a ${this.type} rabbit`
// }

// console.log(String(blackRabbit))

// const toStringSymbol = Symbol("toString")
// Array.prototype[toStringSymbol] = function () {
//     return `${this.length} cm of blue yarn`
// }

// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]());

// let okIterator = "ok"[Symbol.iterator]();
// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next())

// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.content = [];

//         for (let y = 0; y < height; y++) {
//             for (let x = 0; x < width; x++) {
//                 this.content[y * width + x] = element(x, y)
//             }
//         }
//     }

//     get(x, y) {
//         return this.content[y * this.width + x]
//     }

//     set(x, y, value) {
//         this.content[y * this.width + x] = value;
//     }
// }

// let varyingSize = {
//     get size() {
//         return Math.floor(Math.random() * 100)
//     }
// }

// console.log(varyingSize.size)
// console.log(varyingSize.size)
// console.log(varyingSize.size)

// console.log([1] instanceof Array)
