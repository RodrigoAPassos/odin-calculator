let firstNum = null;
let secondNum = null;
let operator = null;
let result = null;
let dispValue = "0";

function display() {
    const disp = document.querySelector(".display");
    //1st operation
    if (result == null && operator == null) {
        firstNum = Number(dispValue);
    //2nd operation
    }else if (result != null && operator == null) {
        firstNum = result;
        result = null;
        dispValue = "0";
        secondNum = Number(dispValue);
    //1st operation 2nd number
    }else if (result == null && operator != null) {
        secondNum = Number(dispValue);
    //result
    }else if (result != null && operator != null) {
        dispValue = result;
        operator = null;
        secondNum = null;
        firstNum = null;
    }
    disp.innerHTML = dispValue;
    console.log(firstNum, secondNum, operator, result);
}

function getNumber() {
    const numButton = document.querySelector(".numberButtons");
    numButton.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            if (dispValue == "0") {
                dispValue = button.className;
                //display();
            }else if (dispValue != "0" && result != null){
                dispValue = button.className;
            }else {
                dispValue = dispValue + button.className;
                //display();
            }display();
        })
    })
}

display();
getNumber();
operate();

function operate () {
    const oprButton = document.querySelector(".operatorButtons");
    oprButton.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            let btn = button.className;
            if (btn == "add" && operator == null) {
                operator = btn;
                dispValue = "0";
                //display();
            } else if (btn == "sub" && operator == null) {
                operator = btn;
                dispValue = "0";
                //display();
            }else if (btn == "mult" && operator == null) {
                operator = btn;
                dispValue = "0";
                //display();
            }else if (btn == "divide" && operator == null) {
                operator = btn;
                dispValue = "0";
                //display();
            }else if (btn == "clear" && secondNum == null) {
                firstNum = null;
                result = null;
                dispValue = "0";
                //display();
            }else if (btn == "clear" && secondNum != null) {
                secondNum = null;
                dispValue = "0";
                //display();
            }else if (btn == "equals" && operator == "add") {
                result = firstNum + secondNum;
            }else if (btn == "equals" && operator == "sub") {
                result = firstNum - secondNum;
            }else if (btn == "equals" && operator == "mult") {
                result = firstNum * secondNum;
            }else if (btn == "equals" && operator == "divide") {
                result = firstNum / secondNum;
            }display();
        })
    })
}