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




//скрипт для другого файла(просто попоробовать)

let imgPrd = document.querySelector('.product-img');

let c = function(e, x, y){
  e.target.style = `transform: translateX(${x-e.clientX}px) translateY(${y-e.clientY}px) scale(2.2);`;
  console.log(e);
}

imgPrd.addEventListener('click', (event)=>{
  if(event.target.tagName=="IMG"){
  event.target.style = `transform: scale(2.2);`;
  console.log(event);
  event.target.addEventListener('mousemove',function(e){
    c(e, event.clientX, event.clientY);
  });
  event.target.addEventListener('mouseleave',(ev)=>{
    event.target.style = `transform: translate(0px) scale(1);`;
    event.target.removeEventListener('mousemove', c);
  });
  // event.target.style = `transform: translateX(0px) translateY(0px) scale(1);`;
}
})
