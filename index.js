

const display = document.getElementById("display");

function toDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function delDisplay(){
    const display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function percent(){
    const display = document.getElementById("display").value;

    if(display !== ""){
    document.getElementById("display").value = parseFloat(display) / 100;
    }
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}


