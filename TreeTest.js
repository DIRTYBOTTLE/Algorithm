import BinarySearchTree from './Tree.js'

const BSTNumInp = document.getElementById('BSTNumInp');
const BSTAddBtn = document.getElementById('BSTAddBtn');
const BSTInOderBtn = document.getElementById('BSTInOderBtn');
const BSTPreOderBtn = document.getElementById('BSTPreOderBtn');
const BSTPostOderBtn = document.getElementById('BSTPostOderBtn');
const BSTResetBtn = document.getElementById('BSTResetBtn');
const BSTResInp = document.getElementById('BSTResInp');
const BSTTraverseInp = document.getElementById('BSTTraverseInp');

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
});
