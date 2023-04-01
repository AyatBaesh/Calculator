const numButtons = document.querySelectorAll('.btn');
const operationButtons = document.querySelectorAll('.control');
const currentInput = document.querySelector('#currentInput');
const previousInput = document.querySelector('#previousInput');
const clearButton = document.querySelector('#clear');
let current = null;
let previous = null;
let result = null;
console.log(!current);
numButtons.forEach((button) =>{
    button.addEventListener('click', () => {
        currentInput.textContent += button.value;   
        
    })
});

operationButtons.forEach((operationButton) => {
    operationButton.addEventListener('click', () => {
        current = parseInt(currentInput.textContent);
        console.log(operationButton.textContent);

        if(!previous){
            previous = current;
            previousInput.textContent = currentInput.textContent +  operationButton.textContent;
            currentInput.textContent = ' ';
            return;
        }
        switch (operationButton.value){
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
            console.log(!result);
                if(!result){
                    return;
                }
        }

        previousInput.textContent = `${previous} ${operationButton.value} ${current}` 
        currentInput.textContent = result;
        
    })
})



clearButton.addEventListener('click',() => {
    currentInput.textContent = '';
    previousInput.textContent = '';
    current = null;
    previous = null;
})




function add(input1, input2){
    console.log(`current:${input2}, previous:${input1}`);
    console.log(input1 + input2);   
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



















































// numButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         previousInput.textContent += button.value;
//         // let current = parseInt(previousInput.textContent);
//     });

// });
// operationButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(previousInput.textContent)
//         let current = parseInt(previousInput.textContent);
//         previousInput.textContent = previousInput.textContent + button.value;
//         previousInput.textContent = '';
//         operationButtons.forEach((operationButton) => {
//             let current = parseInt(previousInput.textContent);
//             operationButton.addEventListener('click', () => {

//             })
//         })

//     });
// });


// // console.log(`${input}`)


