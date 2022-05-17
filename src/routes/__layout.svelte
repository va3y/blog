<script context="module">
	export const load = async ({ url }) => {
		/**
		 * This fetch call is not used in this file, but the route won't be pre-rendered
		 * and routed properly unless it's called inside a `load` function. ¯\_(ツ)_/¯
		 * */

		return {
			props: {
				path: url.pathname
			}
		};
	};
</script>

<script>
	import '$lib/assets/css/app.css';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { prefetch } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import ArrowLeft from '$lib/components/svg/ArrowLeft.svelte';

	export let path;

	$: currentPage.set(path);

	onMount(() => {
		navItems.forEach((item) => prefetch(item.route));
	});
</script>

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

	<main
		id="main"
		tabindex="-1"
		in:fade={{ delay: 150, duration: 150 }}
		out:fade={{ duration: 100 }}
		class="px-4 max-w-3xl mx-auto sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl space-y-10 relative"
	>
		<slot />
	</main>
</div>
