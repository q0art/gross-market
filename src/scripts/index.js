import { popup } from './popup';
import { scroll } from './scroll';
import { slides } from './slides';

const app = () => {
	slides();
	popup();
	scroll();
};

app();
