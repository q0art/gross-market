import { slides } from './slides';
import { popup } from './popup';
import { scroll } from './scroll';
import { media } from './media';
import { form } from './form';

const app = () => {
	slides();
	popup.init();
	scroll();
	media();
	form();
};

app();
