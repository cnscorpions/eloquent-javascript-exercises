let re1 = new RegExp("abc")
let re2 = /abc/;

let eighteenPlus = /eighteenPlus\+/;

// console.log(re1, re2, eighteenPlus)

// console.log(/abc/.test("abcd"))

// console.log(/[0-9]/.test("in 1992"))

// \d 表示数字缩写
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"))

