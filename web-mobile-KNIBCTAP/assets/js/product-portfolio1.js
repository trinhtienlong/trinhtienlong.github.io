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
    box.style.overflowY = "hidden";
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

let dataTes = localStorage.getItem("dataBox");
let datas = JSON.parse(dataTes);
let dataTes1 = localStorage.getItem("datas");
let datas1 = JSON.parse(dataTes1);
let product = datas1;

function renderProduct() {
  let list1 = document.getElementById("list1");
  list1.innerHTML = "";

  for (let i = 0; i < product.length; i++) {
    list1.innerHTML += 
      `<div class="col-lg-3 col-md-4 col-6 mb-3 por-box">
          <div class="por-flex">
              <div class="porfolio-img">
                  <img class="w-100" src="${product[i].image}" alt="">
              </div>
              <div class="porfolio-title text-deco">
                  <p>${product[i].title}</p>
                  <span>${product[i].price} ₫</span>
              </div>
          </div>
          <div class="addto position">
              <div class="addto-child">
                  <span>Thêm vào giỏ hàng</span><i class="fa-solid fa-cart-shopping icon-cart1 "></i>
              </div>
          </div>
      </div>`;
  }
}
renderProduct();

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
movePoduct(".box-pk .row", ".pk-portfolio p");
movePoduct("#list1 .por-flex", "p");

let breadcrumb = document.querySelector(".breadcrumb-item:last-child");
if (product.length === datas.length) {
  breadcrumb.innerText = "TẤT CẢ SẢN PHẨM";
} else {
  breadcrumb.innerText = product[0].name.toUpperCase();
  let arr1 = document.querySelectorAll(".thuonghieu");
  for (let i = 0; i < arr1.length; i++) {
    let arr1Name = arr1[i].getAttribute("value");
    if (arr1Name === breadcrumb.innerText.toLowerCase()) {
      arr1[i].checked = true;
    }
  }
}

function breadcrumbChange() {
  let breadcrumb = document.querySelector(".breadcrumb-item:last-child");
  let seeAll = document.querySelectorAll(".item");
  for (let i = 0; i < seeAll.length; i++) {
    let seeAllID = seeAll[i].getAttribute("name");
    if (seeAllID === breadcrumb.innerText.toLowerCase()) {
      seeAll[i].classList.add("fiterFocus");
    } else {
      seeAll[i].classList.remove("fiterFocus");
    }
  }
}
breadcrumbChange();

let list1 = document.getElementById("list1");
function hienDT(thuonghieuchon_arr = [], giaBan_arr = []) {
  list1.innerHTML = "";
  for (let i = 0; i < datas.length; i++) {
    if (thuonghieuchon_arr.length > 0) {
      if (
        !thuonghieuchon_arr.includes(datas[i].name) &&
        !thuonghieuchon_arr.includes(datas[i].model)
      ) {
        continue;
      }
    }
    if (giaBan_arr.length > 0) {
      if (
        datas[i].price.replaceAll(",", "") < 5000000 &&
        !giaBan_arr.includes("Dưới 5 triệu")
      ) {
        continue;
      }
      if (
        datas[i].price.replaceAll(",", "") >= 5000000 &&
        datas[i].price.replaceAll(",", "") <= 10000000 &&
        !giaBan_arr.includes("Từ 5 đến 10 triệu")
      ) {
        continue;
      }
      if (
        datas[i].price.replaceAll(",", "") >= 10000000 &&
        datas[i].price.replaceAll(",", "") <= 15000000 &&
        !giaBan_arr.includes("Từ 10 đến 15 triệu")
      ) {
        continue;
      }
      if (
        datas[i].price.replaceAll(",", "") > 15000000 &&
        !giaBan_arr.includes("Trên 15 triệu")
      ) {
        continue;
      }
    }
    list1.innerHTML +=
      `<div class="col-lg-3 col-md-4 col-6 mb-3 por-box">
        <div class="por-flex">
            <div class="porfolio-img">
                <img class="w-100" src="${datas[i].image}" alt="">
            </div>
            <div class="porfolio-title text-deco">
                <p>${datas[i].title}</p>
                <span>${datas[i].price} ₫</span>
            </div>
        </div>
        <div class="addto position">
            <div class="addto-child">
                <span>Thêm vào giỏ hàng</span><i class="fa-solid fa-cart-shopping icon-cart1 "></i>
            </div>
        </div>
      </div>`;
  }
  selectPoduct()
  movePoduct("#list1 .por-flex", "p");
  if( list1.innerHTML == '' ){
    list1.innerHTML = '<h2 class="text-center fontStyle" >Empty Booth</h2><div class="d-flex justify-content-center"><img src="assets/imgs/box-empty.png" class="w-50" alt=""></div>'
  }
}

function chonDT() {
  let arr1 = document.getElementsByClassName("thuonghieu");
  let breadcrumb = document.querySelector(".breadcrumb-item:nth-child(2)");
  let breadcrumb1 = document.querySelector(".breadcrumb-item:nth-child(3)");
  breadcrumb.innerHTML = "CỬA HÀNG";
  let thuongHieu_arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].checked) {
      thuongHieu_arr.push(arr1[i].value);
      breadcrumb1.innerHTML = `${arr1[i].value.toUpperCase()}`;
      breadcrumbChange();
    }
  }
  let arr2 = document.getElementsByClassName("giaban");
  let giaBan_arr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].checked) {
      giaBan_arr.push(arr2[i].value);
    }
  }
  hienDT(thuongHieu_arr, giaBan_arr);
}

let price = document.querySelectorAll(".giaban");
for (let i = 0; i < price.length; i++) {
  price[i].onchange = chonDT;
}

let thuongHieu = document.querySelectorAll(".thuonghieu");
for (let i = 0; i < thuongHieu.length; i++) {
  thuongHieu[i].onchange = chonDT;
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

function navbaProduct(arrItem) {
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
navbaProduct(".item");


// add to cart

function selectPoduct() {
  let proList = document.querySelectorAll(".por-flex");
  let addToCard = document.querySelectorAll('.addto-child');
  for(let k = 0 ; k < addToCard.length ; k++ ){
    addToCard[k].onclick = () => {
      let soluongsf = 1;
      let proTitle = proList[k].querySelector(".porfolio-title p").innerText;
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
}
selectPoduct();