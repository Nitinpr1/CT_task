//nav bar
let hamburger = document.querySelector(".hamburger");
let navLink = document.querySelector(".nav_link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

let hamburger1 = document.querySelector(".hum1");
let navLink1 = document.getElementById("history_nav");

hamburger1.addEventListener("click", () => {
  navLink1.classList.toggle("hide");
});

//img slider

let scrollcontainer = document.querySelector(".img_slider");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollcontainer.scrollLeft += event.deltaY;
  scrollcontainer.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", (event) => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += 500;
});
backbtn.addEventListener("click", (event) => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= 500;
});
