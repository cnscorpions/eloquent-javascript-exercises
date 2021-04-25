class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(x, y) {
    let isPassed = Math.floor(Math.random() * 100) > 20 ? true : false;
    if (isPassed) {
        return x * y;
    } else {
        throw new MultiplicatorUnitFailure("Multiplicator Unit Failure");
    }
}

function main(x, y) {
    try {
        const result = primitiveMultiply(x, y)
        console.log(`result is ${result}`)
        if (result) return result;
    } catch (error) {
        if (error instanceof MultiplicatorUnitFailure) {
            console.error("An Multiplicator Unit Failure")
            main(x, y);
        } else {
            console.error(error)
        }
    }
}

main(2, 4);
