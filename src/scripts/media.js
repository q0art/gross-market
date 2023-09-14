export const media = () => {
	const btn = document.querySelector('.media__btn');
	const content = document.querySelectorAll('.media__content-item');
	let open = true;

	btn.addEventListener('click', () => {
		if (open) {
			content.forEach((item) => {
				item.classList.add('is-active');
			});

			btn.textContent = 'скрыть';
			open = false;
		} else {
			content.forEach((item) => {
				item.classList.remove('is-active');
			});

			btn.textContent = 'показать ещё';
			open = true;
		}
	});
};
