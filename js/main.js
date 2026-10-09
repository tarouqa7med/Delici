
// window.addEventListener("load", function () {
//         loadingPage();
// });

let nav = document.querySelector("nav"),
        canvasBtn = nav.querySelector(".canvasBtn"),
        canvas = document.querySelector(".canvas"),
        canvasContainer = canvas.querySelector(".canvas-left");
        anchors = canvas.querySelectorAll(".canvas-left a");


console.log(nav)
console.log(canvas)
console.log(canvasBtn)
console.log(canvasContainer)


canvasBtn.addEventListener("click", function () {
        openCanvas();
})

canvas.addEventListener("click", function (event) {
        closeCanvas();
})

canvasContainer.addEventListener("click", function (event) {
        event.stopPropagation();
})

anchors.forEach(function (a) {
        a.addEventListener("click", function () {
        closeCanvas();
})
})