window.onscroll = function () {
  scrollRocket();
};
let rocket = document.querySelector(".rocket");
let menu = document.querySelector(".menu");
let header = document.querySelector("header");
let navbarLeft = document.querySelectorAll(".navbar-left");
let mask = document.getElementById("mask");
let imgZoom = document.querySelector(".user_img");
let imgBox = document.querySelector(".img-box");

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

function checkClick(){
  navbarLeft.forEach((item) =>{
    item.onclick = () =>{
      navbarLeft.forEach((itemChild)=>{
        if( itemChild.getAttribute("class") !== "navbar-left"){
          itemChild.className = "navbar-left"
        }
      })
      item.classList.add("navbar-left_bgyellow")
    }
  })
}
checkClick()

function clickimg(){
  let src = imgZoom.getAttribute("src")
  imgBox.classList.add("mask-visible")
  imgBox.innerHTML = 
`<div class="img-zoom">
  <img class="img-zoom_child w-100" src=${src} alt="">
</div>`

  imgBox.onclick = (e) =>{
    if( e.target === e.currentTarget ){
      e.currentTarget.innerHTML = ""
      e.currentTarget.classList.remove("mask-visible")
    }
  }
}

imgZoom.onclick = clickimg

