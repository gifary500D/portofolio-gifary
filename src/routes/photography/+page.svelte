<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	interface Photo {
		id: number;
		src: string;
		alt: string;
		title: string;
		category: string;
		description: string;
		location?: string;
		camera?: string;
		lens?: string;
		settings?: string;
		date?: string;
	}

	// Sample photo data - ganti dengan data foto Anda yang sebenarnya
	let photos: Photo[] = [
		{
			id: 1,
			src: '/api/placeholder/800/600',
			alt: 'Golden Hour Mountain',
			title: 'Golden Hour Mountain',
			category: 'Landscape',
			description: 'Breathtaking sunrise over the mountain ranges',
			location: 'Mount Bromo, Indonesia',
			camera: 'Sony A7R IV',
			lens: '24-70mm f/2.8',
			settings: 'f/8, 1/125s, ISO 100',
			date: '2024-01-15'
		},
		{
			id: 2,
			src: '/api/placeholder/600/800',
			alt: 'Urban Portrait',
			title: 'City Streets',
			category: 'Portrait',
			description: 'Candid moment in the bustling city life',
			location: 'Jakarta, Indonesia',
			camera: 'Canon R5',
			lens: '85mm f/1.4',
			settings: 'f/2.0, 1/250s, ISO 400',
			date: '2024-02-08'
		},
		{
			id: 3,
			src: '/api/placeholder/800/800',
			alt: 'Street Art',
			title: 'Colors of the Street',
			category: 'Street',
			description: 'Vibrant street art telling urban stories',
			location: 'Yogyakarta, Indonesia',
			camera: 'Fujifilm X-T5',
			lens: '35mm f/1.4',
			settings: 'f/4, 1/60s, ISO 800',
			date: '2024-01-22'
		},
		{
			id: 4,
			src: '/api/placeholder/700/500',
			alt: 'Ocean Waves',
			title: 'Dancing Waves',
			category: 'Nature',
			description: 'Powerful waves meeting the rocky shore',
			location: 'Tanah Lot, Bali',
			camera: 'Sony A7R IV',
			lens: '70-200mm f/2.8',
			settings: 'f/11, 1/500s, ISO 200',
			date: '2024-03-10'
		},
		{
			id: 5,
			src: '/api/placeholder/600/900',
			alt: 'Modern Architecture',
			title: 'Geometric Dreams',
			category: 'Architecture',
			description: 'Clean lines and modern architectural design',
			location: 'Singapore',
			camera: 'Canon R5',
			lens: '16-35mm f/2.8',
			settings: 'f/8, 1/200s, ISO 100',
			date: '2024-02-28'
		},
		{
			id: 6,
			src: '/api/placeholder/800/600',
			alt: 'Forest Path',
			title: 'Mystical Forest',
			category: 'Nature',
			description: 'Sunlight filtering through ancient trees',
			location: 'Bogor Botanical Garden',
			camera: 'Fujifilm X-T5',
			lens: '16mm f/1.4',
			settings: 'f/5.6, 1/30s, ISO 400',
			date: '2024-03-05'
		},
		{
			id: 7,
			src: '/api/placeholder/600/800',
			alt: 'Cultural Portrait',
			title: 'Traditional Beauty',
			category: 'Portrait',
			description: 'Celebrating Indonesian traditional culture',
			location: 'Solo, Indonesia',
			camera: 'Sony A7R IV',
			lens: '85mm f/1.4',
			settings: 'f/2.8, 1/160s, ISO 320',
			date: '2024-01-30'
		},
		{
			id: 8,
			src: '/api/placeholder/800/500',
			alt: 'Night Cityscape',
			title: 'City Lights',
			category: 'Street',
			description: 'Urban landscape illuminated by night lights',
			location: 'Jakarta, Indonesia',
			camera: 'Canon R5',
			lens: '24-70mm f/2.8',
			settings: 'f/8, 30s, ISO 100',
			date: '2024-02-14'
		},
		{
			id: 9,
			src: '/api/placeholder/700/700',
			alt: 'Minimalist Architecture',
			title: 'Pure Form',
			category: 'Architecture',
			description: 'Minimalist design emphasizing space and light',
			location: 'Museum MACAN, Jakarta',
			camera: 'Fujifilm X-T5',
			lens: '23mm f/1.4',
			settings: 'f/4, 1/125s, ISO 200',
			date: '2024-03-12'
		}
	];

	let selectedCategory = 'All';
	let selectedPhoto: Photo | null = null;
	let filteredPhotos: Photo[] = photos;
	let categories = ['All', 'Landscape', 'Portrait', 'Street', 'Nature', 'Architecture'];
	let isLoading = true;

	// Filter photos based on category
	$: {
		if (selectedCategory === 'All') {
			filteredPhotos = photos;
		} else {
			filteredPhotos = photos.filter((photo) => photo.category === selectedCategory);
		}
	}

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 1000);
	});

	function openModal(photo: Photo) {
		selectedPhoto = photo;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		selectedPhoto = null;
		document.body.style.overflow = 'unset';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
	<!-- Hero Section -->
	<section class="relative overflow-hidden py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				{#if !isLoading}
					<div in:fly={{ y: 30, duration: 800 }}>
						<h1 class="mb-6 text-5xl font-bold text-white md:text-6xl">
							Photography
							<span
								class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
							>
								Gallery
							</span>
						</h1>
						<p class="mb-8 text-xl text-gray-300 md:text-2xl">
							Capturing life's beautiful moments through my lens
						</p>
						<div class="mx-auto h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500"></div>
					</div>
				{:else}
					<div class="flex items-center justify-center">
						<div
							class="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"
						></div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	{#if !isLoading}
		<!-- Category Filter -->
		<section class="px-4 pb-12 sm:px-6 lg:px-8" in:fade={{ duration: 600, delay: 200 }}>
			<div class="mx-auto max-w-6xl">
				<div class="flex flex-wrap justify-center gap-4">
					{#each categories as category}
						<button
							class="rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 {selectedCategory ===
							category
								? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
								: 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}"
							on:click={() => (selectedCategory = category)}
						>
							{category}
						</button>
					{/each}
				</div>
			</div>
		</section>

		<!-- Photo Grid -->
		<section class="px-4 pb-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="masonry-grid">
					{#each filteredPhotos as photo, index (photo.id)}
						<div
							class="masonry-item group cursor-pointer overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 hover:shadow-2xl"
							in:fly={{ y: 50, duration: 600, delay: index * 100 }}
							on:click={() => openModal(photo)}
						>
							<div class="relative overflow-hidden">
								<img
									src={photo.src}
									alt={photo.alt}
									class="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
									loading="lazy"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								>
									<div class="absolute right-4 bottom-4 left-4 text-white">
										<span
											class="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm"
										>
											{photo.category}
										</span>
										<h3 class="text-lg font-bold">{photo.title}</h3>
										<p class="text-sm text-gray-200">{photo.location || ''}</p>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Modal -->
	{#if selectedPhoto}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
			in:fade={{ duration: 300 }}
			on:click={closeModal}
		>
			<div
				class="relative max-h-[90vh] max-w-6xl overflow-auto rounded-2xl bg-gray-900 shadow-2xl"
				on:click|stopPropagation
			>
				<button
					class="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
					on:click={closeModal}
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div class="grid grid-cols-1 lg:grid-cols-3">
					<!-- Image -->
					<div class="lg:col-span-2">
						<img
							src={selectedPhoto.src}
							alt={selectedPhoto.alt}
							class="h-full w-full object-cover"
						/>
					</div>

					<!-- Details -->
					<div class="p-6 text-white lg:p-8">
						<span
							class="mb-3 inline-block rounded-full bg-purple-600 px-3 py-1 text-sm font-medium"
						>
							{selectedPhoto.category}
						</span>

						<h2 class="mb-4 text-2xl font-bold">{selectedPhoto.title}</h2>
						<p class="mb-6 text-gray-300">{selectedPhoto.description}</p>

						{#if selectedPhoto.location}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-300">Location</h3>
								<p class="text-gray-300">{selectedPhoto.location}</p>
							</div>
						{/if}

						{#if selectedPhoto.date}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-300">Date</h3>
								<p class="text-gray-300">{selectedPhoto.date}</p>
							</div>
						{/if}

						{#if selectedPhoto.camera}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-300">Camera</h3>
								<p class="text-gray-300">{selectedPhoto.camera}</p>
							</div>
						{/if}

						{#if selectedPhoto.lens}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-300">Lens</h3>
								<p class="text-gray-300">{selectedPhoto.lens}</p>
							</div>
						{/if}

						{#if selectedPhoto.settings}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-300">Settings</h3>
								<p class="text-gray-300">{selectedPhoto.settings}</p>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.masonry-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1.5rem;
		grid-auto-rows: max-content;
	}

	@media (min-width: 768px) {
		.masonry-grid {
			grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		}
	}

	.masonry-item {
		break-inside: avoid;
		margin-bottom: 1.5rem;
	}
</style>
