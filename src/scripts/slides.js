import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const slides = () => {
	const heroSlide = new Swiper('.hero__slides', {
		modules: [Navigation],
		speed: 300,
		spaceBetween: 100,
		slidesPerView: 1,
		navigation: {
			prevEl: '.hero__slide-btn--prev',
			nextEl: '.hero__slide-btn--next',
		},
	});

	const vacanciesSlide = new Swiper('.vacancies__slides', {
		modules: [Navigation],
		speed: 300,
		spaceBetween: 30,
		slidesPerView: 'auto',
		navigation: {
			prevEl: '.vacancies__nav-btn--prev',
			nextEl: '.vacancies__nav-btn--next',
		},
		breakpoints: {
			375: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 4,
			},
		},
	});
};
