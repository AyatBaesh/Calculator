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
let lastOperation = '';
//keyboard support
document.addEventListener('keydown', (event) => {
    let key = event.key;
    switch(key){
        case "Enter":
            key = '=';
            break;
        default:
            break;
    }
    const button = document.querySelector(`button[value='${key}']`);
    if (button) {
      button.click();
    }
  });

  //listen to type of the button clicked:
keyboard.addEventListener('click', (event) => {
    if(event.target.value === '.'){ //hadling '.' button
        currentDisplay.textContent += event.target.value;
        floatButton.disabled = true;
        if(currentDisplay.textContent === '.'){
            currentDisplay.textContent = 0 + currentDisplay.textContent;
        }

    }else if(event.target.classList.contains('num')){
        currentDisplay.textContent += event.target.value;
    }else if(event.target.classList.contains('operation')){
        floatButton.disabled = false;
        if(current != null){
            previous = current;
        }
        if(currentDisplay.textContent){
            current = parseFloat(currentDisplay.textContent);
        }
        if(operation){
            switch(lastOperation){//handling functionality after '=' is clicked
                case '=':
                    operation = event.target.value;
                    lastOperation = '';
                    previousDisplay.textContent = current + operation;
                    current = parseFloat(currentDisplay.textContent);
                    currentDisplay.textContent = '';
                    return;
                default:
                    break;
            }
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
        if(operation === '='){
            lastOperation = '=';
            previousDisplay.textContent = operation + previousDisplay.textContent;
            
        }else{
            previousDisplay.textContent += operation;
        }
    }else if(event.target.value === 'clear'){
        current = null;
        previous = null;
        result = null;
        prevResult = null;
        operation = '';
        lastOperation = '';
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





