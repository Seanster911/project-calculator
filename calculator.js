const allButtons = document.getElementsByClassName("num");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const operators = document.getElementsByClassName("operators");

let firstValue = 0;
let secondValue = 0;
let operatorRecord = "";
let answered = false;
let answerRecord = 0;

function roundDecimals(answer) {
    if(answer.split(".")[1].length > 15) {
        return parseFloat(answer).toFixed(15);
    }

    return answer;
}

function operate() {
    if (secondValue === 0 && answered === false) {
        secondValue = parseFloat(display.value);
    };
    
    if (operatorRecord === "+") {
        //needed parsefloat to prevent it concatinating strings
        answerRecord = parseFloat(firstValue) + parseFloat(secondValue);
        display.value = answerRecord;
        answered = true;

        if (display.value.includes(".")) {
            display.value = roundDecimals(display.value);
        };
    } else if (operatorRecord === "-") {
        answerRecord = firstValue - secondValue; 
        display.value = answerRecord;
        answered = true;  

        if (display.value.includes(".")) {
            display.value = roundDecimals(display.value);
        };
    } else if (operatorRecord === "*") {
        answerRecord = firstValue * secondValue;
        display.value = answerRecord;
        answered = true;
        
        if (display.value.includes(".")) {
            display.value = roundDecimals(display.value);
        };
    } else if (operatorRecord === "/") {
        answerRecord = firstValue / secondValue;
        console.log(answerRecord);
        display.value = answerRecord;
        answered = true;

        if (display.value.includes(".")) {
            display.value = roundDecimals(display.value);
        };


        if (firstValue === 0 || secondValue === 0) {
            display.value = "You can't divide by zero!";
            return;
        };
    };

    firstValue = display.value;

}

//assigning event to equals button
equals.addEventListener("click", operate);


//assigning event to clear button
clear.addEventListener("click", function(e) {
    display.value = 0;
    firstValue = 0;
    secondValue = 0;
    operatorRecord = "";
    answered = false;
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
        //making sure to collect initial value if screen has not been filled
        if (firstValue === 0 && isNaN(display.textContent)) {
            firstValue = 0;
            display.value = 0;
            operatorRecord = this.textContent;
        } else if (firstValue === 0) {
            firstValue = parseFloat(display.value);

            display.value = 0;

            operatorRecord = this.textContent;
        } else if (answered === true) {
            firstValue = parseFloat(display.value);
            operatorRecord = this.textContent;
            display.value = 0; 
            answered = false;
            secondValue = 0; 
        }

        console.log(firstValue);
        console.log(operatorRecord);
        console.log(secondValue);       
    });
};