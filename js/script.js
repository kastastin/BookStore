const secondHeader = document.querySelector(".header-2");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

const toggleActiveHeader = function () {
  window.scrollY > 80
    ? secondHeader.classList.add("active")
    : secondHeader.classList.remove("active");
};

// <-- Events -->
window.addEventListener("scroll", function () {
  searchForm.classList.remove("active");
});

window.addEventListener("load", toggleActiveHeader);

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
});
