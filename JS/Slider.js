// SLIDER SCRIPT START
let slideIndex = 1;
mySlides(slideIndex);

function nextSlide(n) {
  mySlides(slideIndex += n);
}

function currentSlide(n) {
 mySlides(slideIndex = n);
}

function mySlides(n) {
  let i;
  let slider = document.getElementsByClassName("mySlider");
  if (n > slider.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  slider[slideIndex-1].style.display = "block";
}
// SLIDER SCRIPT END