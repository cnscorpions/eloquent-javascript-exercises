
const Promise_all = array => {
    return new Promise((resolve, reject) => {
        if (!array.length) resolve(array)
        let pending = array.length;
        let results = [];
        array.forEach((promise, index) => {
            promise.then(r => {
                pending--;
                results[index] = r;
                if (pending === 0) resolve(results)
            })
            .catch(e => reject(e))
        })
    })
}

// Promise_all([]).then(results => {
//     console.log(`This should be`, results)
// })

const createPromise = n => Promise.resolve(n);

const promises = [1, 2, 3].map(createPromise)

Promise_all(promises).then(results => console.log(results))
