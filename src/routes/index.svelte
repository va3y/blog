<script context="module">
	export const load = async ({ fetch }) => {
		const postRes = await fetch('/api/posts.json');
		const { posts } = await postRes.json();

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import dayjs from 'dayjs';
	import Link from '$lib/components/Link.svelte';

	const formatDate = (date) => {
		return dayjs(date).format('MMM D, YYYY');
	};

	export let posts;
</script>

<svelte:head>
	{#each posts as article}
		<link rel="prefetch" href="/blog/{article.slug}" />
	{/each}
	<title>Home | Va3y Blog</title>
</svelte:head>

<div class="lg:text-lg mt-12 md:mt-0">
	<div class="max-w-xl mt-4">
		<h1 class="text-rose-600 dark:text-rose-700 pb-6 text-6xl font-bold w-72 md:w-auto">
			Hi, I'm Valery
		</h1>
		<p class="text-stone-700 dark:text-stone-300">
			I do React at work, love to develop with Vue, know very little Angular, enthusiastic about
			Svelte, betting on Solid, sometimes perplexed about web components, and still learning new
			things about HTML. Pro&#8209;performance and anti js bloat.
		</p>
		<br />
		<p>
			You can reach me on
			<Link in-new-tab href="https://github.com/va3y/">GitHub</Link>,
			<Link in-new-tab href="https://www.linkedin.com/in/ivanovvaleriy/">LinkedIn</Link>,
			<Link in-new-tab href="https://twitter.com/primarilyvalery">Twitter</Link>, or by
			<Link in-new-tab href="mailto:valerih333@gmail.com">email</Link>. I also write about front-end
			every now and then. Here are some of my articles:
		</p>
	</div>
	<ul class="mt-12 gap-4 md:columns-2 mb-20 lg:mr-24">
		{#each posts as article}
			<li
				class="block transition-all duration-500 bg-size-200 bg-left-top hover:bg-center rounded pl-4 bg-gradient-to-br dark:from-rose-500 from-rose-300 dark:to-cyan-400 to-cyan-300 hover:from-rose-300 dark:from-rose-400 shadow-lg shadow-stone-300 dark:shadow-stone-900 break-inside-avoid mb-4 relative"
			>
				<Link
					class="px-6 md:px-8 py-6 w-full h-full block flex flex-col dark:bg-stone-900 bg-stone-200 bg-opacity-100 hover:no-underline dark:!text-stone-300"
					href="/blog/{article.slug}"
				>
					<div class="font-bold mb-4 max-w-sm pr-14">
						{article.title}
					</div>
					{#if article.description}
						<div class="mt-2 text-stone-700 dark:text-stone-300">
							{article.description} <br />
						</div>
					{/if}

					<div class="mt-2 text-stone-700 dark:text-stone-300">
						{#if !article.updatedAt}
							{formatDate(article.createdAt)}
						{/if}
						{#if article.updatedAt}
							Last&nbsp;updated: {formatDate(article.updatedAt)}
						{/if}
					</div>
				</Link>
			</li>
		{/each}
	</ul>
</div>
