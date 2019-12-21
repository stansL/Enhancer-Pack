//const first = () => {
//    setTimeout(() => {
//        console.log("Beginning the async stuff here!!");
//
//    }, 3000);
//}
//
//
//const second = () => {
//    console.log("First Line in the second method!");
//    first();
//    console.log("Last Line in the second method!");
//}
//
//second();


const getRecipes = () => {
    console.log('Getting the list of recipee IDs......');
    setTimeout(() => {
        const recipeIds = [123, 542, 457, 867, 324, 123, 654];
        console.log('Done retrieving the recipees');
        console.log(recipeIds);

        console.log(`Retrieving recipe with id ${recipeIds[4]}.....`);
        setTimeout((recipeeId) => {

            const recipee = {
                "name": "Mamalaide Sandwitch",
                "id": 324,
                "publisher": "Stanslaus Odhiambo"
            }
            console.log(`Done retrieving recipe with id ${recipeeId}.....`);
            console.log(recipee);

            console.log(`Retrieving publisher with name ${recipee["publisher"]}.....`);
            setTimeout((pId) => {
                const publisher = {
                    "firstName": "Stanslaus ",
                    "surName": "Omondi",
                    "publications": 23,
                    "genre": "Coding Tutorials"
                }
                console.log(`Done retrieving publisher details for ${pId}.....`);
                console.log(publisher);


            }, 400, recipee.publisher);


        }, 1500, recipeIds[4]);

    }, 2000);

};


getRecipes();
