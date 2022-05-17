<script>
	import { onMount } from 'svelte';
	import LightBulbIcon from './svg/LightBulbIcon.svelte';
	import MoonIcon from './svg/MoonIcon.svelte';
	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};
	let currentTheme;

	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;

		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		if (currentTheme === THEMES.DARK) {
			document.documentElement.classList.remove(THEMES.LIGHT);
			document.documentElement.classList.add(THEMES.DARK);
		} else {
			document.documentElement.classList.remove(THEMES.DARK);
			document.documentElement.classList.add(THEMES.LIGHT);
		}
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
		}

		applyTheme();
	};

	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<template>
	<button
		class="h-8 w-8 {$$restProps.class || ''}"
		on:click={toggleTheme}
		title="Light/dark mode toggle"
	>
		<MoonIcon class="{currentTheme === THEMES.LIGHT ? '' : 'hidden'} w-8 h-8" />
		<LightBulbIcon class="{currentTheme === THEMES.DARK ? '' : 'hidden'} w-8 h-8" />
	</button>
</template>
