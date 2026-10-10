

function loadingPage() {
        
        let loadingPage = document.querySelector(".loadingPage");
        setTimeout(function () {
                loadingPage.classList.add("hide");
        }, 2500);
        setTimeout(function () {
                loadingPage.classList.add("d-none");
        }, 3001);
}

function navbarBgColor() {
        if (window.scrollY > 10) {
                nav.classList.add("bgColor");
        } else if (window.scrollY < 10) {
                nav.classList.remove("bgColor");
        }
}

function navbarHideShow() {
        const newScroll = window.scrollY;

        if (newScroll <= 0) {
                nav.classList.remove("hide");
        } else if (newScroll > oldScroll) {
                nav.classList.add("hide");
        } else if (newScroll < oldScroll) {
                nav.classList.remove("hide");
        }
        oldScroll = newScroll;
}

function progressBar() {

        let totalHTMLWidth = document.querySelector("html").offsetHeight,
        currentScroll = window.scrollY,
        x = currentScroll,
        y = totalHTMLWidth,
        z = (x / y) * 100,
        progressBarWidth = z * 1.15;
        
        progressBarSpan.style.width = `${progressBarWidth}%`;

}

function openCanvas() {
        
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        nav.style.width = `calc(100% - ${scrollbarWidth}px)`;
        document.body.classList.add("no-scroll");

        canvas.classList.add("active");
        setTimeout(function () {
                canvas.classList.add("show");
        }, 1)
        setTimeout(function () {
                canvasContainer.classList.remove("hide");
        }, 350)
}

function closeCanvas() {
        canvasContainer.classList.add("hide");
        setTimeout(() => {

                canvas.classList.remove("show");
                document.body.style.paddingRight = '0px';
                nav.style.width = "100%";
                document.body.classList.remove("no-scroll");

        }, 500);
        setTimeout(function () {
                canvas.classList.toggle("active");
        }, 1001)
}

function updateNavAnchor(section_id) {

        let currentSection = document.querySelector(`#${section_id}`),
                sectionTop = currentSection.offsetTop - nav.clientHeight,
                sectionHieght = currentSection.clientHeight,
                sectionBTM = sectionTop + sectionHieght;

        if (window.scrollY >= sectionTop && window.scrollY <= sectionBTM) {
                let section_id = currentSection.getAttribute("id"),
                        navLinkOfSection = document.querySelector(`nav a[href="#${section_id}"]`),
                        currentActiveLink = document.querySelector("nav a.active");
                
                currentActiveLink.classList.remove("active");
                navLinkOfSection.classList.add("active");
        }
}

function getPrevCarousel() {
        
        let activeCarousel = carousels.querySelector(".myCarousel-item.active"),
                activeCarouselSpan = carouselButtons.querySelector("button.active"),
                prevCarousel = activeCarousel.previousElementSibling,
                prevCarouselSpan = activeCarouselSpan.previousElementSibling;
        
        if (prevCarousel === null && prevCarouselSpan === null) {
                prevCarousel = carousels.lastElementChild;
                prevCarouselSpan = carouselButtons.lastElementChild;
        }

        activeCarousel.classList.remove("active");
        prevCarousel.classList.add("active")
        activeCarouselSpan.classList.remove("active");
        prevCarouselSpan.classList.add("active");
        sound.play();

}

function getNextCarousel() {
        
        let activeCarousel = carousels.querySelector(".myCarousel-item.active"),
                activeCarouselSpan = carouselButtons.querySelector("button.active"),
                nextCarousel = activeCarousel.nextElementSibling,
                nextCarouselSpan = activeCarouselSpan.nextElementSibling;
        
        if (nextCarousel === null && nextCarouselSpan === null) {
                nextCarousel = carousels.firstElementChild;
                nextCarouselSpan = carouselButtons.firstElementChild;
        }

        activeCarousel.classList.remove("active");
        nextCarousel.classList.add("active");
        activeCarouselSpan.classList.remove("active");
        nextCarouselSpan.classList.add("active");
        sound.play();

}

function selectedCarouselButton(that) {

        span_idNum=that.dataset.number;
        let selectedCarouselItem = document.querySelector(`.myCarousel-item[data-carousel-id="${span_idNum}"]`),
                activeCarouselItem=document.querySelector(`.myCarousel-item.active`);

        if (selectedCarouselItem === activeCarouselItem) {
                return;
        }
        carouselBtnsArr.forEach(function (btn) {
                btn.classList.remove("active");
        })
        selectedCarouselItem.classList.add("active");
        activeCarouselItem.classList.remove("active");
        that.classList.add("active");
        sound.play();

}