window.onscroll = function () {
  scrollRocket();
};
let rocket = document.querySelector(".rocket");
let menu = document.querySelector(".menu");
let header = document.querySelector("header");
let navbarLeft = document.querySelectorAll(".navbar-left");
let mask = document.getElementById("mask")

function scrollRocket() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    rocket.style.visibility = "visible";
    rocket.style.opacity = "0.5";
  } else {
    rocket.style.visibility = "hidden";
    rocket.style.opacity = "0";
  }
}

function toggle(){
  header.classList.toggle("toggle");
  mask.classList.toggle("mask-visible");
}

menu.onclick = toggle
mask.onclick = toggle


