function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        if (operation === "add") {
            result = num1 + num2;
        } else if (operation === "subtract") {
            result = num1 - num2;
        } else {
            result = "Invalid operation.";
        }
    }

    document.getElementById('result').innerText = "Result: " + result;
}
