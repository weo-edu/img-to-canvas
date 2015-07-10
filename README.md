# img-to-canvas

Convert an img tag into a canvas tag, optionally with clipped dimensions (works only in browser).

## Usage

  * `img` an `<img>` element
  * `x` the distance along the x axis to begin cropping
  * `y` the distance along the y axis to begin cropping
  * `width` the width of the section you want to crop
  * `height` the height of the section you want to crop
  * `scaleWidth` scale the final image up/down to this width (optional - defaults to `width`)
  * `scaleHeight` scale the final image up/down to this height (optional - defaults to `height`)

Returns a canvas element containing the cropped image.

## Example

```javascript
var img = document.querySelector('#img-to-crop')
imgToCanvas(img, 20, 20, 40, 40)
```

Takes `#img-to-crop` and generates a canvas that contains a 40x40 square of pixels 20 pixels into the image along each axis.