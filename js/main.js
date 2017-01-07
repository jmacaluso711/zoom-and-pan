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

function getPositions(e) {

   isDown = true;

   startX = e.pageX - product.offsetLeft;
   startY = e.pageY - product.offsetTop;

   product.classList.add('zoom-in');

}

function disable(e) {
   isDown = false;
}

function zoomPan(e) {

   if(!isDown) return; //stop fn if mouse is not dowm

   e.preventDefault();

   const x = e.pageX - product.offsetLeft;
   const y = e.pageY - product.offsetTop;
   const panX = x - startX;
   const panY = y - startY;

   img.style.transform = 'translateX(' + panX + 'px' + ') translateY(' + panY + 'px' + ')';

}

// Desktop
product.addEventListener("mousedown", getPositions);
product.addEventListener("mouseup", disable);
product.addEventListener("mouseleave", disable);
product.addEventListener("mousemove", zoomPan);

// Touch
product.addEventListener("touchstart", getPositions);
product.addEventListener("touchend", disable);
product.addEventListener("touchcancel", disable);
product.addEventListener("touchmove", zoomPan);
