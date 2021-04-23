function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`)
// })

// console.log(labels)

// High-Order Function
// function greaterThan(n) {
//     return m => m > n;
// }

// let greaterThan10 = greaterThan(10)
// console.log("11 比 10", greaterThan10(11));

// function noisy(f) {
//     return (...args) => {
//         console.log("calling with", args)
//         let result = f(...args)
//         console.log("called with", args, ", returned ", result)
//         return result
//     }
// }

// noisy(Math.min)(3, 2, 1)

// function unless(test, then) {
//     if (!test) then();
// }

// repeat(3, n => {
//     unless(n % 2 === 1, () => {
//         console.log(n, "is event")
//     })
// })

// function forLoop(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(i)
//     }
// }

// forLoop([1, 2, 3], i => console.log(i))

// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) {
//             passed.push(element)
//         }
//     }
//     return passed;
// }

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element))
    }
    return mapped;
}

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element)
    }
    return current
}

// console.log(map([1, 2, 3], i => i + 1))
// console.log(reduce([1, 2, 3], (a, b) => a + b, 0))
