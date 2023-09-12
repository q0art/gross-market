import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const slider = () => {
	const heroSlider = new Swiper('.hero__slides', {
		modules: [Navigation],
		speed: 400,
		slidesPerView: 1,
		spaceBetween: 40,
		navigation: {
			prevEl: '.hero__slide-btn--prev',
			nextEl: '.hero__slide-btn--next',
		},
		on: {
			slideChangeTransitionStart: function () {
				document
					.querySelector('.hero__slide-btn--prev')
					.classList.remove('outside-slide');
				document
					.querySelector('.hero__slide-btn--next')
					.classList.remove('outside-slide');

				if (this.isBeginning) {
					document
						.querySelector('.hero__slide-btn--prev')
						.classList.add('outside-slide');
				}
				if (this.isEnd) {
					document
						.querySelector('.hero__slide-btn--next')
						.classList.add('outside-slide');
				}
			},
		},
	});
};
