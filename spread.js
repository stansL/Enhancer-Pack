/**
 *
 * Spread Operator - Expand elements of an array in places of arguments and function calls
 
 1. cascade
 2. joining arrays
 3. Use on a node list
 
 */
//ES5

function addAges(a, b, c, d) {
    return a + b + c + d;
}

var sum = addAges(23, 45, 67, 23);
console.log(sum);


const agesArray = [23, 45, 67, 23];
var anotherSum = addAges.apply(null, agesArray);
console.log(anotherSum);

//ES6

const esSum = addAges(...agesArray);
console.log(esSum);

const smithFamily = ['John', 'Jane', 'Mark'];
const millerFamily = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...smithFamily, ...millerFamily];
console.log(bigFamily);

var h = document.querySelector('h1');
var boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
for (const curr of Array.from(all)) {
    curr.style.color = 'purple';
}
