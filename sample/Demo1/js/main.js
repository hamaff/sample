;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		// nav animation
		$('.icon-menu').on('click', function(){
			$('.nav').slideToggle();
			$('.header').toggleClass('nav-opened');
		});
	});

	$win.on('load', function(){

		// slider
		$('.flexslider').flexslider({
			controlNav: false,
			directionNav: false
		});
	});
})(jQuery, window, document);
