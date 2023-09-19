export const media = () => {
	const btn = document.querySelector('.media__btn');
	const content = document.querySelector('.media__content');
	let isActive = false;

	const createItem = () => {
		const NewItems = [];
		for (let i = 0; i < 8; i++) {
			const item = document.createElement('li');
			item.classList.add('media__content-item', 'is-active');
			NewItems.push(item);
		}
		return NewItems;
	};

	btn.addEventListener('click', () => {
		if (!isActive) {
			const newItems = createItem();
			newItems.forEach((item) => {
				content.appendChild(item);
			});

			btn.textContent = 'скрыть';
			isActive = true;
		} else {
			const newItems = content.querySelectorAll(
				'.media__content-item.is-active'
			);
			newItems.forEach((item) => {
				item.remove();
			});

			btn.textContent = 'показать ещё';
			isActive = false;
		}
	});
};
