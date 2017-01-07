const product = document.querySelector('.image-stage');
const img = document.querySelector('.image-wrap');
const plus = document.querySelector('.control-in');
const minus = document.querySelector('.control-out');
let isDown = false;
let startX;
let stateY;

plus.addEventListener('click', (e) => {
   product.classList.add('zoom-in');
});

minus.addEventListener('click', (e) => {
   product.classList.remove('zoom-in');
   img.style.transform = 'translateX(' + 0 + 'px' + ') translateY(' + 0 + 'px' + ')';
});

product.addEventListener("mousedown", (e) => {

   isDown = true;

   startX = e.pageX - product.offsetLeft;
   startY = e.pageY - product.offsetTop;

   product.classList.add('zoom-in');

});

product.addEventListener("mouseup", (e) => {

   isDown = false;

});

product.addEventListener("mouseleave", (e) => {

   isDown = false;

});

product.addEventListener("mousemove", (e) => {

   if(!isDown) return; //stop fn is mouse no dowm

   e.preventDefault();

   const x = e.pageX - product.offsetLeft;
   const y = e.pageY - product.offsetTop;
   const panX = x - startX;
   const panY = y - startY;
   img.style.transform = 'translateX(' + panX + 'px' + ') translateY(' + panY + 'px' + ')';

});
