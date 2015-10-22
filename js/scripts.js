var main = function() {

	if (Modernizr.touch) {
        // handle the adding of hover class when clicked
        $("figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".overlay").click(function(e){
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
        $(".overlay").mouseleave(function(){
            $("figure").removeClass("hover");
        });
    }

	var viewport = $(window).width();
	console.log(viewport);

	if (viewport < 800) {
		$('.social-media').removeClass("five columns"); // change the Skeleton class
		$('.contact').removeClass("five columns");
	}

}

$ (document).ready(function(){
	// $('.pull').click(onClick); // passing the function onClick. onClick() would be calling and passing return value
	main();
});

$(window).resize(main);