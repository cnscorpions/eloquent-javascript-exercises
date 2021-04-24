let map = { one: true, two: true, hasOwnProperty: true }

// console.log(map.hasOwnProperty("one")) // hide hasOwnProperty method

console.log(Object.hasOwnProperty.call(map, "hasOwnProperty"))
