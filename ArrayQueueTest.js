import ArrayQueue from "./ArrayQueue.js";

const queueSizeInp = document.getElementById('queueSizeInp');
const queueSizeBtn = document.getElementById('queueSizeBtn');
const queuePushInp = document.getElementById('queuePushInp');
const queuePushBtn = document.getElementById('queuePushBtn');
const queuePopInp = document.getElementById('queuePopInp');
const queuePopBtn = document.getElementById('queuePopBtn');
const queueInp = document.getElementById('queueInp');

let arrayQueue = null;
queueSizeBtn.addEventListener('click', () => {
    if (queueSizeInp.value) {
        arrayQueue = new ArrayQueue(Number(queueSizeInp.value));
        queueInp.value = arrayQueue;
    }
});

queuePushBtn.addEventListener('click', () => {
    if (arrayQueue !== null && queuePushInp.value) {
        try {
            arrayQueue.add(queuePushInp.value);
            queueInp.value = arrayQueue;
        } catch (e) {
            alert(e.message);
        };
    }
});

queuePopBtn.addEventListener('click', () => {
    if (arrayQueue !== null) {
        try {
            queuePopInp.value = arrayQueue.pop();
            queueInp.value = arrayQueue;
        } catch (e) {
            alert(e.message);
        }
    }
});
