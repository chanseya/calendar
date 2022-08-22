const mode = document.querySelector('.footer_mode');
const body = document.querySelector('body');
mode.addEventListener('click', function(e) {
    mode.classList.toggle('dark');
    mode.classList.toggle('light');
    body.classList.toggle('body_light');
});

var slider = tns({
    container: '.caledar_slider',
    items: 1,
    slideBy: 'page',
    nav: false,
    preventScrollOnTouch: 'auto',
    controls: false
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});