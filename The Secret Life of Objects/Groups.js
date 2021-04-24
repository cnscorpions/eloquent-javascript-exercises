class Group {
    constructor() {
        this.list = [];
    }

    add(el) {
        if (!this.has(el)) this.list.push(el)
    }

    has(el) {
        return this.list.indexOf(el) !== -1;
    }

    delete(el) {
        if (this.has(el)) {
            this.list = this.list.filter(x => x !== el)
        }
    }
}

const group1 = new Group();
group1.add(1)
group1.add(2)
group1.add(3)
group1.delete(1)

console.log(group1)
