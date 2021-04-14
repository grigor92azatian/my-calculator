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

let displayThis = "";
let currentInput = "";
let userOperator;
let userNumber1;
let userNumber2;
let result;
let displayString = "";

//reference to all buttons
let numberButtons = [document.querySelector("#zero"), document.querySelector("#one"), document.querySelector("#two"), document.querySelector("#three"), 
                    document.querySelector("#four"), document.querySelector("#five"), document.querySelector("#six"), document.querySelector("#seven"), 
                    document.querySelector("#eight"), document.querySelector("#nine")];
let operatorButtons = [document.querySelector("#add"), document.querySelector("#subtract"), document.querySelector("#multiply"), document.querySelector("#divide")];
let decimalButton = document.querySelector("#decimal");
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");

//reference to display area
let displayArea = document.querySelector("#display");

//button eventListeners
//numbers
for(let i=0;i<numberButtons.length;i++){
        numberButtons[i].addEventListener("click", function(){
        displayString += currentInput;
        currentInput += numberButtons[i].innerText;
        
        //currentInput = "";
        //displayArea.innerText = displayString;
        console.log({currentInput});
    });
}
//operators
operatorButtons.forEach(element => {
    element.addEventListener("click",function(){
        //ensure last character in currentInput is NOT another operator
        if(isNaN(currentInput[currentInput.length-1]) === false){
            userNumber1 = parseInt(currentInput);
            userOperator = element.innerText;
            currentInput = "";

            displayString += " "+element.innerText+" ";
            //displayArea.innerText = currentInput;
            console.log({currentInput});
        }
    });
});
//decimal

//equals

equalsButton.addEventListener("click", function(){
    userNumber2 = parseInt(currentInput);
    result = operate(userOperator, userNumber1, userNumber2);
    console.log({userNumber1}, {userNumber2}, {userOperator}, {result});
});

//clear
clearButton.addEventListener("click",function(){
    displayThis = "";
    currentInput = "";
    userOperator = "";
    userNumber1 = "";
    userNumber2 = "";
    result = 0;
    displayString = "";
    displayArea.innerText = "";
});





// let documentCalculator = document.querySelector("#calculator-container");   //refernce element containing all buttons
// let arrayOfButtons = [...documentCalculator.querySelectorAll("button")];    //select all buttons and assign to array 
// let arrayOfButtonSelectors = arrayOfButtons.map(function(button){
//     return "#"+button.id;
// });
// let arrayOfButtonReferences = arrayOfButtonSelectors.map(function(selector){
//     return document.querySelector(selector);                                //(THIS MIGHT BE REDUNDANT)
// });
// for (let i=0;i<arrayOfButtonReferences.length;i++){
//     arrayOfButtonReferences[i].addEventListener("click", function(){        //assign event listener to all buttons
//         displayThis += arrayOfButtonReferences[i].innerText;
//         display.innerText = displayThis;
//     });
// }


//button behavior
    //numbers and +,-,x,/ will send contents to displayThis variable that will store the string
    //decimal button = displayThis will ONLY allow 1 decimal point BETWEEN operator clicks (single number is only allowed a single decimal)
    //clear button - clears contents of displayThis
    //equals button - evaluates string from left to right, one pair of numbers at a time and then sends final result to displayThis

//Rules
    //1. Cannot chain multiple operators consecutively: "234++-223"
    //2. Cannot have more than 1 decimal point in a number: "23.345.3+23"
    //3. 


