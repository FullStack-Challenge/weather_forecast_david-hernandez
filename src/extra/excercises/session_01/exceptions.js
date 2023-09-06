//Exceptions
//Try Catch 1
try {
    let result = -12 / 0;
    if(result == -Infinity)
        throw new Error('Invalid dividend result => '+-Infinity);
} catch (error) {
    console.log(error);
}


//Try Catch 2
try {
    let result = -12 / 0;
    if(result == Infinity)
        throw new Error('Invalid dividend result => '+ Infinity);
} catch (error) {
    console.log(error);
}