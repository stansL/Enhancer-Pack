/**
 *
 * Destructuring - Convenient way to extract data from an object/array
 *
 */

//ES5
var john = ['John', 32];

var name = john[0];
var age = john[1];


//ES6 destructuring

const [firstName, ageInYear] = ['Agnes', 22];

console.log(firstName);
console.log(ageInYear);


const dan = {
    surName: 'Sulwe',
    dob: 1987,
    job: 'Software Engineer'
};

const {
    surName,
    dob,
    job
} = dan;
console.log(surName);
console.log(dob);
console.log(job);

//Using differnt names:
const {
    surName: a,
    dob: b,
    job: c
} = dan;
console.log(a);
console.log(b);
console.log(c);

function calYearsLeftToRetirement(yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth;
    return [age, 60 - age];
}

const [nAge, nRetire] = calYearsLeftToRetirement(1987);
console.log(nAge);
console.log(nRetire);
