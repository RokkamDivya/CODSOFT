// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '0';
                return;
            }

            if (value === '=') {
                if (operator && previousInput !== '') {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    if (previousInput === '') {
                        previousInput = currentInput;
                    } else {
                        previousInput = eval(previousInput + operator + currentInput).toString();
                        display.textContent = previousInput;
                    }
                    operator = value;
                    currentInput = '';
                }
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });
});
