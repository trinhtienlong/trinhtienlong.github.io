$(document).ready(function () {
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
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
})


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

// localStor product
const localProduct = [
  {
    name: "laptop",
    names: "HP ProBook",
    image: "assets/imgs/hp-probook-440-g3-t9s24pa-01.jpg",
    title: "Laptop HP ProBook 440 G3 T9S24PA Bạc",
    price: "9,800,000",
  },
  {
    name: "laptop",
    names: "HP Envy",
    image: "assets/imgs/hp-envy-13-01.jpg",
    title:
      "Laptop HP Envy 13-ad074TU 2LR92PA Core i7-7500U/Win10 (13.3 inch) – Hàng Chính Hãng",
    price: "14,280,000",
  },
  {
    name: "phụ kiện",
    names: "Bao Da iPad Pro",
    image: "assets/imgs/uag-ipad-01-300x300.jpg",
    title: "Bao Da iPad Pro 10.5 inch UAG Metropolis – Hàng Chính Hãng",
    price: "1,034,000",
  },
  {
    name: "phụ kiện",
    names: "HD Headphone",
    image: "assets/imgs/Blaster-E3-01.jpg",
    title:
      "HD Headphone Amplifier Creative Sound Blaster E3 – Hàng Chính Hãng",
    price: "3,245,000",
  },
  {
    name: "điện thoại",
    names: "iPhone 6s 32GB",
    model: "apple",
    image: "assets/imgs/iphone-6-s-32Gb-01.jpg",
    title: "Điện Thoại iPhone 6s 32GB – Hàng Chính Hãng",
    price: "5,000,000",
  },
  {
    name: "điện thoại",
    names: "iPhone X 64GB",
    model: "apple",
    image: "assets/imgs/iphone-X-64Gb-01.jpg",
    title: "Điện Thoại iPhone X 64GB – Hàng Chính Hãng",
    price: "29,990,000",
  },
  {
    name: "điện thoại",
    names: "BlackBerry KEYone",
    image: "assets/imgs/bb-key-one-01.jpg",
    title: "Điện Thoại BlackBerry KEYone – Hàng Chính Hãng",
    price: "9,500,000",
  },
  {
    name: "phụ kiện",
    names: "Ốp Lưng Dẻo",
    image: "assets/imgs/op-deo-hinh-thu-01-300x300.jpg",
    title: "Ốp Lưng Dẻo Cho iPhone 6 Plus/6s Plus – Gấu Kèm Thú Nổi",
    price: "90,000",
  },
  {
    name: "điện thoại",
    names: "Samsung Galaxy Note FE",
    model: "samsung",
    image: "assets/imgs/ss-galaxy-note-fe-01.jpg",
    title: "Điện Thoại Samsung Galaxy Note FE – Hàng Chính Hãng",
    price: "13,990,000",
  },
  {
    name: "điện thoại",
    names: "Samsung Galaxy Note 8",
    model: "samsung",
    image: "assets/imgs/ss-galaxy-note-8-01.jpg",
    title: "Điện Thoại Samsung Galaxy Note 8 – Hàng Chính Hãng",
    price: "19,990,000",
  },
  {
    name: "phụ kiện",
    names: "Tai Nghe JBL",
    image: "assets/imgs/jbl-t450-02.jpg",
    title: "Tai Nghe JBL T450BT – Hàng Chính Hãng",
    price: "1,600,000",
  },
  {
    name: "phụ kiện",
    names: "Thiết Bị Kết Nối Bluetooth",
    image: "assets/imgs/Kashimura-BL-40-01.jpg",
    title: "Thiết Bị Kết Nối Bluetooth Với Điện Thoại Kashimura BL-40 3.0",
    price: "749,000",
  },
  {
    name: "laptop",
    names: "Lenovo ThinkPad",
    image: "assets/imgs/lenovo-ThinkPad-T470-01.jpg",
    title:
      "Laptop Lenovo ThinkPad T470 20HEA03LVA Core i5-7200U/DOS 14 inch – Hàng Chính Hãng",
    price: "29,690,000",
  },
  {
    name: "laptop",
    names: "Lenovo IdeaPad",
    image: "assets/imgs/lenovo-IdeaPad-Y520-01.jpg",
    title:
      "Laptop Lenovo IdeaPad Y520-15IKBN 80WK00GBVN Core i7-7700HQ / Free Dos (15.6inch) – Hàng Chính Hãng",
    price: "21,920,000",
  },
  {
    name: "tablet",
    names: "Máy Tính Bảng cutePAD",
    image: "assets/imgs/cutepad-m7089-01.jpg",
    title: "Máy Tính Bảng cutePAD M7089 – Hàng Chính Hãng",
    price: "1,449,000",
  },
  {
    name: "tablet",
    names: "Máy Tính Bảng Beneve",
    image: "assets/imgs/beneve-m1022h-02.jpg",
    title: "Máy Tính Bảng Beneve M1022H – Hàng Chính Hãng",
    price: "4,490,000",
  },
  {
    name: "tablet",
    names: "iPad WiFi 128GB",
    image: "assets/imgs/ipad-wifi-128Gb-2017-01.jpg",
    title: "iPad WiFi 128GB New 2017 – Hàng Nhập Khẩu",
    price: "10,990,000",
  },
  {
    name: "tablet",
    names: "iPad Pro 9.7",
    image: "assets/imgs/ipad-pro-9.7-wifi-4g-32gb-rose-gold-01.jpg",
    title: "iPad Pro 9.7 inch Wifi Cellular 32GB – Hàng Chính Hãng",
    price: "16,320,000",
  },
];

const localProductStr = JSON.stringify(localProduct);
localStorage.setItem("dataBox", localProductStr);

const localChangeImg = [
  {
    name: "Điện Thoại iPhone 6s 32GB – Hàng Chính Hãng",
    img: [
      "assets/imgs/iphone-6-s-32Gb-01.jpg",
      "assets/imgs/iphone-6-s-32Gb-02.jpg",
      "assets/imgs/iphone-6-s-32Gb-04.jpg",
      "assets/imgs/iphone-6-s-32Gb-03.jpg",
    ],
  },
  {
    name: "Điện Thoại iPhone 6s 32GB – Hàng Chính Hãng",
    img: [
      "assets/imgs/ip-gold3.jpg",
      "assets/imgs/ip-gold-4.jpg",
      "assets/imgs/ip-6s-gold.jpg",
      "assets/imgs/ip-6s-gold-2.jpg",
    ],
  },
  {
    name: "Điện Thoại iPhone X 64GB – Hàng Chính Hãng",
    img: [
      "assets/imgs/iphone-X-64Gb-01.jpg",
      "assets/imgs/iphone-X-64Gb-03.jpg",
      "assets/imgs/iphone-x-black.jpg",
      "assets/imgs/iphone-x-black1.jpg",
    ],
  },
  {
    name: "Điện Thoại iPhone X 64GB – Hàng Chính Hãng",
    img: [
      "assets/imgs/iphone-X-64Gb-01.jpg",
      "assets/imgs/iphone-X-64Gb-03.jpg",
      "assets/imgs/iphone-x-shopcongnghe.jpg",
      "assets/imgs/iphone-xs-silver.jpg",
    ],
  },
  {
    name: "Điện Thoại Samsung Galaxy Note FE – Hàng Chính Hãng",
    img: [
      "assets/imgs/ss-galaxy-note-fe-01.jpg",
      "assets/imgs/ss-galaxy-note-fe-03.jpg",
      "assets/imgs/ss-galaxy-note-fe-04.jpg",
      "assets/imgs/ss-fe-black.jpeg",
    ],
  },
  {
    name: "Điện Thoại Samsung Galaxy Note FE – Hàng Chính Hãng",
    img: [
      "assets/imgs/ss-fe-blue.jpg",
      "assets/imgs/ss-fe-blue2.jpg",
      "assets/imgs/ss-fe-blue1.jpg",
      "assets/imgs/ss-fe-blue3.jpg",
    ],
  },
  {
    name: "Điện Thoại Samsung Galaxy Note 8 – Hàng Chính Hãng",
    img: [
      "assets/imgs/ss-galaxy-note-fe-01.jpg",
      "assets/imgs/ss-galaxy-note-fe-03.jpg",
      "assets/imgs/ss-8-black.jpeg",
      "assets/imgs/ss-8-black1.jpg",
    ],
  },
  {
    name: "Điện Thoại Samsung Galaxy Note 8 – Hàng Chính Hãng",
    img: [
      "assets/imgs/ss8-wt3.jpg",
      "assets/imgs/ss8-wt2.jpg",
      "assets/imgs/ss8-wt.jpg",
      "assets/imgs/ss8-wt1.jpg",
    ],
  },
  {
    name: "Laptop HP ProBook 440 G3 T9S24PA Bạc",
    img: [
      "assets/imgs/hp-probook-440-g3-t9s24pa-01.jpg",
      "assets/imgs/hp-probook-440-g3-t9s24pa-02.jpg",
      "assets/imgs/hp-probook-440-g3-t9s24pa-03.jpg",
      "assets/imgs/hp-probook-440-g3-t9s24pa-04.jpg",
    ],
  },
  {
    name: "Laptop HP Envy 13-ad074TU 2LR92PA Core i7-7500U/Win10 (13.3 inch) – Hàng Chính Hãng",
    img: [
      "assets/imgs/hp-envy-13-01.jpg",
      "assets/imgs/hp-envy-13-02.jpg",
      "assets/imgs/hp-envy-13-03jpg.jpg",
      "assets/imgs/hp-envy-13-04.jpg",
    ],
  },
  {
    name: "HD Headphone Amplifier Creative Sound Blaster E3 – Hàng Chính Hãng",
    img: [
      "assets/imgs/Blaster-E3-01.jpg",
      "assets/imgs/Blaster-2.jpg",
      "assets/imgs/Blaster-E3-01.jpg",
      "assets/imgs/Blaster-2.jpg",
    ],
  },
  {
    name: "Bao Da iPad Pro 10.5 inch UAG Metropolis – Hàng Chính Hãng",
    img: [
      "assets/imgs/uag-ipad-01.jpg",
      "assets/imgs/uag-ipad-02.jpg",
      "assets/imgs/uag-ipad-05.jpg",
      "assets/imgs/uag-ipad-06.jpg",
    ],
  },
  {
    name: "Ốp Lưng Dẻo Cho iPhone 6 Plus/6s Plus – Gấu Kèm Thú Nổi",
    img: [
      "assets/imgs/op-deo-hinh-thu-01.jpg",
      "assets/imgs/op-deo-hinh-thu-02.jpg",
      "assets/imgs/op-deo-hinh-thu-03.jpg",
      "assets/imgs/op-deo-hinh-thu-04.jpg",
    ],
  },
  {
    name: "Điện Thoại BlackBerry KEYone – Hàng Chính Hãng",
    img: [
      "assets/imgs/bb-key-one-01.jpg",
      "assets/imgs/bb-key-one-04.jpg",
      "assets/imgs/bb-key-one-03.jpg",
      "assets/imgs/bb-key-one-01.jpg",
    ],
  },
  {
    name: "Tai Nghe JBL T450BT – Hàng Chính Hãng",
    img: [
      "assets/imgs/jbl-t450-02.jpg",
      "assets/imgs/jbl-t450-01.jpg",
      "assets/imgs/jbl-t450-03.jpg",
      "assets/imgs/jbl-t450-02.jpg",
    ],
  },
  {
    name: "Thiết Bị Kết Nối Bluetooth Với Điện Thoại Kashimura BL-40 3.0",
    img: [
      "assets/imgs/Kashimura-BL-40-01.jpg",
      "assets/imgs/Kashimura-BL-40-02.jpg",
      "assets/imgs/Kashimura-BL-40-01.jpg",
      "assets/imgs/Kashimura-BL-40-02.jpg",
    ],
  },
  {
    name: "Laptop Lenovo ThinkPad T470 20HEA03LVA Core i5-7200U/DOS 14 inch – Hàng Chính Hãng",
    img: [
      "assets/imgs/lenovo-ThinkPad-T470-01.jpg",
      "assets/imgs/lenovo-ThinkPad-T470-02.jpg",
      "assets/imgs/lenovo-ThinkPad-T470-03.jpg",
      "assets/imgs/lenovo-ThinkPad-T470-04.jpg",
    ],
  },
  {
    name: "Laptop Lenovo IdeaPad Y520-15IKBN 80WK00GBVN Core i7-7700HQ / Free Dos (15.6inch) – Hàng Chính Hãng",
    img: [
      "assets/imgs/lenovo-IdeaPad-Y520-01.jpg",
      "assets/imgs/lenovo-IdeaPad-Y520-02.jpg",
      "assets/imgs/lenovo-IdeaPad-Y520-03.jpg",
      "assets/imgs/lenovo-IdeaPad-Y520-04.jpg",
    ],
  },
  {
    name: "Máy Tính Bảng cutePAD M7089 – Hàng Chính Hãng",
    img: [
      "assets/imgs/cutepad-m7089-01.jpg",
      "assets/imgs/cutepad-m7089-02.jpg",
      "assets/imgs/cutepad-m7089-03.jpg",
      "assets/imgs/cutepad-m7089-04.jpg",
    ],
  },
  {
    name: "Máy Tính Bảng Beneve M1022H – Hàng Chính Hãng",
    img: [
      "assets/imgs/beneve-m1022h-02.jpg",
      "assets/imgs/beneve-m1022h-01.jpg",
      "assets/imgs/beneve-m1022h-04.jpg",
      "assets/imgs/beneve-m1022h-05.jpg",
    ],
  },
  {
    name: "iPad Pro 9.7 inch Wifi Cellular 32GB – Hàng Chính Hãng",
    img: [
      "assets/imgs/ipad-pro-9.7-wifi-4g-32gb-rose-gold-01.jpg",
      "assets/imgs/ipad-pro-9.7-wifi-4g-32gb-rose-gold-02.jpg",
      "assets/imgs/ipad-pro-9.7-wifi-4g-32gb-rose-gold-03.jpg",
      "assets/imgs/ipad-pro-9.7-wifi-4g-32gb-rose-gold-04.jpg",
    ],
  },
  {
    name: "iPad WiFi 128GB New 2017 – Hàng Nhập Khẩu",
    img: [
      "assets/imgs/ipad-wifi-128Gb-2017-01.jpg",
      "assets/imgs/ipad-wifi-128Gb-2017-02.jpg",
      "assets/imgs/ipad-wifi-128Gb-2017-03.jpg",
      "assets/imgs/ipad-wifi-128Gb-2017-04.jpg",
    ],
  },
];
const localChangeImgstr = JSON.stringify(localChangeImg);
localStorage.setItem("dataChageImg", localChangeImgstr);
  
  
// tạo form sp ra ngoài cart
let Card = JSON.parse(localStorage.getItem("cart")) || [];
let cardMini = document.querySelector(".cus-iconCart");
let cardMini1 = document.querySelector(".tet")
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
  document.querySelector('.tet').innerHTML = ttgh;
  let btnSeeCard = document.querySelector(".btnSeeCard");
  let btnPayCard = document.querySelector(".btnPayCard");
  btnSeeCard.onclick = () =>{location.href = "payment-card.html";}
  btnPayCard.onclick = () =>{location.href = "payment-card-info.html";}
  // remove sf
  let removes = cardMini1.querySelectorAll('.delete');
  for (let i = 0; i < removes.length ; i++  ){
    removes[i].onclick = () =>{
      let rowCart = removes[i].parentElement.parentElement.parentElement;
      let tensp = removes[i].parentElement.parentElement.querySelector('p').innerText
      rowCart.remove() 
      for( j = 0 ; j < Card.length ; j++ ){
        if( Card[j].title == tensp ){
          Card.splice(j, 1);
          let json = JSON.stringify(Card);
          localStorage.setItem("cart", json);
        }
      }
      showCart();
      change();
      changeNumber()
    }
  }
}

// render dữ liệu cart khi hover( đọc từ localstr )
function change(){
  if( Card.length == 0 ){
    cardMini1.innerHTML = 
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
cardMini.onmouseover = change
// thay đổi số lượng trong cart
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

// tạo thanh search cho navbar và di chuyển sang trang product
let box = localStorage.getItem("dataBox");
let boxs = JSON.parse(box);

function search(classsearch,idsearch){
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
search(".allProduct1","#form-control1")
search(".allProduct","#form-control")


// render các sản phẩm trong local ra form của trang index
function renderProduct(nameIdProduct, idProduct) {
  let list1 = document.getElementById(nameIdProduct);
  list1.innerHTML = "";
  let boxList = [];
  let seeAll = document.querySelector(idProduct);
  let seeAllName = seeAll.getAttribute("name");
  // let boxlist = localStorage.getItem("dataBox");
  // let boxLists = JSON.parse(boxlist);
  for (let i = 0; i < localProduct.length; i++) {
    if (seeAllName === localProduct[i].name) {
      boxList.push(localProduct[i]);
    }
  }
  for (let i = 0; i < boxList.length; i++) {
    list1.innerHTML += `
    <div class="image-item">
      <div class="img">
          <img src="${boxList[i].image}" alt="">
      </div>
      <div class="title-price text-deco">
          <p>${boxList[i].title}</p>
          <span class="color-red">${boxList[i].price} ₫</span>
      </div>
    </div>`;
  }
}
renderProduct("mobileSlider", "#mobile");
renderProduct("laptopSlider", "#laptop");
renderProduct("tabletSlider", "#tablet");
renderProduct("pkSlider", "#phukien");

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
        if (seeAllID === "tất cả sản phẩm"){
          boxEmpty.push(boxLists[i]);
        }
      }
      let json = JSON.stringify(boxEmpty);
      localStorage.setItem("datas", json);
      location.href = "product-portfolio1.html";
    };
  }
}
seeAllProduct(".belt-title span:last-child");
seeAllProduct(".item");
seeAllProduct(".banner")

// chuyển trang carosell sang trang product-portfolio
function moveCarosell() {
  let proList = document.querySelectorAll(".carousel1-item");
  let boxList = [];
  for (let i = 0; i < proList.length; i++) {
    proList[i].onclick = () => {
      let proTitle = proList[i].querySelector(".caption").getAttribute("name");
      console.log(proTitle);
      let box = localStorage.getItem("dataBox");
      let boxs = JSON.parse(box);
      for (i = 0; i < boxs.length; i++) {
        if (proTitle === boxs[i].model || proTitle === boxs[i].name) {
          boxList.push(boxs[i]);
          let json = JSON.stringify(boxList);
          localStorage.setItem("datas", json);
          location.href = "product-portfolio1.html";
        }
      }
    }
  }
}
moveCarosell();

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
movePoduct(".image-item", ".title-price p");
// movePoduct("#list1 .por-flex", ".porfolio-title p");