const secondHeader = document.querySelector(".header-2");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const loginForm = document.querySelector(".login-form-container");

const toggleActiveHeader = function () {
  window.scrollY > 80
    ? secondHeader.classList.add("active")
    : secondHeader.classList.remove("active");
};

const changeModalVisibility = function () {
  loginForm.classList.toggle("active");
  overlay.classList.toggle("hidden");
};

// <-- Swiper -->
const swiper = new Swiper(".books-slider", {
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

// <-- Events -->
window.addEventListener("scroll", function () {
  searchForm.classList.remove("active");
});

window.addEventListener("load", toggleActiveHeader);

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
