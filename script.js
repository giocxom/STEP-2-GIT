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
// HOT SERVICES START
const cards = document.querySelector('.services-card-main-div');

function createCard([img,picture,category]){
  let cartCode =`
  <div  class="services-card">
                <img src="${img}" alt="${picture}">
                <div class="services-card-info">
                    <h3>${category}</h3>
                    <p>Lorem Ipsum is simply dummy t
                        ext of 
                        the printing and 
                        typesetting industry. Lorem.</p>
                </div>
            </div>
          `;
          cards.innerHTML += cartCode;
}
const cartArr =[
  cart1 = [
    "images/plane.jpg",
    "plane",
    "FLIGHT BOOKING"
  ],
  cart2 = [
    "images/hotel.jpg",
    "hotel",
    "HOTEL & RESORT BOOKING"
  ],
  cart3 = [
    "images/family.jpg",
    "family",
    "FAMILY TRIP PLANNER"
  ],
  cart4 = [
    "images/ship.jpg",
    "ship",
    "CRUISE TOUR"
  ],
  cart5 = [
    "images/fire.jpg",
    "fire",
    "FIRE CAMP"
  ],
  cart6 = [
    "images/corporative.jpg",
    "corporative",
    "CORPORATE HOLIDAYS"
  ]
];
createCard(cart1);
createCard(cart2);
createCard(cart3);
createCard(cart4);
createCard(cart5);
createCard(cart6);
/* POPUP START */
let users = document.querySelectorAll('.services-card');
users.forEach((user)=>{
  user.addEventListener('click',()=>{
    user.classList.toggle('active');
  })
});
/* POPUP END */
/* HOT SERVICES END */
/* FOOTER START */
const mainInfo = document.querySelector('.footer-main-info');
function createInfo([header,info1,info2,info3,info4]){
let footerInfo = `
<div class="footer-info">
                <h3>${header}</h3>
                <p>${info1}</p>
                <p>${info2}</p>
                <p>${info3}</p>
                <p>${info4}</p>
            </div>
            `;
          mainInfo.innerHTML += footerInfo;
}
const footerArr = [
  info1 = [
    "Quick Links",
    "Home",
    "About Company",
    "Testimonials",
    "Infrastructure"

  ],
  info2 = [
    "Support",
    "Get Started",
    "Lorem",
    "Help",
    "Ipsum"

  ],
  info3 = [
    "Address",
    "14, 1 Ellis bridge ST,",
    "auckland 3500, Australia",
    "+1234567890",
    "contactus@demo.com"

  ]
];
createInfo(info1);
createInfo(info2);
createInfo(info3);
/* FOOTER START END*/