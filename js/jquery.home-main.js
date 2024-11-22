$(document).ready(function()
        /* ==================== Pre Loader ==================== */
        {setTimeout(function() {
            $('#loading').fadeOut('slow', function() {});
        }, 300);		
		
		/* ==================== Live tog Demo Can Remove ==================== */      
		
        $('#live-tog').click(function() {
		  $('body').toggleClass("scroller-menu-on");
		    $('body').toggleClass("scroller-menu-off");
		});
		
		$('.wft-btn').click(function() {
		  $('body').toggleClass("live-menu-on");
		});
		
        /* ==================== Home Slider ==================== */
		var owl = $('.home-slider');
            owl.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
			nav:true,
			slideSpeed: 300,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
			responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
          }
        });
		
		/* ==================== Service Slider ==================== */ 
		var owls = $('.services-slider');
            owls.owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
			nav: false,
			slideSpeed: 1200,
			animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1300:{
                items:2
            }
          }
        });

        /* ==================== Top bar height effect one page scroller layout ==================== */      
        $(window).bind("scroll", function() {
            if ($(this).scrollTop() > 300) {
                $(".top").removeClass("tb-large").addClass("tb-small animated fadeInDown");
            } else {
                $(".top").removeClass("tb-small animated fadeInDown").addClass("tb-large");
            }
        });
		
        /* ==================== Scroller Menu toggle ==================== */
        $('#toggle').click(function(e) {
            e.stopPropagation();
        }); 
		$('html').click(function(e) {
            if (!$('.toggle').is($(e.target))) {
                $('#toggle').prop("checked", false);
            }
        });

        /* ==================== Multi Menu toggle ==================== */
        $('.hamburger').click(function() {
            $('body').toggleClass("menu-open");
        });
		
		/* ==================== Number Counters ==================== */
        jQuery(document).ready(function( $ ) {
          $('.counter').counterUp({
            delay: 10,
            time: 5000
          });
        });
		
        /* ==================== Gallery Mobile ==================== */
      	$('.imageGallery').each(function(){
      	  if ($(this).children('div').length <= 25) {
      	    $(this).children('div').addClass('fullwidth-mobile');
      	  }
      	});
		
		/* ==================== Testimonial Slider ==================== */ 
		var owls = $('.wft-testimonial-slider');
            owls.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
			nav: false,
			dot: false,
			slideSpeed: 1200,
			animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        /* ==================== Scrollto ==================== */

		$(".back-top").hide();

        // fade in #scroll-top
        $(window).scroll(function () {
          if ($(this).scrollTop() > 350) {
            $('.back-top').fadeIn();
           } else {
            $('.back-top').fadeOut();
           }
        });
	
        $(function() {
            $('.scrollto').bind('click.scrollto', function(e) {
                e.preventDefault();
                var target = this.hash,
                    $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 0
                }, 900, 'swing', function() {
                    window.location.hash = target;
                });
            });
        });

        /* ==================== Equal height ==================== */
        $('.equal').children('.wft-col').equalizeHeight(); $(window).resize(function() {
            $('.equal').children('.wft-col').equalizeHeight();
            setTimeout(function() {
                $('.equal').children('.wft-col').equalizeHeight();
            }, 100);
            setTimeout(function() {
                $('.equal').children('.wft-col').equalizeHeight();
            }, 400);
            setTimeout(function() {
                $('.equal').children('.wft-col').equalizeHeight();
            }, 1400);
            setTimeout(function() {
                $('.equal').children('.wft-col').equalizeHeight();
            }, 2400);
        }); setTimeout(function() {
            $(window).trigger('resize scroll');
        }, 1000); setTimeout(function() {
            $(window).trigger('resize scroll');
        }, 3000); $(window).load(function() {
            $('.equal').children('.wft-col').equalizeHeight();
            $(window).trigger('resize scroll');
            setTimeout(function() {
                $('.equal').children('.wft-col').equalizeHeight();
            }, 1000);
            setTimeout(function() {
                $('.equal').children('.wft-col').equalizeHeight();
            }, 1300);
        });
        
		/* ==================== weebly form placeholders ==================== */
 	    jQuery(function(){
	
		var $ = jQuery;
    		function givePlacholders(){	
			$('.wsite-form-container input[type=text], .wsite-form-container textarea').each(function(){		
				var labelText = $(this).parents('.wsite-form-field:not(.wsite-phone-field)').children('label').text(),			
					subLabelText = $(this).next('.wsite-form-sublabel').text(),
					$that = $(this);
				$that.attr('placeholder', subLabelText + ' ' + labelText);			
				$that.parents('.wsite-form-field:not(.wsite-phone-field)').children('label').hide();
				$that.next('.wsite-form-sublabel').hide();	
				$that.on('change', function(){
					if ( $that.val() != '' ) {
						$that.addClass('wft-nbg');
					}else{
						$that.removeClass('wft-nbg');
					}
				});
				
			});
		}

		givePlacholders();
	
	    });
        
	
        /* ==================== one page nav ==================== */
        $('#nav').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 1200
        });
		
		//Wow
        new WOW().init();
		
	});
	