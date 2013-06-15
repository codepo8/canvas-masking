(function(){

  var imagecanvas = document.createElement('canvas');
  var imagecontext = imagecanvas.getContext('2d');
  var images = document.querySelectorAll('.mask');
  var all = images.length;
  var img = false;
  var mask = false;
  var width = 0;
  var height = 0;
  var imgpixels = false;
  var maskpixels = false;
  var allpixels = false;

  /* uncomment do see the canvas to debug
  document.body.appendChild(imagecanvas);
  */
  window.addEventListener('load', function(ev){
    while (all--) {
      img = images[all];
      mask = document.createElement('img');
      mask.src = img.getAttribute('data-mask');
      width = img.offsetWidth;
      height = img.offsetHeight;
      imagecanvas.width = width;
      imagecanvas.height = height;
      imagecontext.drawImage(mask, 0, 0, width, height);
      imagecontext.globalCompositeOperation = 'source-atop';
      imagecontext.drawImage(img, 0, 0);
      img.src = imagecanvas.toDataURL();
    }
  }, false);

})();