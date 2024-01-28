const productsDB = {
  1001: {
    imgs: "img//forum_low_white_grinch/",
    price: "130$",
    name: "FORUM LOW X THE GRINCH SHOES",
    type: "Originals"
  },
  1002: {
    imgs: "img/basketball_ae_1/",
    price: "120$",
    name: "AE 1 BASKETBALL SHOES",
    type: "Basketball"
  }
}

let cart = JSON.parse(localStorage.getItem('cart'));
console.log(productsDB[cart].imgs+"foto1.png");

let productImgs = document.querySelectorAll('.product-img img');
productImgs.forEach((item, i) => {
  item.src = productsDB[cart].imgs+`foto${i+1}.png`;
});

let productDescr = document.querySelector('.product-description');

productDescr.querySelector('span').innerText = productsDB[cart].type;
productDescr.querySelector('h1').innerText = productsDB[cart].name;
productDescr.querySelectorAll('span')[1].innerText = productsDB[cart].price;
