// Constant temperature in Kelvin
var kelvin = 299.5;
console.log(`The temperature is ${kelvin} degrees Kelvin`);
// Temperature in Celsius calculated using kelvin
var celsius = kelvin - 273;
// Rounds down celsius value to the nearest integer
celsius = Math.floor(celsius);
console.log(`The temperature is ${celsius} degrees Celsius`)
// Temperature in Fahrenheit calculated using Celsius
var fahrenheit = 9/5 * celsius + 32;
// Rounds down fahrenheit value to the nearest integer
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit");
// Temperature in Newtons calculated using Celsius
var newton = 0.33 * celsius;
// Rounds down newton value to the nearest integer
newton = Math.floor(newton);
console.log("The temperature is " + newton + " degrees Newton");