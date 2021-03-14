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
});