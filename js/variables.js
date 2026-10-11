
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
        carouselButtons = document.querySelector(".carouselBtns");
        carouselBtnsArr = document.querySelectorAll(".carouselBtns button"),
        bookNowBtn = document.querySelector(".bookNow"),
        sound = document.querySelector(".sound");
