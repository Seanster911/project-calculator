const allButtons = document.getElementsByClassName("num");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let firstValue = 0;
let secondValue = 0;

function operate() {
    
}


equals.addEventListener("click", operate);

clear.addEventListener("click", function(e) {
    display.value = 0;
});

for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function(e) {
        if (display.value === 0) {
            display.value = this.textContent;
        } else {
            if (display.value.includes(".") && this.textContent === ".") {

            }   else {
                display.value += this.textContent;
            }
        };
    });;
}