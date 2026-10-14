
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

let nav = document.querySelector("nav"),
        navAnchors = nav.querySelectorAll("a"),
        canvasBtn = nav.querySelector(".canvasBtn"),
        canvas = document.querySelector(".canvas"),
        canvasContainer = canvas.querySelector(".canvas-left"),
        canvasAnchors = canvas.querySelectorAll(".canvas-left a"),
        progressBarSpan = document.querySelector(".progressBar"),
        returnToTopButton = document.querySelector(".returnToTopBtn"),
        sections = document.querySelectorAll("section"),
        oldScroll = window.scrollY,
        carousels = document.querySelector(".carousels"),
        carousel_items = carousels.querySelectorAll(".myCarousel-item"),
        prevBtn = document.querySelector(".prev"),
        nextBtn = document.querySelector(".next"),
        carouselButtons = document.querySelector(".carouselBtns"),
        carouselBtnsArr = document.querySelectorAll(".carouselBtns button"),
        bookNowBtn = document.querySelector(".bookNow"),
        modal = document.querySelectorAll(".Modal"),
        modalContainer = document.querySelectorAll(".Modal .container"),
        sound = document.querySelector(".sound"),
        openFoodSectionAnchors = document.querySelectorAll("li .openFoodSection");



function orderVariables() {

        let activeOrder = document.querySelector(".order-data"),
                activeOrder_type = activeOrder.getAttribute("data-order-type"),
                activeOrder_id = activeOrder.getAttribute("data-order-id"),
                activeOrder_name = activeOrder.querySelector("h1"),
                activeOrder_image = activeOrder.querySelector("img.order-image"),
                activeOrder_imageScr = activeOrder_image.getAttribute("src"),
                activeOrder_price = activeOrder.querySelector("p.price"),
                activeOrder_description = activeOrder.querySelector("p.description"),
                typeArr = window[activeOrder_type];

        return {
                activeOrder,
                activeOrder_type,
                activeOrder_id,
                activeOrder_name,
                activeOrder_image,
                activeOrder_imageScr,
                activeOrder_price,
                activeOrder_description,
                typeArr
        }
}