function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
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