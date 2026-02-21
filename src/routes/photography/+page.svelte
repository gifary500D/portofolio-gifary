<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Navbar from '$lib/components/Navbar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import CategoryDropdown from '$lib/components/CategoryDropdown.svelte';
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { photos as initialPhotos } from '$lib/data/photos';
	import type { Photo } from '$lib/data/photos';

	// ========================
	// STATE
	// ========================

	let photos: Photo[] = [...initialPhotos];
	let filteredPhotos: Photo[] = [];

	let selectedCategory = 'All';
	let selectedOrientation = 'All';
	let selectedCategories = ['All'];
	let selectedPhoto: Photo | null = null;

	let categories = ['All', 'People', 'Cosplay', 'Others'];
	let orientations = ['All', 'Portrait', 'Landscape'];

	let isLoading = true;
	let mobileMenuOpen = false;

	// ========================
	// WHATSAPP
	// ========================

	const whatsappNumber = '6285182748023';
	const message = 'Halo, saya ingin konsultasi tentang jasa foto Anda 📸';
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

	// ========================
	// UTIL
	// ========================

	function shuffleArray<T>(array: T[]): T[] {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	// ========================
	// LIFECYCLE
	// ========================

	onMount(() => {
		photos = shuffleArray(photos);
		filteredPhotos = photos;
		setTimeout(() => {
			isLoading = false;
		}, 800);
	});

	// ========================
	// FILTER REACTIVE
	// ========================

	$: filteredPhotos = photos.filter((photo) => {
		const categoryMatch =
			selectedCategory === 'All' || photo.category === selectedCategory;

		const orientationMatch =
			selectedOrientation === 'All' ||
			photo.orientation === selectedOrientation.toLowerCase();

		return categoryMatch && orientationMatch;
	});

	// ========================
	// HANDLERS
	// ========================

	function handleCategoryChange(event: CustomEvent<string[]>) {
		selectedCategories = event.detail;

		if (selectedCategories.includes('All') || selectedCategories.length === 0) {
			selectedCategory = 'All';
		} else {
			selectedCategory = selectedCategories[0];
		}
	}

	function handlePhotoClick(event: CustomEvent<Photo>) {
		openModal(event.detail);
	}

	function openModal(photo: Photo) {
		selectedPhoto = photo;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		selectedPhoto = null;
		document.body.style.overflow = 'unset';
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeModal();
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<Navbar bind:mobileMenuOpen />

<div class="pt-16">
	<div class="relative min-h-screen bg-[linear-gradient(to_bottom,#3AA7E0_0%,#54C2F0_50%,#9EE7FF_100%)]">

		<div
			class="absolute inset-0 opacity-90"
			style="background-image: url('/images/awan-bg.png'); background-size: 1200px auto; background-position: center top; background-repeat: repeat;"
		/>

		<HeroSection />

		{#if !isLoading}

			<!-- ================= FILTER SECTION ================= -->

			<section
				class="relative z-40 px-4 pb-8 pt-20 sm:px-6 lg:px-8"
				id="gallery"
				in:fade={{ duration: 600, delay: 200 }}
			>
				<div class="mx-auto max-w-6xl rounded-2xl bg-white/20 p-6 shadow-lg backdrop-blur-lg">

					<!-- CATEGORY -->
					<div class="relative z-50 mb-6">
						<h3 class="mb-3 text-center text-sm font-semibold text-gray-700">
							Kategori
						</h3>

						<div class="flex justify-center">
							<CategoryDropdown
								{categories}
								bind:selectedCategories
								on:change={handleCategoryChange}
							/>
						</div>
					</div>

					<!-- ORIENTATION -->
					<div class="relative z-10 mb-4">
						<h3 class="mb-3 text-center text-sm font-semibold text-gray-700">
							Orientasi
						</h3>

						<div class="flex flex-wrap justify-center gap-2 md:gap-4">
							{#each orientations as orientation}
								<button
									class="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-sm 
									{selectedOrientation === orientation
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

			<!-- ================= PHOTO GRID ================= -->

			<PhotoGrid
				photos={filteredPhotos}
				on:photoClick={handlePhotoClick}
			/>

		{/if}

		<!-- ================= MODAL ================= -->

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
						class="absolute top-4 right-4 z-10 rounded-full bg-gray-900/80 p-2 text-white hover:bg-gray-900"
						on:click={closeModal}
					>
						X
					</button>

					<div class="grid grid-cols-1 lg:grid-cols-3">

						<div class="lg:col-span-2">
							<img
								src={selectedPhoto.src}
								alt={selectedPhoto.alt}
								class="h-full w-full object-cover"
							/>
						</div>

						<div class="p-6 text-gray-800">

							<span class="mb-3 inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm font-medium text-white">
								{selectedPhoto.category} • {selectedPhoto.orientation}
							</span>

							<h2 class="mb-4 text-xl font-bold">
								{selectedPhoto.title}
							</h2>

							<p class="mb-6 text-sm text-gray-600">
								{selectedPhoto.description}
							</p>

							{#if selectedPhoto.personName}
								<p class="mb-2 text-sm">
									<strong>Subject:</strong> {selectedPhoto.personName}
								</p>
							{/if}

							{#if selectedPhoto.instagram}
								<p class="text-sm">
									<strong>Instagram:</strong>
									<a
										href={`https://instagram.com/${selectedPhoto.instagram.replace('@', '')}`}
										target="_blank"
										class="text-purple-600 hover:text-purple-800"
									>
										{selectedPhoto.instagram}
									</a>
								</p>
							{/if}

						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<Footer />
</div>

<style>
	html {
		scroll-behavior: smooth;
	}
</style>