import ArrayStack from "./ArrayStack.js";

const stackSizeInp = document.getElementById("stackSizeInp");
const stackSizeBtn = document.getElementById("stackSizeBtn");
const pushValInp = document.getElementById("pushValInp");
const pushValBtn = document.getElementById("pushValBtn");
const popValInp = document.getElementById("popValInp");
const popValBtn = document.getElementById("popValBtn");
const stackInp = document.getElementById("stackInp");
const reverseInp = document.getElementById("reverseInp");
const reverseBtn = document.getElementById("reverseBtn");
const reverseResInp = document.getElementById("reverseResInp");
const calculateInp = document.getElementById("calculateInp");
const calculateBtn = document.getElementById("calculateBtn");
const calculateResInp = document.getElementById("calculateResInp");

let arrayStack = null;

stackSizeBtn.addEventListener("click", () => {
    if (stackSizeInp.value) {
        arrayStack = new ArrayStack(stackSizeInp.value);
        stackInp.value = arrayStack.toString();
    }
});

pushValBtn.addEventListener("click", () => {
    if (!arrayStack) {
        alert("请先建栈！");
        return;
    }
    if (pushValInp.value) {
        try {
            arrayStack.push(pushValInp.value);
            stackInp.value = arrayStack.toString();
        } catch (error) {
            alert("此栈已满！");
        }
    }
});

popValBtn.addEventListener("click", () => {
    if (!arrayStack) {
        alert("请先建栈！");
        return;
    }
    try {
        popValInp.value = arrayStack.pop();
        stackInp.value = arrayStack.toString();
    } catch (error) {
        alert("此栈为空！");
    }
});

let reverseArrayStack = null;

reverseBtn.addEventListener("click", () => {
    const reverseStr = reverseInp.value;
    if (reverseStr) {
        reverseArrayStack = new ArrayStack(reverseStr.length);
        for (const c of reverseStr) {
            reverseArrayStack.push(c);
        }
        let resultStr = "";
        const stackLength = reverseArrayStack.length;
        for (let i = 0; i < stackLength; i++) {
            resultStr += reverseArrayStack.pop();
        }
        resultStr === reverseStr ? reverseResInp.value = "是回文语句" : reverseResInp.value = "不是回文语句";
    }
});

calculateBtn.addEventListener("click", () => {
    const calculateStr = calculateInp.value;
    if (calculateStr) {
        const numStack = new ArrayStack(calculateStr.length);
        const operStack = new ArrayStack(calculateStr.length);
        const isOper = (c) => {
            return (c === '+' || c === '-' || c === '/' || c === '*');
        };
        const priority = (c) => {
            if (c === '*' || c === '/') {
                return 2;
            }
            if (c === '+' || c === '-') {
                return 1;
            }
        };
        // 算式入栈
        for (const c of calculateStr) {
            if (!isOper(c)) {
                numStack.push(c);
            } else if (isOper(c)) {
                if (operStack.isEmpty()) {
                    operStack.push(c);
                } else if (priority(c) > priority(operStack.peek())) {
                    operStack.push(c);
                } else {
                    const num1 = numStack.pop();
                    const num2 = numStack.pop();
                    const operator = operStack.pop();
                    (operator === '+' || operator === '*') ? numStack.push(eval(num1 + operator + num2)) : numStack.push(eval(num2 + operator + num1));
                    operStack.push(c);
                }
            }
        }
        // 结果出栈
        while (true) {
            const num1 = numStack.pop();
            let operator;
            try {
                operator = operStack.pop();
            } catch (e) {
                calculateResInp.value = num1;
                break;
            }
            const num2 = numStack.pop();
            (operator === '+' || operator === '*') ? numStack.push(eval(num1 + operator + num2)) : numStack.push(eval(num2 + operator + num1));

            // let result = eval(num1 + operator + num2);
            // numStack.push(result)
        }
    }
});
