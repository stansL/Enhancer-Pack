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
console.log(a + b);
