
/*
Author       : Theme-Family
Template Name: Batin -  Architecture  Landing Page Theme
Version      : 1.0
*/


(function($) {
    "use strict";
	
	jQuery(document).on('ready', function(){
		
		
		/*PRELOADER JS*/
		
       /*PRELOADER JS*/
			 setTimeout(function () {
            $('.atf-status').fadeOut();
        }, 3000);
		/*END PRELOADER JS*/
		
        $('body').delay(350).css({'overflow':'visible'});
		
		/*END PRELOADER JS*/
		
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		
		/*START MENU JS*/
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/
		  
		//**===================Scroll UP ===================**//

			/*-- Scroll-To-Top --*/
			$(window).scroll(function() {
				if ($(this).scrollTop() >= 100) {
					$('#back_to_top').addClass('active');
					$('.back_to_top').addClass('affix');
				} else {
					$('#back_to_top').removeClass('active');
					$('.back_to_top').removeClass('affix');
				}
			});
			
			 // swiper slider
			if ($(".atf-swiper__slider").length) {
			  $(".atf-swiper__slider").each(function () {
				let elm = $(this);
				let options = elm.data("swiper-options");
				let thmSwiperSlider = new Swiper(elm, options);
			  });
			}

			
			//**===================Counter JS ===================**//
			$('.counter-value').counterUp({
				delay: 10,
				time: 1000
			});
			
			
		/*--------------------------------------------------------------
		Porfolio isotope
		--------------------------------------------------------------*/
 
			// image loaded portfolio init
		
				$('.atf-portfolio-grid').imagesLoaded(function() {
					$('.portfolio-filter').on('click', 'button', function() {
						var filterValue = $(this).attr('data-filter');
						$grid.isotope({
							filter: filterValue
						});
					});
					var $grid = $('.atf-portfolio-grid').isotope({
						itemSelector: '.grid-item',
						percentPosition: true,
						masonry: {
							columnWidth: '.grid-item',
						}
					});
				});        
					
				// portfolio Filter
				$('.portfolio-filter button').on('click', function(event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			
		//**===================END Porfolio isotope ===================**//	
		
				//**===================Magnific Popup ===================**//

				$('.image-popup').magnificPopup({
					type: 'image',
					callbacks: {
						beforeOpen: function() {
						   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated jackInTheBox');
						}
					},
					gallery: {
						enabled: true
					}
				});
		//**===================END Magnific Popup ===================**//
		
			//  POPUP VIDEO
			$('.popup-video').magnificPopup({
				type: 'iframe',
			});
			
			
		
			/*START Testimonials LOGO*/
			$("#testimonial-slider").owlCarousel({
				margin:3,
				nav:false,
				loop:true,
				dots:true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:2
					},
					1000:{
						items:2
					}
				}
			});
			
		/*END Testimonials LOGO*/
		
		/* --------------------------------------------------------
            Blog Slider One
        --------------------------------------------------------- */
        $('.atf_blog-slider-one-active').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

			/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:10,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/

			// mailchamp
			$('#mc-form').ajaxChimp({
				url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
				/* Replace Your AjaxChimp Subscription Link */
		}); 
		
		 /*--------------------------------------------------------------
		START PARALLAX JS
      --------------------------------------------------------------*/	
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
	
	/*--------------------------------------------------------------
		END PARALLAX JS
      --------------------------------------------------------------*/	
		
		

    }); 
    
})(jQuery);

