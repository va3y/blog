export const THEMES = {
	DARK: 'dark',
	LIGHT: 'light'
};

const STORAGE_KEY = 'theme';

const prefersDarkThemes = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = () => {
	const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;

	const currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

	if (currentTheme === THEMES.DARK) {
		document.documentElement.classList.remove(THEMES.LIGHT);
		document.documentElement.classList.add(THEMES.DARK);
	} else {
		document.documentElement.classList.remove(THEMES.DARK);
		document.documentElement.classList.add(THEMES.LIGHT);
	}
};

export const toggleTheme = () => {
	const stored = localStorage.getItem(STORAGE_KEY);

	if (stored) {
		localStorage.removeItem(STORAGE_KEY);
	} else {
		localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
	}

	applyTheme();
};
