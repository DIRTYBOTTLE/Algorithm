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
            this.preOderTraverseNode(node.left, res);
            this.preOderTraverseNode(node.right, res);
        }
    }

    preOderTraverse() {
        const res = [];
        this.preOderTraverseNode(this.root, res);
        return res;
    }

    postOderTraverseNode(node, res) {
        if (node !== null) {
            this.postOderTraverseNode(node.left, res);
            this.postOderTraverseNode(node.right, res);
            res.push(node.key);
        }
    }

    postOderTraverse() {
        const res = [];
        this.postOderTraverseNode(this.root, res);
        return res;
    }

    minNode(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.key;
    }

    min() {
        return this.minNode(this.root);
    }

    maxNode(node) {
        let current = node;
        while (current.right !== null) {
            current = current.right;
        }
        return current.key;
    }

    max() {
        return this.maxNode(this.root);
    }

    searchNode(node, key) {
        if (node === null) {
            return false;
        } else if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    removeNode(node, key) {
        if (node === null) {
            throw new Error('未找到键');
        }
        if (node.key > key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (node.key < key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else if (node.key === key) {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            const aux = this.minNode(node.right);
            node.key = aux;
            node.right = this.removeNode(node.right, aux);
            return node;
        } else {
            throw new Error('未找到键');
        }
    }

    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
}

export default BinarySearchTree;
