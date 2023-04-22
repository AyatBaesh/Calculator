import {getResult } from './functions.js';
const currentDisplay = document.querySelector('#currentInput');
const previousDisplay = document.querySelector('#previousInput');
const keyboard = document.querySelector('.keyboard');
const floatButton = document.getElementById('.');
let current = null;
let previous = null;
let result = null;
let prevResult = null;
let operation = '';

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const button = document.querySelector(`button[value='${key}']`);
    if (button) {
      button.click();
    }
  });
keyboard.addEventListener('click', (event) => {
    if(event.target.value === '.'){
        currentDisplay.textContent += event.target.value;
        floatButton.disabled = true;
    }
    if(event.target.classList.contains('num')){
        if(currentDisplay.textContent.includes('.')){
            floatButton.disabled = true;
        }
        currentDisplay.textContent += event.target.value;
    
    }else if(event.target.classList.contains('operation')){
        floatButton.disabled = false;
        if(current != null){
            previous = current;
        }
        current = parseFloat(currentDisplay.textContent);
        if(operation){
            prevResult = getResult(operation, current, previous, result);
            previousDisplay.textContent = `${prevResult}`;
            previous = prevResult;
            current = null;
            currentDisplay.textContent = '';
        }
        operation = event.target.value;
        if(current != null){
            result = getResult(operation, current, previous, result);
            previousDisplay.textContent = currentDisplay.textContent;
            currentDisplay.textContent = '';
        }
        if(operation != '='){
            previousDisplay.textContent += operation;
        }else{
            previousDisplay.textContent = operation + previousDisplay.textContent;
        }
    }else if(event.target.value === 'clear'){//if 'clear' clicked
        current = null;
        previous = null;
        result = null;
        prevResult = null;
        operation = '';
        currentDisplay.textContent = '';
        previousDisplay.textContent = '';
        floatButton.disabled = false;
    }else if(event.target.value === 'delete'){
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
        if(!currentDisplay.textContent.includes('.')){
            floatButton.disabled = false;
        }
        
    }
});





