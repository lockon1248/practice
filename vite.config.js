// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	resolve: {
		alias: {
			'@': '/src' // 這樣 @ 會指向 /src 資料夾
		}
	},
	plugins: [vue()]
});
