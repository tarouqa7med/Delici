
let nav = document.querySelector("nav"),
        navAnchors = nav.querySelectorAll("a"),
        canvasBtn = nav.querySelector(".canvasBtn"),
        canvas = document.querySelector(".canvas"),
        canvasContainer = canvas.querySelector(".canvas-left"),
        canvasAnchors = canvas.querySelectorAll(".canvas-left a"),
        progressBarSpan = document.querySelector(".progressBar"),
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
        ;

const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
