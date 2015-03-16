var c = document.querySelector("#c");
var ctx = c.getContext("2d");

document.addEventListener('DOMContentLoaded', function() {
  var v = document.querySelector("#v");
  var canvas = document.querySelector("#c");
  var ctx = canvas.getContext("2d");

  v.addEventListener('loadedmetadata', function() {
    canvas.width = this.videoWidth;
    canvas.height = this.videoHeight;
  });

  var draw = function() {
    canvas.getContext('2d').drawImage(v, 0, 0);
    requestAnimationFrame(draw);
  };

  v.addEventListener('play', function() {
    if (v.paused || v.ended) return ;
      draw();
  });
});