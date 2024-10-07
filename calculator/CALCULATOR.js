const display = document.getElementById("display");

window.onload = function() {
    display.value = "0"; 
};

function appendToDisplay(input){
    if (display.value === "0") {
        display.value = input; 
    } else {
        display.value += input; 
    }
}

function clearDisplay(){
    display.value = "0"; 
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}

function squareRoot(){
    try{
        display.value = Math.sqrt(eval(display.value));
    }
    catch(error){
        display.value = "Error";
    }
}

function square(){
    try{
        display.value = Math.pow(eval(display.value), 2);
    }
    catch(error){
        display.value = "Error";
    }
}