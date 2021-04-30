// setTimeout(() => console.log("Tick"), 500);

// promise
// let fifteen = Promise.resolve(15)
// fifteen.then(value => console.log(`Got ${value}`))

class Timeout extends Error { }

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed)
                else resolve(value)
            })
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"))
            }, 250)
        }
        attempt(1)
    })
}

function* powers(n) {
    for (let current = n; ; current *= n) {
        yield current;
    }
}

// for (let power of powers(3)) {
//     if (power > 50) break;
//     console.log(power)
// }

// timeout is late
// let start = Date.now();
// setTimeout(() => {
//     console.log("Timeout ran at", Date.now() - start)
// }, 20);
// while (Date.now() < start + 50) { }
// console.log("Wasted time until", Date.now() - start)

Promise.resolve("Done").then(console.log)
console.log("Me first")

