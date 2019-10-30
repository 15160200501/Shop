$(function () {

    initTopSwiper();

    initSwiperMenu();

})

function initTopSwiper() {
    var swiper = new Swiper("#topSwiper", {
        loop: true,
        autoplay: true,
        pagination: '.swiper-pagination',
    });
}


function initSwiperMenu() {
    var swiper = new Swiper("#swiperMenu", {
        slidesPerView: 3
    });
}