function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let convertedTemp;

    if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        convertedTemp = ((inputTemp - 32) * 5/9).toFixed(2);
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        convertedTemp = (((inputTemp - 32) * 5/9) + 273.15).toFixed(2);
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        convertedTemp = ((inputTemp * 9/5) + 32).toFixed(2);
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        convertedTemp = (inputTemp + 273.15).toFixed(2);
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        convertedTemp = (((inputTemp - 273.15) * 9/5) + 32).toFixed(2);
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        convertedTemp = (inputTemp - 273.15).toFixed(2);
    } else {
        convertedTemp = inputTemp.toFixed(2);
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = ` ${convertedTemp} ${toUnit}`;
}


