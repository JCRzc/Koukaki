// Swiper characters

const swiper = new Swiper(".swiper-section", {
    grabCursor: true,
    spaceBetween: 70,
    slidesPerView: "3",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      700: {
        slidesPerView: "1"
      },
      1000: {
        slidesPerView: "2"
      }
    }
  })