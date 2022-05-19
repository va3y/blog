<script context="module">
</script>

<script>
	import '$lib/assets/css/app.css';
	import { currentPage } from '$lib/assets/js/store';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import ArrowLeft from '$lib/components/svg/ArrowLeft.svelte';
	import DarkmodeToggle from '$lib/components/DarkmodeToggle.svelte';
</script>

<div class="w-full h-full min-h-screen min-w-full relative">
	<div
		class="flex w-full justify-between items-center py-4 px-6  {$page.url.pathname !== '/' &&
			'bg-stone-400 dark:bg-stone-900 backdrop-filter backdrop-blur-md sticky'} lg:bg-transparent lg:dark:bg-transparent z-10 bg-opacity-50  lg:backdrop-blur-0 top-0"
	>
		{#if $page.url.pathname !== '/'}
			<a href="/" class="font-semibold block flex items-center text-rose-600">
				<ArrowLeft class="h-6 mr-2 aspect-square" /> Go back
			</a>
		{/if}

		<DarkmodeToggle
			class="ml-auto {$page.url.pathname === '/' && 'absolute top-4 right-4 md:static'}"
		/>
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

<style global lang="postcss">
	body {
		@apply bg-stone-100 dark:bg-stone-800 dark:text-stone-300 text-stone-800 transition-colors antialiased 
    selection:bg-rose-300 dark:selection:bg-rose-900;
	}

	.prose table {
		@apply border-collapse;
	}

	.prose a {
		@apply text-rose-600 !important;
	}
</style>
