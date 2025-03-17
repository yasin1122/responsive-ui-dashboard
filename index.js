const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const exit = document.getElementById("exit-btn");

function openNav(e) {
  e.preventDefault();
  nav.classList.add('open-nav');
}

function closeNav(e) {
  e.preventDefault();
  nav.classList.remove('open-nav');
}

menuBtn.addEventListener('click', openNav);
menuBtn.addEventListener('touchstart', openNav);

exit.addEventListener('click', closeNav);
exit.addEventListener('touchstart', closeNav);
// show viewport width

let width = document.getElementById('width');
const onresize = function() {
   //your code here
   //this is just an example
   width.innerText = document.body.clientWidth;
   width.classList.add('display-width');
   setTimeout(() => {
       width.classList.remove('display-width');
   }, 2000)
}
window.addEventListener("resize", onresize);
