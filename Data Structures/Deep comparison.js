
function deepEqual(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object' || a == null || b == null) return a === b;
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (let i = 0; i < Object.keys(a).length; i++) {
      if (!deepEqual(a[Object.keys(a)[i]], b[Object.keys(a)[i]])) return false;
    }
    return true;
  }

let obj01 = { here: { is: "an" }, object: 2 }
let obj02 = { here: { is: "an"}, object: 2}

console.log(deepEqual(obj01, obj02))
console.log(obj01 === obj02)
