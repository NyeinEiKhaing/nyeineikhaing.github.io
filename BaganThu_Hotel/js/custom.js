// slide start
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
// slide end

// swap image start
$(document).ready(function () {
    $('.swap_img .slides > img').click(function(){
        var $smallImages = $(this).attr('src');
        $('.big_screen > img').attr('src',$smallImages)
    });
});
// swap image end