if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-remove");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];

    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("addbtn");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("pizzaPrice")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("pizzaImg")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      /*alert("This item is already added to the cart");*/
      document.getElementsByClassName("cart-quantity-input")[i].value++;

      return;
    }
  }
  var cartRowContents = `
            <div class="cart-item">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-item-price">${price}</span>
            <div class="cart-item-quantity">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn-remove" type="button">REMOVE</button>
            </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-remove")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-item-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("Em", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "Em" + " " + total;
  document.getElementsByClassName("cartNo")[0].innerText = "Em" + " " + total;
}

document
  .getElementsByClassName("deliver")[0]
  .addEventListener("click", purchaseClicked);

document
  .getElementsByClassName("confirm")[0]
  .addEventListener("click", confirmAddress);

function confirmAddress() {
  var x = document.getElementsByClassName("inputLocation1")[0].value;
  var y = document.getElementsByClassName("inputLocation2")[0].value;
  var world = document.getElementsByClassName("inputSelect")[0].value;

  if (y === "") {
    y = "0";
  }
  if (x === "") {
    x = "0";
  }
  if (world === "0") {
    world = "world";
  } else {
    world = "world_heaven";
  }

  document.getElementsByClassName(
    "map"
  )[0].innerHTML = `<iframe src="https://map.crazy-fools.co.uk/?worldname=${world}&mapname=flat&zoom=6&x=${x}&y=64&z=${y}" frameborder="0">
      </iframe>`;
}
