/**
 * reverse a arrary
 * @param {*} oldArr 
 * @returns 
 */
const reverseArray = oldArr => {
    let newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        newArr.unshift(oldArr[i])
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3])) // [3, 2, 1]

const swap = (arr, pos1, pos2) => {
    const rem = arr[pos1]
    arr[pos1] = arr[pos2]
    arr[pos2] = rem;
}

const reverseArrayInPlace = arr => {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i)
    }
}

let arr = ["a", "b", "c"]
reverseArrayInPlace(arr) // modify the original array
console.log(arr)
