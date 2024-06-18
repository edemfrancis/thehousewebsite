// slide java script
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,4000); // Change image every 2 seconds

//   javascript to close slide if button-x is click

}

const buttonX = document.querySelector(".button-x");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

const slideContain = document.querySelector(".slide-container");
buttonX.addEventListener("click", ()=>{
  slideContain.style.display = "none";
});
  button2.addEventListener("click", ()=>{
    slideContain.style.display = "none";
});
button3.addEventListener("click", ()=>{
    slideContain.style.display = "none";
});