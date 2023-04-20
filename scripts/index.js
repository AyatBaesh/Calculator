import { add, subtract, multiply, divide } from './functions.js';
const currentDisplay = document.querySelector('#currentInput');
const previousDisplay = document.querySelector('#previousInput');
const clearButton = document.querySelector('#clear');
const keyboard = document.querySelector('.keyboard');
let current = null;
let previous = null;
let result = null;
let prevResult = null;
let operation = '';6

keyboard.addEventListener('click', (event) => {
    if(event.target.classList.contains('num')){
        currentDisplay.textContent += event.target.value;
    
    }else if(event.target.classList.contains('operation')){
        if(current){
            previous = current;
        }
        current = parseInt(currentDisplay.textContent);
        if(operation){
            prevResult = getResult(operation);
            previousDisplay.textContent = `${prevResult}`;
            previous = prevResult;
            current = null;
            currentDisplay.textContent = '';
        }
        operation = event.target.value;
        if(current){
            result = getResult(operation);
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
    }else if(event.target.value === 'delete'){
        currentDisplay.textContent = '';
    }
});


function getResult(operation){
    // console.log(`getResult called: current:${current}, previous:${previous}`);
    if(!previous || !current && previous != 0 && current != 0){
        return previous;
    }
    switch (operation){
        case '+':   
            result = add(previous, current);                   
            break;
        case '-':   
            result = subtract(previous, current);
            break;
        case '/':             
            result = divide(previous, current);
            break;
        case '*':   
            result = multiply(previous, current);
            break;
        case '=': 
        if(!result){
            return;
        }
        return result;
    }
    return result;
}
