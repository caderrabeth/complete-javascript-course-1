// Values and Variables Assignment
const country = 'USA';
const continent = 'North America';
let population = 329.5;

// Data Types
const isIsland = false;
let language;
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof language)

// let, const, and var
language = 'English';
// Changed above let declarations to const

// Basic Operators
// console.log(++population);
//console.log(country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language);

/* ---------------------
// CODING CHALLENGE 1 //
----------------------*/

/*
// Data 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

// Strings and Template Literals
//console.log(`${country} is in ${continent} and its ${population} million people speak ${language}`);

// Taking Decisions: if / else Statements
// (population > 33) ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is ${33 - population} million below average`);

/* ---------------------
// CODING CHALLENGE 2 //
----------------------*/

/*
// Data 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

(markBMI > johnBMI) ? console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`) : console.log(`Johns's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);

// Data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

(markBMI > johnBMI) ? console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`) : console.log(`Johns's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
*/

/* ---------------------
// CODING CHALLENGE 3 //
----------------------*/

/*
let dolphins = (97 + 102 + 91) / 3;
let koalas = (99 + 95 + 96) / 3;

if (dolphins > koalas && dolphins >= 100) {
    console.log("Dolphins Win!");
} else if (dolphins < koalas && koalas >= 100) {
    console.log("Koalas Win!");
} else if (dolphins >= 100 && koalas >= 100) {
    console.log("Tie!");
} else {
    console.log("No Winner!");
}
*/

/* ---------------------
// CODING CHALLENGE 4 //
----------------------*/

let bill = 430
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);