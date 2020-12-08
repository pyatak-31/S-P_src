const myImageSlider = new Swiper('.image-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},


	simulateTouch: true,

	touchRatio: 1,

	touchAngle: 45,

	grabCursor: false,

	slideToClickedSlide: false,

	hashNavigation: false,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown:true,
	},

	autoHeight: false,
	
	slidesPerView: 1,

	watchOverflow: false,

	slidesPerGroup: 1,

	slidesPerColumn: 1,

	loop: false,

	freemode: false,

	autoplay: {
		delay: 20000,

		stopOnLastSlide: false,

		disableOnInteraction: false,
	},

	speed: 1500,

	effect: 'coverflow',

	breakpoints: {
		320: {},
		567: {}
	}
});

//При наведении мыши остановится
let sliderBlock = document.querySelector('.image-slider');
sliderBlock.addEventListener("mouseleave", function () {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 3000;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener('mouseenter', function () {
	myImageSlider.autoplay.stop();
});