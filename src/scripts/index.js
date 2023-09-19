import { media } from './media';
import { popup } from './popup';
import { scroll } from './scroll';
import { slides } from './slides';
import { createApp } from 'vue';

import TheForm from './../components/TheForm.vue';

const app = () => {
	slides();
	popup();
	scroll();
	media();

	createApp(TheForm).mount('#form');
};

app();
