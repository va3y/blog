<script context="module">
	export const load = async ({ fetch }) => {
		const postRes = await fetch(`/api/posts.json`);
		const { posts } = await postRes.json();

		return {
			props: { posts }
		};
	};
</script>

<script>
	import { siteDescription } from '$lib/config';
</script>

<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1>Blog</h1>
