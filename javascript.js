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
    //1st operation 2nd number
    }else if (result == null && operator != null) {
        secondNum = Number(dispValue);
    //result
    }else if (result != null && operator != null) {
        dispValue = result;
        result = null;
        operator = null;
        secondNum = null;
        firstNum = dispValue;
    }
    disp.innerHTML = dispValue;
    //console.log(firstNum, secondNum, operator, result);
}

function getNumber() {
    const numButton = document.querySelector(".numberButtons");
    numButton.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            if (dispValue == "" || dispValue == "0" || dispValue == "Don't") {
                dispValue = button.className;
                //disable dot after 1st dot
                if (dispValue.includes(".")) {
                    numButton.querySelector("#dot").disabled = true;
                }else numButton.querySelector("#dot").disabled = false;
            }else {
                dispValue = dispValue + button.className;
                //disable dot after 1st dot
                if (dispValue.includes(".")) {
                    numButton.querySelector("#dot").disabled = true;
                }else numButton.querySelector("#dot").disabled = false;
            }display();
        })
    })
    //keyboard option
    document.addEventListener("keydown", (event) => {
        if (event.key == "0") {
            event.preventDefault();
            numButton.querySelector("#zero").click();
        }else if (event.key == "1") {
            event.preventDefault();
            numButton.querySelector("#one").click();
        }else if (event.key == "2") {
            event.preventDefault();
            numButton.querySelector("#two").click();
        }else if (event.key == "3") {
            event.preventDefault();
            numButton.querySelector("#three").click();
        }else if (event.key == "4") {
            event.preventDefault();
            numButton.querySelector("#four").click();
        }else if (event.key == "5") {
            event.preventDefault();
            numButton.querySelector("#five").click();
        }else if (event.key == "6") {
            event.preventDefault();
            numButton.querySelector("#six").click();
        }else if (event.key == "7") {
            event.preventDefault();
            numButton.querySelector("#seven").click();
        }else if (event.key == "8") {
            event.preventDefault();
            numButton.querySelector("#eight").click();
        }else if (event.key == "9") {
            event.preventDefault();
            numButton.querySelector("#nine").click();
        }else if (event.key == ",") {
            event.preventDefault();
            numButton.querySelector("#dot").click();
        }
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
                dispValue = "";
            } else if (btn == "sub" && operator == null) {
                operator = btn;
                dispValue = "";
            }else if (btn == "mult" && operator == null) {
                operator = btn;
                dispValue = "";
            }else if (btn == "divide" && operator == null) {
                operator = btn;
                dispValue = "";
            }else if (btn == "clear" && secondNum == null) {
                firstNum = null;
                result = null;
                dispValue = "0";
            }else if (btn == "clear" && secondNum != null) {
                secondNum = null;
                dispValue = "0";
            }else if (btn == "equals" && operator == "add") {
                result = firstNum + secondNum;
            }else if (btn == "equals" && operator == "sub") {
                result = firstNum - secondNum;
            }else if (btn == "equals" && operator == "mult") {
                result = firstNum * secondNum;
            }else if (btn == "equals" && operator == "divide") {
                if (secondNum == 0) {
                    result = "Don't";
                } else result = firstNum / secondNum;
            }display();
        })
    })
    //keyboard option
    document.addEventListener("keydown", (event) => {
        if (event.key == "+") {
            event.preventDefault();
            oprButton.querySelector("#add").click();
        }else if (event.key == "-") {
            event.preventDefault();
            oprButton.querySelector("#sub").click();
        }else if (event.key == "*") {
            event.preventDefault();
            oprButton.querySelector("#mult").click();
        }else if (event.key == "/") {
            event.preventDefault();
            oprButton.querySelector("#divide").click();
        }else if (event.key == "Enter") {
            event.preventDefault();
            oprButton.querySelector("#equals").click();
        }else if (event.key == "Escape" || event.key == "Backspace") {
            event.preventDefault();
            oprButton.querySelector("#clear").click();
        }
    })
}