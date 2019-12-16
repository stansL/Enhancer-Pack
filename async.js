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


//Promises
const idsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //        reject([546, 238, 675, 762, 265, 908]);
        resolve([546, 238, 675, 762, 265, 908]);

    }, 3000);

});

const getRecipe = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const recipe = {
                "id": 675,
                "title": "Fresh Tomato Pasta",
                "publisher": "Olemo"
            }

            resolve(recipe);

        }, 3000, id);
    });

};

const getPublisher = (publisher) => {
    return new Promise((resolve, reject) => {
        setTimeout((publisher) => {
            const publisherDetails = {
                "name": "Stanslaus Odhiambo",
                "dob": 1987,
                "gender": "Male",
                "hobbies": ['tae-kwon-do', 'swimming']
            };
            resolve(`${publisher} : ${JSON.stringify(publisherDetails)}`);

        }, 3000, publisher);
    })

};

//const recipePromise = new Promise((resolve, reject) => {
//    setTimeout((id) => {
//        const recipe = {
//            "id": 675,
//            "title": "Fresh Tomato Pasta",
//            "publisher": "Olemo"
//        }
//
//        console.log(`Selected recipe id is: ${recipeId} and the details are ${JSON.stringify(recipe)}`);
//
//    }, 3000, id);
//});

//const publisherPromise = new Promise((resolve, reject) => {
//    setTimeout((publisher) => {
//        const publisherDetails = {
//            "name": "Stanslaus Odhiambo",
//            "dob": 1987,
//            "gender": "Male",
//            "hobbies": ['tae-kwon-do', 'swimming']
//        }
//        console.log(`Publisher : ${publisher} has the following details : ${JSON.stringify(publisherDetails)}`);
//
//    }, 3000, publisher);
//});



idsPromise
    .then((ids) => {
        console.log("The promised IDs: " + ids);
        return getRecipe(ids[2]);
    })
    .then((recipe) => {
        console.log("The returned recipe from the promise: " + JSON.stringify(recipe));
        return getPublisher(recipe.publisher);
    })
    .then((publisher) => {
        console.log("The returned Publisher from the promise: " + JSON.stringify(publisher));
    })
    .catch((error) => {
        console.log("An error occured: " + error);
    });
