const box = {
    locked: true,
    unlocked() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [], // private property
    get content() {
        if (this.locked) throw new Error("Locked!")
        return this._content;
    }
}

function withBoxUnlocked(fn) {
    let isLocked = box.locked;
    try {
        box.unlocked();
        fn();
    } finally {
        // clean up before return
        if (isLocked) box.lock();
    }
}

withBoxUnlocked(function () {
    box.content.push("dog")
})

console.log(box)
