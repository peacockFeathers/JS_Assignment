console.log(square(2));

function square(x) {
    return x * x;
}
    
console.log(square(8));

console.log(callSquare(10));

function callSquare(x) {
    return square(x);
}

// Write a JavaScript program that declares a function but calls it before it is declared.
// Because of function hoisting this will work in JavaScript. Go prove it!

// Formula from calculatorcat.com:
/*
// To convert cat age to an equivalent human age, an accepted method is to add 15 years for the first year of life. 
// Then add 10 years for the second year of life. After that, add 4 years for every cat year. 
// This means that by year two, a cat has matured to about the same as a 25 year old human. 
*/
catYearsToHumanYearsTestFunction(); // should return 25

function catYearsToHumanYears(catYears) {
    var humanYears = 0;
    if (catYears >= 1) {
        humanYears += 15;
    } if (catYears >= 2) {
        humanYears += 10;
    } if (catYears > 2) {
        humanYears += ((catYears-2)*4);
    }
    
    return humanYears;
}

function catYearsToHumanYearsTestFunction() {
    console.log(catYearsToHumanYears(2));
}

// Also write a function which is assigned to a variable. Call it before it is assigned and prove that this does not work.

console.log(earth); // returns 'undefined'

var earth = function() {
    return 42;
};
