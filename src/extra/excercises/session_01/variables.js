//#VARIABLES

//1) var vs let declaration -For Let cannot be redeclared with same variable name
//var 
var countryWeather = 'Colombia';
var countryWeather = 'Venezuela';

//let
let countryTemperature = 45;
//let countryTemperature = 46;


//2) scope - let (block scope)
if(countryTemperature > 30){
    var countryWeather = 'Spain';
    let countryTemperature = 15;
    console.log(countryTemperature);
}

console.log(countryWeather);

//3) Undefined - variable - which not contains assigned Value
//   Undefined - statement or method - if non-value is returned
//4) Null - is an object - means object a non-value assigned
//5) Symbol - is unique - no matter which value is contained
const sym1 = Symbol('value');
const sym2 = Symbol('value');

console.log(sym1 === sym2);
console.log(sym1 == sym2);
