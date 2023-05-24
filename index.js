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
canvas.addEventListener("touchmove",(event)=>{
    // var touch = e.originalEvent.changedTouches[0];
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    console.log(x,y);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
});
