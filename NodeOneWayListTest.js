import NodeList from "./NodeOneWayList.js";
import NodeOneWay from "./NodeOneWay.js";

const nodeIdInp = document.getElementById("nodeIdInp");
const nodeDataInp = document.getElementById("nodeDataInp");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const updateBtn = document.getElementById("updateBtn");
const resetBtn = document.getElementById("resetBtn");
const nodeResInp = document.getElementById("nodeResInp");

let nodeList = new NodeList();

addBtn.addEventListener("click", () => {
    const id = nodeIdInp.value;
    const data = nodeDataInp.value;
    const node = new NodeOneWay(id, data);
    try {
        nodeList.addById(node);
    } catch (e) {
        nodeResInp.value += `\n${e.message}`;
        return;
    }
    nodeResInp.value = nodeList.toString();
    nodeResInp.style.height = `${nodeList.length() * 80}px`;
});

deleteBtn.addEventListener("click", () => {
    const id = nodeIdInp.value;
    if (id && nodeList.length() > 0) {
        const node = new NodeOneWay(id);
        try {
            nodeList.deleteById(node);
        } catch (e) {
            nodeResInp.value += `\n${e.message}`;
            return;
        }
        nodeResInp.value = nodeList.toString();
        nodeResInp.style.height = `${nodeList.length() * 80}px`;
    }
});

updateBtn.addEventListener("click", () => {
    const id = nodeIdInp.value;
    const data = nodeDataInp.value;
    // console.log(nodeList.length())
    if (id && data && nodeList.length() > 0) {
        const node = new NodeOneWay(id, data);
        try {
            nodeList.updateById(node);
        } catch (e) {
            nodeResInp.value += `\n${e.message}`;
            return;
        }
        nodeResInp.value = nodeList.toString();
        nodeResInp.style.height = `${nodeList.length() * 80}px`;
    }
});

resetBtn.addEventListener("click", () => {
    nodeList = new NodeList();
    nodeResInp.value = "";
    nodeResInp.style.height = `80px`;
});
