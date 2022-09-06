const factorialSizeInp = document.getElementById('factorialSizeInp');
const factorialBtn = document.getElementById('factorialBtn');
const factorialResInp = document.getElementById('factorialResInp');

function factorial(size) {
    if (size === 0 || size === 1) {
        return 1;
    }
    return size * factorial(size - 1);
};

factorialBtn.addEventListener('click', () => {
    const numPattern = /^[0-9]*$/;
    if (numPattern.test(factorialSizeInp.value)) {
        const size = Number(factorialSizeInp.value);
        try {
            factorialResInp.value = factorial(size);
        } catch (e) {
            alert('无法计算！');
        }
    } else {
        alert('仅能输入数字！');
    }
});

const fibonacciSizeInp = document.getElementById('fibonacciSizeInp');
const fibonacciBtn = document.getElementById('fibonacciBtn');
const fibonacciResInp = document.getElementById('fibonacciResInp');

function fibonacci(size) {
    if (size === 0) {
        return 0;
    }
    if (size <= 2) {
        return 1;
    }
    return fibonacci(size - 2) + fibonacci(size - 1);
}

fibonacciBtn.addEventListener('click', () => {
    const numPattern = /^[0-9]*$/;
    if (numPattern.test(fibonacciSizeInp.value)) {
        const size = Number(fibonacciSizeInp.value);
        try {
            fibonacciResInp.value = fibonacci(size);
        } catch (e) {
            alert('无法计算！');
        }
    } else {
        alert('仅能输入数字！');
    }
});
