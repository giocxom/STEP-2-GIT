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