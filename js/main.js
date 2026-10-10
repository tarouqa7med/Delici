
// window.addEventListener("load", function () {
//         loadingPage();
// });



let nav = document.querySelector("nav"),
        canvasBtn = nav.querySelector(".canvasBtn"),
        canvas = document.querySelector(".canvas"),
        canvasContainer = canvas.querySelector(".canvas-left");
        canvasAnchors = canvas.querySelectorAll(".canvas-left a"),
        sections = document.querySelectorAll("section, header");
        sectionsAfter = document.querySelectorAll("section::after, header::after");

canvasBtn.addEventListener("click", function () {
        openCanvas();
})

canvas.addEventListener("click", function () {
        closeCanvas();
})

canvasContainer.addEventListener("click", function (event) {
        event.stopPropagation();
})

canvasAnchors.forEach(function (a) {
        a.addEventListener("click", function (event) {
                event.preventDefault();
                
                let ul = a.closest("ul"),
                        currentActive = ul.querySelector("li.active"),
                        newActive = a.parentElement;
                
                currentActive.classList.remove("active");
                newActive.classList.add("active");

                closeCanvas();

                let target = a.getAttribute("href");
                setTimeout(function () {
                        window.location.hash = target;
                }, 500);
        })
})



window.addEventListener("scroll", function () {
        checkScrollNavBgColor();
        checkScrollNavHide();

})