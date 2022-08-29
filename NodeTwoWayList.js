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
