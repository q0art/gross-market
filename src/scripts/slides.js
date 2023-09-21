import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const slides = () => {
	const heroSlide = new Swiper('.hero__slides', {
		modules: [Navigation],
		speed: 400,
		spaceBetween: 200,
		slidesPerView: 1,
		navigation: {
			prevEl: '.hero__slide-btn--prev',
			nextEl: '.hero__slide-btn--next',
		},
	});

	const vacanciesSlide = new Swiper('.vacancies__slides', {
		modules: [Navigation],
		speed: 300,
		spaceBetween: 0,
		slidesPerView: 'auto',
		navigation: {
			prevEl: '.vacancies__nav-btn--prev',
			nextEl: '.vacancies__nav-btn--next',
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 32,
			},
		},
	});
};
