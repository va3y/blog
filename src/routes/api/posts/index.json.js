import fetchPosts from '$lib/assets/js/fetchPosts';

export const get = async () => {
	try {
		const { posts } = await fetchPosts({});

		return {
			status: 200,
			body: {
				posts
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'Could not fetch posts. ' + error
			}
		};
	}
};
