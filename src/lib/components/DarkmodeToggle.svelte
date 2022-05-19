<script>
	import { onMount } from 'svelte';
	import LightBulbIcon from './svg/LightBulbIcon.svelte';
	import MoonIcon from './svg/MoonIcon.svelte';
	const STORAGE_KEY = 'theme';

	let theme;

	const applyTheme = () => {
		const currentTheme =
			localStorage.getItem(STORAGE_KEY) ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		theme = currentTheme;
		if (currentTheme === 'dark') {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}
	};

	const toggleTheme = () => {
		const newTheme = localStorage.getItem(STORAGE_KEY) === 'dark' ? 'light' : 'dark';
		localStorage.setItem(STORAGE_KEY, newTheme);
		applyTheme();
	};

	onMount(() => {
		applyTheme();
	});
</script>

<svelte:head>
	<script>
		const currentTheme =
			localStorage.getItem('theme') ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

		if (currentTheme === 'dark') {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			localStorage.setItem('theme', 'light');
		}
	</script>
</svelte:head>

<template>
	<button
		class="h-8 w-8 {$$restProps.class || ''}"
		on:click={toggleTheme}
		title="Light/dark mode toggle"
	>
		<MoonIcon class="{theme === 'light' ? '' : 'hidden'} w-8 h-8" />
		<LightBulbIcon class="{theme === 'dark' ? '' : 'hidden'} w-8 h-8" />
	</button>
</template>
