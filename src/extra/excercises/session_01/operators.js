//OPERATORS

var num1 = 1;
var num2 = 2.5;
var num3 = '2.5';

//Arithmetic
console.log('Arithmetic');
console.log(NaN);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log('Arithmetic 2');
num2--;
++num1;

console.log(num1);
console.log(num2);
console.log(num1 + num2);

console.log('Arithmetic 3');
--num2;
num1++;

console.log(num1);
console.log(num2);
console.log(num1 + num2);

//Logic
console.log('Logic');
console.log(num1 != num2);
console.log(num3 == num2);
console.log(num3 === num2);

var num1 = 6;
var num2 = 6;
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log('Logic 2 ');

var num1 = 12;
var num2 = 2;
console.log(num1 <= num2 || num1 > 0);
console.log(num1 <= num2 && num1 != 0);
console.log(!(num1 > num2));
console.log((num1 > num2 ? 'Ternary' : 'No Ternary'));


//Bit operator
var num1 = 12;
var num2 = 25;
console.log('Bitwise');
/* AND
The binary value of 12 is 00000000000000000000000000001100
The binary value of 25 is 00000000000000000000000000011001.
When bitwise AND operation is performed, the binary result will be 00000000000000000000000000001000 
which converts into the decimal value 8.
*/
console.log(num1 & num2);


//OR - 29
console.log(num1 | num2);

//XOR - 21
console.log(num1 ^ num2);
//NOT -13
console.log(~12);

//Left shift
//1 (00000000000000000000000000010000)
console.log(8 << 1);

//Right shift
//4 (00000000000000000000000000000100)
console.log(8 >> 1);
