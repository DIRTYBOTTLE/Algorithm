export default class NodeTwoWay {
    constructor (id, data) {
        this.id = id;
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
