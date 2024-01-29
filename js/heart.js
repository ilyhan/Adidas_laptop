//активация сердечек при добавлении в избранное
let nav_herts =  document.querySelector('img[alt="heart-nav"]');
const active_heart = function(event){
  if(event.target.alt == "heart"){
    event.preventDefault();
    event.target.classList.toggle("cart-active-heart");
    let hearts = document.querySelector(".cart-active-heart")+1;
    if(hearts.length){
      nav_herts.src = "img/active-heart.png";
    }
    else{
      nav_herts.src = "img/heart.png";
    }
}
}
document.addEventListener("click", active_heart);
let hearts = document.querySelector(".cart-active-heart")+1;
if(hearts.length){
  nav_herts.src = "img/active-heart.png";
}
else{
  nav_herts.src = "img/heart.png";
}

let men = document.querySelector('.under_btn_men');
let arrayWishlist = [];
let f = function(e){
  let cards = document.querySelectorAll('.cart');
  cards.forEach(item => {
    if(item.querySelector('.cart-active-heart')){
      const productInfo = {
        img: item.querySelector('img').getAttribute('src'),
        price: item.querySelector('span').innerText,
        name: item.querySelector('h3').innerText
      }
      arrayWishlist.push(productInfo);
    }
  });
  localStorage.setItem('wishlist', JSON.stringify(arrayWishlist));
  document.removeEventListener('click', active_heart);
  document.removeEventListener('click', f);
}
nav_herts.addEventListener('click', f);




let wishlist = document.querySelector('.wishlist-elem');
if(wishlist){
  arrayWishlist = JSON.parse(localStorage.getItem('wishlist'));

  //убираем блок с присоединем к форуму(для незабывания лайкнутых товаров)
  if(arrayWishlist.length){
    document.querySelector('.join-club').classList.remove('none_block');
    console.log("12344");
  }

  arrayWishlist.forEach((item, i) => {
    let s = `<a href='#!' class='cart cart-fav' id='card-01'>
      <img class="img" src="${item.img}" alt="" height="280">
      <h3>Originals White Forum Low x The Grinch Shoes</h3>
      <span class="price-shoes">$130</span>
      <button class="cart-heart cart-active-heart" id="01">
        <img src="img/active-heart.png" alt="heart" height="15">
      </button>
    </a>`;
    if(i<2){
      wishlist.insertAdjacentHTML("afterbegin", s);
    }else{
      wishlist.insertAdjacentHTML("beforeend", s);
    }
  });
  let hearts = document.querySelectorAll(".cart-fav");
  console.log(hearts);

  if(hearts.length){
    wishlist.insertAdjacentHTML("beforebegin", `<br>${hearts.length} ITEMS <br>`);
    nav_herts.src = "img/active-heart.png";
  }
  else{
    console.log(hearts.length);
    wishlist.insertAdjacentHTML("beforeend", "<br>0 ITEMS <br> You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.");
    nav_herts.src = "img/heart.png";
  }
}


//получение артикула для перехода на страничку товара
let clickCart = function (event) {
  if(event.target.alt != "heart"){
  localStorage.setItem('cart', JSON.stringify(event.target.closest('.cart').dataset.articule));
  console.log(JSON.parse(localStorage.getItem('cart')));
  document.removeEventListener('click', clickCart);
}
}
document.addEventListener('click',clickCart);
