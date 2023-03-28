const numButtons = document.querySelectorAll('.btn');
const controlButtons = document.querySelectorAll('.control');
const userInput = document.querySelector('#userInput');
const previousInput = document.querySelector('#previousInput');
let temporary = 0;
numButtons.forEach((button) => {
    button.addEventListener('click',(event) => {
        event.preventDefault();
        userInput.textContent += button.value;
        // let current = parseInt(userInput.textContent);
    });

});
controlButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        previousInput.textContent += userInput.textContent;
        temporary = parseInt(userInput.textContent);
        console.log(`${button.value} was clicked`);
        // console.log(`temporary ${temporary}, input ${input}`);
        userInput.textContent ='';
    });
});


// console.log(`${input}`)
function add(input1, input2){
    return input1 + input2;
}