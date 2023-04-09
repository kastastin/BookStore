const secondHeader = document.querySelector(".header-2");
const secondHeaderWhite = document.querySelector(".header-2-white");
const home = document.querySelector(".home");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const loginForm = document.querySelector(".login-form-container");

const toggleActiveHeader = function () {
  if (window.scrollY > 80) {
    secondHeaderWhite.style.height = "5rem";
    setTimeout(() => {
      secondHeader.classList.add("active");
    }, 1);
  } else {
    secondHeaderWhite.style.height = "0rem";
    secondHeader.classList.remove("active");
  }
};

const changeModalVisibility = function () {
  loginForm.classList.toggle("active");
  overlay.classList.toggle("hidden");
};

// <-- Events -->
window.addEventListener("scroll", function () {
  toggleActiveHeader();
  searchForm.classList.remove("active");
});

window.addEventListener("load", function () {
  toggleActiveHeader();
});

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  const classNames = ["fa-user", "fa-times", "active"];
  if (classNames.some((className) => e.target.classList.contains(className)))
    loginForm.classList.toggle("active");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && loginForm.classList.contains("active"))
    loginForm.classList.toggle("active");
});

// <-- Swiper -->
const booksSwiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
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

const featuredSwiper = new Swiper(".featured-slider", {
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

const arrivalsSwiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
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

const reviewsSwiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
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
