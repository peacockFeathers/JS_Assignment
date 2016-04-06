console.log(square(2));

function square(x) {
    return x * x;
}
    
console.log(square(8));

console.log(callSquare(10));

function callSquare(x) {
    return square(x);
}


// Also write a function which is assigned to a variable. Call it before it is assigned and prove that this does not work.

console.log(earth); // returns 'undefined'

var earth = function() {
    return 42;
};
