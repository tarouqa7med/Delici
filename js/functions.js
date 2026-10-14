

// function loadingPage() {

//         let loadingPage = document.querySelector(".loadingPage");

//         setTimeout(function () {
//                 loadingPage.classList.add("hide");
//         }, 2500);
//         setTimeout(function () {
//                 loadingPage.classList.add("d-none");
//         }, 3001);
// }

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

function editPaddingForWebsite() {
        
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        nav.style.width = `calc(100% - ${scrollbarWidth}px)`;

        document.body.classList.add("no-scroll");

}

function openCanvas() {
        
        editPaddingForWebsite();

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
                canvas.classList.remove("active");
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

function gnextarousel() {
        
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

function openModal(section_id) {

        editPaddingForWebsite();

        let currentSection = document.querySelector(`.Modal#${section_id}`),
                currentSectionContainer=currentSection.firstElementChild;

        currentSection.classList.add("active");

        setTimeout(function () {
                currentSection.classList.add("show")
        }, 1);
        setTimeout(function () {
                currentSectionContainer.classList.remove("hide");
        }, 250)
}

function closeModal() {
        let activeModal = document.querySelector(".Modal.active"),
                activeModalContainer = activeModal.firstElementChild;

        activeModalContainer.classList.add("hide");
        setTimeout(() => {
                activeModal.classList.remove("show");
        }, 501);
        setTimeout(function () {
                document.body.style.paddingRight = '0px';
                nav.style.width = "100%";
                document.body.classList.remove("no-scroll");
                activeModal.classList.remove("active");
        }, 751)
}

function openChosenFoodSection(a, anchorHref) {

        let activeAnchor = document.querySelector(".Menu .body li a.active"),
                foodSection_id = anchorHref.replace("#", ""),
                activeFoodSection = document.querySelector(".food-menu.active"),
                chosenFoodSection = document.querySelector(`.food-menu#${foodSection_id}`);
                
        activeAnchor.classList.remove("active");
        activeFoodSection.classList.remove("active");
        a.classList.add("active");
        chosenFoodSection.classList.add("active");
}

function showMenuOfChosenSection(food_id) {

        if (food_id == "BreakFast") {
                loopOnMenuSection(food_id);
        } else if (food_id == "Lunch") {
                loopOnMenuSection(food_id);
        } else if (food_id == "Dinner") {
                loopOnMenuSection(food_id);
        } else if (food_id == "Drinks") {
                loopOnMenuSection(food_id);
        }

}

function loopOnMenuSection(food_id) {
        let activeFoodSection = document.querySelector(`div#${food_id}`),
                sectionContent = activeFoodSection.firstElementChild;
        
        sectionContent.innerHTML = "";

        let arrays = {
                BreakFast: BreakFast,
                Lunch: Lunch,
                Dinner: Dinner,
                Drinks: Drinks
        }

        for (let index = 0; index < arrays[food_id].length; index++) {
                sectionContent.innerHTML += `
                        <div class="col-lg-6 py-4" data-order-id="${arrays[food_id][index].id}">
                                <div class="item ps-5 d-flex">
                                        <div class="part1 mb-0 rounded-4">
                                                <img src="./images/${arrays[food_id][index].images[0]}" alt="">
                                                <div class="layout d-flex justify-content-center align-items-center">
                                                        <i class="fa-regular fa-plus-square fs-4 cursorPointer" onclick="openModal('order-item'); loadingOrderData(${arrays[food_id][index].id}); console.log(this.closest('.col-lg-6'))"></i>
                                                </div>
                                        </div>
                                        <div class="part2 ms-4 w-100 d-block">
                                                <div class="name-price w-100 mainColor">
                                                        <span class="name me-3">${arrays[food_id][index].name}</span>
                                                        <hr class="d-inline">
                                                        <span class="price ms-3">$${arrays[food_id][index].price}</span>
                                                </div>
                                                <p class="description">
                                                        ${arrays[food_id][index].description.slice(0, 65)}...
                                                </p>
                                        </div>
                                </div>
                        </div>
                `

                sectionContent.querySelectorAll(".col-lg-6").forEach(function (col) {
                        setTimeout(function () {
                                col.classList.add("active");
                        }, 1)
                })
        }

}

function loadingOrderData(order_id) {
        let orderContainer = document.querySelector(".Modal#order-item .container");

        orderContainer.innerHTML = `
                <div class="order-data w-100 h-100 overflow-y-scroll position-relative" data-order-type="${allMenu[order_id - 1].type}" data-order-id="${order_id}">
                        <i class="fa-regular fa-times-circle cursorPointer close" onclick="closeModal()"></i>
                        <div class="head text-center mt-3">
                                <h3 class="mainColor fw-light mb-2">SPECIAL SELECTION</h3>
                                <img class="img-fluid mb-3" src="./images/separator.svg" alt="">
                                <h1 class="text-light fw-light mb-4">${allMenu[order_id - 1].name}</h1>
                        </div>
                        <div class="body text-center px-4">
                                <div class="image mb-3">
                                        <img class="img-fluid rounded-3" src="./images/${allMenu[order_id - 1].images[0]}" alt="" style="aspect-ratio: 16/9">
                                        <p class="price px-3 py-1">$${allMenu[order_id - 1].price}</p>
                                        <button class="cursorPointer rounded-2 prev" onclick="prevOrder(this)"><i class="fa-solid fa-chevron-left"></i></button>
                                        <button class="cursorPointer rounded-2 next" onclick="nextOrder(this)"><i class="fa-solid fa-chevron-right"></i></button>
                                </div>
                                <p class="description text-start mb-4">${allMenu[order_id - 1].description}</p>
                        </div>
                </div>
        `

}

function prevOrder(that) {

        let myOrderVariables = orderVariables();

        let x = --(myOrderVariables.activeOrder_id) % (myOrderVariables.typeArr).length;

        if (myOrderVariables.activeOrder_id <= (myOrderVariables.typeArr)[0].id - 1) {
                myOrderVariables.activeOrder_id = (myOrderVariables.typeArr)[(myOrderVariables.typeArr).length - 1].id;
                myOrderVariables.activeOrder.setAttribute("data-order-id", myOrderVariables.activeOrder_id);
                myOrderVariables.activeOrder_name.textContent = `${(myOrderVariables.typeArr)[(myOrderVariables.typeArr).length - 1].name}`;
                myOrderVariables.activeOrder_price.textContent = `${(myOrderVariables.typeArr)[(myOrderVariables.typeArr).length - 1].price}`;
                myOrderVariables.activeOrder_description.textContent = `${(myOrderVariables.typeArr)[(myOrderVariables.typeArr).length - 1].description}`;
        } else {
                myOrderVariables.activeOrder.setAttribute("data-order-id", myOrderVariables.activeOrder_id);
                myOrderVariables.activeOrder_name.textContent = `${(myOrderVariables.typeArr)[x - 1].name}`;
                myOrderVariables.activeOrder_price.textContent = `$${(myOrderVariables.typeArr)[x - 1].price}`;
                myOrderVariables.activeOrder_description.textContent = `${(myOrderVariables.typeArr)[x - 1].description}`;
        }

}

function nextOrder(that) {

        
        
        let myOrderVariables = orderVariables();

        ++myOrderVariables.activeOrder_id;

        let x = (myOrderVariables.activeOrder_id - 1) % (myOrderVariables.typeArr).length;

        if (myOrderVariables.activeOrder_id >= myOrderVariables.typeArr[(myOrderVariables.typeArr).length - 1].id + 1) {
                myOrderVariables.activeOrder_id = myOrderVariables.typeArr[0].id;
                myOrderVariables.activeOrder.setAttribute("data-order-id", myOrderVariables.activeOrder_id);
                myOrderVariables.activeOrder_name.textContent = `${myOrderVariables.typeArr[0].name}`;
                myOrderVariables.activeOrder_price.textContent = `$${myOrderVariables.typeArr[0].price}`;
                myOrderVariables.activeOrder_description.textContent = `${myOrderVariables.typeArr[0].description}`;
        } else {
                myOrderVariables.activeOrder.setAttribute("data-order-id", myOrderVariables.activeOrder_id);
                myOrderVariables.activeOrder_name.textContent = `${myOrderVariables.typeArr[x].name}`;
                myOrderVariables.activeOrder_price.textContent = `$${myOrderVariables.typeArr[x].price}`;
                myOrderVariables.activeOrder_description.textContent = `${myOrderVariables.typeArr[x].description}`;
        }



}

loopOnMenuSection('BreakFast');
