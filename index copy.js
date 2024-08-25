let counter = 0;
const counterContainer = document.getElementById("counterContainer");

function buildDisplayDiv(){                                    //building display div
    const displayDiv = document.createElement("div");
    displayDiv.classList.add("display");
    counterContainer.appendChild(displayDiv);
};

function buildInputDisplay(displayDiv){                                //building display input
    const displayInput = document.createElement("input");
    displayInput.type = 'text';
    displayInput.id = 'display';
    displayInput.value = counter;
    displayInput.readOnly = true;
    displayDiv.appendChild(displayInput);                 
};



function buildPlusButtonDiv(){
    const plusButtonDiv = document.createElement("div");    //building plus button div
    plusButtonDiv.classList.add("operator-buttons");
    counterContainer.appendChild(plusButtonDiv);                    
};

function buildPlusButton(plusButtonDiv){
    const plusButton = document.createElement("button");    //building plus button
    plusButton.type = "button";
    plusButton.value = "+";
    plusButton.onclick = counter++;
    plusButtonDiv.appendChild(plusButton);   
}



function buildMinusButtonDiv(){                                
    const minusButtonDiv = document.createElement("div");   //building minus button div
    minusButtonDiv.classList.add("operator-buttons");
    counterContainer.appendChild(minusButtonDiv);                   
};

function buildMinusButton(minusButtonDiv){
    const minusButton = document.createElement("button");   //building minus button
    minusButton.type = "button";
    minusButton.value = "-";
    minusButton.onclick = counter--;
    minusButtonDiv.appendChild(minusButton);   
}



window.addEventListener("DOMContentLoaded", function(){
    buildDisplayDiv;
    buildMinusButtonDiv;
    buildPlusButtonDiv;
    buildMinusButton;
    buildPlusButton;
});