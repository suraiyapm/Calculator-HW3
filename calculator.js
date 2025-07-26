'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const calculator = document.getElementById('buttons');
    let currentInput = '';
    const ops = ['+','-','*','/'];

    calculator.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName !== 'BUTTON') return;

        const value = target.textContent;

        if (value === 'Clear') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Nope!';
            }
        } else {
            currentInput += value;
        }

        display.value = currentInput;
    });

    display.value = '';
});