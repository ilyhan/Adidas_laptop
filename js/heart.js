//активация сердечек при добавлении в избранное
let nav_herts =  document.querySelector('img[alt="heart-nav"]');
document.addEventListener("click", function(event)
{

  if(event.target.alt == "heart"){
    event.target.classList.toggle("cart-active-heart");
    const card = event.target.closest('.cart');

    const productInfo = {
      imgSrc: card.querySelector('.img').getAttribute('src'),
      price: card.querySelector('.price-shoes').innerText,
      name: card.querySelector('h3').innerText,
    }



  






    let hearts = document.querySelector(".cart-active-heart")+1;
    if(hearts.length){
      nav_herts.src = "img/active-heart.png";
    }
    else{
      nav_herts.src = "img/heart.png";
    }
}
});
let hearts = document.querySelector(".cart-active-heart")+1;
if(hearts.length){
  nav_herts.src = "img/active-heart.png";
}
else{
  nav_herts.src = "img/heart.png";
}




//появление и удаление навигации при прокрутке
let nav =  document.querySelector(".fixed");
window.onscroll = function (e) {
    if(window.scrollY>150){
      nav.classList.add("none");
    }else {
        nav.classList.remove("none");
    }
};


//смена фото по времени
var image = document.getElementById('img');
        var images = ['img/men.jpg', 'img/women.jpg'];
        var a = 0;

        function SetImage() {
            if (a == 0) {
                image.src = images[a];
                a = 1;
            } else {
                image.src = images[a];
                a = 0;
            }

        }

        setInterval(SetImage, 1000);



//код для смены скролл блока
let first_switch_btn = document.getElementById("first-switch-btn");
let second_switch_btn = document.getElementById("second-switch-btn");
let scroll_divs = document.querySelectorAll(".catalog-scroll");
console.log(scroll_divs);
document.addEventListener("click", function(event)
{

  if(event.target.id == "first-switch-btn"){
    event.target.classList.add("active-switch-btn");
    second_switch_btn.classList.remove("active-switch-btn");
    scroll_divs[0].classList.remove("none_block");
    scroll_divs[1].classList.add("none_block");

 }else if (event.target.id == "second-switch-btn") {
   event.target.classList.add("active-switch-btn");
   first_switch_btn.classList.remove("active-switch-btn");
   scroll_divs[1].classList.remove("none_block");
   scroll_divs[0].classList.add("none_block");
 }
});
