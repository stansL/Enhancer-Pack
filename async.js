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
