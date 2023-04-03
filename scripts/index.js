const numButtons = document.querySelectorAll('.btn');
const operationButtons = document.querySelectorAll('.control');
const currentInput = document.querySelector('#currentInput');
const previousInput = document.querySelector('#previousInput');
const clearButton = document.querySelector('#clear');
const keyboard = document.querySelector('.keyboard');
let current = null;
let previous = null;
let result = null;
let operation = '';

keyboard.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn')){
        if(parseInt(currentInput.textContent) === result){
            previousInput.textContent = currentInput.textContent + operation;
            currentInput.textContent = '';
            currentInput.textContent += event.target.value;
        }else{
            currentInput.textContent += event.target.value;
        }
    }else if(event.target.classList.contains('control')){
        
        current = parseInt(currentInput.textContent);
        if(!previous){
            previous = current;
            previousInput.textContent = currentInput.textContent +  event.target.textContent;
            currentInput.textContent = '';
            return;
        }

        if(!operation){
            operation = event.target.value;
            result = getResult(operation);
            console.log(`result: ${result}`)

            
        }else{
            previous = result;
            previousInput.textContent = result;
            let newOperation = event.target.value;
            previous = result;
        }
        previousInput.textContent = `${previous} ${event.target.value} ${current} = ` 
        currentInput.textContent = `${result}`;
        
    }else if(event.target.textContent === "CLEAR"){
        currentInput.textContent = '';
        
        previousInput.textContent = '';
        current = null;
        previous = null;
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
        console.log(!result);
            if(!result){
                return result;
            }
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


