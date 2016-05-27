;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		// custom scrollbar
		$('html').niceScroll();

		//custom select	
		$('.select select').selecter();

	});

	$win.on('scroll resize', function(){

		if($win.width() < 768 ){

			var OffsetTop = $('.callout').offset().top,
				scrollTop = $win.scrollTop();

			$('body').toggleClass('has-nav-fixed', scrollTop >= OffsetTop);
		}

	});

})(jQuery, window, document);
