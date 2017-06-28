function mobileMenu(e) {
    $(".menu").toggleClass("nav--mobile");
        $(this).toggleClass("close");
        e.stopPropagation();
        e.preventDefault();
}

function buttonClick(e) {
    $(".nd-site-header__nav-trigger").trigger("click");
    e.stopPropagation();
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
        $('.nd-site-footer__social').removeClass("six columns"); // change the Skeleton class
        $('.nd-site-footer__contact').removeClass("six columns");
    }

    if ($(".menu").hasClass("nav--mobile")) {
        $(document).on("click", "body", buttonClick);
    }
}

$(document).ready(function(){
    main();
});

$(window).resize(function() {
    main();
});