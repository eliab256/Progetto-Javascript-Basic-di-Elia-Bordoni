let counter = 0;
const counterContainer = document.getElementById("counterContainer");

function buildDisplay(){                                    //building display div
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


function buildPlusButton(){
    const plusButtonDiv = document.createElement("div");    //building plus button div
    plusButtonDiv.classList.add("operatorButtons");
    counterContainer.appendChild(plusButtonDiv);    
    
    const plusButton = document.createElement("button");    //building plus button
    plusButton.type = "button";
    plusButton.value = "+";
    plusButton.textContent = plusButton.value;
    plusButton.addEventListener("click", plusOperation);
    plusButtonDiv.appendChild(plusButton);   
};

function plusOperation(){                                   //addition operation
    counter++;
    updateCounter();
}


function buildMinusButton(){                                
    const minusButtonDiv = document.createElement("div");   //building minus button div
    minusButtonDiv.classList.add("operatorButtons");
    counterContainer.appendChild(minusButtonDiv);         
    
    const minusButton = document.createElement("button");   //building minus button
    minusButton.type = "button";
    minusButton.value = "-";
    minusButton.textContent = minusButton.value;
    minusButton.addEventListener("click", minusOperation);
    minusButtonDiv.appendChild(minusButton);   
};

function minusOperation(){                                  //subtraction operation
    counter--;
    updateCounter();
};

function updateCounter(){              //counter value update
    const displayInput = document.getElementById('display');
    if (displayInput) {  
        displayInput.value = counter;                     
    } 
};

window.addEventListener("DOMContentLoaded", function(){
    buildDisplay();
    buildPlusButton();
    buildMinusButton();
});