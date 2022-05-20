'use strict';

/*
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
// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

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
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1982);
// console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}
// console.log(yearsUntilRetirement(1982, 'Kevin'))
// console.log(yearsUntilRetirement(1975, 'Bob'))

// Functions calling other functions.

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    let applePieces = cutFruitPieces(apples);
    let orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

fruitProcessor(2, 3);
*/

/* ------------------ //
// Coding Challenge 5 //
// ------------------ */
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No winners!`)
    }
}


const dolphins1 = calcAverage(44, 22, 71);
const koalas1 = calcAverage(65, 54, 49)
checkWinner(dolphins1, koalas1);

const dolphins2 = calcAverage(85, 54, 41);
const koalas2 = calcAverage(23, 34, 27);
checkWinner(dolphins2, koalas2);
*/

/* ------------------ //
// Coding Challenge 6 //
// ------------------ */

/*
const calcTip = amount => amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;

function calcTip2(amount) {
    if (amount >= 50 && amount <= 300) {
        return amount * 0.15;
    } else {
        return amount * 0.2;
    }
}

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
*/

/* ------------------ //
// Coding Challenge 7 //
// ------------------ */

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return this.BMI;
    },
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return this.BMI;
    }
}

// mark.calcBMI();
// john.calcBMI();

console.log(`John's BMI (${john.BMI}) is ${john.BMI >= mark.BMI ? 'higher' : 'lower'} than Mark's (${mark.BMI})!`)