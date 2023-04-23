import {getResult } from './functions.js';
const currentInput = document.querySelector('#currentInput');
const previousInput = document.querySelector('#previousInput');
const keyboard = document.querySelectorAll('.keyboard');
const numButtons = document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.querySelector('.equal-button');
let prevNumber = null;
let currNumber = null;
let operation = '';
let result = null;

numButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        currentInput.textContent += event.target.value;
        currNumber = parseFloat(currentInput.textContent);
    })
});
operationButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(!operation){
            operation = event.target.value;
        }else{
            result = getResult(operation, currNumber, prevNumber);
            prevNumber = result;
            operation = event.target.value;
        }
        if(!prevNumber){
            prevNumber = currNumber;
        }
        previousInput.textContent = prevNumber + operation;
        currentInput.textContent = '';

    })
});
equalButton.addEventListener('click',(event) => {
    result = getResult(operation, currNumber, prevNumber);
    previousInput.textContent = result;
    prevNumber = result;
    currentInput.textContent = '';
})






































































































// import {getResult } from './functions.js';
// const currentDisplay = document.querySelector('#currentInput');
// const previousDisplay = document.querySelector('#previousInput');
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
//         currentDisplay.textContent += event.target.value;
//         floatButton.disabled = true;
//         if(currentDisplay.textContent === '.'){
//             currentDisplay.textContent = 0 + currentDisplay.textContent;
//         }

//     }else if(event.target.classList.contains('num')){
//         currentDisplay.textContent += event.target.value;
        

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
//                 previousDisplay.textContent = result;
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
//         currentDisplay.textContent = '';
//         previousDisplay.textContent = '';
//         floatButton.disabled = false;


//     }else if(event.target.classList.contains('delete-button')){
//         currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
//         if(!currentDisplay.textContent.includes('.')){
//             floatButton.disabled = false;
//         }
        
//     }
// });



// function addOperation(current, operation){
//     previousDisplay.textContent = current + operation;
//     return operation;
// }
// function getCurrent(){
//     return parseFloat(currentDisplay.textContent);
// }
// function getPrevious(){
//     return parseFloat(previousDisplay.textContent);
// }
// function clear(current, previous, result, prevResult, operation, lastOperation){
//     current = null;
//     previous = null;
//     result = null;
//     prevResult = null;
//     operation = '';
//     lastOperation = '';
//     currentDisplay.textContent = '';
//     previousDisplay.textContent = '';
//     floatButton.disabled = false;
//     return current, previous, result, prevResult, operation, lastOperation;
// }