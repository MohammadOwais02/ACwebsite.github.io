






var swiper = new Swiper(".imageslider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});













var swiper = new Swiper(".featured-slider1", {

  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    450: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 4,

    },
  },
});


const faqs = document.getElementsByClassName('.faqs');

for (i=0; i<faqs.length; i++){
  faqs[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}


