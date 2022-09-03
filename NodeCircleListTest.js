import NodeCircleList from './NodeCircleList.js';

const sumInp = document.getElementById('nodeCircleSumInp');
const startInp = document.getElementById('nodeCircleStartInp');
const intervalInp = document.getElementById('nodeCircleIntervalInp');
const addBtn = document.getElementById('nodeCircleAddBtn');
const outBtn = document.getElementById('nodeCircleOutBtn');
const resInp = document.getElementById('nodeCircleResInp');

let nodeCircleList = null;
addBtn.addEventListener('click', () => {
    if (sumInp.value) {
        nodeCircleList = new NodeCircleList();
        nodeCircleList.addNodes(Number(sumInp.value));
        resInp.innerHTML = nodeCircleList.ergodicNodes();
    }
});
outBtn.addEventListener('click', () => {
    if (nodeCircleList !== null && startInp.value && intervalInp.value) {
        resInp.innerHTML += `\n${nodeCircleList.countGame(Number(startInp.value), Number(intervalInp.value))}`;
    }
});
