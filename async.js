const second = () => {
    console.log("Just inside the second function....");
    setTimeout(() => {
        console.log("Async Hi there");
    }, 4000);
    console.log("Last line on the second function...");
}
const first = () => {
    console.log('Look into ES6 syntax and async stuff');
    second();
    console.log("The End!");

}



first();


//Asynchronous JavaScript with callbacks - the more traditional way
const getReceipe = () => {
    setTimeout(() => {
        const recipeIds = [546, 238, 675, 762, 265, 908];
        console.log(recipeIds);
        setTimeout((recipeId) => {
            const recipe = {
                "id": 675,
                "title": "Fresh Tomato Pasta",
                "publisher": "Olemo"
            }

            console.log(`Selected recipe id is: ${recipeId} and the details are ${JSON.stringify(recipe)}`);
            setTimeout((publisher) => {
                const publisherDetails = {
                    "name": "Stanslaus Odhiambo",
                    "dob": 1987,
                    "gender": "Male",
                    "hobbies": ['tae-kwon-do', 'swimming']
                }
                console.log(`Publisher : ${publisher} has the following details : ${JSON.stringify(publisherDetails)}`);

            }, 3000, recipe.publisher);

        }, 2000, recipeIds[2]);

    }, 2000);

}


getReceipe();
