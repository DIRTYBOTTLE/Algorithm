import NodeTwoWay from "./NodeTwoWay.js";

export default class NodeTwoWayList {
    constructor() {
        this.headNode = new NodeTwoWay(0, undefined);
    }

    addById(node) {
        let tempNode = this.headNode;
        while (true) {
            // 中间节点
            if (tempNode.next !== null) {
                if (tempNode.id < node.id && node.id < tempNode.next.id) {
                    node.next = tempNode.next;
                    node.prev = tempNode;
                    tempNode.next.prev = node;
                    tempNode.next = node;
                    return;
                }
                if (tempNode.id === node.id || tempNode.next.id === node.id) {
                    throw new Error("重复的ID！");
                }
                tempNode = tempNode.next;
            } else {
                // 头节点或者尾节点
                tempNode.next = node;
                node.prev = tempNode;
                return;
            }
        }
    }

    deleteById(node) {
        let tempNode = this.headNode;
        while (true) {
            // 中间节点
            if (tempNode.next !== null) {
                if (tempNode.id === node.id) {
                    tempNode.prev.next = tempNode.next;
                    tempNode.next.prev = tempNode.prev;
                    return;
                }
                tempNode = tempNode.next;
            } else {
                // 头节点
                if (tempNode.prev === null) {
                    throw new Error("链表为空！");
                }
                // 尾节点
                if (tempNode.id === node.id) {
                    tempNode.prev.next = null;
                    return;
                }
                throw new Error("查无此项！");
            }
        }
    }

    updateById(node) {
        let tempNode = this.headNode;
        while (true) {
            // 中间节点
            if (tempNode.next !== null) {
                if (tempNode.id === node.id) {
                    tempNode.prev.next = node;
                    tempNode.next.prev = node;
                    node.prev = tempNode.prev;
                    node.next = tempNode.next;
                    return;
                }
                tempNode = tempNode.next;
            } else {
                // 头节点
                if (tempNode.prev === null) {
                    throw new Error("链表为空！");
                }
                // 尾节点
                if (tempNode.id === node.id) {
                    tempNode.prev.next = node;
                    node.prev = tempNode.prev;
                    return;
                }
                throw new Error("查无此项！");
            }
        }
    }

    toString() {
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
