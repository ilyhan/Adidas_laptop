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
