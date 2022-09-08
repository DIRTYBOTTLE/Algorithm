import BinarySearchTree from './Tree.js'

const BSTNumInp = document.getElementById('BSTNumInp');
const BSTAddBtn = document.getElementById('BSTAddBtn');
const BSTInOderBtn = document.getElementById('BSTInOderBtn');
const BSTPreOderBtn = document.getElementById('BSTPreOderBtn');
const BSTPostOderBtn = document.getElementById('BSTPostOderBtn');
const BSTResetBtn = document.getElementById('BSTResetBtn');
const BSTResInp = document.getElementById('BSTResInp');
const BSTTraverseInp = document.getElementById('BSTTraverseInp');
const BSTMinOderBtn = document.getElementById('BSTMinOderBtn');
const BSTMaxOderBtn = document.getElementById('BSTMaxOderBtn');
const BSTSearchBtn = document.getElementById('BSTSearchBtn');
const BSTDelBtn = document.getElementById('BSTDelBtn');

let tree = null;

BSTAddBtn.addEventListener('click', () => {
    const numPattern = /^[0-9]*$/;
    if (numPattern.test(BSTNumInp.value)) {
        if (tree === null) {
            tree = new BinarySearchTree();
        }
        const key = Number(BSTNumInp.value);
        try {
            tree.insert(key);
            const res = tree.preOderTraverse();
            const length = res.length;
            BSTResInp.value = '';
            let lines = 0;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < 2 ** i; j++) {
                    const val = res.shift();
                    if (val === undefined) {
                        return;
                    }
                    BSTResInp.value = BSTResInp.value + val + ' ';
                }
                BSTResInp.value += `\n`;
                lines++;
                BSTResInp.style.height = `${lines * 80}px`;
            }
        } catch (e) {
            alert(e.message);
        }
    } else {
        alert('仅能输入数字！');
    }
});

BSTInOderBtn.addEventListener(('click'), () => {
    if (tree !== null) {
        BSTTraverseInp.value = tree.inOderTraverse();
    }
});

BSTPreOderBtn.addEventListener(('click'), () => {
    if (tree !== null) {
        BSTTraverseInp.value = tree.preOderTraverse();
    }
});

BSTPostOderBtn.addEventListener(('click'), () => {
    if (tree !== null) {
        BSTTraverseInp.value = tree.postOderTraverse();
    }
});

BSTResetBtn.addEventListener(('click'), () => {
    tree = null;
    BSTResInp.value = '';
    BSTResInp.style.height = '80px';
    BSTTraverseInp.value = '';
});

BSTMinOderBtn.addEventListener(('click'), () => {
    if (tree !== null) {
        BSTTraverseInp.value = tree.min();
        BSTTraverseInp.style.height = '80px';
    }
});

BSTMaxOderBtn.addEventListener(('click'), () => {
    if (tree !== null) {
        BSTTraverseInp.value = tree.max();
    }
});

BSTSearchBtn.addEventListener(('click'), () => {
    if (tree === null) {
        alert('请先建树！');
        return;
    }
    const numPattern = /^[0-9]*$/;
    if (numPattern.test(BSTNumInp.value)) {
        const key = Number(BSTNumInp.value);
        if (tree.search(key)) {
            BSTTraverseInp.value = '键存在！';
        } else {
            BSTTraverseInp.value = '未找到键！';
        }
    } else {
        alert('仅能输入数字！');
    }
});

BSTDelBtn.addEventListener('click', () => {
    if (tree === null) {
        alert('请先建树！');
        return;
    }
    const numPattern = /^[0-9]*$/;
    if (numPattern.test(BSTNumInp.value)) {
        const key = Number(BSTNumInp.value);
        try {
            tree.remove(key);
            const res = tree.preOderTraverse();
            const length = res.length;
            BSTResInp.value = '';
            let lines = 0;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < 2 ** i; j++) {
                    const val = res.shift();
                    if (val === undefined) {
                        return;
                    }
                    BSTResInp.value = BSTResInp.value + val + ' ';
                }
                BSTResInp.value += `\n`;
                lines++;
                BSTResInp.style.height = `${lines * 80}px`;
            }
        } catch (e) {
            alert(e.message);
        }
    } else {
        alert('仅能输入数字！');
    }
});
