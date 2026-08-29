// const date = new Date();
// console.log(date);

//access the increase button
let inbtn = document.getElementById("increase");
let h1 = document.getElementById("myh1");

inbtn.addEventListener("click", event => {
    h1.innerText ++;

} );

//access the decrease button
let debtn = document.getElementById("decrease");
debtn.addEventListener("click", event => {
    h1.innerText --;

} );

//access the reset button
 let rebtn = document.getElementById("reset");
 rebtn.addEventListener("click", event => {
    h1.innerText = 0;
 });


