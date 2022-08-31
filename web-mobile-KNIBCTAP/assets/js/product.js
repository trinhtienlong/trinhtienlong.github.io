$(document).ready(function () {
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    let header = document.getElementById("header");
    let gototop = document.getElementById("gototop");
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      header.style.position = "fixed";
      header.style.top = 0;
      header.style.left = 0;
      header.style.right = 0;
      header.style.zIndex = 1000;
      header.classList.add("slideUp");

      gototop.style.visibility = "visible";
      gototop.style.opacity = "1";
      gototop.style.transition = "0.38s linear";
    } else {
      header.style.position = "relative";
      header.classList.remove("slideUp");

      gototop.style.display = "hidden";
      gototop.style.opacity = "0";
    }
  }

  $(".image-slider").slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left test' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right test' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".top-slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left test' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right test' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".banner-slider").slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left test' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right test' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".carousel-slider").slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left test' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right test' aria-hidden='true'></i></button>",
  });

  $(".product-for").slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".product-nav",
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left test' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right test' aria-hidden='true'></i></button>",
  });

  $(".product-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".product-for",
    focusOnSelect: true,
    arrows: false,
    infinite: false,
  });
});

let detaiContent = document.querySelector(".products-detai-content"); // xem thêm
let seeMore = document.querySelector(".see-more"); // xem thêm

seeMore.onclick = () => {
  if (
    detaiContent.getAttribute("class") ===
    "col-lg-10 col-12 products-detai-content active"
  ) {
    seeMore.innerHTML = `Xem thêm <i class="fa-solid fa-caret-down"></i>`;
    detaiContent.style.paddingBottom = "2px";
    seeMore.style.background = "rgb(243, 243, 243)";
  } else {
    seeMore.innerHTML = `Thu gọn <i class="fa-solid fa-caret-up"></i>`;
    detaiContent.style.paddingBottom = "20px";
    seeMore.style.background = "transparent";
  }
  detaiContent.classList.toggle("active");
  seeMore.classList.toggle("see-more-bler");
};


let dataTes = localStorage.getItem("data");
let datas = JSON.parse(dataTes);
let boxlist = localStorage.getItem("dataChageImg");
let boxLists = JSON.parse(boxlist);
let filterAll = [];
let breadcrumb1 = document.querySelector(".breadcrumb-item:last-child");
let breadcrumb2 = document.querySelector(".breadcrumb-item:nth-child(2)");
$(".info-prd p:nth-child(1)").text(datas[0].title);
$(".info-prd p:nth-child(2)").text(datas[0].price + " " + "₫");
breadcrumb1.innerText = datas[0].names.toUpperCase();
breadcrumb2.innerText = datas[0].name.toUpperCase();
let titleProduct = $(".info-prd p:first-child").text();
$("title").text(titleProduct);
for (let i = 0; i < boxLists.length; i++) {
  if (titleProduct === boxLists[i].name) {
    filterAll.push(boxLists[i]);
  }
}
console.log(filterAll);
let productImg = document.querySelectorAll(".product-img");
let productImgitem = document.querySelectorAll(".product-nav1 img");
$(".color-prd span:nth-child(2)").css("color", "#d70909");


function loopChangeImg(bxImg) {
  for (let i = 0; i < productImg.length; i++) {
    productImg[i].setAttribute("src", bxImg[i]);
    productImgitem[i].setAttribute("src", bxImg[i]);
  }
}
loopChangeImg(filterAll[0].img);

function loopchanges(strColor1, strColor2) {
  $(".color-prd span:nth-child(2)").text("");
  $("#inlineRadio1").css("background-color", strColor1);
  $("#inlineRadio2").css("background-color", strColor2);

  $("#inlineRadio1").click(function () {
    loopChangeImg(filterAll[0].img);
    $(".color-prd span:nth-child(2)").text(strColor1);
  });

  $("#inlineRadio2").click(function () {
    loopChangeImg(filterAll[1].img);
    $(".color-prd span:nth-child(2)").text(strColor2);
  });
}

function loopchange() {
  $("#color-prd").addClass("d-none");
}

// iPhone 6s
if (titleProduct === "Điện Thoại iPhone 6s 32GB – Hàng Chính Hãng") {
  loopchanges("silver", "yellow");
}
// Điện Thoại iPhone X 64GB
if (titleProduct === "Điện Thoại iPhone X 64GB – Hàng Chính Hãng") {
  loopchanges("black", "white");
}
// Điện Thoại Samsung Galaxy Note FE
if (titleProduct === "Điện Thoại Samsung Galaxy Note FE – Hàng Chính Hãng") {
  loopchanges("black", "blue");
}
// Điện Thoại Samsung Galaxy Note 8
if (titleProduct === "Điện Thoại Samsung Galaxy Note 8 – Hàng Chính Hãng") {
  loopchanges("black", "white");
}
if (
  titleProduct !== "Điện Thoại iPhone 6s 32GB – Hàng Chính Hãng" &&
  titleProduct !== "Điện Thoại iPhone X 64GB – Hàng Chính Hãng" &&
  titleProduct !== "Điện Thoại Samsung Galaxy Note FE – Hàng Chính Hãng" &&
  titleProduct != "Điện Thoại Samsung Galaxy Note 8 – Hàng Chính Hãng"
) {
  loopchange();
}

let breadcrumbStore = document.querySelector(".breadcrumb-item:nth-child(2)");
let dataTes1 = localStorage.getItem("dataBox");
let datas1 = JSON.parse(dataTes1);
breadcrumbStore.onclick = () => {
  let filter = datas1.filter((item) => {
    if (breadcrumbStore.innerText.toLowerCase() === "điện thoại") {
      return item.name === "điện thoại";
    }
    if (breadcrumbStore.innerText.toLowerCase() === "laptop") {
      return item.name === "laptop";
    }
    if (breadcrumbStore.innerText.toLowerCase() === "tablet") {
      return item.name === "tablet";
    }
    if (breadcrumbStore.innerText.toLowerCase() === "phụ kiện") {
      return item.name === "phụ kiện";
    }
  });
  let json = JSON.stringify(filter);
  localStorage.setItem("datas", json);
  location.href = "product-portfolio1.html";
};

let proList = document.querySelectorAll(".image-item");
for (let i = 0; i < proList.length; i++) {
  proList[i].onclick = () => {
    let proTitle = proList[i].querySelector(".title-price p").innerText;
    let proPrice = proList[i].querySelector(".title-price span").innerText;
    let boxList = [
      {
        title: proTitle,
        price: proPrice,
      },
    ];
    let json = JSON.stringify(boxList);
    localStorage.setItem("data", json);
    location.href = "product.html";
  };
}

function movePoduct(boxqrAll, qrText) {
  let proList = document.querySelectorAll(boxqrAll);
  let boxList = [];
  for (let i = 0; i < proList.length; i++) {
    proList[i].onclick = () => {
      let proTitle = proList[i].querySelector(qrText).innerText;
      let box = localStorage.getItem("dataBox");
      let boxs = JSON.parse(box);
      for (i = 0; i < boxs.length; i++) {
        if (proTitle === boxs[i].title) {
          boxList.push(boxs[i]);
          let json = JSON.stringify(boxList);
          localStorage.setItem("data", json);
          location.href = "product.html";
        }
      }
    };
  }
}

// tạo thanh search cho navbar và di chuyển sang trang product
let box = localStorage.getItem("dataBox");
let boxs = JSON.parse(box);

function search(classsearch, idsearch) {
  let allProduct = document.querySelector(classsearch);
  boxs.forEach((item) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("row", "infoProduct", "p-2", "gx-3");
    newProduct.innerHTML = `  
      <div class="col-2 productimg">
        <img class="w-100" src="${item.image}" alt="">
      </div>
      <div class="col-10 productinfo">
        <p class="producttitle">${item.title}</p>
        <span class="productprice">${item.price}&nbsp₫</span>
      </div>`;
    allProduct.appendChild(newProduct);
    movePoduct(".infoProduct", ".producttitle");
  });

  let searchInput = document.querySelector(idsearch);
  searchInput.addEventListener("input", function (e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    let productDom = document.querySelectorAll(".infoProduct");
    productDom.forEach((item) => {
      if (item.innerText.toLowerCase().includes(txtSearch)) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
}
search(".allProduct1", "#form-control1");
search(".allProduct", "#form-control");

function seeAllProduct(arrItem) {
  let seeAll = document.querySelectorAll(arrItem);
  let boxEmpty = [];
  for (let i = 0; i < seeAll.length; i++) {
    let seeAllID = seeAll[i].getAttribute("name");
    seeAll[i].onclick = () => {
      let boxlist = localStorage.getItem("dataBox");
      let boxLists = JSON.parse(boxlist);
      for (i = 0; i < boxLists.length; i++) {
        if (seeAllID === boxLists[i].name) {
          boxEmpty.push(boxLists[i]);
        }
        if (seeAllID === "tất cả sản phẩm") {
          boxEmpty.push(boxLists[i]);
        }
      }
      let json = JSON.stringify(boxEmpty);
      localStorage.setItem("datas", json);
      location.href = "product-portfolio1.html";
    };
  }
}
seeAllProduct(".item");

function similarProduct() {
  let list1 = document.getElementById("mobileSlider");
  list1.innerHTML = "";
  let topicProduct = breadcrumb2.innerText.toLowerCase();
  let boxTopic = [];
  let boxlist = localStorage.getItem("dataBox");
  let boxLists = JSON.parse(boxlist);
  for (let i = 0; i < boxLists.length; i++) {
    if (topicProduct === boxLists[i].name) {
      boxTopic.push(boxLists[i]);
    }
  }
  for (let i = 0; i < boxTopic.length; i++) {
    list1.innerHTML += `
    <div class="image-item">
      <div class="img">
          <img src="${boxTopic[i].image}" alt="">
      </div>
      <div class="title-price text-deco">
          <p>${boxTopic[i].title}</p>
          <span class="color-red">${boxTopic[i].price} ₫</span>
      </div>
    </div>`;
  }
  movePoduct(".image-item", "p");
}
similarProduct();
