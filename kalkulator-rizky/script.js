const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");  // Correctly select all buttons
const specialChars = ["%", "*", "/", "-", "+", "=", "^"];
let output = "";

// Function to handle button clicks
const calculate = (btnValue) => {
    display.focus();

    if (btnValue === "=" && output !== "") {
        try {
            // Replace % with /100 for percentage calculation
            // Replace ^ with ** for exponentiation
            let expression = output.replace(/%/g, "/100").replace(/\^/g, "**");
            output = eval(expression);
        } catch (e) {
            output = "Error";
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1);
    } else {
        // Prevent starting with an operator or having multiple operators in a row
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output;
};

// Attach event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
