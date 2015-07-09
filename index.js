module.exports = function (img, x, y, width, height) {
  var canvas = document.createElement('canvas')
  canvas.width = img.width || width
  canvas.height = img.height || height
  canvas.getContext('2d').drawImage(img, x || 0, y || 0, width, height, 0, 0, img.width, img.height)
  return canvas
}