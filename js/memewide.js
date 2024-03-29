function textChangeListener (evt) {
    var id = evt.target.id;
    var text = evt.target.value;
  
    if (id == "topLineText") {
      window.topLineText = text;
    } else {
      window.bottomLineText = text;
    }
  
    redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
  }
  
  function redrawMeme(image, topLine, bottomLine) {
    // Get Canvas2DContext
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext("2d");
  
    console.log("loaded Image");
    // ctx.rotate(Math.PI/2);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    // ctx.rotate(-Math.PI/2);
  
    ctx.font = "36pt Impact";
    ctx.textAlign = "center";
  
    ctx.fillStyle = "white";
    ctx.fillText(topLine, canvas.width / 2 , 100);
  
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeText(topLine, canvas.width / 2, 100);
  
    ctx.fillText(bottomLine, canvas.width / 2, canvas.height - 50);
    ctx.strokeText(bottomLine, canvas.width / 2, canvas.height - 50);
  
  }
  
  function saveFile() {
    window.open(document.querySelector('canvas').toDataURL());
  }
  
  
  function handleFileSelect(evt) {
    var canvasWidth = 1200;
    var canvasHeight = 600;
    var file = evt.target.files[0];
  
  
  
    var reader = new FileReader();
    reader.onload = function(fileObject) {
      var data = fileObject.target.result;
  
      // Create an image object
      var image = new Image();
      image.onload = function() {
  
        window.imageSrc = this;
        redrawMeme(window.imageSrc, null, null);
      }
  
      // Set image data to background image.
      image.src = data;
      console.log(fileObject.target.result);
    };
    reader.readAsDataURL(file)
  }
  
  window.topLineText = "";
  window.bottomLineText = "";
  var input1 = document.getElementById('topLineText');
  var input2 = document.getElementById('bottomLineText');
  input1.oninput = textChangeListener;
  input2.oninput = textChangeListener;
  document.getElementById('file').addEventListener('change', handleFileSelect, false);
  document.querySelector('button').addEventListener('click', saveFile, false);