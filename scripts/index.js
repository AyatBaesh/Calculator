const numButtons = document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.operation');
const currentDisplay = document.querySelector('#currentInput');
const previousDisplay = document.querySelector('#previousInput');
const clearButton = document.querySelector('#clear');
const keyboard = document.querySelector('.keyboard');
let current = null;
let previous = null;
let result = null;
let prevResult = null;
let operation = '';

keyboard.addEventListener('click', (event) => {
    if(event.target.classList.contains('num')){ //if number clicked
        currentDisplay.textContent += event.target.value;
    
    }else if(event.target.classList.contains('operation')){//if operation clicked
        //UPDATING previous & current
        if(current != null){
            previous = current;
            current = parseInt(currentDisplay.textContent);
        }else{
            current = parseInt(currentDisplay.textContent);
        }
        //OPERATION '=' CASE
        if(operation === '' && event.target.value === '='){
            return;
        }else if(operation != '' && event.target.value === '='){
            prevResult = getResult(operation);
            previousDisplay.textContent = `${previous} ${operation} ${current} = ${prevResult}`;
            currentDisplay.textContent = ``;
            previous = prevResult;
            current = null;
            operation = '';
            return;
        }
        //DEFAULT FUNCTIONALITY
        if(operation != ''){
            prevResult = getResult(operation);
            previousDisplay.textContent = `${prevResult}`;
            previous = prevResult;
            current = null;
            currentDisplay.textContent = '';
        }

        operation = event.target.value;

        if(current != null){
        result = getResult(operation);
        previousDisplay.textContent = currentDisplay.textContent;
        currentDisplay.textContent = '';
        }

        previousDisplay.textContent += operation;
        

    
    }else if(event.target.value === 'clear'){
         current = null;
         previous = null;
         result = null;
         prevResult = null;
         operation = '';
        currentDisplay.textContent = '';
        previousDisplay.textContent = '';
    }
})


function getResult(operation){
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
        return result;
    }
    return result;
}

function add(input1, input2){
    console.log(`current:${input2}, previous:${input1}`);   
    return input1 + input2;
}
function subtract(input1, input2){
    console.log(`current:${input2}, previous:${input1}`);
    return input1 - input2;
}
function multiply(input1, input2){
    console.log(`current:${input2}, previous:${input1}`);
    return input1 * input2;
}
function divide(input1, input2){
    console.log(`current:${input2}, previous:${input1}`);
    return input1/input2;
}

