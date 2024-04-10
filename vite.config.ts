import { sveltekit } from "@sveltejs/kit/vite"
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown"
import { imagetools } from "vite-imagetools"
import { defineConfig } from "vite"

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [mdPlugin({ mode: [Mode.HTML] }), sveltekit(), imagetools()],
})
