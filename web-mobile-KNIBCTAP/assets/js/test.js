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

let dataTes = localStorage.getItem("dataBox");
let datas = JSON.parse(dataTes);
let dataTes1 = localStorage.getItem("datas");
let datas1 = JSON.parse(dataTes1);
let product = datas1;

function renderProduct() {
  let list1 = document.getElementById("list1");
  list1.innerHTML = "";

  for (let i = 0; i < product.length; i++) {
    list1.innerHTML += `
      <div class="col-lg-3 col-md-4 col-6 mb-4 por-flex">
      <div class="h-100 h-white">
      <div class="porfolio-img">
      <img class="w-100" src="${product[i].image}">
      </div>
      <div class="porfolio-title">
      <p>${product[i].title}</p>
      <span>${product[i].price} ₫</span>
      </div>
      </div>
      </div>`;
  }
}
renderProduct();

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
    list1.innerHTML += `
      <div class="col-lg-3 col-md-4 col-6 mb-4 por-flex">
        <div class="h-100 h-white">
          <div class="porfolio-img">
              <img class="w-100" src="${datas[i].image}" alt="">
          </div>
          <div class="porfolio-title text-deco">
              <p>${datas[i].title}</p>
              <span>${datas[i].price} ₫</span>
          </div>
        </div>
      </div>`;
  }
  movePoduct("#list1 .por-flex", "p");
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

// function movePoduct(boxqrAll, qrText, qrPrice) {
//   let proList = document.querySelectorAll(boxqrAll);
//   for (let i = 0; i < proList.length; i++) {
//     proList[i].onclick = () => {
//       let proTitle = proList[i].querySelector(qrText).innerText;
//       let proPrice = proList[i].querySelector(qrPrice).innerText;
//       let boxList = [
//         {
//           title: proTitle,
//           price: proPrice,
//         },
//       ];
//       let json = JSON.stringify(boxList);
//       localStorage.setItem("data", json);
//       location.href = "product.html";
//     };
//   }
// }
// movePoduct(".box-pk .row", ".pk-portfolio p", ".pk-portfolio span");
// movePoduct("#list1 .por-flex", ".porfolio-title p", ".porfolio-title span");

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
