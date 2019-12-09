//Classes and subclasses


//ES5
var PersonTest = function (name, yearOfBirth, job) {
    this.name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

PersonTest.prototype.computeAge = function () {
    return new Date().getFullYear() - this.yearOfBirth;
};

//Will generate an error given classes are not hoiste!!
//const trial = new Person('kjskdjfk', 1982, 'test');
//tial.calculateAge();
//ES6
class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }

    static greeting() {
        console.log('Application started!!');
    }
}

const tPerson = new Person('John', 1987, 'Software Engineer');
console.log(tPerson);

Person.greeting();
