const app = {},
img = document.getElementById('image-stage'),
body = document.querySelector('body'),
zoomInBtn = document.getElementById('control-in'),
zoomOutBtn = document.getElementById('control-out');

var x_img,
    y_img,
    x_cursor,
    y_cursor,
    timer,
    zoomed = false,
    mouseDown = false;

app.init = function() {

	app.zoom();
	app.pan();

};

app.zoom = function() {

	img.addEventListener('click', app.toggleZoom);
   img.addEventListener('touchend', app.toggleZoom);
	zoomInBtn.addEventListener('click', app.zoomIn);
	zoomOutBtn.addEventListener('click', app.zoomOut);

};

app.toggleZoom = function(e) {

   e.stopPropagation();

	if(zoomed) {

		img.classList.remove('zoom-in');
		body.classList.remove('enable-panning');
		zoomInBtn.classList.remove('zoomed-in');
		img.style.transform = 'translateX(' + 0 + 'px' + ') translateY(' + 0 + 'px' + ')';
		zoomed = false;

	} else {

		img.classList.add('zoom-in');
		body.classList.add('enable-panning');
		zoomInBtn.classList.add('zoomed-in');
		zoomed = true;

	}

};

app.zoomIn = function() {

	img.classList.add('zoom-in');
	body.classList.add('enable-panning');
	zoomInBtn.classList.add('zoomed-in');
	zoomed = true;

};

app.zoomOut = function() {

	img.classList.remove('zoom-in');
	body.classList.remove('enable-panning');
	zoomInBtn.classList.remove('zoomed-in');
	zoomed = false;
	img.style.transform = 'translateX(' + 0 + 'px' + ') translateY(' + 0 + 'px' + ')';

};

app.pan = function() {

	img.addEventListener('mousedown', function(e) {

  		x_img = e.clientX,
  		y_img = e.clientY,
  		mouseDown = true;

	});

	document.addEventListener('mouseup', function() {

		mouseDown = false;

	});

	img.addEventListener('mousemove', function(e){

   	if(!mouseDown) return;
   	if(!zoomed) return;

		x_cursor = e.clientX,
		y_cursor = e.clientY;

		img.style.transform = 'translateX('+(x_cursor - x_img) + 'px'+') translateY('+(e.clientY - y_img) + 'px'+')';

	});

};

app.init();
