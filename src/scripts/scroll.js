import { throttle } from './helpers';

export const scroll = () => {
	const popup = document.querySelector('.popup');
	const title = popup.querySelector('.popup__header-title');

	popup.addEventListener(
		'scroll',
		throttle(() => {
			if (popup.scrollTop >= 200) {
				title.classList.add('is-active');
			} else if (popup.scrollTop <= 10) {
				title.classList.remove('is-active');
			}
		}, 200)
	);
};
