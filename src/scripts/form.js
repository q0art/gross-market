import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';

import TheForm from './../components/TheForm.vue';

export const form = () => createApp(TheForm).use(VueTheMask).mount('#form');
