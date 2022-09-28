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
seeAllProduct(".btn-update button")



let Card = JSON.parse(localStorage.getItem("cart")) || [];
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
changeNumber()


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
        change(cardMini1);
        change(cardMini3);
        changeNumber();
        showMyCart()
      }
    }
  }
  remove(removes);
  remove(removes1);
}


function showMyCart(){
  if ( Card.length == 0 ){
    document.querySelector('#boxPaymentCard').innerHTML = 
    '<div class="row pt-5 pb-5">'+
      '<div class="col-12 p-4 empty-flex justify-content-center">'+
          '<p>Chưa có sản phẩm nào trong giỏ hàng.</p>'+
          '<button type="button" name="tất cả sản phẩm" class="btn mt-1 btnSeeCard" id="btnSeeCard">QUAY TRỞ LẠI CỬA HÀNG</button>'+
      '</div>'+
    '</div>'
    moverCard("#btnSeeCard")
  }
  else{
    let ttgh = "";
    let tong = 0;
    for(let i = 0; i < Card.length; i++){
      let tt = Card[i].price.replaceAll(",", "") * Card[i].solg
      tong += tt;
      ttgh +=
      '<tr>'+
        '<th scope="row" class="c1">'+
            '<div class="ccc flex-md-row  flex-column-reverse ">'+
              '<div class="d-flex align-items-center spay">'+
                '<div class="deletes me-sm-3 me-2">'+
                  '<i class="fa-solid fa-trash-can fs-5"></i>'+
                '</div>'+
                '<img width="100px" class="me-sm-3" src="'+Card[i].image+'" alt="">'+
              '</div>'+
                '<span class="text-md-start text-center mb-md-0 mb-3">'+Card[i].title+'</span>'+
            '</div>'+
        '</th>'+
        '<td class="text-end align-middle d-md-table-cell d-none">'+Card[i].price+'&nbsp;₫</td>'+
        '<td class="align-middle">'+
            '<div class="updow flex-md-row flex-column align-items-center">'+
                '<button type="button" id="down" class="btn btn-outline-secondary"><i class="fa-solid fa-minus"></i></button>'+
                '<input style="font-weight: 600;font-size: 24px;" type="number" value="'+Card[i].solg+'">'+
                '<button type="button" id="up" class="btn btn-outline-secondary"><i class="fa-solid fa-plus"></i></button>'+
            '</div>'+
        '</td>'+
        '<td id="price" class="text-center align-middle">'+tt.toLocaleString("en")+'  ₫</td>'+
      '</tr>'
    }
    document.querySelector('#tongPayment').innerHTML = tong.toLocaleString("en")+'&nbsp;₫'
    document.querySelector('#mycart').innerHTML = ttgh;
    let payer = document.querySelector('#Payer')
    payer.onclick = () =>{
      location.href = 'payment-card-info.html'
    }
    // remove sf
    let removes = document.querySelectorAll('.deletes');
    for (let i = 0; i < removes.length ; i++  ){
      removes[i].onclick = () =>{
        let trCart = removes[i].parentElement.parentElement.parentElement.parentElement;
        let tensp = removes[i].parentElement.parentElement.querySelector('span').innerText;
        console.log(tensp);
        trCart.remove() 
        for( j = 0 ; j < Card.length ; j++ ){
          if( Card[j].title == tensp ){
            Card.splice(j, 1);
            let json = JSON.stringify(Card);
            localStorage.setItem("cart", json);
          }
        }
        tinhtong()
        changeNumber();
        showMyCart();
      }
    }
  }
}
showMyCart()


function tinhtong(){
  // tăng giảm số lượng và cập nhật tổng tiền
  let updow = document.querySelectorAll(".updow");
  let tongPrice = document.querySelectorAll("#price");
  let tongPricess = document.querySelector('#tongPayment');
  for(let i = 0 ; i < updow.length ; i++ ){
    let innerNumer = updow[i].querySelector('input');
    let upNumber = updow[i].querySelector("#up");
    let downNumber = updow[i].querySelector("#down");
    let upNbParent = upNumber.parentElement.parentElement.parentElement
    let upNbChild = upNbParent.querySelector('.ccc span')
  // so sánh và thay đổi số lượng trong cart và tính lại tổng tiền
    function plus(cout){
      for (let i = 0; i < Card.length; i++) {
        if (upNbChild.innerText === Card[i].title) {
          Card[i].solg = cout;
          let json = JSON.stringify(Card);
          localStorage.setItem("cart", json);
        }
        // duyệt lại Cart đã đc thay đổi số lượng và tính lại tổng tiền
        let tong = 0;
        for (let j = 0; j < Card.length; j++){
          let tongPrices = tongPrice[j]
          let tt = Card[j].price.replaceAll(",", "") * Card[j].solg
          tong += tt;
          tongPrices.innerHTML = tt.toLocaleString("en")+'  ₫';
        }
        tongPricess.innerHTML = tong.toLocaleString("en")+'&nbsp;₫';
      }
    }
  // tăng tiền
    function up(){
      let cout = innerNumer.value
      let cout1 = parseInt(cout) + 1;
      innerNumer.value = cout1;
      plus(cout1)
    }
    upNumber.onclick = up;
  // giảm tiền
    function down(){
      let cout = innerNumer.value;
      let cout1 = parseInt(cout);
      if( cout1 > 1 ){
        cout1 -= 1;
        innerNumer.value = cout1;
        plus(cout1)
      }
    }
    downNumber.onclick = down
  }
}
tinhtong()


