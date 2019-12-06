/**
 *
 * Rest Parameters
 */

function isFullAge() {
    Array.from(arguments).forEach(curr => {
        console.log(new Date().getFullYear() - curr >= 25);
    });
}


isFullAge(2015, 1999, 1987, 2017);

//
////ES6
//function fullAge(...years) {
//    years.forEach(curr => {
//        console.log(new Date().getFullYear() - curr >= 25);
//    });
//
//}
//
//fullAge(2015, 1999, 1987, 2017);



//ES6
function fullAge(limit, ...years) {
    years.forEach(curr => {
        console.log(new Date().getFullYear() - curr >= limit);
    });

}

fullAge(5, 2015, 1999, 1987, 2017);


/**
 * Default Parameters
 *
 */

var Smith = function (firstName, yearOfBirth, lastName = "default name", nationality = "default nationality") {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
};

var sInstance = new Smith('Stanslaus', 1987);
console.log(sInstance);
