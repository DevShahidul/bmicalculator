// Get references to HTML elements
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultElement = document.getElementById("result");

// Define a function to calculate the BMI
function calculateBMI() {
    // Get the weight and height values from the input fields
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.innerText = "Please enter valid weight and height values.";
        return false;
    }

    // Calculate the BMI
    const bmi = weight / (height * height);

    // Display the BMI result on the web page
    resultElement.textContent = "Your BMI is " + bmi.toFixed(1);
}

// Attach the calculateBMI function to the button's click event
calculateBtn.addEventListener("click", calculateBMI);