<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script context="module">
	export const load = async ({ url, fetch }) => {
		/**
		 * This fetch call is not used in this file, but the route won't be pre-rendered
		 * and routed properly unless it's called inside a `load` function. ¯\_(ツ)_/¯
		 * */
		const rss = await fetch(`/api/rss.xml`);

		return {
			props: {
				path: url.pathname
			}
		};
	};
</script>

<script>
	import '$lib/assets/scss/global.scss';
	import '$lib/assets/css/app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { prefetch } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Callout from '$lib/components/Callout.svelte';
	import ArrowLeft from '$lib/components/svg/ArrowLeft.svelte';

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	export let path;

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs#modules-$app-navigation
	 *
	 * Any route added in src/lib/config.js will be prefetched automatically. You can add your
	 * own prefetch() calls here, too.
	 **/
	onMount(() => {
		navItems.forEach((item) => prefetch(item.route));
	});
</script>

<!-- 
  The below markup is used on every page in the site. The <slot> is where the page's
  actual contents will show up.
-->
<!-- <div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key path}
		<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
			<slot />
		</main>
	{/key}
	<Footer />
</div> -->
<div class="w-full h-full min-h-screen min-w-full">
	<div
		class="flex w-full justify-between items-center py-4 px-6 sticky bg-stone-400 dark:bg-stone-900 lg:bg-transparent lg:dark:bg-transparent z-10 bg-opacity-50 backdrop-filter backdrop-blur-md md:backdrop-blur-0 top-0"
	>
		{#if $page.url.pathname !== '/'}
			<a href="/" class="font-semibold block flex items-center">
				<ArrowLeft class="h-6 mr-2 aspect-square" /> Go back
			</a>
		{/if}

		<!-- <DarkmodeToggle class="ml-auto" /> -->
	</div>

	<div class="px-4 max-w-3xl mx-auto sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl space-y-10 relative">
		<slot />
	</div>
</div>
