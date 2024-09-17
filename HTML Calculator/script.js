// function calculator() {
//     const firstNumber=parseFloat(document.getElementById("firstNumber").value);
//     const secondNumber=parseFloat(document.getElementById("secondNumber").value);
//     const operator=document.getElementById("operator").value;

//     let result;
//     if (operator==="Addition"){
//         result=firstNumber+secondNumber

//     }else if (operator==="Subtraction"){
//         result=firstNumber-secondNumber
// }else if (operator==="Multiplication"){
//     result=firstNumber*secondNumber
// }else if (operator==="Division"){
//     result=firstNumber/secondNumber

// } else{
//     result="Please select a valid operator";
// }
// document.getElementById("result").innerText="Result: "+ result;
// }



// function calculator() {
//     const firstNumber = parseFloat(document.getElementById("firstNumber").value);
//     const secondNumber = parseFloat(document.getElementById("secondNumber").value);
//     const operator = document.getElementById("operator").value;

//     let result;
//     if (operator === "Addition") {
//         result = firstNumber + secondNumber;
//     } else if (operator === "Subtraction") {
//         result = firstNumber - secondNumber;
//     } else if (operator === "Multiplication") {
//         result = firstNumber * secondNumber;
//     } else if (operator === "Division") {
//         result = firstNumber / secondNumber;
//     } else {
//         result = "Please select a valid operator";
//     }
    
//     document.getElementById("result").innerText = "Result: " + result;
// }



//  chat GPT CODE


function calculate() {  // Renamed function to match the HTML onclick event
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operator = document.getElementById("operator").value;

    let result;
    if (operator === "Addition") {
        result = firstNumber + secondNumber;
    } else if (operator === "Subtraction") {
        result = firstNumber - secondNumber;
    } else if (operator === "Multiplication") {
        result = firstNumber * secondNumber;
    } else if (operator === "Division") {
        if (secondNumber === 0) {
            result = "Error: Division by zero";
        } else {
            result = firstNumber / secondNumber;
        }
    } else {
        result = "Please select a valid operator";
    }
    
    document.getElementById("result").innerText = "Result: " + result;
}
