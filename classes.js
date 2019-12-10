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


//Subclasses in ES5


var AthleteTest = function (name, yearOfBirth, job, olympicGames, medals) {
    PersonTest.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

AthleteTest.prototype = Object.create(PersonTest.prototype);
AthleteTest.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

var john = new AthleteTest('Stanslaus', 1987, 'Software Engineer', 3, 10);



//ES6 Subclasses.
class Athlete extends Person {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

var athleteTest = new Athlete('Peter', 1989, 'Swimmer', 3, 1)
