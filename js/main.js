
navbarBgColor();
navbarHideShow();
progressBar();

// window.addEventListener("DOMContentLoaded", function () {

//         loopOnMenuSection('BreakFast');

//         loadingPage();
// });

window.addEventListener("scroll", function () {

        navbarBgColor();

        navbarHideShow();

        progressBar();

        sections.forEach(function (section) {
                updateNavAnchor(section.id);
        })

        if (window.scrollY >= 100) {
                returnToTopButton.classList.add("active");
        } else {
                returnToTopButton.classList.remove("active");
        }

})

navAnchors.forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
                event.preventDefault();

                let currentNavLink = nav.querySelector("a.active"),
                        anchor_id = anchor.getAttribute("href"),
                        currentSection = document.querySelector(`${anchor_id}`),
                        sectionTop = currentSection.offsetTop;
                
                if (anchor.classList.contains("active")) {
                        window.scrollTo(0, sectionTop - 0);
                        return;
                }
                
                anchor.classList.add("active")
                currentNavLink.classList.remove("active");

                window.scrollTo(0, sectionTop - 0);

        })
})

canvasBtn.addEventListener("click", () => openCanvas())

canvas.addEventListener("click",  () => closeCanvas())

canvasContainer.addEventListener("click", (event) => event.stopPropagation());

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

prevBtn.addEventListener("click", function () {

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

modal.forEach(function (modal) {
        modal.addEventListener("click", function () {
                closeModal();
        })
})

modalContainer.forEach(function (container) {
        container.addEventListener("click", (event) => event.stopPropagation());
})

openFoodSectionAnchors.forEach(function (a) {
        a.addEventListener("click", function (event) {
                event.preventDefault();

                let activeFoodSection = document.querySelector(".food-menu.active .row");
                activeFoodSection.innerHTML = "";
                
                let anchorHref = this.getAttribute("href");
                openChosenFoodSection(a, anchorHref);

                showMenuOfChosenSection(anchorHref.replace("#", ""));

        })
})
