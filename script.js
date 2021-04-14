function add(firstNum, secondNum){
    return firstNum+secondNum;
}

function subtract(firstNum, secondNum){
    return firstNum-secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    if(secondNum===0){
        return "ERROR: You cannot divide by 0";
    }else{
        return firstNum/secondNum;
    }
}

function roundToXDec(num, xDec){            //round num to xDec decimal points - send num through this function before displaying
    if(xDec>15){
        xDec=15;
    }
    let stringNum = num.toString();             //convert number to string
    let decIndex = stringNum.indexOf(".");      //find index of "." decimal point
    let lastIndex = stringNum.length-1;         //find index of last digit
    let numDecPoints = lastIndex-decIndex;      //find number of decimal points original number has (if its 3 or less, we will be returning the original number)

    if(decIndex===-1||(numDecPoints>=1&&numDecPoints<=xDec)){  //if given number has NO DECIMAL or has xDec OR LESS decimal points, just return number
        return num;
    }else{                                                  //otherwise
        return parseFloat(num.toFixed(xDec));                  //round to xDec decimal points and convert back to float
    }
}

function operate(operator, firstNum, secondNum){
    if(operator==="+"){
        return add(firstNum,secondNum);
    }else if(operator==="-"){
        return subtract(firstNum,secondNum);
    }else if(operator==="*"){
        return multiply(firstNum,secondNum);
    }else if(operator==="/"){
        return divide(firstNum,secondNum);
    }
}

console.log(operate("/", 4, 8));

