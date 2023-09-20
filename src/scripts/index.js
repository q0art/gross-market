import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';

import { media } from './media';
import { popup } from './popup';
import { scroll } from './scroll';
import { slides } from './slides';

import TheForm from './../components/TheForm.vue';

const app = () => {
	slides();
	popup();
	scroll();
	media();

	createApp(TheForm).use(VueTheMask).mount('#form');
};

app();
