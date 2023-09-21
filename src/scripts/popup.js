import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const popup = {
	init() {
		document.addEventListener('click', ({ target }) => {
			const mainFooterBtn = target.closest('.footer__bottom-confidentiality');
			if (mainFooterBtn) {
				this.open();
			}

			const popupHeaderBtn = target.closest('.popup__header-btn');
			if (popupHeaderBtn) {
				this.close();
			}

			const popupContainer = target.closest('.popup__container');
			if (!popupContainer && !mainFooterBtn) {
				this.close();
			}
		});
	},
	open() {
		const popup = document.querySelector('.popup');
		const popupContainer = document.querySelector('.popup__container');

		popup.style.display = 'flex';
		disableBodyScroll(popupContainer);
	},
	close() {
		const popup = document.querySelector('.popup');
		const popupContainer = document.querySelector('.popup__container');

		popup.style.display = 'none';
		enableBodyScroll(popupContainer);
	},
};
