function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9/5) + 32);

    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (((fahrenheit - 32) * (5/9)));

    return celsius;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(20)); // 68
console.log(fahrenheitToCelsius(50)); // 10

