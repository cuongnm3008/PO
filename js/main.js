

$(document).ready(function () { 
    $("#slideshow-1").owlCarousel({
        center: true,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout : 3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    });
});




// Cảm nhận của khách hàng
$(document).ready(function () { 
    $("#slideshow-2").owlCarousel({
              center: true,
              loop: true,
              dots: true,
              autoplay: true,
              autoplayTimeout : 3000,
              responsive: {
                  0: {
                      items: 1,
                  },
                  900: {
                      items: 2,
                  },
                  1200: {
                      items: 3,
                  },
              },
      });
});

// Banner slideshow
$(document).ready(function () { 
    $("#banner").owlCarousel({
              center: true,
              loop: true,
              dots: false,
              nav: false,
              autoplay: true,
              autoplayTimeout : 3000,
              items: 1,
      });
});


 