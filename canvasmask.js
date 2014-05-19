(function(){

  var imagecanvas = document.createElement('canvas');
  var imagecontext = imagecanvas.getContext('2d');

  /* uncomment do see the canvas to debug
  document.body.appendChild(imagecanvas);
  */
  window.addEventListener('load', function(){
    [].forEach.call(document.querySelectorAll('.mask'), function(img){
      var newImg = document.createElement('img');
      newImg.src = img.src;
      
      newImg.onload = function() {
        var width  = newImg.width;
        var height = newImg.height;

        var mask = document.createElement('img');
        mask.src = img.getAttribute('data-mask');
        mask.onload = function() {
          imagecanvas.width  = width;
          imagecanvas.height = height;

          imagecontext.drawImage(mask, 0, 0, width, height);
          imagecontext.globalCompositeOperation = 'source-atop';
          imagecontext.drawImage(img, 0, 0);

          img.src = imagecanvas.toDataURL();
        }
      }
    });
  }, false);

})();
