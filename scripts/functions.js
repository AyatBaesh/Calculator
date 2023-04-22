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
function getResult(operation, current, previous, result){
    if((!previous || !current) && (previous != 0) && (current != 0)){
        console.log(`current:${current}, previous:${previous}`);
        return previous;
    }
    switch (operation){
        default:
            throw new Error('That should never happened, seems like default case of switch is triggered');
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
export {getResult};