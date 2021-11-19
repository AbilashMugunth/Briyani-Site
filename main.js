//////////////////////////////////////////////////
const mainMenu = document.querySelector(".main-wrapper");
mainMenu.style.display = "none";
orderOpen = document.querySelectorAll(".menu-open");
orderOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    mainMenu.style.display = "block";
  });
});

/////////////////////////////////////////////////
const burger = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const dishPrice = document.querySelectorAll("main .dish-price");

// console.log(dishPrice1);
// console.log(dishPrice);
dishPrice.forEach((e) => {
  e.insertAdjacentHTML("afterbegin", `<i class="fas fa-rupee-sign"></i>`);
  e.insertAdjacentHTML(
    "afterend",
    `<div class="increment-container">
    <button class="dec-btn">-</button>
  <input class="qty-txt" value="0" type="text">
    <button class="inc-btn">+</button>
      <b class="qty-prev">0</b> QTY | <i class="fas fa-rupee-sign"></i>
      <b class="price-prev"></b>
    </div>
    <div class="prev-container">
  </div>`
  );
});

let homeswiper = new Swiper(".homeSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1600: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});

const incbtn = document.querySelectorAll(".inc-btn");
const decbtn = document.querySelectorAll(".dec-btn");
const qtytxt = document.querySelectorAll(".qty-txt");
const qtyprev = document.querySelectorAll(".qty-prev");
const priceprev = document.querySelectorAll(".price-prev");

// console.log(dishPrice);
let price = 100;

for (let i = 0; i < incbtn.length; i++) {
  const button = incbtn[i];

  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    console.log(buttonClicked, i);
    let input = buttonClicked.parentElement.children[1];
    let inputValue = input.value;
    console.log(inputValue);
    let newValue = parseInt(inputValue) + 1;
    console.log(newValue);
    input.value = newValue;

    for (let i = 0; i < qtyprev.length; i++) {
      const element = qtyprev[i];
      // console.log(buttonClicked);
      let prev = buttonClicked.parentElement.children[3];
      prev.innerHTML = newValue;
    }
  });
}

for (let i = 0; i < decbtn.length; i++) {
  const button = decbtn[i];

  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    console.log(buttonClicked, i);
    let input = buttonClicked.parentElement.children[1];
    let inputValue = input.value;
    if (inputValue == 0) return;

    console.log(inputValue);
    let newValue = parseInt(inputValue) + -1;
    console.log(newValue);
    input.value = newValue;

    for (let i = 0; i < qtyprev.length; i++) {
      const element = qtyprev[i];
      // console.log(buttonClicked);
      let prev = buttonClicked.parentElement.children[3];
      prev.innerHTML = newValue;
    }
  });
}

// *! DISH prices /////////

const prices = {
  // **starters ///
  chick65: 120,
  chicktikka: 200,
  friedchick: 150,
  chickkebab: 100,
  pannertika: 75,
  chickwings: 110,

  // **non veg ///
  chick65bri: 250,
  chickbri: 200,
  eggbri: 150,
  muttbri: 300,
  bonebri: 250,

  // **most wanted ///
  hydrabri: 400,
  chettibri: 350,
  luckbri: 400,
  malbarbri: 450,
  thallesery: 500,

  // **veg briyani ///
  paneerbri: 200,
  mushbri: 200,
  soyabri: 150,
  vegbri: 150,
  hydradum: 300,

  // **Desserts ///
  gulab: 20,
  kulfi: 30,
  laddu: 15,
  rasagulla: 30,
  vannila: 20,
};

function toastNotification() {
  Toastify({
    text: "Added to Cart",
    duration: 1000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      color: "#041c35",
      background: "#ea811d",
    },
  }).showToast();
}

const rupeeIcon = '<i class="fa fa-inr"></i>';

const allDishPrices = document.querySelectorAll(".dish-price");

allDishPrices.forEach((dish) => {
  dish.insertAdjacentHTML("afterbegin", `${rupeeIcon}`);
});

const priceEntries = Object.entries(prices);
// console.log(priceEntries);
const dishes = document.querySelectorAll(".dish-name");
// const incbtn = document.querySelectorAll(".inc-btn");
// const decbtn = document.querySelectorAll(".dec-btn");
// const qtytxt = document.querySelectorAll(".qty-txt");
// const qtyprev = document.querySelectorAll(".qty-prev");
// const priceprev = document.querySelectorAll(".price-prev");

// *! TAB SWITCHING functionality ////////

// ** all the tabs are set to display none in CSS//////

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

//  Always displaying first tab as Block
const content1 = document.querySelector(".content-1");
content1.style.display = "block";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // tab.classList.remove("active");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    contents.forEach((event, i) => {
      //  tabs are set to display none
      event.style.display = "none";

      //  checks if the dataset number of the tab equals to the dataset number of the content
      if (tab.dataset.tab == event.dataset.content) {
        // display the tab as block

        event.style.display = "block";
        tab.classList.add("active");
      }
    });
  });
});

// *! MODAL /////////////////////////

let cartModal = document.querySelector(".cart-modal");

//  select the open-btn button
let openBtn = document.getElementById("open-btn");

const cartContainer = document.querySelector(".cart-container");

//  select the modal-background
let modalBackground = document.getElementById("modal-background");

//  select the close-btn
let closeBtn = document.getElementById("close-btn");

//  shows the modal when the user clicks open-btn
cartContainer.addEventListener("click", function () {
  modalBackground.style.display = "block";
  feedModalBackground.style.display = "none";
});

//  hides the modal when the user clicks close-btn
closeBtn.addEventListener("click", function () {
  modalBackground.style.display = "none";
});

// hides the modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
  //  check if the event happened on the modal-background
  if (event.target === modalBackground) {
    //  hides the modal
    modalBackground.style.display = "none";
  }
});

// *!FEEDBACK MODAL /////////////////////////

let feedModal = document.getElementById("feed-modal");

//  select the open-btn button
let feedOpenBtn = document.querySelector(".feedback");

// const cartContainer = document.querySelector(".cart-container");

//  select the modal-background
let feedModalBackground = document.getElementById("feed-modal-background");

//  select the close-btn
let feedCloseBtn = document.getElementById("feed-close-btn");

//  shows the modal when the user clicks open-btn
feedOpenBtn.addEventListener("click", function () {
  feedModalBackground.style.display = "block";
});

//  hides the modal when the user clicks close-btn
feedCloseBtn.addEventListener("click", function () {
  feedModalBackground.style.display = "none";
});

// hides the modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
  //  check if the event happened on the modal-background
  if (event.target === feedModalBackground) {
    //  hides the modal
    feedModalBackground.style.display = "none";
  }
});

// *! ///////////////////////////////////////////////////////////////

let addBtns = document.querySelectorAll(".add");
let quantityFields = document.getElementsByClassName("num");
let delete_buttons = document.getElementsByClassName("modal-remove");

for (let i = 0; i < addBtns.length; i++) {
  addBtns[i].addEventListener("click", addToCart);
  addBtns[i].addEventListener("click", () => {
    toastNotification();

    if (modalAllItems.children.length > 0) {
      emptyCart.style.display = "none";
    }
  });
}

const cart = document.querySelector(".cart");
const emptyCart = document.querySelector(".empty-cart");
const modalAllItems = document.querySelector(".modal-all-items");
let cartNum = 0;

function addToCart(event) {
  let incrementNum = ++cartNum;
  cart.innerHTML = incrementNum;
  // console.log(event);
  let itemContainer = document.createElement("tr");
  itemContainer.classList.add("modal-each-item");
  let btn = event.target;
  let btnParent = btn.parentElement;
  console.log(btnParent);
  let itemName = btnParent.parentElement.children[1].innerText;
  console.log(itemName);
  let itemPrice = parseInt(btnParent.children[0].innerText);

  itemContainer.innerHTML = `
  <span class = "item-name">${itemName}</span>
  <span class="item-price">${rupeeIcon}<span>
  ${itemPrice}</span></span>
  <span><input type = 'number' class = 'num' value = '1'></span>
  <span class="total-price">${rupeeIcon}<span>${itemPrice}</span></span>
  <span><button class="modal-remove" type="button">Remove</button></span>`;

  modalAllItems.append(itemContainer);

  for (let i = 0; i < quantityFields.length; i++) {
    quantityFields[i].value = 1;
    quantityFields[i].addEventListener("change", totalCost);
  }

  // Accessing individual quantity fields
  for (let i = 0; i < delete_buttons.length; i++) {
    delete_buttons[i].addEventListener("click", removeItem);
    delete_buttons[i].addEventListener("click", () => {
      console.log(modalAllItems.children.length);

      if (modalAllItems.children.length == 0) {
        emptyCart.style.display = "block";
      }
    });
  }

  grandTotal();
}

// This function helps to multiply the quantity and the price
function totalCost(event) {
  console.log(event);
  let quantity = event.target;

  quantity_parent = quantity.parentElement.parentElement;
  price_field = quantity_parent.getElementsByClassName("item-price")[0];
  console.log(price_field);
  total_field = quantity_parent.getElementsByClassName("total-price")[0];
  price_field_content = price_field.innerText;
  console.log(price_field_content);
  total_field.innerHTML =
    ` <i class="fa fa-inr"></i>` + quantity.value * price_field_content;
  grandTotal();
  if (isNaN(quantity.value) || quantity.value <= 0) {
    quantity.value = 0;
  }
}

// This function helps to add up the total of the items
function grandTotal() {
  let total = 0;
  let grand_total = document.querySelector(".grand-total");
  console.log(grand_total);

  all_total_fields = document.getElementsByClassName("total-price");
  console.log(all_total_fields);
  for (let i = 0; i < all_total_fields.length; i++) {
    all_prices = Number(all_total_fields[i].innerText);
    total += all_prices;
  }

  grand_total.innerHTML = `<i class="fa fa-inr"></i>` + total;
  grand_total.style.fontWeight = "bold";
  console.log(total);
}

function removeItem(event) {
  del_btn = event.target;
  console.log(del_btn);
  del_btn_parent = del_btn.parentElement.parentElement;
  console.log(del_btn_parent);
  del_btn_parent.remove();
  console.log(del_btn);
  grandTotal();
  let decrementNum = --cartNum;
  cart.innerHTML = decrementNum;
}
