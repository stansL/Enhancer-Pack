const getRecipeIds = new Promise((resolve, reject) => {
    console.log('Getting the list of recipee IDs......');
    setTimeout(() => {
        if (true) {
            const recipeIds = [123, 542, 457, 867, 324, 123, 654];
            console.log('Done retrieving the recipees');
            resolve(recipeIds);
        } else {
            reject();
        }
    }, 3000)
});

const getRecipeById = (recId) => {
    return new Promise((resolve, reject) => {
        const recipe = {
            id: 324,
            name: "Some Recipe",
            publisher: "Test Publisher"
        };
        setTimeout(recipeId => {
            if (true) {
                console.log(`Fetching the ID for :  ${recipeId}`);
                resolve(recipe);
            } else {
                reject("Error");
            }

        }, 3000, recId);

    });
}


const getPublisherDetails = (publisher) => {
    return new Promise((resolve, reject) => {
        const pub = {
            "name": "Stanslaus Odhiambo",
            "age": 32,
            "jd": "Software Engineer"
        }
        console.log(`Retrieving details for : ${publisher} .......`);
        setTimeout((aPub) => {
            resolve(pub);
        }, 4000, publisher);

    });
}


getRecipeIds.then((recipeIds) => {
        console.log("Received IDs from the Server: ");
        console.log(recipeIds);
        return getRecipeById(recipeIds[2]);

    })
    .then(recipe => {
        console.log(`Received Recipe: ${recipe}`);
        return getPublisherDetails(recipe.publisher);
    })
    .then((pDetails) => {
        console.log(pDetails);
    })
    .catch((error) => {
        console.log(`Fetching the ids encountered an error: ${error}`);
    });
