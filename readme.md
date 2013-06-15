Image masking using canvas
==========================

This is a simple demo showing you how to use canvas to mask images in the browser. This can also be done with SVG, but there are a few compatibility issues. CSS filters, I guess, will sooner or later also do the same thing. For now though, all you need to do is add the `canvasmask.js` script and add a class of `mask` to each image you want to mask. You also need to provide a PNG file as the mask using the `data-mask` attribute. For example: 

```xml
<img src="red-panda.jpg" alt="Red panda" class="mask" data-mask="centerblur.png">
```
This will take the `centerblur.png` file and apply it as a mask to `red-panda.jpg` - in effect taking the alpha of each pixel and change the alpha of the original pixel to that.

You can see it in action here: http://codepo8.github.io/canvas-masking/

Under the hood
==============

There is no magic going on here. Under the hood the script:

* Loops over all the images with a class of `mask`
* Creates a new image from its `data-mask` value
* Copies the mask image to the canvas 
* Changes the compositing of the canvas to `source-atop` to merge the images
* writes the image back to the image element.

Originally I looped over all the pixels, but this is not needed as pointed out by @jaffathecake on Twitter. 



