
       function calculateBMI() {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const resultBmi = document.getElementById("bmiresult");
  
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
          resultBmi.textContent = "Please enter your actual or valid numbers values.";
          return;
        }
  
        const heightMeter = height / 100;
        const bmi = (weight / (heightMeter * heightMeter)).toFixed(2);
        let categoryOfWeight = "";
  
        if (bmi < 18.5) categoryOfWeight = "Underweight.....May indicate malnutrition or medical concerns";
        else if (bmi > 18.5 && bmi < 24.9) categoryOfWeight = "Normal weight.....Generally healthy, lowest health risk";
        else category = "Overweight.....Potential increased risk of health issues";
  
        resultBmi.textContent = `Your BMI is ${bmi}, and you are (${categoryOfWeight})`;
      }