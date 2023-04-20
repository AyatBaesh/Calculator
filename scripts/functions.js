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
    if(input2 === 0){
        alert('Can\'t divide by 0');
        return input1;
    }    
    return input1/input2;
}
export {
    add,
    subtract,
    multiply,
    divide,
  };