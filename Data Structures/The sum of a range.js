/**
 * range func 
 * @param {*} start 
 * @param {*} end 
 * @param {*} step 
 * @returns 
 */
const range = (start, end, step = end > start ? 1 : -1) => {
    let arr = [];
    if (end > start) {
        for (let i = start; i <= end; i += step) {
            arr.push(i)
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i)
        }
    }
    return arr;
}

/**
 * sum 
 * @param {*} arr 
 * @returns 
 */
const sum = arr => arr.reduce((x, y) => x + y);

console.log(range(1, 10)) // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10))) // 55
