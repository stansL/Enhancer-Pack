const second = () => {
    setTimeout(() => {
        console.log("Async Hi there");
    }, 4000)
}
const first = () => {
    console.log('Look into ES6 syntax and async stuff');
    second();
    console.log("The End!");

}



first();
