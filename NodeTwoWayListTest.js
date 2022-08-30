import NodeTwoWay from "./NodeTwoWay.js";
import NodeTwoWayList from "./NodeTwoWayList.js";

const nodeIdInp = document.getElementById("nodeTwoWayIdInp");
const nodeDataInp = document.getElementById("nodeTwoWayDataInp");
const addBtn = document.getElementById("nodeTwoWayAddBtn");
const deleteBtn = document.getElementById("nodeTwoWayDeleteBtn");
const updateBtn = document.getElementById("nodeTwoWayUpdateBtn");
const resetBtn = document.getElementById("nodeTwoWayResetBtn");
const nodeResInp = document.getElementById("nodeTwoWayNodeResInp");

let nodeList = new NodeTwoWayList();

addBtn.addEventListener("click", () => {
    const id = nodeIdInp.value;
    const data = nodeDataInp.value;
    if (id && data) {
        try {
            const node = new NodeTwoWay(id, data);
            nodeList.addById(node);
            nodeResInp.value = nodeList.toString();
        } catch (e) {
            nodeResInp.value += `\n${e.message}`;
        }
    }
});

deleteBtn.addEventListener("click", () => {
    const id = nodeIdInp.value;
    if (id) {
        try {
            const node = new NodeTwoWay(id);
            nodeList.deleteById(node);
            nodeResInp.value = nodeList.toString();
        } catch (e) {
            nodeResInp.value += `\n${e.message}`;
        }
    }
});

updateBtn.addEventListener("click", () => {
    const id = nodeIdInp.value;
    const data = nodeDataInp.value;
    if (id && data) {
        try {
            const node = new NodeTwoWay(id, data);
            nodeList.updateById(node);
            nodeResInp.value = nodeList.toString();
        } catch (e) {
            nodeResInp.value += `\n${e.message}`;
        }
    }
});

resetBtn.addEventListener("click", () => {
    nodeList = new NodeTwoWayList();
    nodeResInp.value = "";
});
