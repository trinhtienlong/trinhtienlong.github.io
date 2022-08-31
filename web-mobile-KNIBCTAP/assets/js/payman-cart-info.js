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


// log-in log-out ------------------------------------------------

// Validation ----------------

const form = document.getElementById("btnOder");
const formLogin = document.getElementById("login");
const password = document.getElementById("passwords");
const userName = document.getElementById("username");
const name = document.getElementById("name");
const city = document.getElementById("city");
const number = document.getElementById("number");
const email = document.getElementById("email");
const namelogin = document.getElementById("namelogin");
const nameEmail = document.getElementById("nameEmail");
const passlogin = document.getElementById("password");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "dis error";
  const inputs = formControl.querySelector("input");
  inputs.className = "input-text mt-2 p-1 errors";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "dis";
  const inputs = formControl.querySelector("input");
  inputs.className = "input-text mt-2 p-1 success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}

// Check Empty fields
function checkEmpty(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  console.log(isRequired);
  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  let isRequired = false;
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    isRequired = true;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    isRequired = true;
  } else {
    showSuccess(input);
  }
  return isRequired;
}

// Check email is valid
function checkEmail(input) {
  let isRequired = false;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
    isRequired = true;
  }
  return isRequired;
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners

form.addEventListener("click", function (e) {
  e.preventDefault();
  // let emptyCheck = checkEmpty([userName ,password ,namelogin ,name ,city ,number ,email]);
  let emailCheck = checkEmail(email);
  let userNameLengthCheck = checkLength(userName, 3, 10);
  let passwordLengthCheck = checkLength(password, 6, 1000);
  let nameLengthCheck = checkLength(name, 2, 10);
  let nameloginLengthCheck = checkLength(namelogin, 6, 20);
  let cityLengthCheck = checkLength(city, 6, 50);
  let numberLengthCheck = checkLength(number, 10, 13);

  if (
    emailCheck ||
    userNameLengthCheck ||
    passwordLengthCheck ||
    nameLengthCheck ||
    nameloginLengthCheck ||
    cityLengthCheck ||
    numberLengthCheck
  ) {
    // popup error --------------------------------
    function error() {
      let toastElList = [].slice.call(document.querySelectorAll("#liveToast1"));
      let toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl);
      });
      toastList.forEach((toast) => toast.show());
    }
    error();
  } else {
    let user = {
      password: password.value,
      userName: userName.value,
      name: name.value,
      city: city.value,
      number: number.value,
      email: email.value,
      namelogin: namelogin.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem("userName", json);
    // popup success --------------------------------
    function success() {
      let toastElList = [].slice.call(document.querySelectorAll("#liveToast"));
      let toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl);
      });
      toastList.forEach((toast) => toast.show());
    }
    success();
    setTimeout(() => {
      location.href = "cart-success.html";
    }, 850);
  }
});

formLogin.addEventListener("click", function (e) {
  e.preventDefault();
  let emptyCheck = checkEmpty([nameEmail, passlogin]);
  let passCheck = checkLength(passlogin, 6, 1000);
  if (emptyCheck || passCheck) {
    $(".modal-body").removeClass("yellow").addClass("red");
    $(".modal-body")
      .html(`<i class="fa-solid fa-triangle-exclamation" style="font-size: 50px;"></i>
      <div class="mt-2">Kiểm tra lại mật khẩu hoặc địa chỉ của bạn ?</div>`);
  } else {
    let nameEmailVal = nameEmail.value;
    let passwordVal = passlogin.value;
    let user = localStorage.getItem("userName");
    let data = JSON.parse(user);

    if (
      (nameEmailVal === data.email && passwordVal === data.password) ||
      (nameEmailVal === data.namelogin && passwordVal === data.password)
    ) {
      $(".modal-body").removeClass("yellow red").addClass("green");
      $(".modal-body")
        .html(`<i class="fa-solid fa-circle-check" style="font-size: 50px;"></i>
        <div class="mt-2">Tài khoản của bạn đã đăng nhập thành công !</div>`);
      setTimeout(() => {
        location.href = "cart-success.html";
      }, 850);
    }
  }
});

