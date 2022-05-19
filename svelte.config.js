import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			postcss: true,
			defaults: {
				style: 'postcss'
			}
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
			highlight: {}
		})
	],

	kit: {
		adapter: vercel(),
		prerender: {
			default: true
		}
	}
};

export default config;
