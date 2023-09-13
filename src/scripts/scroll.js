export const scroll = () => {
	const popup = document.querySelector('.popup');
	const header = popup.querySelector('.popup__header');

	popup.addEventListener('scroll', () => {
		const currentScroll = popup.scrollTop;
		if (currentScroll >= 300) {
			header.style.display = 'flex';
		} else {
			header.style.display = 'none';
		}
	});
};
