let canvas = document.getElementById("canvas1");
console.log(canvas);
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
// canvas.addEventListener("click", (e) => {
//     drawCircle(e.x, e.y);
// }
// );
canvas.addEventListener('touchmove',(e)=>{
    // var touch = e.originalEvent.changedTouches[0];
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    console.log(x,y);
    drawCircle(x,y);
});
const drawCircle = (x, y) => {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}
