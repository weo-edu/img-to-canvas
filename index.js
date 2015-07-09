module.exports = function (img, x, y, width, height) {
  var canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  canvas.getContext('2d').drawImage(img, x, y, width, height, 0, 0, width, height)
  return canvas
}