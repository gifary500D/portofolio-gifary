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
			description: 'Foto candid outdoor',
			personName: '', // Kosongkan untuk diisi nanti
			instagram: '' // Kosongkan untuk diisi nanti
		},
		{
			id: 2,
			src: '/images/photography/people2.jpeg',
			alt: 'People Portrait',
			title: 'Gym Portrait',
			category: 'People',
			orientation: 'portrait',
			description: 'Portrait session at the gym',
			personName: 'Billi Riziq',
			instagram: '@billirizieq'
		},
		{
			id: 3,
			src: '/images/photography/people3.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 3',
			category: 'People',
			orientation: 'portrait',
			description: 'Foto portrait dengan pose',
			personName: '',
			instagram: ''
		},
		{
			id: 4,
			src: '/images/photography/people4.jpeg',
			alt: 'People Group',
			title: 'Friends Gathering',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto bersama teman',
			personName: '',
			instagram: ''
		},
		{
			id: 5,
			src: '/images/photography/people5.jpeg',
			alt: 'People Portrait',
			title: 'Foto Random',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret candid di event Ulang tahun Kota binjai',
			personName: 'Kak Adhe',
			instagram: '@adhevirginia_'
		},
		{
			id: 6,
			src: '/images/photography/people6.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 6',
			category: 'People',
			orientation: 'portrait',
			description: 'Foto portrait casual',
			personName: '',
			instagram: ''
		},
		{
			id: 7,
			src: '/images/photography/people7.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 7',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret santai outdoor',
			personName: '',
			instagram: ''
		},
		{
			id: 8,
			src: '/images/photography/people8.jpeg',
			alt: 'People Portrait',
			title: 'Random',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret event Ultah Kota Binjai',
			personName: 'Kak Adhe',
			instagram: '@adhevirginia_'
		},
		{
			id: 9,
			src: '/images/photography/people9.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 9',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret candid dengan balon background',
			personName: '',
			instagram: ''
		},
		{
			id: 10,
			src: '/images/photography/people10.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 10',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret orang di pantai',
			personName: '',
			instagram: ''
		},
		{
			id: 11,
			src: '/images/photography/people11.jpeg',
			alt: 'People Group',
			title: 'Group Portrait',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto bareng sekelompok teman',
			personName: '',
			instagram: ''
		},
		{
			id: 34,
			src: '/images/photography/people12.jpeg',
			alt: 'People Portrait',
			title: 'Outdoor Portrait',
			category: 'People',
			orientation: 'landscape',
			description: 'Potret candid cewek outdoor',
			personName: '',
			instagram: ''
		},
		{
			id: 35,
			src: '/images/photography/people13.jpeg',
			alt: 'People Portrait',
			title: 'Lakeside Portrait',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret pria duduk di pinggir danau',
			personName: '',
			instagram: ''
		},
		{
			id: 42,
			src: '/images/photography/people14.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 14',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret casual outdoor',
			personName: '',
			instagram: ''
		},

		// Cosplay
		{
			id: 12,
			src: '/images/photography/cosplay1.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 1',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay di event mall',
			personName: '',
			instagram: ''
		},
		{
			id: 13,
			src: '/images/photography/cosplay2.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 2',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter anime',
			personName: '',
			instagram: ''
		},
		{
			id: 14,
			src: '/images/photography/cosplay3.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 3',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan pose',
			personName: '',
			instagram: ''
		},
		{
			id: 15,
			src: '/images/photography/cosplay4.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 4',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay colorful di event mall',
			personName: '',
			instagram: ''
		},
		{
			id: 16,
			src: '/images/photography/cosplay5.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 5',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter dengan topeng',
			personName: '',
			instagram: ''
		},
		{
			id: 17,
			src: '/images/photography/cosplay6.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 6',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter anime',
			personName: '',
			instagram: ''
		},
		{
			id: 18,
			src: '/images/photography/cosplay7.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 7',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan properti lengkap',
			personName: '',
			instagram: ''
		},
		{
			id: 19,
			src: '/images/photography/cosplay8.jpeg',
			alt: 'Cosplay Group',
			title: 'Cosplay 8',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Foto cosplay bersama teman',
			personName: '',
			instagram: ''
		},
		{
			id: 20,
			src: '/images/photography/cosplay9.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 9',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan gaya unik',
			personName: '',
			instagram: ''
		},
		{
			id: 29,
			src: '/images/photography/cosplay10.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 10',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay anak-anak dengan kostum anime',
			personName: '',
			instagram: ''
		},
		{
			id: 40,
			src: '/images/photography/cosplay11.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact',
			personName: '',
			instagram: ''
		},
		{
			id: 41,
			src: '/images/photography/cosplay12.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact',
			personName: '',
			instagram: ''
		},

		// Graduation
		{
			id: 24,
			src: '/images/photography/graduation3.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Group Graduation',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto bersama saat wisuda',
			personName: '',
			instagram: ''
		},
		{
			id: 25,
			src: '/images/photography/graduation4.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Friends',
			category: 'People',
			orientation: 'portrait',
			description: 'Momen wisuda penuh kenangan',
			personName: '',
			instagram: ''
		},
		{
			id: 26,
			src: '/images/photography/graduation1.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Day',
			category: 'People',
			orientation: 'landscape',
			description: 'Moment wisuda bersama teman-teman',
			personName: '',
			instagram: ''
		},
		{
			id: 27,
			src: '/images/photography/graduation2.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Celebration',
			category: 'People',
			orientation: 'portrait',
			description: 'Perayaan wisuda dengan teman-teman',
			personName: '',
			instagram: ''
		},
		{
			id: 36,
			src: '/images/photography/graduation5.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation with Family',
			category: 'People',
			orientation: 'portrait',
			description: 'Anak wisuda bersama orang tua',
			personName: '',
			instagram: ''
		},
		{
			id: 37,
			src: '/images/photography/graduation6.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Family Graduation',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto keluarga saat wisuda',
			personName: '',
			instagram: ''
		},
		{
			id: 38,
			src: '/images/photography/graduation7.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation Kid',
			category: 'People',
			orientation: 'portrait',
			description: 'Anak kecil dengan latar wisuda',
			personName: '',
			instagram: ''
		},
		{
			id: 43,
			src: '/images/photography/graduation8.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 8',
			category: 'People',
			orientation: 'portrait',
			description: 'Momen wisuda dengan kebanggaan',
			personName: '',
			instagram: ''
		},
		{
			id: 44,
			src: '/images/photography/graduation9.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 9',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret wisuda dengan senyum bahagia',
			personName: '',
			instagram: ''
		},
		{
			id: 45,
			src: '/images/photography/graduation10.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 10',
			category: 'People',
			orientation: 'portrait',
			description: 'Moment wisuda penuh haru',
			personName: '',
			instagram: ''
		},
		{
			id: 46,
			src: '/images/photography/graduation11.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 11',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto wisuda bersama keluarga',
			personName: '',
			instagram: ''
		},
		{
			id: 47,
			src: '/images/photography/graduation12.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 12',
			category: 'People',
			orientation: 'landscape',
			description: 'Perayaan wisuda dengan teman-teman',
			personName: '',
			instagram: ''
		},
		{
			id: 48,
			src: '/images/photography/graduation13.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 13',
			category: 'People',
			orientation: 'portrait',
			description: 'Wisuda dengan toga dan topi',
			personName: '',
			instagram: ''
		},
		{
			id: 49,
			src: '/images/photography/graduation14.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 14',
			category: 'People',
			orientation: 'portrait',
			description: 'Moment wisuda yang berkesan',
			personName: '',
			instagram: ''
		},
		{
			id: 50,
			src: '/images/photography/graduation15.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 15',
			category: 'People',
			orientation: 'portrait',
			description: 'Foto wisuda dengan keluarga',
			personName: '',
			instagram: ''
		},
		{
			id: 51,
			src: '/images/photography/graduation16.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 16',
			category: 'People',
			orientation: 'portrait',
			description: 'Wisuda dengan penuh emosi',
			personName: '',
			instagram: ''
		},
		{
			id: 52,
			src: '/images/photography/graduation17.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 17',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto grup wisuda besar',
			personName: '',
			instagram: ''
		},
		{
			id: 53,
			src: '/images/photography/graduation18.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 18',
			category: 'People',
			orientation: 'portrait',
			description: 'Momen wisuda yang tak terlupakan',
			personName: '',
			instagram: ''
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
		}
	];

	let selectedCategory = 'All';
	let selectedOrientation = 'All';
	let selectedPhoto: Photo | null = null;
	let filteredPhotos: Photo[] = photos;
	let categories = ['All', 'People', 'Cosplay', 'Others'];
	let orientations = ['All', 'Portrait', 'Landscape'];
	let isLoading = true;
	let mobileMenuOpen = false;

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

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Navbar -->
<nav class="fixed top-0 right-0 left-0 z-40 bg-white/90 shadow-lg backdrop-blur-lg">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center space-x-2">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500"
					>
						<svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<span class="text-xl font-bold text-gray-900">PhotoGallery</span>
				</a>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					<a
						href="#home"
						class="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-sky-600"
						>Home</a
					>
					<a
						href="#gallery"
						class="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-sky-600"
						>Gallery</a
					>
					<a
						href="#about"
						class="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-sky-600"
						>About</a
					>
					<a
						href="#contact"
						class="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-sky-600"
						>Contact</a
					>
				</div>
			</div>

			<!-- Social Links -->
			<div class="hidden items-center space-x-4 md:flex">
				<a href="#" class="text-gray-400 transition-colors hover:text-sky-600">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001.012.017 0z"
						/>
					</svg>
				</a>
				<a href="#" class="text-gray-400 transition-colors hover:text-sky-600">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
						/>
					</svg>
				</a>
				<a href="#" class="text-gray-400 transition-colors hover:text-sky-600">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
						/>
					</svg>
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
					on:click={toggleMobileMenu}
				>
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						{#if !mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden" transition:fade={{ duration: 200 }}>
			<div class="space-y-1 border-t bg-white px-2 pt-2 pb-3 sm:px-3">
				<a
					href="#home"
					class="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-sky-600"
					>Home</a
				>
				<a
					href="#gallery"
					class="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-sky-600"
					>Gallery</a
				>
				<a
					href="#about"
					class="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-sky-600"
					>About</a
				>
				<a
					href="#contact"
					class="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-sky-600"
					>Contact</a
				>

				<!-- Mobile Social Links -->
				<div class="flex space-x-4 px-3 py-2">
					<a href="#" class="text-gray-400 transition-colors hover:text-sky-600">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001.012.017 0z"
							/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-sky-600">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-sky-600">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>

<!-- Main Content dengan padding top untuk navbar -->
<div class="pt-16">
	<!-- Wrapper dengan gradiasi langit dan awan background -->
	<div
		class="relative min-h-screen bg-[linear-gradient(to_bottom,#3AA7E0_0%,#54C2F0_50%,#9EE7FF_100%)]"
		id="home"
	>
		<!-- Background awan yang repeat -->
		<div
			class="absolute inset-0 opacity-90"
			style="background-image: url('/images/awan-bg.png'); background-size: 1200px auto; background-position: center top; background-repeat: repeat;"
		></div>

		<!-- Hero Section -->
		<section class="relative z-10 overflow-hidden">
			<div class="relative mx-auto max-w-7xl px-6 py-12 text-center lg:px-12 lg:py-20">
				<!-- Judul Toy Story Style -->
				<h1
					class="mb-6 text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
				>
					<!-- Photography dengan stroke biru lebih tebal -->
					<span
						class="block font-['Luckiest_Guy'] text-[#FFD12D]
					[text-shadow:_-5px_5px_0_#1E3A8A,_5px_5px_0_#1E3A8A,_5px_-5px_0_#1E3A8A,_-5px_-5px_0_#1E3A8A]"
					>
						Photography
					</span>

					<!-- Gallery tanpa border, ada jarak antar huruf -->
					<span
						class="mt-4 inline-block rounded-sm bg-[#D62828] px-6 py-2 font-['Luckiest_Guy'] tracking-[0.15em] text-[#FFD12D] drop-shadow-[4px_4px_0px_#00000055]"
					>
						Gallery
					</span>
				</h1>

				<!-- Subtitle -->
				<p
					class="mx-auto max-w-xl text-base text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] sm:text-lg md:text-xl lg:text-2xl"
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
				id="gallery"
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

							<h2 class="mb-4 text-xl font-bold text-gray-900 lg:text-2xl">
								{selectedPhoto.title}
							</h2>
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
									<a
										href="https://instagram.com/{selectedPhoto.instagram.replace('@', '')}"
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm text-purple-600 transition-colors hover:text-purple-800 lg:text-base"
									>
										{selectedPhoto.instagram}
									</a>
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
</div>

<!-- Footer -->
<footer class="bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Logo dan Deskripsi -->
			<div class="md:col-span-2">
				<div class="mb-4 flex items-center space-x-2">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500"
					>
						<svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<span class="text-xl font-bold">PhotoGallery</span>
				</div>
				<p class="mb-4 max-w-md text-gray-300">
					Capturing life's beautiful moments through photography. Every image tells a story, every
					frame holds a memory.
				</p>
				<div class="flex space-x-4">
					<a href="#" class="text-gray-400 transition-colors hover:text-white">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001.012.017 0z"
							/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-white">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-white">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
					<a href="#" class="text-gray-400 transition-colors hover:text-white">
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
				<ul class="space-y-2">
					<li><a href="#home" class="text-gray-300 transition-colors hover:text-white">Home</a></li>
					<li>
						<a href="#gallery" class="text-gray-300 transition-colors hover:text-white">Gallery</a>
					</li>
					<li>
						<a href="#about" class="text-gray-300 transition-colors hover:text-white">About</a>
					</li>
					<li>
						<a href="#contact" class="text-gray-300 transition-colors hover:text-white">Contact</a>
					</li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div class="mt-8 border-t border-gray-800 pt-8" id="contact">
				<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div class="flex items-center space-x-3">
						<div class="rounded-lg bg-sky-500/20 p-2">
							<svg
								class="h-5 w-5 text-sky-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C16.5 21 13 21 13 18.5c0-.5 0-1 0-1.5"
								/>
							</svg>
						</div>
						<div>
							<p class="text-sm text-gray-400">Phone</p>
							<p class="text-white">+62851 8274 8023</p>
						</div>
					</div>

					<div class="flex items-center space-x-3">
						<div class="rounded-lg bg-green-500/20 p-2">
							<svg
								class="h-5 w-5 text-green-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<p class="text-sm text-gray-400">Email</p>
							<p class="text-white">gifary024@gmail.com</p>
						</div>
					</div>

					<div class="flex items-center space-x-3">
						<div class="rounded-lg bg-red-500/20 p-2">
							<svg
								class="h-5 w-5 text-red-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<div>
							<p class="text-sm text-gray-400">Location</p>
							<p class="text-white">Binjai, North Sumatra</p>
						</div>
					</div>
				</div>
			</div>

			<!-- About Section -->
			<div class="mt-8 border-t border-gray-800 pt-8" id="about">
				<div class="text-center">
					<h2 class="mb-4 text-2xl font-bold">About Me</h2>
					<p class="mx-auto mb-6 max-w-3xl text-gray-300">
						Passionate photographer based in Binjai, North Sumatra. I specialize in portrait
						photography, cosplay shoots, and capturing life's precious moments. With years of
						experience behind the lens, I believe every photo should tell a story and evoke
						emotions. From candid street photography to professional portraits, I'm dedicated to
						creating images that you'll treasure forever.
					</p>
				</div>
			</div>

			<!-- Copyright -->
			<div class="mt-8 border-t border-gray-800 pt-8">
				<div class="flex flex-col items-center justify-between md:flex-row">
					<p class="text-sm text-gray-400">© 2024 PhotoGallery. All rights reserved.</p>
					<div class="mt-4 flex space-x-6 md:mt-0">
						<a href="#" class="text-sm text-gray-400 transition-colors hover:text-white"
							>Privacy Policy</a
						>
						<a href="#" class="text-sm text-gray-400 transition-colors hover:text-white"
							>Terms of Service</a
						>
						<a href="#" class="text-sm text-gray-400 transition-colors hover:text-white"
							>Cookie Policy</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

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

	/* Smooth scrolling untuk anchor links */
	html {
		scroll-behavior: smooth;
	}

	/* Custom scrollbar */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #1f2937;
	}

	::-webkit-scrollbar-thumb {
		background: #374151;
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #4b5563;
	}
</style>
