//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(), 

	kit: {
		// use adapter-static to build files!
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : '/conways-game-of-life-svelte'
		}
	}
};

export default config;
