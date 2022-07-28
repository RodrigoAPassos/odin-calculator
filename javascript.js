//--Add func--
function add (a, b) {
    let nA = Number(a);
    let nB = Number(b);
    return nA + nB;
}

//--Subtract func--
function sub (a, b) {
    let nA = Number(a);
    let nB = Number(b);
    return nA - nB;
}

//--Multiply func--
function mult (a, b) {
    let nA = Number(a);
    let nB = Number(b);
    return nA * nB;
}

//--Divide func--
function divide (a, b) {
    let nA = Number(a);
    let nB = Number(b);
    return nA / nB;
}
/*
//--Operate func--
function operate (oprt, a, b) {
    let n = 0;
    if (oprt == "add") {
        n = add(a, b);
        display(n);
        enterNum("");
    }else if (oprt == "sub") {
        n = sub(a, b);
        display(n);
        enterNum("");
    }else if (oprt == "mult") {
        n = mult(a, b);
        display(n);
        enterNum("");
    }else if (oprt == "divide") {
        n = divide(a, b);
        display(n);
        enterNum("");
    }
}

function enterNum (n) {
    const numButton = document.querySelector(".numberButtons");
    numButton.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            n = n + button.className;
            display(n);
            clear();
            operator(n);
        })
    });
}

function enterNum2 (n, a, oprt) {
    const numButton = document.querySelector(".numberButtons");
    numButton.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            n = n + button.className;
            display(n);
            cleared();
            equal(a, oprt, n);
        })
    });
}

function display(n) {
    let disp = document.querySelector(".display");
    if (n == "") {
        disp.innerHTML = "0";
    }else disp.innerHTML = n;
}

function operator(n) {
    let opButtons = document.querySelector(".operatorButtons");
    opButtons.querySelectorAll("button").forEach((button) =>{
        button.addEventListener("click", () =>{
            let oprt = button.className;
            let a = n;
            enterNum2("", a, oprt);
        })
    });
}

function equal(a, oprt, n) {
    let other = document.querySelector(".others");
    other.querySelector(".equals").addEventListener("click", () => {
        let b = n;
        operate(oprt, a, b);
    })
}

function clear() {
    document.querySelector(".clear").addEventListener("click", () => {
        display("");
        enterNum("");
    })
}

function cleared() {
    document.querySelector(".clear").addEventListener("click", () => {
        enterNum2("");
    })
}

function start () {
    display("");
    enterNum("");
}

start();*/
function start() {
    enterNum();
    clear();
    operator();
}

function enterNum() {
    const numButtons = document.querySelector(".numberButtons");
    numButtons.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => display("show", button.className))
    })
}

function display(status, n) {
    const disp = document.querySelector(".display");
    switch(status){
        case "clear":
            disp.innerHTML = "0";
        case "show":
            if(disp.innerHTML == "0"){
                disp.innerHTML = n;
            } else {
            disp.innerHTML = disp.innerHTML + n;
            }
    }
}

function getNumber() {
    const disp = document.querySelector(".display");
    return disp.innerHTML;
}

function clear() {
    document.querySelector(".clear").addEventListener("click", () => display("clear", ""));
}

function cleared () {
    display("clear", "0");
}

function operator () {
    const oprtr = document.querySelector(".operatorButtons");
    oprtr.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
        let a = getNumber();
        let opr = button.className;
        cleared();
        console.log(a, opr);
        equalsTo(a, opr);
        })
    })
}

function equalsTo(a, opr) {
    let result = 0;
    document.querySelector(".equals").addEventListener("click", () => {
        let b = getNumber();
        console.log(a, b, opr);
        operate(a, b, opr);
    })
}

function operate(a, b, opr) {
    if (opr == "add") {
        result = add(a, b);
        cleared();
        console.log(result);
        display("show", result);
    } else if (opr == "sub") {
        result = sub(a, b);
        cleared();
        display("show", result);
    } else if (opr == "mult") {
        result = mult(a, b);
        cleared();
        display("show", result);
    } else if (opr == "divide") {
        result = divide(a, b);
        cleared();
        display("show", result);
    }
}

start();