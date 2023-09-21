export const media = () => {
	const btn = document.querySelector('.media__btn');
	const content = document.querySelector('.media__content');

	const createPosts = (count) => {
		return Array(count)
			.fill(0)
			.map(() => {
				const post = document.createElement('li');
				post.classList.add('media__content-item', 'is-active');
				return post;
			});
	};

	btn.addEventListener('click', () => {
		if (!btn.classList.contains('is-active')) {
			const newPosts = createPosts(8);
			newPosts.forEach((item) => {
				content.appendChild(item);
			});

			btn.textContent = 'скрыть';
			btn.classList.add('is-active');
		} else {
			const newPosts = content.querySelectorAll(
				'.media__content-item.is-active'
			);

			newPosts.forEach((item) => {
				item.remove();
			});

			btn.textContent = 'показать ещё';
			btn.classList.remove('is-active');

			content.scrollIntoView();
		}
	});
};
