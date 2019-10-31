module.exports = class Cart {
    constructor(pid, user) {
        this.pid = pid;
        this.userId = user;
    }

    getArray() {
        return [this.userId, this.pid];
    }
}