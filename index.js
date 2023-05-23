let canvas = document.getElementById("canvas1");
console.log(canvas);
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
canvas.addEventListener("click", (e) => {
    drawCircle(e.x, e.y);
}
);
canvas.addEventListener("mousemove",(e)=>{
    drawCircle(e.x,e.y);
})
const drawCircle = (x, y) => {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    // ctx.rect(x,y,10,10);
    ctx.stroke();
    ctx.fill();
}