
function computeadd(){
    var operands1 = parseFloat(document.getElementById("operands1").value);
    var operands2 = parseFloat(document.getElementById("operands2").value);
    var display = document.getElementById("output");
    var output = operands1 + operands2;
    display.value = operands1 + " + " + operands2 + " = " + output;
    console.log(operands1 + " + " + operands2 + " = " + output);
}

function computesub(){
    var operands1 = parseFloat(document.getElementById("operands1").value);
    var operands2 = parseFloat(document.getElementById("operands2").value);
    var display = document.getElementById("output");
    var output = operands1 - operands2;
    display.value = operands1 + " - " + operands2 +" = " + output;
    console.log(operands1 + " - " + operands2 +" = " + output);
}

function computemultiply(){
    var operands1 = parseInt(document.getElementById("operands1").value);
    var operands2 = parseInt(document.getElementById("operands2").value);
    var display = document.getElementById("output");
    var output = operands1 * operands2;
    display.value = operands1 + " * " + operands2 + " = " + output;
    console.log(operands1 + " * " + operands2 + " = " + output);
}

function computedivide(){
    var operands1 = parseInt(document.getElementById("operands1").value);
    var operands2 = parseInt(document.getElementById("operands2").value);
    var display = document.getElementById("output");
    var output = operands1 / operands2;
    display.value = operands1 + " / " + operands2 + " = " + output;
    console.log(operands1 + " / " + operands2 + " = " + output);
}


function clearscreen(){
    var operands1 = parseInt(document.getElementById("operands1").value);
    var operands2 = parseInt(document.getElementById("operands2").value);
    var display = document.getElementById("output");
    display.value = "";
    operands1.value = "";
    operands2.value = "";
    console.log( display.value = "",
    operands1.value = "",
    operands2.value = "");

}


