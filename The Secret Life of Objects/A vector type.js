
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(a, b) {
        this.x += a;
        this.y += b;
    }

    minus(a, b) {
        this.x -= a;
        this.y -= b;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

const vecA = new Vec(300, 400)

console.log(vecA.length) // 500

vecA.plus(100, 200)

console.log(vecA)
