$(document).ready(function () {

  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    let header = document.getElementById("header");
    let gototop = document.getElementById("gototop");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
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
      header.style.position = "sticky";
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

// so sánh title để lấy ra data trong local
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

// sau khi có mảng trong local thì đổi src của img 
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


// tăng giảm số lượng
let innerNumer = document.querySelector(".updow input")
let upNumber = document.querySelector("#up")
let downNumber = document.querySelector("#down")
function up(){
  let cout = innerNumer.value
  let cout1 = parseInt(cout) + 1;
  innerNumer.value = cout1
}
upNumber.onclick = up

function down(){
  let cout = innerNumer.value;
  let cout1 = parseInt(cout);
  if( cout1 > 0 ){
    cout1 -= 1;
    innerNumer.value = cout1
  }
}
downNumber.onclick = down


let Card = JSON.parse(localStorage.getItem("cart")) || [];
let cardMini = document.querySelector(".cus-iconCart");
let cardMini1 = document.querySelector(".tet")
let cardMini2 = document.querySelector(".cus-iconCart1");
let cardMini3 = document.querySelector(".tet1")
function showCart(){
  let ttgh = "";
  let tong = 0;
  for(let i = 0; i < Card.length; i++){
    tong += Card[i].solg * Card[i].price.replaceAll(",", "");
    ttgh +=
    '<div class="row">' +
      '<div class="col-3">' +
          '<img class="w-100" src="'+Card[i].image+'" alt="">' +
      '</div>' +
      '<div class="col-9">' +
        '<p style="margin: 0;">'+Card[i].title+'</p>' +
        '<div class="tet-flex">' +
            '<div class="flex-child"><span>'+Card[i].solg+'</span><span> x </span><span>'+Card[i].price+' ₫</span></div>' +
            '<div class="delete">'+
            '<i class="fa-solid fa-trash-can scan"></i>' +
            '</div>'+
        '</div>' +
      '</div>' +
    '</div>'+
    '<hr>'
  }
  ttgh += 
    '<div class="tong" style="text-align: center ;">'+
        '<span>Tổng cộng : </span><span>'+tong.toLocaleString("en")+' ₫</span>'+
    '</div>'+
    '<hr>'+
    '<button type="button" class="btn mb-2 w-100 btnSeeCard">'+
        'XEM GIỎ HÀNG'+
    '</button>'+
    '<button type="button" class="btn w-100 btnPayCard">'+
        'THANH TOÁN'+
    '</button>'
  cardMini1.innerHTML = ttgh;
  cardMini3.innerHTML = ttgh;
  let btnSeeCard = document.querySelectorAll(".btnSeeCard");
  for (let j = 0 ; j < btnSeeCard.length ; j++){
    btnSeeCard[j].onclick = () =>{location.href = "payment-card.html";}
  }
  let btnPayCard = document.querySelectorAll(".btnPayCard");
  for (let j = 0 ; j < btnSeeCard.length ; j++){
    btnPayCard[j].onclick = () =>{location.href = "payment-card-info.html";}
  }
  // remove sf
  let removes = cardMini1.querySelectorAll('.delete');
  let removes1 = cardMini3.querySelectorAll('.delete');
  function remove(iconRemove){
    for (let i = 0; i < iconRemove.length ; i++  ){
      iconRemove[i].onclick = () =>{
        let rowCart = iconRemove[i].parentElement.parentElement.parentElement;
        let tensp = iconRemove[i].parentElement.parentElement.querySelector('p').innerText
        rowCart.remove() 
        for( j = 0 ; j < Card.length ; j++ ){
          if( Card[j].title == tensp ){
            Card.splice(j, 1);
            let json = JSON.stringify(Card);
            localStorage.setItem("cart", json);
          }
        }
        showCart();
        change(cardMini1);
        change(cardMini3);
        changeNumber()
      }
    }
  }
  remove(removes);
  remove(removes1);
}


function change(box){
  if( Card.length == 0 ){
    console.log(1);
    box.innerHTML = 
    '<img src="assets/imgs/empty-cart.svg" class="w-50" alt="">'+
    '<h5 class="text-center fontStyle">Cart Is Empty</h5>'+
    '<hr>'+
    '<button type="button" name="tất cả sản phẩm" class="btn w-100 btnaddtocard">CỬA HÀNG</button>'
    let btnaddtocard = document.querySelector(".btnaddtocard")
    let boxEmpty = [];
    btnaddtocard.onclick = () =>{
      let btnName = btnaddtocard.getAttribute("name");
      let boxlist = localStorage.getItem("dataBox");
      let boxLists = JSON.parse(boxlist);
      for (let i = 0; i < boxLists.length; i++) {
        if (btnName === "tất cả sản phẩm"){
          boxEmpty.push(boxLists[i]);
        }
      }
      let json = JSON.stringify(boxEmpty);
      localStorage.setItem("datas", json);
      location.href = "product-portfolio1.html";
    }
  }
  if( Card.length > 0 ){
    showCart();
  }
}
cardMini.onmouseover = () =>{
  change(cardMini1);
}
cardMini2.onclick = () =>{
  change(cardMini3);
}

function changeNumber(){
  let numberCard = document.querySelectorAll(".badge")
  for(let i=0 ; i <numberCard.length ; i++ ){
    numberCard[i].innerText = Card.length
    if( numberCard[i].innerText == 0 ){
      numberCard[i].style.display = "none"
    }else{
      numberCard[i].style.display = "inline-block"
    }
  }
}
changeNumber()

// let tt = document.querySelector('#addToCard')
// let tt1 = tt.parentNode.parentNode
// console.log(tt1);

function selectPoduct() {
  let proList = document.querySelector(".info-prd");
  let addToCard = document.querySelector('#addToCard');
  addToCard.onclick = () => {
    let soluong = document.querySelector(".updow input");
    let soluongsf = soluong.value;
    let proTitle = proList.querySelector("p:nth-child(1)").innerText;
    let box = localStorage.getItem("dataBox");
    let boxs = JSON.parse(box);
    for (let i = 0; i < boxs.length; i++) {
      if (proTitle === boxs[i].title) {
        // kiểm tra trùng lặp sf,nếu trùng tăng sl và ngắt vòng for
        let kt = 0;
        for ( let j = 0; j < Card.length; j++ ){
          if( Card[j].title == proTitle ){
            kt = 1;
            Card[j].solg += parseInt(soluongsf);
            let json = JSON.stringify(Card);
            localStorage.setItem("cart", json);
            break;
          }
        }
        if( kt == 0 ){
          Card.push(boxs[i]);
          Card[Card.length-1].solg = parseInt(soluongsf);
          let json = JSON.stringify(Card);
          localStorage.setItem("cart", json);
        }
      }
    }
    changeNumber()
  }
}
selectPoduct();

