const canva = document.getElementById("can");
const ctx = canva.getContext("2d");
let arrayx = [];
let arrayy = [];

canva.width = window.innerWidth;
canva.height = window.innerHeight;

document.getElementById("a1").onclick = function() {
  ctx.clearRect(0, 0, canva.width, canva.height);
  let Amount2 = Number(document.getElementById("a2").value);
  arrayx = [];
  arrayy = [];
  for (let i = 0; i < Amount2; i++) {
    let x = Math.ceil(Math.random() * window.innerWidth);
    let y = Math.ceil(Math.random() * window.innerHeight);
    let z = Math.ceil(Math.random() * 7);
    let v = Math.ceil(Math.random() * 2);
    arrayx[i] = x;
    arrayy[i] = y;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, z, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = v;
    ctx.moveTo(arrayx[i], arrayy[i]);
    ctx.lineTo(arrayx[i-1], arrayy[i-1]);
    ctx.stroke();
  }
}


