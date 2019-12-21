//const getRecipeIds = new Promise((resolve, reject) => {
//    console.log('Getting the list of recipee IDs.....llllll.');
//    setTimeout(() => {
//        if (true) {
//            const recipeIds = [123, 542, 457, 867, 324, 123, 654];
//            console.log('Done retrieving the recipees');
//            resolve(recipeIds);
//        } else {
//            reject();
//        }
//    }, 3000)
//});
//
//const getRecipeById = (recId) => {
//    return new Promise((resolve, reject) => {
//        const recipe = {
//            id: 324,
//            name: "Some Recipe",
//            publisher: "Test Publisher"
//        };
//        setTimeout(recipeId => {
//            if (true) {
//                console.log(`Fetching the ID for :  ${recipeId}`);
//                resolve(recipe);
//            } else {
//                reject("Error");
//            }
//
//        }, 3000, recId);
//
//    });
//}
//
//
//const getPublisherDetails = (publisher) => {
//    return new Promise((resolve, reject) => {
//        const pub = {
//            "name": "Stanslaus Odhiambo",
//            "age": 32,
//            "jd": "Software Engineer"
//        }
//        console.log(`Retrieving details for : ${publisher} .......`);
//        setTimeout((aPub) => {
//            resolve(pub);
//        }, 4000, publisher);
//
//    });
//}

//getRecipeIds.then((recipeIds) => {
//        console.log("Received IDs from the Server: ");
//        console.log(recipeIds);
//        return getRecipeById(recipeIds[2]);
//
//    })
//    .then(recipe => {
//        console.log(`Received Recipe: ${recipe}`);
//        return getPublisherDetails(recipe.publisher);
//    })
//    .then((pDetails) => {
//        console.log(pDetails);
//    })
//    .catch((error) => {
//        console.log(`Fetching the ids encountered an error: ${error}`);
//    });

//async function testAsync() {
//    const ids = await getRecipeIds;
//    console.log(ids);
//    const selectedRecipe = await getRecipeById(ids[4]);
//    console.log(selectedRecipe);
//    const pDetails = await getPublisherDetails(selectedRecipe.publisher);
//    console.log(pDetails);
//
//    return pDetails;
//}
//
//// This here won't work
////const asyncReturn = testAsync();
////console.log(asyncReturn);
//testAsync().then(el => console.log("From the async wait " + JSON.stringify(el)));


(async () => {
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);
    let weather = await response.json(); // read response body and parse as JSON
    console.log(weather[0].author.id);

})();


//let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//fetch(url).then(response => response.json())
//    .then(coms => console.log(coms[0].author.id))
//    .catch(error => console.log(error));
