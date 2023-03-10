window.onscroll = function () {
  scrollRocket();
};

let body = document.querySelector("body");
let rocket = document.querySelector(".rocket");
let menu = document.querySelector(".menu");
let header = document.querySelector("header");
let navbarLeft = document.querySelectorAll(".navbar-left");
let mask = document.getElementById("mask");
let imgZoom = document.querySelector(".user_img");
let imgBox = document.querySelector(".img-box");
let faRocket = document.getElementById("fa-rocket")
let faBars = document.getElementById("fa-bars")
let darkLight = document.getElementById("dark-light")
let bgPublic = document.querySelectorAll(".bgr-public")
let educationBox = document.querySelectorAll(".education-box")
let github = document.getElementById("gh")
let fb = document.getElementById("fb")
let gm = document.getElementById("gm")


github.onclick = () =>{
  location.assign("https://github.com/trinhtienlong/trinhtienlong.github.io")
}

fb.onclick = () =>{
  location.assign("https://www.facebook.com/profile.php?id=100042402650351")
}


darkLight.onclick = () =>{
  if(darkLight.className === "bi bi-moon-fill"){
    body.style.background = "#fafafa"
    body.style.color = "#323232"
    header.style.background = "#ededed"
    bgPublic.forEach((item) => {
        item.style.background = "#cacaca"
    })
    educationBox.forEach((item) =>{
        item.style.borderColor = "#323232"
    })
    menu.style.background = "#cacaca"
  }else{
    body.style.background = "#111"
    body.style.color = "#f7f7f7"
    header.style.background = "#323232"
    bgPublic.forEach((item) => {
      item.style.background = "#5f5f5f"
    })
    educationBox.forEach((item) =>{
      item.style.borderColor = "#dfdfdf"
    })
    menu.style.background = "#5f5f5f"
  }
  darkLight.classList.toggle("bi-brightness-high-fill")
}


rocket.onmouseover = () =>{
  faRocket.className = "bi-rocket-fill"
}
rocket.onmouseout = () =>{
  faRocket.className = "bi bi-rocket"
}

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
  faBars.classList.toggle("bi-x-lg")
}
menu.onclick = toggle
mask.onclick = toggle

function checkClick(){
  navbarLeft.forEach((item) =>{
    item.onclick = () =>{
      navbarLeft.forEach((itemChild)=>{
        if( itemChild.getAttribute("class") !== "navbar-left"){
          itemChild.className = "navbar-left bgr-public"
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

