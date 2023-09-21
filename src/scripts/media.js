export const media = () => {
	const btn = document.querySelector('.media__btn');
	const content = document.querySelector('.media__content');
	let isActive = false;

	// что создается в функции createItem? да что угодно
	// лучше назови более понятно, например createNewPosts
	const createItem = () => {
		const NewItems = [];
		// не знаю как для тебя, но для меня for всегда выглядит подозрительно
		// for (let i = 0; i < 8; i++) {
		// 	const item = document.createElement('li');
		// 	item.classList.add('media__content-item', 'is-active');
		// 	NewItems.push(item);
		// }
		// return NewItems;
		// смотри как лучше делать такое

		return Array(8)
				.fill(0)
				.map(() => {
					const item = document.createElement('li');
					item.classList.add('media__content-item', 'is-active')
					return item;
				});
	};

	btn.addEventListener('click', () => {
		// зацепись лучше за класс is-active
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
