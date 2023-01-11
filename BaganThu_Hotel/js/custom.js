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

// revel start
function reveal() {
    var reveals = document.querySelectorAll(".zoomin");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    var leftin = document.querySelectorAll(".leftin");
  
    for (var i = 0; i < leftin.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = leftin[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        leftin[i].classList.add("Leftin");
      } else {
        leftin[i].classList.remove("Leftin");
      }
    }
  

    var rightin = document.querySelectorAll(".rightin");
  
    for (var i = 0; i < rightin.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = rightin[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        rightin[i].classList.add("Rightin");
      } else {
        rightin[i].classList.remove("Rightin");
      }
    }
}
  
  window.addEventListener("scroll", reveal);
//   revel end

// date placeholder start
  // var date = new Date();
  // var year = date.getFullYear();
  // var month = date.getMonth()+1;
  // var todayDate = String(date.getDate()).padStart(2,"0");
  // var datePatten = year + '-' + month + "-" + todayDate;
  // document.getElementById("date-picker").value = datePatten;
  // document.write(datePatten);
// date placeholder end