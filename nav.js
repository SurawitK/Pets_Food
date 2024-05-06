const bar = document.querySelector(".toggle-nav");
const nav = document.querySelector(".mobile-nav");
const xMark = document.querySelector(".close-xmark");

bar.addEventListener("click", function () {
  console.log("bar click");
  nav.classList.toggle("opacity-0");
  nav.classList.toggle("-translate-x-full");
  nav.classList.toggle("translate-x-0");
  bar.classList.add("hidden");
});

xMark.addEventListener("click", function () {
  console.log("x click");
  nav.classList.toggle("opacity-0");
  nav.classList.toggle("-translate-x-full");
  nav.classList.toggle("translate-x-0");
  bar.classList.remove("hidden");
});
