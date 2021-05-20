$(document).ready(function () {
    const owl1 = $("#first-stage").owlCarousel({
        dots: false,
        nav: false,
        items: 1,
        margin: 0,
        mouseDrag: false,
        touchDrag: false,
        autoWidth:false,

    });
    $('.first-stage-next').click(function () {
        owl1.trigger('next.owl.carousel');
    });

    $('.first-stage-prev').click(function () {
        owl1.trigger('prev.owl.carousel', [300]);
    });
    const owl2 = $("#review").owlCarousel({
        dots: true,
        nav: false,
        items: 1,
    });
});