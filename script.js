var name = 'Jane Smith';
var age = 23;
name = 'Jane Miller';




function driversLicense5(test) {
    if (test) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ' born in  ' + yearOfBirth);

}

function driversLicense6(test) {
    if (test) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
    //    console.log(firstName + ' born in  ' + yearOfBirth);
}

driversLicense5(true);
driversLicense6(true);


/**
 *
 * Blocks and IIFEs
 */

{
    const a = 3;
    let b = 45;
    console.log(a + b);
}



let surName = 'Kamau';
let lastName = 'Njuguna';
const yob = 1987;

function calcAGe(year) {
    return 2019 - year;
}


console.log('This is  ' + surName + ' ' + lastName + ' and he was born in ' + yob + '. He is ' + calcAGe(yob) + ' years old');
//Template literals version
console.log(`This is ${surName} ${lastName} and he was born in ${yob}. He is ${calcAGe(yob)} years old!`);

//More string methods
const nameSix = `${surName} ${lastName}`;

console.log(nameSix.startsWith('k'));
console.log(nameSix.endsWith('a'));


console.log(nameSix.includes('gun'));
console.log(nameSix.repeat(5));

/**
 *
 * Arrow Functions
 */

const years = [1982, 1956, 1972, 1975, 1987];

//ES5
var computedAges = years.map(function (el) {
    return 2019 - el;

});
console.log(computedAges);

//ES6
const newAges = years.map(e => { //when more than one line of code
    return 2019 - e
});
console.log(newAges);

//Demo the lexical this keyword in a lambda expression
//can also be achieved using var self = this; kind of a hack
const box = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', e =>
            alert(`The color of the box number ${this.position} is ${this.color}`));
    }
}


box.clickMe();
