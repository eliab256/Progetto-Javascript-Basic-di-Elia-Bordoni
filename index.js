let counter = 0;

function updateDisplay(){
    document.getElementById("display").value = counter;
}

function addition(){
    counter++;
    updateDisplay();
}


function subtraction(){
    counter--;
    updateDisplay();

}


