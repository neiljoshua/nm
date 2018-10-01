(function ($, root, undefined) {

	$(document).ready(function(){
		$('.slider').slick({
				autoplay: true,
				dots: true,
				infinite: true,
				speed: 1500,
				fade: true,
				cssEase: 'linear'
		 });
	});

})(jQuery, this);
