

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
        
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        // let modal = document.querySelector(`div[data-modal-name="${modalName}"]`),
        //         modalContainer = modal.firstElementChild;
        
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        nav.style.width = `calc(100% - ${scrollbarWidth}px)`;
        // modal.style.paddingRight = `${scrollbarWidth}px`;
        
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
                // modal.classList.remove("show");
                canvas.classList.remove("show");
                document.body.style.paddingRight = '0px';
                nav.style.width="100%"   
                document.body.classList.remove("no-scroll");
                // modal.style.paddingRight = '0px';
        }, 500);
        setTimeout(function () {
                canvas.classList.toggle("active");
        }, 1001)
}

function checkScrollNavBgColor() {
        if (window.scrollY > 10) {
                nav.style.backgroundColor="red"
        } else {
                nav.style.backgroundColor="transparent"
        }
}

function checkScrollNavHide() {
        if (window.scrollY > 10) {
                nav.classList.add("hide")
        } else {
                nav.classList.remove("hide")
        }
}