var canvas = document.getElementById("cv");

var ctx = canvas.getContext("2d");

ctx.fillStyle = "#00ff00"
ctx.fillRect(100, 100, 100, 100);

ctx.beginPath();
ctx.strokeStyle = "#ff0000"

ctx.moveTo(300, 100);
ctx.lineTo(400, 200);
ctx.lineTo(500, 200);
ctx.moveTo(500, 100);
ctx.lineTo(600, 200);

ctx.stroke();
ctx.closePath();

