let display = document.getElementById("display");

function appendSymbol(symbol) {
    display.value += symbol;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}