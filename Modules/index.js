// 通过立即执行函数形成的local scope，来实现一定程度的isolation
const weekDay = function () {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return {
        name(number) { return names[number] },
        number(name) { return names.indexOf(name) }
    }
}();

// console.log(weekDay.name(2), weekDay.number("Monday"));

// eval 可以接收string of code，然后在当前作用域执行
const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}

// console.log(evalAndReturnX("var x = 2"));
// console.log(x)

// 使用Function
let plusOne = Function("n", "return n + 1;")
// console.log(plusOne(4))

require.cache = Object.create(null)

function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name)
        let module = { exports: {}}
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code)
        wrapper(require, module.exports, module)
    }
    return require.cache[name].exports;
}

const demoFunc = require("./demo")

demoFunc();

