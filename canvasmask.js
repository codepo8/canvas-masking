(function(){

  var imagecanvas = document.createElement('canvas');
  var maskcanvas = document.createElement('canvas');
  var imagecontext = imagecanvas.getContext('2d');
  var maskcontext = maskcanvas.getContext('2d');
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
  document.body.appendChild(c);
  document.body.appendChild(c2);
  */
  window.addEventListener('load', function(ev){
    while (all--) {
      img = images[all];
      mask = document.createElement('img');
      mask.src = img.getAttribute('data-mask');
      width = img.offsetWidth;
      height = img.offsetHeight;
      imagecanvas.width = maskcanvas.width = width;
      imagecanvas.height = maskcanvas.height = height;
      imagecontext.drawImage(img, 0, 0, width, height);
      maskcontext.drawImage(mask, 0, 0, width, height);
      imgpixels = imagecontext.getImageData(0, 0, width, height);
      maskpixels = maskcontext.getImageData(0, 0, width, height);
      allpixels = imgpixels.data.length;
      for (i = 0; i < allpixels; i += 4) {
        imgpixels.data[i + 3] = maskpixels.data[i + 3];
      }
      imagecontext.putImageData(imgpixels,0, 0);
      img.src = imagecanvas.toDataURL();
    }
  }, false);

})();