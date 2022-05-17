---
title: "A Markdown post with a Svelte component"
date: "2021-12-01"
updated: "2021-12-01"
categories: 
  - "sveltekit"
  - "markdown"
  - "svelte"
coverImage: "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: This post demonstrates how to include a Svelte component in a Markdown post.
---

This starter includes an `Callout.svelte` component. It's not particularly useful on its own, but here's how you might use it inside of a Markdown post, thanks to mdsvex.

You can inject any Svelte components you want into Markdown! Just import them in a `<script>` tag and then use them wherever you like. 

For that matter, you can inject any HTML anywhere! (Note that you cannot use Markdown _inside_ Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)