window.onscroll = function () {
  myFunction();
};
function myFunction() {
  let header = document.getElementById("header");
  let gototop = document.getElementById("gototop");
  if (
    document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10
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

    gototop.style.visibility = "hidden";
    gototop.style.opacity = "0";
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

// chuyển sản phẩm lẻ sang trang product
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

//  di chuyển các danh mục sản phẩm sang trang product-portfolio
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

let Card = JSON.parse(localStorage.getItem("cart")) || [];
let user = JSON.parse(localStorage.getItem("userName"));
let cardMini = document.querySelector(".cus-iconCart");
let cardMini1 = document.querySelector(".tet");
let cardMini2 = document.querySelector(".cus-iconCart1");
let cardMini3 = document.querySelector(".tet1")

function moverCard(btnCard){
  let btnaddtocard = document.querySelector(btnCard)
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

function change(box){
  if( Card.length == 0 ){
    console.log(1);
    box.style.overflowY = "hidden";
    box.innerHTML = 
    '<img src="assets/imgs/empty-cart.svg" class="w-50" alt="">'+
    '<h5 class="text-center fontStyle">Cart Is Empty</h5>'+
    '<hr>'+
    '<button type="button" name="tất cả sản phẩm" class="btn w-100 btnaddtocard">CỬA HÀNG</button>'
    moverCard(".btnaddtocard");
    changeNumber()
  }
  if( Card.length > 0 ){
    showCart();
    changeNumber()
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


function showSuccessCart(){
  let ttgh = "";
  let tong = 0;
  for(let i = 0; i < Card.length; i++){
    let tt = Card[i].price.replaceAll(",", "") * Card[i].solg
    tong += tt;
    ttgh +=
    '<tr>'+
      '<th scope="row" class="textcl">'+
          '<span>'+Card[i].title+'</span> <span>× '+Card[i].solg+'</span>'+
      '</th>'+
      '<td class="text-end color-price">'+
          '<span>'+tt.toLocaleString("en")+'&nbsp;₫'+'</span>'+
      '</td>'+
    '</tr>'
  }
  ttgh += 
  '<tr>'+
  '<th scope="row">GIAO NHẬN HÀNG</th>'+
  '<td colspan="2" class="text-end color-price1">Kiểm tra thanh toán</td>'+
  '</tr>'+
  '<tr>'+
  '<th scope="row">TỔNG CỘNG</th>'+
  '<td colspan="3" class="text-end color-price">'+
    '<span>'+tong.toLocaleString("en")+'&nbsp;₫'+'</span>'+
  '</td>'+
  '</tr>'
  document.querySelector('#myBody').innerHTML = ttgh;
  let thank = document.querySelector('#thank');
  thank.innerHTML = 
  `
  <li>Họ tên: ${user.userName.toUpperCase() + " " + user.name.toUpperCase()} </li>
  <li>Điện thoại: ${user.number} </li>
  <li>Địa chỉ: ${user.city} </li>
  <li>Email: ${user.email} </li>
  <li></li>
  <li></li>
  <li>Tổng tiền đơn hàng: <span class="color-price">${tong.toLocaleString("en")}<span>&nbsp;đ</span></span></li>
  <li>Phương thức thanh toán: Kiểm tra thanh toán </li>
  `
  function time(){
    let d = new Date();
    let thu = ["Chủ nhật","Thứ hai","Thứ ba","Thứ Tư","Thứ năm","Thứ sáu","Thứ bảy"];
    let thang = d.getMonth() + 1;

    document.querySelector('#thank li:nth-child(5)').innerHTML = ("Ngày đặt hàng:&nbsp;" + thu[d.getDay()] + " ngày " + d.getDate()
    + " tháng " + thang + " năm " + d.getFullYear() + "<br>");
    document.querySelector('#thank li:nth-child(6)').innerHTML = 
    ("Thời gian:&nbsp;" + d.getHours() + "h : " + d.getMinutes() + "p");
  }
  time();
  for ( i = 0 ; i < Card.length ; i++ ){
    Card.splice(0, Card.length);
    let json = JSON.stringify(Card);
    localStorage.setItem("cart", json);
  }
  changeNumber()
}
showSuccessCart()


