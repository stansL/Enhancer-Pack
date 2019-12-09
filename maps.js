/**
 *
 *Maps - key-value pair
 */


const question = new Map();
question.set('question', 'What is the official name of the latest JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES8');
question.set('correct', 4);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again!');


console.log(question.get('question'));
console.log(question.size);


question.delete(3);
question.delete(3);
console.log(question);
//question.clear();
//console.log(question);

question.forEach((v, k) => {
    console.log(`Key : ${k}, value is : ${v}`);
});
