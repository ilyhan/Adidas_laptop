//активация сердечек при добавлении в избранное
let nav_herts =  document.querySelector('img[alt="heart-nav"]');
const active_heart = function(event){
  if(event.target.alt == "heart"){
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
  arrayWishlist.forEach((item, i) => {
    let s = `<a href='#!' class='cart' id='card-01'>
      <img  src="${item.img}" alt="" height="280">
      <h3>Originals White Forum Low x The Grinch Shoes</h3>
      <span class="price-shoes">$130</span>
      <button class="cart-heart cart-active-heart" id="01">
        <img src="img/heart.png" alt="heart" height="15">
      </button>
    </a>`;
    wishlist.insertAdjacentHTML("beforeend", s);
  });

}
