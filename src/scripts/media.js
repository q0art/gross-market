export const media = () => {
	const btn = document.querySelector('.media__btn');
	const content = document.querySelectorAll('.media__content-item');

	btn.addEventListener('click', () => {
		content.forEach((item) => {
			item.classList.toggle('is-active', !item.classList.contains('is-active'));
		});

		btn.textContent = content[0].classList.contains('is-active')
			? 'скрыть'
			: 'показать ещё';
	});
};
