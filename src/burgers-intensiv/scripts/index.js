document.getElementById("main-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

let button = document.querySelectorAll(".products-button");
for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let tell = document.getElementById("tell");
document.getElementById("button-order").onclick = function () {
  let hasError = false;

  [burger, name, tell].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else {
      item.parentElement.style.background = "";
    }
  });

  if (!hasError) {
    [burger, name, tell].forEach((item) => {
      item.value = "";
    });

    alert("Спасибо за заказ! Мы скоро с вами свяжемся");
  }
};

let price = document.getElementsByClassName("products-item-price");
document.getElementById("currency").onclick = function (e) {
  let currentCurrency = e.target.innerText;

  let newCurrency = "$";
  let cooficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    cooficient = 89;
  } else if (currentCurrency === "₽") {
    newCurrency = "BIN";
    cooficient = 3;
  } else if (currentCurrency === "BIN") {
    newCurrency = "€";
    cooficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "₸";
    cooficient = 461;
  }
  e.target.innerText = newCurrency;

  for (let i = 0; i < price.length; i++) {
    price[i].innerText =
      +(price[i].getAttribute("data-praice") * cooficient).toFixed(1) +
      " " +
      newCurrency;
  }
};
