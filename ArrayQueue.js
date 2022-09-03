export default class ArrayQueue {
    constructor(size) {
        this._queue = new Array(size);
        this._bottom = -1;
        this._size = size;
    }

    isEmpty() {
        return this._bottom === -1;
    }

    isFull() {
        return this._bottom === this._size - 1;
    }

    add(data) {
        if (this.isFull()) {
            throw new Error('队列已满！');
        }
        this._bottom++;
        this._queue[this._bottom] = data;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('队列已空！');
        }
        const res = this._queue[0];
        for (let i = 0; i < this._bottom; i++) {
            this._queue[i] = this._queue[i + 1];
        }
        this._bottom--;
        return res;
    }

    toString() {
        return '[' + this._queue.slice(0, this._bottom + 1) + ']';
    }
}
