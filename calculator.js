const allButtons = document.getElementsByClassName("num");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const operators = document.getElementsByClassName("operators");

let firstValue = 0;
let secondValue = 0;
let operatorRecord = "";

function operate() {
    if (secondValue === 0) {
        secondValue = display.value;
    }
    
    if (operatorRecord === "+") {
        display.value = firstValue + secondValue;
    } else if (operatorRecord === "-") {
        display.value = firstValue - secondValue;   
    } else if (operatorRecord === "*") {
        display.value = firstValue * secondValue;
    } else if (operatorRecord === "/") {
        display.value = firstValue / secondValue;
    }

    firstValue = display.value;

    console.log(firstValue);
    console.log(secondValue);
    console.log(operatorRecord);
}

//assigning event to equals button
equals.addEventListener("click", operate);


//assigning event to clear button
clear.addEventListener("click", function(e) {
    display.value = 0;
    firstValue = 0;
    secondValue = 0;
});


//assigning the events to the numerical buttons
for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(e) {
        if (display.value === "0") {
            display.value = this.textContent;
        } else {
            if (display.value.includes(".") && this.textContent === ".") {

            }   else {
                display.value += this.textContent;
            }
        };
    });
};


//assigning the events to the operators buttons
for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(e) {
        if (firstValue === 0) {
            firstValue = parseFloat(display.value);

            display.value = 0;

            operatorRecord = this.textContent;
        }
    });
};