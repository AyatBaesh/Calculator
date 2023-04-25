import {getResult } from './math.js';
const currentInput = document.querySelector('#currentInput');
const previousInput = document.querySelector('#previousInput');
const keyboard = document.querySelector('.keyboard');
const floatButton = document.querySelector('.float');
let prevNumber = null;
let currNumber = null;
let result = null;
let operation = '';
document.addEventListener('keydown', (event) => {
    let key = event.key;
    if(key === 'Enter'){
        key = '=';
    }
    const button = document.querySelector(`button[value='${key}']`);
    if (button) {
      button.click();
    }
});
keyboard.addEventListener('click',(event) => {
    if(event.target.value === '.'){ //hadling '.' button
        currentInput.textContent += event.target.value;
        floatButton.disabled = true;
        if(currentInput.textContent === '.'){
            currentInput.textContent = 0 + currentInput.textContent;
        }
    }else if(event.target.classList.contains('num')){
        
        currentInput.textContent += event.target.value;
        currNumber = parseFloat(currentInput.textContent);
    }else if(event.target.classList.contains('operation')){
        floatButton.disabled = false;
        if(!operation){
            operation = event.target.value;
        }else{
            result = getResult(operation, currNumber, prevNumber);
            prevNumber = result;
            currNumber = null;
            operation = event.target.value;
        }
        if(!prevNumber){
            prevNumber = currNumber;
            currNumber = null;
        }
        previousInput.textContent = prevNumber + operation;
        currentInput.textContent = '';
    }else if(event.target.classList.contains('equal-button')){
        result = getResult(operation, currNumber, prevNumber);
        previousInput.textContent = result;
        prevNumber = result;
        currNumber = null;
        currentInput.textContent = '';
    }else if(event.target.classList.contains('clear-button')){
        prevNumber = null;
        currNumber = null;
        result = null;
        operation = '';
        currentInput.textContent = '';
        previousInput.textContent = '';
        floatButton.disabled = false;

    }else if(event.target.classList.contains('delete-button')){
        currentInput.textContent = currentInput.textContent.slice(0, -1);
        if(!currentDisplay.textContent.includes('.')){
            floatButton.disabled = false;
        }
    }
})
  





































































































// import {getResult } from './functions.js';
// const currentInput = document.querySelector('#currentInput');
// const previousIcurrentInput = document.querySelector('#previousInput');
// const keyboard = document.querySelector('.keyboard');
// const floatButton = document.getElementById('.');
// let current = null;
// let previous = null;
// let result = null;
// let prevResult = null;
// let operation = '';
// let lastOperation = '';
// //keyboard support
// // document.addEventListener('keydown', (event) => {
// //     let key = event.key;
// //     switch(key){
// //         case "Enter":
// //             key = '=';
// //             break;
// //         default:
// //             break;
// //     }
// //     const button = document.querySelector(`button[value='${key}']`);
// //     if (button) {
// //       button.click();
// //     }
// //   });

//   //listen to type of the button clicked:
// keyboard.addEventListener('click', (event) => {
//     if(event.target.value === '.'){ //hadling '.' button
//         currentInput.textContent += event.target.value;
//         floatButton.disabled = true;
//         if(currentInput.textContent === '.'){
//             currentInput.textContent = 0 + currentInput.textContent;
//         }

//     }else if(event.target.classList.contains('num')){
//         currentInput.textContent += event.target.value;
        

//     }else if(event.target.classList.contains('operation')){
//         floatButton.disabled = false;
//         if(current){
//             previous = getPrevious();
//         }else{
//             current = getCurrent();
//         }
//         if(operation){
//             lastOperation = operation;
//             if((current && previous) && lastOperation != '='){
//                 result = getResult(lastOperation, current, previous);
//                 previousIcurrentInput.textContent = result;
//             }else if((current && previous) && lastOperation === '='){
                
//             }
//         }


//     }else if(event.target.classList.contains('clear-button')){
//         current = null;
//         previous = null;
//         result = null;
//         prevResult = null;
//         operation = '';
//         lastOperation = '';
//         currentInput.textContent = '';
//         previousIcurrentInput.textContent = '';
//         floatButton.disabled = false;


//     }else if(event.target.classList.contains('delete-button')){
//         currentInput.textContent = currentInput.textContent.slice(0, -1);
//         if(!currentInput.textContent.includes('.')){
//             floatButton.disabled = false;
//         }
        
//     }
// });



// function addOperation(current, operation){
//     previousIcurrentInput.textContent = current + operation;
//     return operation;
// }
// function getCurrent(){
//     return parseFloat(currentInput.textContent);
// }
// function getPrevious(){
//     return parseFloat(previousIcurrentInput.textContent);
// }
// function clear(current, previous, result, prevResult, operation, lastOperation){
//     current = null;
//     previous = null;
//     result = null;
//     prevResult = null;
//     operation = '';
//     lastOperation = '';
//     currentInput.textContent = '';
//     previousIcurrentInput.textContent = '';
//     floatButton.disabled = false;
//     return current, previous, result, prevResult, operation, lastOperation;
// }