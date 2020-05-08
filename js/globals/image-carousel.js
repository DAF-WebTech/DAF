/*==---------------------------------------------------------====
    Business Pages - Image Carousel
====---------------------------------------------------------==*/
$( document ).ready(function() {
    $('.image-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        cssEase: 'linear'
    });
    $('.image-carousel').show();
});