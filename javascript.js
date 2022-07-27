//--Add func--
function add (a, b) {
    return a + b;
}

//--Subtract func--
function sub (a, b) {
    return a - b;
}

//--Multiply func--
function mult (a, b) {
    return a * b;
}

//--Divide func--
function divide (a, b) {
    return a / b;
}

//--Operate func--
function operate (operator, a, b) {
    let n = 0;
    if (operator == "add") {
        n = add(a, b);
        display(n);
    }else if (operator == "sub") {
        n = sub(a, b);
        display(n);
    }else if (operator == "mult") {
        n = mult(a, b);
        display(n);
    }else if (operator == "divide") {
        n = divide(a, b);
        display(n);
    }
}

function enterNum () {
    const numButton = document.querySelector(".numberButtons");
    numButton.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
        let n = button.className;
        display(n);
        operator(dispNumber);
        })
    });
}

function display(n) {
    let disp = document.querySelector(".display");
    disp.innerHTML = disp.innerHTML + n;
    let dispNumber = disp.innerHTML;
    return dispNumber;
}

function operator(dispNumber) {
    
}
enterNum();