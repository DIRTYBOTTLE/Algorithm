class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        if (this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    insertNode(node, key) {
        if (key < node.key) {
            if (node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else if (key > node.key) {
            if (node.right === null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        } else {
            throw new Error('数据重复！');
        }
    }

    inOderTraverseNode(node, res) {
        if (node !== null) {
            this.inOderTraverseNode(node.left, res);
            res.push(node.key);
            this.inOderTraverseNode(node.right, res);
        }
    }

    inOderTraverse() {
        const res = [];
        this.inOderTraverseNode(this.root, res);
        return res;
    }

    preOderTraverseNode(node, res) {
        if (node !== null) {
            res.push(node.key);
            this.inOderTraverseNode(node.left, res);
            this.inOderTraverseNode(node.right, res);
        }
    }

    preOderTraverse() {
        const res = [];
        this.preOderTraverseNode(this.root, res);
        return res;
    }

    postOderTraverseNode(node, res) {
        if (node !== null) {
            this.inOderTraverseNode(node.left, res);
            this.inOderTraverseNode(node.right, res);
            res.push(node.key);
        }
    }

    postOderTraverse() {
        const res = [];
        this.postOderTraverseNode(this.root, res);
        return res;
    }
}

export default BinarySearchTree;
