let counter = 0;
const counterContainer = document.getElementById("counterContainer");

function buildDisplayDiv(){                                    //building display div
    const displayDiv = document.createElement("div");
    displayDiv.classList.add("display");
    counterContainer.appendChild(displayDiv);

    const displayInput = document.createElement("input");      //building display input
    displayInput.type = 'text';
    displayInput.id = 'display';
    displayInput.value = counter;
    displayInput.readOnly = true;
    displayDiv.appendChild(displayInput);  
};




window.addEventListener("DOMContentLoaded", function(){
    buildDisplayDiv();

});