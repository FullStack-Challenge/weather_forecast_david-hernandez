//Data Structures

//indexed collection

//* javascript does not have an explicit array data type
//* You can use the predefined Array object and its methods to work with arrays
//* Yu can join, reverse and sort them
//* Arrays can contain 'Empty slots'. Those slots filled with the value undefined.


//Arrays
const array1 = new Array(0, '', NaN ,/* _ , */);
const array2 = Array(0, '', NaN ,/* _ , */);
const array3 = [0, '', NaN ,/* _ , */];

array1.forEach(element => {
    console.log(element);
});

//Map
//* is a simple key value map and can interate it's elements in insertion order
//* a Set object are collections of unique values, you can interate its elements in insertion order
 const mapObject = new Map();
 mapObject.set(0, 'Dog');
 mapObject.set(1, 'Cat');
 console.log('mapObject size is '+ mapObject.size);

 for (const [key, value] of mapObject) {
        console.log(key);
        console.log(value);
 }

mapObject.clear();
console.log('mapObject size is '+ mapObject.size);

console.log('SET OBJECT');
const setObject = new Set();
setObject.add('Dog');
setObject.add('Cat');
setObject.add('Turtle');
console.log('setObject contains 1 is '+ setObject.has(1));
console.log('setObject size is '+ setObject.size);


for (const value of setObject) {
       console.log(value);
}

setObject.delete('Cat');
console.log('setObject size is '+ setObject.size);

//Arrays
const cities = Array.of('Rolota', 'Medallo', 'Cali es Cali');
cities.push('Barranca');
cities.forEach(element => {
    console.log(element);
});
console.log('First position of cities is => '+cities[0]);