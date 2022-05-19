'use strict';

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; // reserved word

// defining functions
function logger() {
    console.log('They call me Mr. Pig')
}

// calling functions
// logger();
// logger();
// logger();

// adding arguments / parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1982);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1982);
// console.log(age1, age2);

// arrow functions

