var previewSlides = new Swiper(".preview-slides", {
    speed: 400,
    spaceBetween: 10,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    effect: "slide",
    spaceBetween: 0,
    slidesPerView: 5,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        920: {
            slidesPerView: 4,
        },
        750: {
            slidesPerView: 3,
        },
        540: {
            slidesPerView: 2,
        },
    },
});

var game = new Swiper(".game-swiper", {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    navigation: {
        nextEl: ".next",
        prevEl: ".prew",
    },
    effect: "slide",
    spaceBetween: 40,
    slidesPerView: 5,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        1020: {
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        780: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        520: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});

var topGame = new Swiper(".topGame-swiper", {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: 0,
    navigation: {
        nextEl: ".next",
        prevEl: ".prew",
    },
    effect: "slide",
    spaceBetween: 40,
    slidesPerView: 4,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1020: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
        },
        780: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        },
        520: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },
    },
});