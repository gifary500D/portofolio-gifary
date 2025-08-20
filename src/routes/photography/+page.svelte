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
	// utils untuk buat ID random
	function randomId() {
		return Math.floor(Math.random() * 10000);
	}

	let photos: Photo[] = [
		// People
		{
			id: 1,
			src: '/images/photography/people1.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 1',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto candid outdoor'
		},
		{
			id: 2,
			src: '/images/photography/people2.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 2',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret suasana santai'
		},
		{
			id: 3,
			src: '/images/photography/people3.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 3',
			category: 'People',
			orientation: 'portrait',
			description: 'Foto portrait dengan pose'
		},
		{
			id: 4,
			src: '/images/photography/people4.jpeg',
			alt: 'People Group',
			title: 'Friends Gathering',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto bersama teman'
		},
		{
			id: 5,
			src: '/images/photography/people5.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 5',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret candid di event'
		},
		{
			id: 6,
			src: '/images/photography/people6.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 6',
			category: 'People',
			orientation: 'portrait',
			description: 'Foto portrait casual'
		},
		{
			id: 7,
			src: '/images/photography/people7.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 7',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret santai outdoor'
		},
		{
			id: 8,
			src: '/images/photography/people8.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 8',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret candid dengan background hijau'
		},
		{
			id: 9,
			src: '/images/photography/people9.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 9',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret candid dengan balon background'
		},
		{
			id: 10,
			src: '/images/photography/people10.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 10',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret orang di pantai'
		},
		{
			id: 11,
			src: '/images/photography/people11.jpeg',
			alt: 'People Group',
			title: 'Group Portrait',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto bareng sekelompok teman'
		},
		{
			id: 34,
			src: '/images/photography/people12.jpeg',
			alt: 'People Portrait',
			title: 'Outdoor Portrait',
			category: 'People',
			orientation: 'landscape',
			description: 'Potret candid cewek outdoor'
		},
		{
			id: 35,
			src: '/images/photography/people13.jpeg',
			alt: 'People Portrait',
			title: 'Lakeside Portrait',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret pria duduk di pinggir danau'
		},

		// Cosplay
		{
			id: 12,
			src: '/images/photography/cosplay1.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 1',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay di event mall'
		},
		{
			id: 13,
			src: '/images/photography/cosplay2.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 2',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter anime'
		},
		{
			id: 14,
			src: '/images/photography/cosplay3.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 3',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan pose'
		},
		{
			id: 15,
			src: '/images/photography/cosplay4.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 4',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay colorful di event mall'
		},
		{
			id: 16,
			src: '/images/photography/cosplay5.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 5',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter dengan topeng'
		},
		{
			id: 17,
			src: '/images/photography/cosplay6.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 6',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter anime'
		},
		{
			id: 18,
			src: '/images/photography/cosplay7.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 7',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan properti lengkap'
		},
		{
			id: 19,
			src: '/images/photography/cosplay8.jpeg',
			alt: 'Cosplay Group',
			title: 'Cosplay 8',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Foto cosplay bersama teman'
		},
		{
			id: 20,
			src: '/images/photography/cosplay9.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 9',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan gaya unik'
		},
		{
			id: 29,
			src: '/images/photography/cosplay10.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 10',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay anak-anak dengan kostum anime'
		},
		{
			id: 40,
			src: '/images/photography/cosplay11.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact'
		},
		{
			id: 41,
			src: '/images/photography/cosplay12.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact'
		},
		// Others (kucing + lain-lain)
		{
			id: 21,
			src: '/images/photography/others1.jpeg',
			alt: 'Cat Photo',
			title: 'Cat 1',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto kucing peliharaan'
		},
		{
			id: 22,
			src: '/images/photography/others2.jpeg',
			alt: 'Cat Photo',
			title: 'Cat 2',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto kucing lucu'
		},
		{
			id: 23,
			src: '/images/photography/others3.jpeg',
			alt: 'Cat Photo',
			title: 'Cat 3',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto kucing di rumah'
		},
		{
			id: 30,
			src: '/images/photography/others5.jpeg',
			alt: 'Nature Photo',
			title: 'Nature Detail',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto close-up dedaunan hijau'
		},
		{
			id: 31,
			src: '/images/photography/others6.jpeg',
			alt: 'Toy Car Photo',
			title: 'Mini Car 1',
			category: 'Others',
			orientation: 'landscape',
			description: 'Mobil mainan hijau dengan bokeh'
		},
		{
			id: 32,
			src: '/images/photography/others4.jpeg',
			alt: 'Toy Car Photo',
			title: 'Mini Car 2',
			category: 'Others',
			orientation: 'landscape',
			description: 'Mobil mainan oranye dengan bokeh malam'
		},
		{
			id: 33,
			src: '/images/photography/others7.jpeg',
			alt: 'Phone Photo',
			title: 'Phone on Floor',
			category: 'Others',
			orientation: 'portrait',
			description: 'HP tergeletak di lantai kayu'
		},

		// Graduation (dipindah ke paling bawah)
		{
			id: 26,
			src: '/images/photography/graduation1.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Day',
			category: 'People',
			orientation: 'landscape',
			description: 'Moment wisuda bersama teman-teman'
		},
		{
			id: 27,
			src: '/images/photography/graduation2.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Celebration',
			category: 'People',
			orientation: 'portrait',
			description: 'Perayaan wisuda dengan teman-teman'
		},
		{
			id: 24,
			src: '/images/photography/graduation3.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Group Graduation',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto bersama saat wisuda'
		},
		{
			id: 25,
			src: '/images/photography/graduation4.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Friends',
			category: 'People',
			orientation: 'portrait',
			description: 'Momen wisuda penuh kenangan'
		},
		{
			id: 36,
			src: '/images/photography/graduation5.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation with Family',
			category: 'People',
			orientation: 'portrait',
			description: 'Anak wisuda bersama orang tua'
		},
		{
			id: 37,
			src: '/images/photography/graduation6.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Family Graduation',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto keluarga saat wisuda'
		},
		{
			id: 38,
			src: '/images/photography/graduation7.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Kid',
			category: 'People',
			orientation: 'portrait',
			description: 'Anak kecil dengan latar wisuda'
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

<!-- Wrapper dengan gradiasi langit dan awan background -->
<div
	class="relative min-h-screen bg-[linear-gradient(to_bottom,#3AA7E0_0%,#54C2F0_50%,#9EE7FF_100%)]"
>
	<!-- Background awan yang repeat -->
	<div
		class="absolute inset-0 opacity-50"
		style="background-image: url('/images/awan-bg.png'); background-size: 1200px auto; background-position: center top; background-repeat: repeat;"
	></div>

	<!-- Hero Section -->
	<section class="relative z-10 overflow-hidden">
		<div class="relative mx-auto max-w-7xl px-6 py-16 text-center lg:px-12 lg:py-28">
			<!-- Judul Toy Story Style -->
			<h1 class="mb-6 text-6xl leading-tight font-extrabold tracking-tight">
				<!-- Photography dengan efek stroke biru yang lebih gelap -->
				<span
					class="block font-['Luckiest_Guy'] text-[#FFD12D]
			[text-shadow:_-3px_3px_0_#1E3A8A,_3px_3px_0_#1E3A8A,_3px_-3px_0_#1E3A8A,_-3px_-3px_0_#1E3A8A]"
				>
					Photography
				</span>

				<!-- Gallery dalam kotak merah dengan border orange kemerahan -->
				<span
					class="mt-4 inline-block rounded-sm border-4 border-[#DC4C2A] bg-[#D62828] px-6 py-2 font-['Luckiest_Guy'] text-white drop-shadow-[4px_4px_0px_#00000055]"
				>
					Gallery
				</span>
			</h1>

			<!-- Subtitle dengan warna yang cocok untuk background biru -->
			<p
				class="mx-auto max-w-xl text-lg text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] lg:text-xl"
			>
				Capturing life's beautiful moments through my lens. Explore portraits, landscapes, and
				creative stories frozen in time.
			</p>
		</div>
	</section>

	{#if !isLoading}
		<!-- Filters -->
		<section
			class="relative z-10 px-4 pb-8 sm:px-6 lg:px-8"
			in:fade={{ duration: 600, delay: 200 }}
		>
			<div class="mx-auto max-w-6xl rounded-2xl bg-white/20 p-6 shadow-lg backdrop-blur-lg">
				<!-- Category Filter -->
				<div class="mb-6">
					<h3 class="mb-3 text-center text-sm font-semibold text-gray-700">Categories</h3>
					<div class="flex flex-wrap justify-center gap-2 md:gap-4">
						{#each categories as category}
							<button
								class="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-sm {selectedCategory ===
								category
									? 'bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25'
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
					<h3 class="mb-3 text-center text-sm font-semibold text-gray-700">Orientation</h3>
					<div class="flex flex-wrap justify-center gap-2 md:gap-4">
						{#each orientations as orientation}
							<button
								class="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-sm {selectedOrientation ===
								orientation
									? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25'
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
		<section class="relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
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
