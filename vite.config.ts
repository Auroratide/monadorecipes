import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [sveltekit(), imagetools()]
});
