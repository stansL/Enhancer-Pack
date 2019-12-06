const fields = document.querySelectorAll('.box');


//ES5 with a hack
const boxesArray = Array.prototype.slice.call(fields);

boxesArray.forEach(box => {
    //    box.style.backgroundColor = 'red';
});


//ES6 enhancement

const enhancedBoxesArray = Array.from(fields);
enhancedBoxesArray.forEach(box => {
    //    cannot use a break or continue statement in here!!!
    //    box.style.backgroundColor = 'dodgerblue'
});

//Note: Not possible to use continue and break statements inside the forEach loops in ES5
//Improvement - use the for.....of - combines forEach with for loop...for..in ..for enumerables



//ES6
for (const cur of enhancedBoxesArray) {
    if (cur.className.includes('blue')) {
        continue;
    } else {
        cur.textContent = 'Just changed this one here';
        cur.style.backgroundColor = 'cyan';
    }
}



//Find elements in an Array
//indexOf...findIndex...find

//ES5
var ages = [12, 18, 8, 21, 14, 11];
var fullAge = ages.map(curr => curr >= 18);
console.log(fullAge);


//ES6 findIndex
var ofAges = ages.findIndex(curr => curr >= 18);
console.log(ofAges);
console.log(ages[ofAges]);

//ES find
console.log(ages.find(curr => curr >= 18));
