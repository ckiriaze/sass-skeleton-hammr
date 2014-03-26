(function($){

	window.PROJECT_NAME = {};

	var SHORT_NAME = window.PROJECT_NAME;

	$window = $(window);

	SHORT_NAME.init = function(){
		SHORT_NAME.setElements();
		SHORT_NAME.basics();
	}

	SHORT_NAME.setElements = function(){
		SHORT_NAME.elems = {};
	}
	
	SHORT_NAME.basics = function(){

	}

	SHORT_NAME.headjs = function(){

        // Load scripts in parallel but execute in order.
        head.js( 

            // definites

            // Modernizr
            'http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js',
            // 'vendor/modernizr-2.6.2.min.js',

            
            // Most Scripts Loaded here(CDN + Local), some are loaded through options

            // simple anchors
            // "plugins/simpleAnchors.js",

            // fastclick
            "plugins/fastclick.js",

            // retina.js
            // "plugins/retina.js",

            // owl
            // "plugins/owl-carousel/owl.carousel.css",
            // "plugins/owl-carousel/owl.theme.css",
            // "plugins/owl-carousel/owl.carousel.min.js",

            // mixitup
            // "plugins/jquery.mixitup.js",

            // responsive nav (styles are in _nav.scss)
            "plugins/responsive-nav/responsive-nav.min.js",

            // lazyload
            // "http://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.0/jquery.lazyload.min.js",

            // Validate
            // "http://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js?ver=1.9",

            // responsive tabs
            // "plugins/easyResponsiveTabs.js",

            function() {

                simple.init();

                // all done
                console.log('Simple scripts loaded in parallel! You\'re welcome. =) ');

            }

        );

        // if ( smooth_scroll == '1' ) {

        //     head.js(
        //         "s/plugins/smoothscroll.js"
        //     );
        // }

        // if ( infinite_scroll == '1' ) {

        //     head.js(
        //         "https://raw.github.com/paulirish/infinite-scroll/master/jquery.infinitescroll.min.js",
        //         "https://raw.github.com/paulirish/infinite-scroll/master/behaviors/manual-trigger.js",

        //         function() {
        //             if( !is_singular ) {
        //                 $('.primary .mixItUp').infinitescroll({
                            
        //                     loading: {
        //                         finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
        //                         img: "../images/ajax-loader.gif",
        //                         msgText: "<em>Loading the next set of posts...</em>",
        //                     },
        //                     debug: true,
        //                     behavior: 'twitter', // default: undefined; comment out for on scroll, set to twitter for on click
        //                     navSelector: ".pagination",
        //                     nextSelector: ".pagination a:first",
        //                     extraScrollPx: 150,
        //                     itemSelector: "article.post",
        //                     // animate: false,
        //                     bufferPx: 40
        //                 });
                        
        //             }
        //         }
        //     )
        // }

    }

	$(window).load(function() {

	});


	$(document).ready(function(){
		
		// SHORT_NAME.init();
		SHORT_NAME.headjs();

	});//close document ready

})(jQuery)