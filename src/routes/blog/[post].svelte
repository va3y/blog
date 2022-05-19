<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script context="module">
	export const load = async ({ params }) => {
		try {
			const post = await import(`../../lib/posts/${params.post}.md`);

			return {
				props: {
					PostContent: post.default,
					meta: { ...post.metadata, slug: params.post }
				}
			};
		} catch (error) {
			return {
				status: 404,
				error: error.message
			};
		}
	};
</script>

<script>
	import dayjs from 'dayjs';
	import '$lib/assets/css/one-dark.css';

	export let PostContent;
	export let meta;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, createdAt } = meta;

	const formatDate = (date) => {
		return dayjs(date).format('MMM D, YYYY');
	};
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title} | Va3y Blog</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<div />
	<div class="lg:pr-8">
		<div class="mx-auto max-w-prose text-sm xl:text-base">
			<div class="justify-between items-start mb-8">
				<h1 class="text-4xl lg:text-6xl font-bold mt-4 max-w-xl">
					{title}
				</h1>
				<div class="mt-4 text-2xl">{formatDate(createdAt)}</div>
			</div>
			<div
				class="prose prose-sm md:prose-md lg:prose-lg mx-auto w-full overflow-hidden dark:prose-invert"
			>
				<svelte:component this={PostContent} />
			</div>
		</div>
	</div>
</article>
