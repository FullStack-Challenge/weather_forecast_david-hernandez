//Functions

//* function keyword
//* name of the function
//* list of parameters
//* enclosed by curly brackets {}

//Function expressions => can be anonymous

//Arrow Function
//* are always anonymous
//* non-binding of 'this'


//Function Scope
//* variables defined inside a function cannot be accesed from outside
//* a function can access all variables and functions defined inside the scop 
//in which is defined.

const temperature = 35;
const speed = 1500;
var random = Math.random();

const catastrophes = new Map();
catastrophes.set('hurricane',{speed: random * speed });
catastrophes.set('storm',{speed: random * speed });
catastrophes.set('tornado',{speed: random * speed * random });

function calculateSpeedByCatastrophes(catastrophe){
    let speedCalculation = catastrophes.get(catastrophe);
    console.log('Type : %s, has a speed in Km/h: %s', catastrophe, speedCalculation.speed)

}

//anonymous
(function calculateSpeedByCatastrophes2(catastrophe){
    let speedCalculation = catastrophes.get(catastrophe);
    console.log('Type : %s, has a speed in Km/h: %s', catastrophe, speedCalculation.speed)

})('hurricane');

calculateSpeedByCatastrophes('storm');

//function passed to a variable/constant
const functionCreatedInAConstant = function calculateSpeedByCatastrophes2(catastrophe){
    let speedCalculation = catastrophes.get(catastrophe);
    console.log('Type : %s, has a speed in Km/h: %s', catastrophe, speedCalculation.speed)

};

functionCreatedInAConstant('tornado');

//arrow function
const arrowFunction = (catastrophe) => {
    let speedCalculation = catastrophes.get(catastrophe);
    console.log('Type : %s, has a speed in Km/h: %s', catastrophe, speedCalculation.speed)
}

arrowFunction('storm');

//This of anonymou function works of element itself
//This of arrow function works of the parent of the element itself