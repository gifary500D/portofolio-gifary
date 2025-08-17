<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	interface Photo {
		id: number;
		src: string;
		alt: string;
		title: string;
		category: string;
		orientation: 'portrait' | 'landscape';
		description: string;
		location?: string;
		camera?: string;
		lens?: string;
		settings?: string;
		date?: string;
		personName?: string;
		instagram?: string;
	}

	let photos: Photo[] = [
		{
			id: 1,
			src: '/images/foto.JPG',
			alt: 'Portrait Model',
			title: 'Urban Fashion',
			category: 'People',
			orientation: 'portrait',
			description: 'Professional portrait session in urban setting',
			location: 'Jakarta, Indonesia',
			camera: 'Sony A7R IV',
			lens: '85mm f/1.4',
			settings: 'f/2.8, 1/160s, ISO 320',
			date: '2024-01-15',
			personName: 'Sarah Indira',
			instagram: '@sarahindira'
		},
		{
			id: 2,
			src: '/images/foto.JPG',
			alt: 'Anime Cosplay',
			title: 'Naruto Cosplay',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Amazing Naruto character cosplay with detailed costume',
			location: 'Comic Con Jakarta',
			camera: 'Canon R5',
			lens: '50mm f/1.4',
			settings: 'f/2.0, 1/250s, ISO 400',
			date: '2024-02-08',
			personName: 'Riko Tanaka',
			instagram: '@rikocosplay'
		},
		{
			id: 3,
			src: '/images/foto.JPG',
			alt: 'Street Photography',
			title: 'Morning Market',
			category: 'Others',
			orientation: 'landscape',
			description: 'Vibrant morning market scene with local vendors',
			location: 'Yogyakarta, Indonesia',
			camera: 'Fujifilm X-T5',
			lens: '35mm f/1.4',
			settings: 'f/4, 1/60s, ISO 800',
			date: '2024-01-22'
		},
		{
			id: 4,
			src: '/images/foto.JPG',
			alt: 'Business Portrait',
			title: 'Professional Headshot',
			category: 'People',
			orientation: 'portrait',
			description: 'Corporate headshot for business profile',
			location: 'Studio Jakarta',
			camera: 'Sony A7R IV',
			lens: '85mm f/1.4',
			settings: 'f/2.8, 1/160s, ISO 200',
			date: '2024-03-10',
			personName: 'Ahmad Pratama',
			instagram: '@ahmadpratama'
		},
		{
			id: 5,
			src: '/images/foto.JPG',
			alt: 'Demon Slayer Cosplay',
			title: 'Tanjiro Kamado',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Detailed Demon Slayer cosplay with authentic props',
			location: 'Anime Festival Bandung',
			camera: 'Canon R5',
			lens: '85mm f/1.4',
			settings: 'f/2.8, 1/200s, ISO 320',
			date: '2024-02-28',
			personName: 'Deni Wijaya',
			instagram: '@denianimecosplay'
		},
		{
			id: 6,
			src: '/images/foto.JPG',
			alt: 'Nature Landscape',
			title: 'Mountain Vista',
			category: 'Others',
			orientation: 'landscape',
			description: 'Stunning mountain landscape at golden hour',
			location: 'Mount Bromo, Indonesia',
			camera: 'Fujifilm X-T5',
			lens: '16mm f/1.4',
			settings: 'f/8, 1/125s, ISO 100',
			date: '2024-03-05'
		},
		{
			id: 7,
			src: '/images/foto.JPG',
			alt: 'Fashion Portrait',
			title: 'Editorial Fashion',
			category: 'People',
			orientation: 'portrait',
			description: 'High fashion editorial portrait session',
			location: 'Studio Surabaya',
			camera: 'Sony A7R IV',
			lens: '85mm f/1.4',
			settings: 'f/2.8, 1/160s, ISO 320',
			date: '2024-01-30',
			personName: 'Maya Sari',
			instagram: '@mayasarimodel'
		},
		{
			id: 8,
			src: '/images/foto.JPG',
			alt: 'Attack on Titan Cosplay',
			title: 'Survey Corps',
			category: 'Cosplay',
			orientation: 'landscape',
			description: 'Epic Attack on Titan Survey Corps group cosplay',
			location: 'Taman Mini Indonesia',
			camera: 'Canon R5',
			lens: '24-70mm f/2.8',
			settings: 'f/5.6, 1/200s, ISO 400',
			date: '2024-02-14',
			personName: 'Cosplay Team Alpha',
			instagram: '@teamalphacosplay'
		},
		{
			id: 9,
			src: '/images/foto.JPG',
			alt: 'Architecture',
			title: 'Modern Building',
			category: 'Others',
			orientation: 'portrait',
			description: 'Contemporary architecture with geometric patterns',
			location: 'Jakarta CBD',
			camera: 'Fujifilm X-T5',
			lens: '23mm f/1.4',
			settings: 'f/8, 1/125s, ISO 200',
			date: '2024-03-12'
		},
		{
			id: 10,
			src: '/images/foto.JPG',
			alt: 'Wedding Portrait',
			title: 'Bride Portrait',
			category: 'People',
			orientation: 'portrait',
			description: 'Beautiful bridal portrait on wedding day',
			location: 'Bali Wedding Venue',
			camera: 'Sony A7R IV',
			lens: '85mm f/1.4',
			settings: 'f/2.0, 1/250s, ISO 320',
			date: '2024-03-18',
			personName: 'Lisa Permata',
			instagram: '@lisapermata'
		},
		{
			id: 11,
			src: '/images/foto.JPG',
			alt: 'Genshin Impact Cosplay',
			title: 'Raiden Shogun',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Stunning Raiden Shogun cosplay from Genshin Impact',
			location: 'Comic Con Surabaya',
			camera: 'Canon R5',
			lens: '50mm f/1.4',
			settings: 'f/2.8, 1/200s, ISO 400',
			date: '2024-03-20',
			personName: 'Anita Kusuma',
			instagram: '@anitacosplay'
		},
		{
			id: 12,
			src: '/images/foto.JPG',
			alt: 'City Landscape',
			title: 'Jakarta Skyline',
			category: 'Others',
			orientation: 'landscape',
			description: 'Jakarta city skyline during blue hour',
			location: 'Monas Area, Jakarta',
			camera: 'Fujifilm X-T5',
			lens: '16-35mm f/2.8',
			settings: 'f/8, 10s, ISO 100',
			date: '2024-03-25'
		}
	];

	let selectedCategory = 'All';
	let selectedOrientation = 'All';
	let selectedPhoto: Photo | null = null;
	let filteredPhotos: Photo[] = photos;
	let categories = ['All', 'People', 'Cosplay', 'Others'];
	let orientations = ['All', 'Portrait', 'Landscape'];
	let isLoading = true;

	// Filter photos based on category and orientation
	$: {
		filteredPhotos = photos.filter((photo) => {
			const categoryMatch = selectedCategory === 'All' || photo.category === selectedCategory;
			const orientationMatch =
				selectedOrientation === 'All' || photo.orientation === selectedOrientation.toLowerCase();
			return categoryMatch && orientationMatch;
		});
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

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
	<!-- Hero Section -->
	<section class="relative overflow-hidden py-12 md:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				{#if !isLoading}
					<div in:fly={{ y: 30, duration: 800 }}>
						<h1 class="mb-4 text-3xl font-bold text-gray-900 md:mb-6 md:text-5xl lg:text-6xl">
							Photography
							<span
								class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
							>
								Gallery
							</span>
						</h1>
						<p class="mb-6 text-lg text-gray-700 md:mb-8 md:text-xl lg:text-2xl">
							Capturing life's beautiful moments through my lens
						</p>
						<div
							class="mx-auto h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 md:w-32"
						></div>
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
		<!-- Filters -->
		<section class="px-4 pb-8 sm:px-6 lg:px-8" in:fade={{ duration: 600, delay: 200 }}>
			<div class="mx-auto max-w-6xl">
				<!-- Category Filter -->
				<div class="mb-6">
					<h3 class="mb-3 text-center text-sm font-semibold text-gray-600">Categories</h3>
					<div class="flex flex-wrap justify-center gap-2 md:gap-4">
						{#each categories as category}
							<button
								class="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-sm {selectedCategory ===
								category
									? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
									: 'bg-white text-gray-700 shadow-md hover:bg-gray-50 hover:shadow-lg'}"
								on:click={() => (selectedCategory = category)}
							>
								{category}
							</button>
						{/each}
					</div>
				</div>

				<!-- Orientation Filter -->
				<div class="mb-4">
					<h3 class="mb-3 text-center text-sm font-semibold text-gray-600">Orientation</h3>
					<div class="flex flex-wrap justify-center gap-2 md:gap-4">
						{#each orientations as orientation}
							<button
								class="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-sm {selectedOrientation ===
								orientation
									? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25'
									: 'bg-white text-gray-700 shadow-md hover:bg-gray-50 hover:shadow-lg'}"
								on:click={() => (selectedOrientation = orientation)}
							>
								{orientation}
							</button>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<!-- Photo Grid -->
		<section class="px-4 pb-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="photo-grid">
					{#each filteredPhotos as photo, index (photo.id)}
						<div
							class="photo-item group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl {photo.orientation ===
							'portrait'
								? 'aspect-[3/4]'
								: 'aspect-[4/3]'}"
							in:fly={{ y: 30, duration: 600, delay: index * 50 }}
							on:click={() => openModal(photo)}
						>
							<img
								src={photo.src}
								alt={photo.alt}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								loading="lazy"
							/>

							<!-- Category Badge -->
							<div class="absolute top-3 left-3">
								<span
									class="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm md:px-3 md:text-sm"
								>
									{photo.category}
								</span>
							</div>

							<!-- Hover Overlay -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							>
								<div class="absolute right-3 bottom-3 left-3 text-white">
									<h3 class="mb-1 text-sm font-bold md:text-lg">{photo.title}</h3>
									{#if photo.personName}
										<p class="mb-1 text-xs text-gray-200 md:text-sm">{photo.personName}</p>
									{/if}
									{#if photo.instagram}
										<p class="text-xs text-purple-300 md:text-sm">{photo.instagram}</p>
									{/if}
									{#if photo.location && !photo.personName}
										<p class="text-xs text-gray-200 md:text-sm">{photo.location}</p>
									{/if}
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
				class="relative max-h-[90vh] max-w-5xl overflow-auto rounded-2xl bg-white shadow-2xl"
				on:click|stopPropagation
			>
				<button
					class="absolute top-4 right-4 z-10 rounded-full bg-gray-900/80 p-2 text-white transition-colors hover:bg-gray-900"
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
					<div class="p-4 text-gray-800 lg:p-8">
						<span
							class="mb-3 inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm font-medium text-white"
						>
							{selectedPhoto.category} • {selectedPhoto.orientation}
						</span>

						<h2 class="mb-4 text-xl font-bold text-gray-900 lg:text-2xl">{selectedPhoto.title}</h2>
						<p class="mb-6 text-sm text-gray-600 lg:text-base">{selectedPhoto.description}</p>

						{#if selectedPhoto.personName}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-600">Subject</h3>
								<p class="text-sm text-gray-600 lg:text-base">{selectedPhoto.personName}</p>
							</div>
						{/if}

						{#if selectedPhoto.instagram}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-600">Instagram</h3>
								<p class="text-sm text-purple-600 lg:text-base">{selectedPhoto.instagram}</p>
							</div>
						{/if}

						{#if selectedPhoto.location}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-600">Location</h3>
								<p class="text-sm text-gray-600 lg:text-base">{selectedPhoto.location}</p>
							</div>
						{/if}

						{#if selectedPhoto.date}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-600">Date</h3>
								<p class="text-sm text-gray-600 lg:text-base">{selectedPhoto.date}</p>
							</div>
						{/if}

						{#if selectedPhoto.camera}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-600">Camera</h3>
								<p class="text-sm text-gray-600 lg:text-base">{selectedPhoto.camera}</p>
							</div>
						{/if}

						{#if selectedPhoto.lens}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-600">Lens</h3>
								<p class="text-sm text-gray-600 lg:text-base">{selectedPhoto.lens}</p>
							</div>
						{/if}

						{#if selectedPhoto.settings}
							<div class="mb-4">
								<h3 class="mb-2 text-sm font-semibold text-purple-600">Settings</h3>
								<p class="text-sm text-gray-600 lg:text-base">{selectedPhoto.settings}</p>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.photo-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
	}

	@media (min-width: 640px) {
		.photo-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}

	@media (min-width: 768px) {
		.photo-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.25rem;
		}
	}

	@media (min-width: 1024px) {
		.photo-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 1.5rem;
		}
	}

	@media (min-width: 1280px) {
		.photo-grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	.photo-item {
		width: 100%;
	}
</style>
