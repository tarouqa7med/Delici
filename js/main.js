
navbarBgColor();
navbarHideShow();
progressBar();

window.addEventListener("DOMContentLoaded", function () {
        loadingPage();
});

window.addEventListener("scroll", function () {

        navbarBgColor();

        navbarHideShow();

        progressBar();

        sections.forEach(function (section) {
                updateNavAnchor(section.id);
        })

})

navAnchors.forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
                event.preventDefault();

                let currentNavLink = nav.querySelector("a.active"),
                        anchor_id = anchor.getAttribute("href"),
                        currentSection = document.querySelector(`${anchor_id}`),
                        sectionTop = currentSection.offsetTop;
                
                if (anchor.classList.contains("active")) {
                        return;
                }
                
                anchor.classList.add("active")
                currentNavLink.classList.remove("active");

                window.scrollTo(0, sectionTop - nav.clientHeight);
        })
})

canvasBtn.addEventListener("click", () => openCanvas())

canvas.addEventListener("click",  () => closeCanvas())

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

prevBtn.addEventListener("click", function (event) {

        prevBtn.disabled = true;
        setTimeout( () => prevBtn.disabled = false, 500);

        getPrevCarousel();
});

nextBtn.addEventListener("click", function () {

        nextBtn.disabled = true;
        setTimeout( () => nextBtn.disabled = false, 500);

        getNextCarousel();
});

carouselBtnsArr.forEach(function (btn) {
        btn.addEventListener("click", function () {
                carouselBtnsArr.forEach(function (btn) {
                        btn.disabled = true;
                        setTimeout( () => btn.disabled = false, 500);
                })
        })
})