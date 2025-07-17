
(function($) {
        "use strict";


        $(window).on('load', function() {
            $('.loader-page').delay('300').fadeOut(1000);
			
			var $portfolioGrid = $('.portfolio-filter').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        $('.filter-gallery').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $portfolioGrid.isotope({
                filter: filterValue
            });
        });
        });


        $('.slider-1').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            margin: 0,
            nav: true,
            navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


    




        $(window).on('scroll', function() {
     
            var scroll1 = $(window).scrollTop();
            if (scroll1 < 100) {
                $(".transperant-head,.bottom-head").removeClass("fixed-nav");
            } else {
                $(".transperant-head,.bottom-head").addClass("fixed-nav");
            }


            if ($(this).scrollTop() > 800) {
                $(".scroll-btn").addClass("opacity-10"); 
            } else {
                $(".scroll-btn").removeClass("opacity-10"); 
            }
        });


        $(".scroll-btn").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 800);
        });

        $('select').niceSelect(); 

        new WOW().init();


        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
        });
    }

)(jQuery); // End jQuery