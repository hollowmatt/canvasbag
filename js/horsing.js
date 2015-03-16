var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

var image = new Image();
image.onload = function() {
  console.log("loaded Image");
  ctx.drawImage(image, 0, 0, c.width, c.height);
  grayScale();
  // var savedImage = c.toDataURL();
  // window.open(savedImage);
  ctx.font = "36pt Impact";
  ctx.textAlign = "center";

  ctx.fillStyle = "white";
  ctx.fillText("Hello", c.width / 2 , 100);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeText("Hello", c.width / 2, 100);

  ctx.fillText("It is beer o'clock", c.width / 2, c.height - 50);
  ctx.strokeText("It is beer o'clock", c.width / 2, c.height - 50);
}
image.src = "img/url.jpg";

// // rectangles
// ctx.fillStyle = "black";
// ctx.fillRect(100, 100, 100, 100);
// ctx.clearRect(50, 50, 150, 150);

// // line
// ctx.strokeStyle = "white";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(125, 125);
// ctx.stroke();
// ctx.moveTo(200, 200);
// ctx.lineTo(175, 175);
// ctx.stroke();


// // triangle
// ctx.strokeStyle = "#33CC33";
// ctx.strokeRect(50, 50, 100, 100);
// ctx.beginPath();
// ctx.moveTo(75, 75);
// ctx.lineTo(125, 75);
// ctx.lineTo(125, 125);

// ctx.fillStyle = "blue";
// ctx.fill();

var makeGrayScale = function (r, g, b, a) {
  var y = (0.2989 * r) + (0.5870 * g) + (0.1140 * b);
  return {r:y, g:y, b:y, a:y};
};

var makeSepiaTone = function (r, g, b, a) {
  var sr = (0.393 * r) + (0.769 * g) + (0.189 * b);
  var sg = (0.349 * r) + (0.686 * g) + (0.168 * b);
  var sb = (0.272 * r) + (0.534 * g) + (0.131 * b);
  return {r:sr, g:sg, b:sb, a:a};
};

var makeNegative = function (r, g ,b, a) {
  var nr = 255 - r;
  var ng = 255 - g;
  var nb = 255 - b;
  var na = 255;
  return {r:nr, g:ng, b:nb, a:na};
};

function grayScale() {
  var imageData = ctx.getImageData(0,0,500,676);
  var numPixels = imageData.data.length/4;
  for (var i = 0; i < numPixels; i++) {
    r = imageData.data[i * 4 + 0];
    g = imageData.data[i * 4 + 1];
    b = imageData.data[i * 4 + 2];
    a = imageData.data[i * 4 + 3];
    pixel = makeNegative(r, g, b, a);
    imageData.data[i * 4 + 0] = pixel.r;
    imageData.data[i * 4 + 1] = pixel.g;
    imageData.data[i * 4 + 2] = pixel.b;
    imageData.data[i * 4 + 3] = pixel.a;
  }
  ctx.putImageData(imageData, 0, 0);
}