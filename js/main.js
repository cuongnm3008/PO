$(document).ready(function () { 
    $("#slideshow-1").owlCarousel({
        center: true,
        loop: true,
        // dots: false,
        // nav : true,
        // autoplay: true,
        // autoplayTimeout : 3000,
        responsive: {
            0: {
                items: 1,
                center: false,
                dots: true,
                nav : false,
            },
            768: {
                items: 2,
                center: true,
                dots: true,
                nav : false,
            },
            1050: {
                items: 2,
                center: true,
                dots: true,
                nav : false,
            },
            1200: {
                items: 2,
                center: true,
                dots: false,
                nav : true,
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
            //   autoplay: true,
            //   autoplayTimeout : 3000,
              responsive: {
                  0: {
                      items: 1,
                  },
                  768: {
                    center: false,
                    items: 2,
                  },
                  1000: {
                    center: false,
                    items: 3,
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
            //   autoplay: true,
            //   autoplayTimeout : 3000,
              items: 1,
      });
});

// Phone menu
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $('#wapper-phone-menu').attr('style', 'width: 450px ');
    });
    $("#closePhoneMenu").click(function () {
        $('#wapper-phone-menu').attr('style', 'width: 0px ');
    });
});

// Back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backTop').fadeIn();
        } else {
            $('#backTop').fadeOut();
        }
    });
});

$('#backTop').click(function (e) {
    $('html, body').animate({
        scrollTop: 0
    }, 0);
})



//Tab menu Navigation for desktop
$(document).ready(function(){

    //reset icon 
    $('.tab_navigation li .icon .light').css('display','none');
    $('.tab_navigation li .icon .dark').css('display','inline-block');

    // set defaut active for tab navigation first 
    $('.tab_container:first').show();
    $('.tab_navigation li:first').addClass('active');
    $('.tab_navigation .item.active .light').css('display','inline-block');
    $('.tab_navigation .item.active .dark').css('display','none');

    // set defaut active for tab navigation was clicked        
    $('.tab_navigation li').click(function(event){
        index  = $(this).index();
        $('.tab_navigation li').removeClass('active');
        $(this).eq(0).addClass('active');
        $('.tab_container').hide();
        $('.tab_container').eq(index).show();
        
        //reset icon when click
        $('.tab_navigation li .icon .light').css('display','none');
        $('.tab_navigation li .icon .dark').css('display','inline-block');

        // active for navigation clicked
        $('.tab_navigation .item.active .light').css('display','inline-block');
        $('.tab_navigation .item.active .dark').css('display','none');
    });
});

//Tab menu Navigation for mobile
$(document).ready(function(){

     //reset icon 
     $('#tab_nav_mobile li .icon .light').css('display','none');
     $('#tab_nav_mobile li .icon .dark').css('display','inline-block');
 
     // set defaut active for tab navigation first 
    //  $('.tab_content:first').show();
    //  $('#tab_nav_mobile li:first').addClass('active');
    //  $('#tab_nav_mobile .item.active .light').css('display','inline-block');
    //  $('#tab_nav_mobile .item.active .dark').css('display','none');

 
     // set defaut active for tab navigation was clicked        
     $('#tab_nav_mobile li').click(function(event){
         index  = $(this).index();

         if($('#tab_nav_mobile li').hasClass("active")){
            $('.tab_content').hide();
            $('#tab_nav_mobile li').removeClass('active');
             //reset icon when clicked
            $('#tab_nav_mobile li .icon .light').css('display','none');
            $('#tab_nav_mobile li .icon .dark').css('display','inline-block');
         }
         else{
            $('#tab_nav_mobile li').removeClass('active');
            $(this).eq(0).addClass('active');
            $('.tab_content').hide();
            $('.tab_content').eq(index/2).show();
            
            //reset icon when click
            $('#tab_nav_mobile li .icon .light').css('display','none');
            $('#tab_nav_mobile li .icon .dark').css('display','inline-block');
    
            // active for navigation clicked
            $('#tab_nav_mobile .item.active .light').css('display','inline-block');
            $('#tab_nav_mobile .item.active .dark').css('display','none');
         }
     });

});

