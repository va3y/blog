<script lang="ts">
	export let inNewTab: boolean;
	export let href: string;
</script>

<a
	target={inNewTab ? '_blank' : ''}
	rel={inNewTab ? 'noopener noreferrer' : ''}
	class="text-rose-600 dark:text-rose-700 hover:underline underline-offset-2"
	{href}
>
	<slot />
</a>
