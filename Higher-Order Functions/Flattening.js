
const flatten = arr => {
    return arr.reduce((x, y) => x.concat(y), [])
}

const arr = [[1, 2, 3], [4, 5], [6]]

console.log(flatten(arr)) // [ 1, 2, 3, 4, 5, 6 ]
