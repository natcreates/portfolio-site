var mobileMenu = function() {
    
    $(document).on("click", ".nd-site-header__nav-trigger", function(){
        $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
    })

    if($(".nd-site-header__nav-trigger").hasClass("close")) {
        $(document).on("click", "body", function() {
            $(this).trigger("click");
        })
    }
}

var main = function() {
    //WebFont.load({
    //    google: {
    //      families: ['Yellowtail', 'Source Sans Pro:400,600']
     //   }

     //   custom: {
     //       families: ['League Gothic']
     //   }
    //});

    var viewport = $(window).width();

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


    if (viewport < 750) {
		$('.nd-site-footer__social').removeClass("five columns"); // change the Skeleton class
		$('.nd-site-footer__contact').removeClass("five columns");
        $('.nd-site-footer__detail').removeClass("two columns");
	}

}

$(document).ready(function(){
	main();
    mobileMenu();
});

$(window).resize(function() {
    main();
    mobileMenu()
});