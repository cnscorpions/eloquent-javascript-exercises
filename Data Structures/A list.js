/**
 * transform array to list
 * @param {*} arr 
 * @returns 
 */
const arrayToList = arr => {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list }
    }
    return list;
}

const listToArray = list => {
    let arr = [];
    for (let rest = list; rest; rest = rest.rest) {
        arr.push(rest.value)
    }
    return arr;
}

const prepend = (value, list) => {
    return { value, rest: list}
}

function nth(list, n) {
    if (n === 0) return list.value;
    if (list.rest != null) return nth(list.rest, n - 1);
    return undefined;
  }

// console.log(arrayToList([10, 20]))
// console.log(listToArray(arrayToList([10, 20])))
// console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1));
