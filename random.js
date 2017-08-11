console.log("yup");

//img array
let images = [
    "images/arrow-right.jpg",
    "images/arrow-left.jpg"
]
console.log(images);

//calling function which connects randomize functions to DOM
pointTheWay();
console.log(pointTheWay);

//access DOM element
function random_image(images) {

    var random = randomize(images);
    console.log(random);
    while (images[random] === document.getElementById("image").src) {
        random = randomize(images)
        console.log(random);
    }
    document.getElementById("image").src = images[random].toString();
}

//randomize
function randomize(array) {
    //math floor to return the random number chosen by math random of the two integer array
    return Math.floor((Math.random() * (array.length)));
    console.log(randomize);
}
//perform function on click
function pointTheWay() {
    document.getElementById("image").addEventListener("click", function() {
        random_image(images);
        console.log(pointTheWay);
    });
    random_image(images);
};