
var WebFont = require('webfontloader');

var mobile = function() {
    $(".nd-site-header__nav-icon").click(function(e){
        $(".menu").toggleClass("menu--mobile");
        $(this).toggleClass(".close");
    })
}

var fontLoader = function() {
    WebFont.load({
        google: {
          families: ['Yellowtail', 'Source Sans Pro:400,600']
        }

        custom: {
            families: ['League Gothic']
        }
    });
}

var main = function() {

	if (Modernizr.touch) {
        // handle the adding of hover class when clicked
        $("figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".mouse-tap-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("hover")) {
                $(this).removeClass("hover");
            }
        });
    } else {

	// handle the mouseenter functionality
    $("figure").mouseenter(function(){
        $(this).addClass("hover");
    })
        // handle the mouseleave functionality
        $(".mouse-tap-overlay").mouseleave(function(){
            $("figure").removeClass("hover");
        });
    }

    var viewport = $(window).width();
    console.log(viewport);

    if (viewport < 800) {
		$('.social-media').removeClass("five columns"); // change the Skeleton class
		$('.contact').removeClass("five columns");
	}

    mobile();
    fontLoader();

}

$ (document).ready(function(){
	main();
});

$(window).resize(main);