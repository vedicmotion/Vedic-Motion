// =========================
// FILE: js/script.js
// =========================

// REVEAL

window.addEventListener("scroll", reveal);

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i=0; i<reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 150;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

// PORTFOLIO MODAL

// =========================
// IMAGE MODAL
// =========================

const images = [

"images/1.jpeg",
"images/2.png",
"images/3.png",
"images/4.png",
"images/5.jpeg",
"images/6.jpeg",

"images/logo1.png",
"images/logo2.png",
"images/logo3.png",
"images/logo4.png",
"images/logo5.png",
"images/logo6.png"

];

let currentIndex = 0;

function openModal(src){

document.getElementById("imageModal").style.display = "flex";

document.getElementById("modalImage").src = src;

currentIndex = images.indexOf(src);

}

function closeModal(){

document.getElementById("imageModal").style.display = "none";

}

function nextImage(){

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

document.getElementById("modalImage").src =
images[currentIndex];

}

function prevImage(){

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

document.getElementById("modalImage").src =
images[currentIndex];

}