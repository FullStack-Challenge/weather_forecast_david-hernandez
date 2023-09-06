//Conditionals & Loops

if(num1 > num2){
    console.log('Num2 value is higher than Num1 value');
}else if( num2 != 0) {
    console.log('Num2 is different from Zero');
}

const expression = 'Otherday';

switch(expression){
    case 'Monday':
        console.log('Yeah! is Monday');
        break;
    case 'Tuesday':
        console.log('Maybe.. is Tomorrow');
        break;
    default:
        console.log('No way! was not that Day!');     
}


for (let i = 0; i < 10; i++){
    console.log('10 positions in total , this is position => '+i);
}

console.log('DO WHILE');

let j = 0;
do{
    console.log('10 positions in total , this is position => '+j);
    j++;
}while(j < 10);

console.log('WHILE');

while(j <= 15){
    console.log('5 positions in total , this is position => '+j);
    j++;
}