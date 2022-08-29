export default class ArrayStack {
    constructor (stackSize) {
        this._stackSize = (stackSize || 0);
        this._stack = new Array(stackSize);
        this._top = -1;
        this.toString = () => {
            return "[" + this._stack.slice(0, this._top + 1).toString() + "]";
        };
    }

    isEmpty () {
        return this._top === -1;
    }

    isFull () {
        return this._top === this._stackSize - 1;
    }

    push (val) {
        if (this.isFull()) {
            throw new Error("此栈已满！");
        }
        this._top++;
        this._stack[this._top] = val;
    }

    pop () {
        if (this.isEmpty()) {
            throw new Error("此栈为空！");
        }
        this._top--;
        return this._stack[this._top + 1];
    }

    peek () {
        if (this.isEmpty()) {
            throw new Error("此栈为空！");
        }
        return this._stack[this._top];
    }

    get length () {
        return this._top + 1;
    }
}
