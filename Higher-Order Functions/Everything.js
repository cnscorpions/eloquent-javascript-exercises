/**
 * every via loop
 * @param {*} arr 
 * @param {*} predicate 
 * @returns 
 */
const everyFunc01 = (arr, predicate) => {
    for (let el of arr) {
        if (!predicate(el)) return false;
        console.log(`${el} is passed: ${predicate(el)}`)
    }
    return true;
}

const everyFunc02 = (arr, predicate) => {
    return !arr.some(el => !predicate(el))
}

// console.log(everyFunc01([1, -1, 0], n => n > 0));
// console.log(everyFunc02([-1, 0, 1], n => n > 0)); // false
