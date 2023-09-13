import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const popup = () => {
	const popup = document.querySelector('.popup');
	const popupContainer = document.querySelector('.popup__container');

	document.addEventListener('click', ({ target }) => {
		const popupOpen = target.closest('.footer__bottom-confidentiality');
		if (!popupOpen) return;

		popup.style.display = 'flex';
		disableBodyScroll(popupContainer);
	});

	popup.addEventListener('click', ({ target }) => {
		const popupClose = target.closest('.popup__header-btn');
		if (!popupClose) return;

		popup.style.display = 'none';
		enableBodyScroll(popupContainer);
	});

	popup.addEventListener('click', ({ target }) => {
		const popupOpen = target.closest('.popup__container');
		if (!popupOpen) {
			popup.style.display = 'none';
			enableBodyScroll(popupContainer);
		}
	});
};
