const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const serviceItems = document.querySelector(".service-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");


serviceItems.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h3 = item.querySelector("h3").innerHTML;
     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
     popup.querySelector("h3").innerHTML = h3;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
  popup.classList.toggle("open");
}


menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

document.addEventListener("DOMContentLoaded", () => {
  const slideImages = document.querySelector('.slide-images');
  const totalSlides = document.querySelectorAll('.img-container').length;
  let currentSlide = 0;

  function moveToNextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      slideImages.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
}),


//FAQ section
document.addEventListener("DOMContentLoaded", function() {
  // Select all the "+" buttons
  const plusButtons = document.querySelectorAll('.faq-header .open');

  // Loop through each "+" button and add a click event listener
  plusButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.closest('.faq-header').nextElementSibling; // Get the associated content (answer)
      
      // Toggle the content visibility and change the "+" to "-"
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";  // Show the content
        this.textContent = "-";           // Change "+" to "-"
      } else {
        content.style.display = "none";   // Hide the content
        this.textContent = "+";           // Change "-" back to "+"
      }
    });
  });
}),


/* Initializing Swiper */
let ;swiper = new swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});