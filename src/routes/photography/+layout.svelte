<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		// Set page title and meta description
		document.title = 'Photography Gallery - Your Name';

		// Update meta description
		let metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				'content',
				"Explore my photography gallery featuring landscapes, portraits, street photography, and more. Capturing life's beautiful moments through my lens."
			);
		}
	});
</script>

<svelte:head>
	<title>Photography Gallery - Your Name</title>
	<meta
		name="description"
		content="Explore my photography gallery featuring landscapes, portraits, street photography, and more. Capturing life's beautiful moments through my lens."
	/>
	<meta property="og:title" content="Photography Gallery" />
	<meta
		property="og:description"
		content="Explore my photography gallery featuring landscapes, portraits, street photography, and more."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Photography Gallery" />
	<meta
		name="twitter:description"
		content="Explore my photography gallery featuring landscapes, portraits, street photography, and more."
	/>
</svelte:head>

<main>
	<slot />
</main>

<!-- Back to Home Button -->
<div class="fixed right-8 bottom-8 z-40">
	<a
		href="/"
		class="group flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-700 hover:shadow-xl"
		aria-label="Back to home"
	>
		<svg
			class="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
			/>
		</svg>
	</a>
</div>
