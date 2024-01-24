//появление и удаление навигации при прокрутке
let nav =  document.querySelector(".fixed");
window.onscroll = function (e) {
    if(window.scrollY>150){
      nav.classList.add("none");
    }else {
        nav.classList.remove("none");
    }
};
