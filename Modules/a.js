const words = require("./Circular dependencies")

const print = () => {
    console.log(words.words)
}

exports.print = print;
