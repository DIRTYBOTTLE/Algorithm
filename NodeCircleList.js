import NodeCircle from './NodeCircle.js';

export default class NodeList {
    constructor() {
        this.firstNode = null;
    }

    addNodes(num) {
        this.first = new NodeCircle(1);
        this.first.next = this.first;
        let current = this.first;
        for (let i = 2; i < num + 1; i++) {
            current.next = new NodeCircle(i);
            current = current.next;
            current.next = this.first;
        }
    }

    ergodicNodes() {
        if (this.first == null) {
            throw new Error("链表为空！");
        }
        const outer = [];
        let current = this.first;
        while (true) {
            outer.push(current.id);
            if (current.next === this.first) {
                break;
            }
            current = current.next;
        }
        return outer;
    }

    countGame(start, interval) {
        let last = this.first;
        while (true) {
            console.log('5');
            if (last.next === this.first) {
                break;
            }
            last = last.next;
        }
        for (let i = 0; i < start - 1; i++) {
            this.first = this.first.next;
            last = last.next;
        }
        const outers = [];
        while (true) {
            if (last === this.first) {
                break;
            }
            for (let i = 0; i < interval - 1; i++) {
                this.first = this.first.next;
                last = last.next;
            }
            outers.push(this.first.id);
            this.first = this.first.next;
            last.next = this.first;
        }
        return outers;
    }
}
