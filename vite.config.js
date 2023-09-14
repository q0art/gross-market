import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
	plugins: [nunjucks.default(), vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/_vars.scss";`,
			},
		},
	},
});
