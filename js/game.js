//Game Loop
function draw() {
  // request to execute this function at the next earliest convenience
  requestAnimationFrame(draw);
  processInput();
  moveObjectsAndEnemies();
  drawAllTheThings();
}

//Handle Keyboard Events
var k = new Kibo();
k.down(['up', 'w'], function() {
    // Do something cool on the canvas
});

k.up(['enter', 'q'], function() {
    // Do other stuff.
});

//Handle Mouse Events
var c = document.querySelector("canvas");

function handleMouseClick(evt) {
  x = evt.clientX - c.offsetLeft;
  y = evt.clientY - c.offsetTop;
  console.log("x,y:"+x+","+y);
}
c.addEventListener("click", handleMouseClick, false);