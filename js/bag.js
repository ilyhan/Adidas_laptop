let bagProducts = JSON.parse(localStorage.getItem('bag'));
console.log(bagProducts);
let infoBasket = document.querySelector('.basket-info');
let a = document.querySelector('.carts-basket');
if(!bagProducts){
  infoBasket.style = 'display: none';
}else{
  let totalPrice = 0;
  let cart = infoBasket.querySelector('.carts-basket-item');
  bagProducts.forEach((item, i) => {

    let newCart = cart.cloneNode(true);
    newCart.classList.remove('none_block');
    newCart.querySelector('.name-product a').innerText = item["name"];
    newCart.querySelector('.name-product span').innerText = item["price"] + '$';
    newCart.querySelector('[data-color]').innerText = item["color"];
    newCart.querySelector('[data-size]').innerText = item["size"];
    newCart.querySelector('img').src = item["img"];
    a.append(newCart);
    totalPrice += Number(item["price"]);

  });
  infoBasket.querySelector('.total-price span').innerText = `TOTAL: (${bagProducts.length} item)`;
  infoBasket.querySelector('.total-price strong').innerText = '$' + totalPrice;


  //ORDER SUMMARY
  let result  = document.querySelectorAll('.order-summary-label span');
  result[0].innerText = bagProducts.length + ' items';
  result[1].innerText = '$'+totalPrice;

  let tax = document.querySelectorAll('.order-summary-sale-tax span');
  tax[1].innerText = '$' + totalPrice*0.04;

  let total = document.querySelectorAll('.order-summary-total strong');
  total[1].innerText = '$' + (totalPrice + totalPrice*0.04 + 4.99).toFixed(2);

  //delete item
  let basketCarts = document.querySelector('.carts-basket');
  basketCarts.addEventListener('click', (event)=>{
    if(event.target.className=='close-ikon'){
      event.target.closest('.carts-basket-item').classList.add('none_block');
    }
  });
  console.log(cart);
}
