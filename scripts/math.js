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
function getResult(operation, current, previous){
    let result = null;
    if((!previous || !current) && (previous != 0) && (current != 0)){
        console.log(`current:${current}, previous:${previous}`);
        return previous;
    }
    console.log(`oepration: ${operation}`)
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
            console.log(`result doesn't exist operation is '='`);
            return;
        }

            return result;
        default:
            throw new Error('That should never happened, seems like default case of switch is triggered');

        
    }
    console.log(`result: ${result}`)
    return result;
}
export {getResult};