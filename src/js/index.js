
$(document).ready(function () {

	//Header BURGER
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
	//Adaptive SlickSlider 
	$(window).on('resize', function (e) {

	var init = $(".news__wrapper").data('init-slider');

	if (window.innerWidth < 769) {
		if (init != 1) {			
			$('.news__wrapper').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,


			}).data({ 'init-slider': 1 });
		}
	}
	
	else {		
		if (init == 1) {			
			$('.news__wrapper').slick('unslick').data({ 'init-slider': 0 });
		}
	}
	}).trigger('resize');
})

// Counter

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
	counter.innerHTML = "0";
	const updateCounter = () => {
		const target = +counter.getAttribute("data-target")
		const c = +counter.innerText;
		if (c < target) {
			counter.innerText = c + 1;
			setTimeout(updateCounter, 1);
		} else{
			counter.innerText = target;
		}
	};
	updateCounter();
})

