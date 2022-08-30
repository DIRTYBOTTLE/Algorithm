import NodeOneWay from './NodeOneWay.js';

export default class NodeList {
    constructor () {
        this.headNode = new NodeOneWay(0, undefined);
    }

    add (node) {
        let tempNode = this.headNode;
        while (true) {
            if (tempNode.next !== null) {
                tempNode = tempNode.next;
            } else {
                break;
            }
        }
        tempNode.next = node;
    }

    addById (node) {
        let tempNode = this.headNode;
        const id = node.id;
        while (true) {
            if (tempNode.next !== null) {
                // 中间插入
                if (tempNode.id < id && tempNode.next.id > id) {
                    node.next = tempNode.next;
                    tempNode.next = node;
                    break;
                }
                if (tempNode.id === id || tempNode.next.id === id) {
                    throw new Error("存在重复的ID！");
                }
                tempNode = tempNode.next;
            } else {
                // 末尾插入
                tempNode.next = node;
                break;
            }
        }
    }

    deleteById (node) {
        let tempNode = this.headNode;
        const id = node.id;
        while (true) {
            // 非尾节点
            if (tempNode.next !== null) {
                if (tempNode.next.id === id) {
                    tempNode.next = tempNode.next.next;
                    return;
                }
                tempNode = tempNode.next;
            } else {
                throw new Error("未找到节点！");
            }
        }
    }

    updateById (node) {
        let tempNode = this.headNode;
        const id = node.id;
        while (true) {
            // 非尾节点
            if (tempNode.next !== null) {
                if (tempNode.id === id) {
                    node.next = tempNode.next;
                    tempNode.data = node.data;
                    return;
                }
                tempNode = tempNode.next;
            } else {
                if (tempNode.id === id) {
                    tempNode.data = node.data;
                    return;
                } else {
                    throw new Error("未找到节点！");
                }
            }
        }
    }

    length () {
        let length = 0;
        let tempNode = this.headNode;
        while (true) {
            if (tempNode.next !== null) {
                if (tempNode.id === 0) {
                    tempNode = tempNode.next;
                    continue;
                }
                length += 1;
                tempNode = tempNode.next;
            } else {
                if (tempNode.id === 0) {
                    return length;
                }
                length += 1;
                return length;
            }
        }
    }

    toString () {
        let resStr = "";
        let tempNode = this.headNode;
        while (true) {
            if (tempNode.next !== null) {
                if (tempNode.id === 0) {
                    tempNode = tempNode.next;
                    continue;
                }
                resStr += `[${tempNode.id}, ${tempNode.data}]\n`;
                tempNode = tempNode.next;
            } else {
                if (tempNode.id === 0) {
                    return "";
                }
                break;
            }
        }
        resStr += `[${tempNode.id}, ${tempNode.data}]`;
        return resStr;
    }
}
