
function loadingPage() {
        
        let loadingPage = document.querySelector(".loadingPage");
        setTimeout(function () {
                loadingPage.classList.add("hide");
        }, 2500);
        setTimeout(function () {
                loadingPage.classList.add("d-none");
        }, 3001);
}

function openCanvas() {
        canvas.classList.toggle("active");
        setTimeout(function () {
                canvas.classList.toggle("show");
        }, 1)
        setTimeout(function () {
                canvasContainer.classList.remove("hide");
        }, 350)
}

function closeCanvas() {
        canvasContainer.classList.add("hide");
        setTimeout(function () {
                canvas.classList.remove("show");
        }, 500)
        setTimeout(function () {
                canvas.classList.toggle("active");
        }, 1001)
}