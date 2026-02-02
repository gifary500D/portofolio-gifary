<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import CategoryDropdown from '$lib/components/CategoryDropdown.svelte';
	import PhotoGrid from '$lib/components/PhotoGrid.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const whatsappNumber = '6285182748023';
	const message = 'Halo, saya ingin konsultasi tentang jasa foto Anda 📸';
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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

	function shuffleArray<T>(array: T[]): T[] {
		let shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}


let photos: Photo[] = [
		// ========================
		// PEOPLE CATEGORY
		// ========================
		{
			id: 1,
			src: '/images/photography/people1.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 1',
			category: 'People',
			orientation: 'landscape',
			description: 'Foto candid outdoor',
			personName: '',
			instagram: ''
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
			description: 'Foto Cosplayer',
			personName: 'Litha',
			instagram: 'arxxl_yn'
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
			description: 'Potret candid di event Ulang tahun Kota Binjai',
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
			id: 12,
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
			id: 13,
			src: '/images/photography/people13.jpeg',
			alt: 'People Portrait',
			title: 'Aldi D Pamah',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret pria duduk di pinggir danau',
			personName: 'Aldi Wiranata',
			instagram: 'a.wiranataa_'
		},
		{
			id: 14,
			src: '/images/photography/people14.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 14',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret casual outdoor',
			personName: '',
			instagram: ''
		},
		{
			id: 15,
			src: '/images/photography/people15.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 15',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret casual indoor',
			personName: '',
			instagram: ''
		},
		{
			id: 16,
			src: '/images/photography/people16.jpeg',
			alt: 'People Portrait',
			title: 'Gitaris Man',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret casual indoor',
			personName: 'Femas',
			instagram: 'pemas.z'
		},
		{
			id: 17,
			src: '/images/photography/people17.jpeg',
			alt: 'People Portrait',
			title: 'Bg Risky',
			category: 'People',
			orientation: 'landscape',
			description: 'Potret casual indoor',
			personName: 'Risky',
			instagram: 'riskymanik_'
		},
		{
			id: 18,
			src: '/images/photography/people18.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 18',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret outdoor dengan pencahayaan alami',
			personName: '',
			instagram: ''
		},
		{
			id: 119,
			src: '/images/photography/people19.jpeg',
			alt: 'People Portrait',
			title: 'Foto Outdoor',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret close-up Out Door',
			personName: 'Kak Febry',
			instagram: '@febryayuananda'
		},
		{
			id: 120,
			src: '/images/photography/people20.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 20',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret outdoor casual',
			personName: '',
			instagram: ''
		},
		{
			id: 121,
			src: '/images/photography/people21.jpeg',
			alt: 'People Portrait',
			title: 'Fiaa',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret dengan latar belakang natural',
			personName: 'Fiaa',
			instagram: 'fifiaa_fia'
		},
		{
			id: 122,
			src: '/images/photography/people22.jpeg',
			alt: 'People Portrait',
			title: 'Araa',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret candid outdoor',
			personName: 'Ara',
			instagram: 'raax.a_'
		},
		{
			id: 123,
			src: '/images/photography/people23.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 23',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret casual dengan pencahayaan natural',
			personName: '',
			instagram: ''
		},

		// ========================
		// COSPLAY CATEGORY
		// ========================
		{
			id: 20,
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
			id: 21,
			src: '/images/photography/cosplay2.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Fiaa Cosplay',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter Game',
			personName: 'Fiaa',
			instagram: 'fifiaa_fia'
		},
		{
			id: 22,
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
			id: 23,
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
			id: 24,
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
			id: 25,
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
			id: 26,
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
			id: 27,
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
			id: 28,
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
			id: 30,
			src: '/images/photography/cosplay11.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose 1',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact',
			personName: '',
			instagram: ''
		},
		{
			id: 31,
			src: '/images/photography/cosplay12.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose 2',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact',
			personName: '',
			instagram: ''
		},
		{
			id: 57,
			src: '/images/photography/cosplay13.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose 2',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact',
			personName: '',
			instagram: ''
		},
		{
			id: 58,
			src: '/images/photography/cosplay14.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose 2',
			category: 'Cosplay',
			orientation: 'landscape',
			description: 'Cosplay Dari Anime Genshin Impact',
			personName: '',
			instagram: ''
		},
		{
			id: 225,
			src: '/images/photography/cosplay15.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 15',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan detail kostum',
			personName: '',
			instagram: ''
		},
		{
			id: 226,
			src: '/images/photography/cosplay16.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 16',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter game',
			personName: '',
			instagram: ''
		},
		{
			id: 227,
			src: '/images/photography/cosplay17.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 17',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan pose dramatik',
			personName: '',
			instagram: ''
		},
		{
			id: 228,
			src: '/images/photography/cosplay18.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 18',
			category: 'Cosplay',
			orientation: 'landscape',
			description: 'Cosplay dengan latar event',
			personName: '',
			instagram: ''
		},
		{
			id: 229,
			src: '/images/photography/cosplay19.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Xiuu ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dengan aksesoris lengkap',
			personName: 'Xiuu',
			instagram: 'xiuu_cosu'
		},
		{
			id: 330,
			src: '/images/photography/cosplay20.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay 20',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay karakter populer',
			personName: '',
			instagram: ''
		},
		// ========================
		// GRADUATION CATEGORY
		// ========================
		{
			id: 32,
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
			id: 33,
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
			id: 34,
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
			id: 35,
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
			id: 39,
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
			id: 40,
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
			id: 41,
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
			id: 42,
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
			id: 43,
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
			id: 44,
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
			id: 45,
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
			id: 46,
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
			id: 47,
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
			id: 48,
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
			id: 49,
			src: '/images/photography/graduation18.jpeg',
			alt: 'Graduation Ceremony',
			title: 'Graduation 18',
			category: 'People',
			orientation: 'portrait',
			description: 'Momen wisuda yang tak terlupakan',
			personName: '',
			instagram: ''
		},

		// ========================
		// OTHERS CATEGORY
		// ========================
		{
			id: 50,
			src: '/images/photography/others1.jpeg',
			alt: 'Cat Photo',
			title: 'Cat 1',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto kucing peliharaan'
		},
		{
			id: 51,
			src: '/images/photography/others2.jpeg',
			alt: 'Cat Photo',
			title: 'Cat 2',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto kucing lucu'
		},
		{
			id: 52,
			src: '/images/photography/others3.jpeg',
			alt: 'Cat Photo',
			title: 'Cat 3',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto kucing di rumah'
		},
		{
			id: 53,
			src: '/images/photography/others5.jpeg',
			alt: 'Nature Photo',
			title: 'Nature Detail',
			category: 'Others',
			orientation: 'portrait',
			description: 'Foto close-up dedaunan hijau'
		},
		{
			id: 54,
			src: '/images/photography/others6.jpeg',
			alt: 'Toy Car Photo',
			title: 'Mini Car 1',
			category: 'Others',
			orientation: 'landscape',
			description: 'Mobil mainan hijau dengan bokeh'
		},
		{
			id: 55,
			src: '/images/photography/others4.jpeg',
			alt: 'Toy Car Photo',
			title: 'Mini Car 2',
			category: 'Others',
			orientation: 'landscape',
			description: 'Mobil mainan oranye dengan bokeh malam'
		},
		{
			id: 56,
			src: '/images/photography/others7.jpeg',
			alt: 'Phone Photo',
			title: 'Phone on Floor',
			category: 'Others',
			orientation: 'portrait',
			description: 'HP tergeletak di lantai kayu'
		}
	];


	// ✅ PERBAIKAN: Variabel yang sesuai dengan kode Anda
	let selectedCategory = 'All';
	let selectedOrientation = 'All';
	let selectedCategories = ['All']; // ✅ Untuk CategoryDropdown
	let selectedPhoto: Photo | null = null;
	let filteredPhotos: Photo[] = photos;
	let categories = ['All', 'People', 'Cosplay', 'Others'];
	let orientations = ['All', 'Portrait', 'Landscape'];
	let isLoading = true;
	let mobileMenuOpen = false;

	// ✅ Handler untuk CategoryDropdown
	function handleCategoryChange(event: CustomEvent) {
		selectedCategories = event.detail;
		// Update selectedCategory untuk filter
		if (selectedCategories.includes('All') || selectedCategories.length === 0) {
			selectedCategory = 'All';
		} else {
			selectedCategory = selectedCategories[0]; // Atau logic lain sesuai kebutuhan
		}
	}

	// ✅ Handler untuk PhotoGrid
	function handlePhotoClick(event: CustomEvent<Photo>) {
		openModal(event.detail);
	}

	// ✅ Acak foto saat mount
	onMount(() => {
		photos = shuffleArray(photos);
		filteredPhotos = photos;
		setTimeout(() => {
			isLoading = false;
		}, 1000);
	});

	// ✅ Reactive filter - HANYA SATU yang dipakai
	$: {
		filteredPhotos = photos.filter((photo) => {
			const categoryMatch = selectedCategory === 'All' || photo.category === selectedCategory;
			const orientationMatch =
				selectedOrientation === 'All' || photo.orientation === selectedOrientation.toLowerCase();
			return categoryMatch && orientationMatch;
		});
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
		if (event.key === 'Escape') {
			closeModal();
		}
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
      <!-- Update bagian section filter Anda dengan ini: -->

<section
  class="relative z-50 px-4 pb-8 sm:px-6 lg:px-8"
  id="gallery"
  in:fade={{ duration: 600, delay: 200 }}
>
  <div class="mx-auto max-w-6xl rounded-2xl bg-white/20 p-6 shadow-lg backdrop-blur-lg">
    <!-- Category Filter -->
    <div class="relative z-50 mb-6">
      <h3 class="mb-3 text-center text-sm font-semibold text-gray-700">Kategori</h3>
      <div class="flex justify-center">
        <CategoryDropdown 
          {categories} 
          bind:selectedCategories
          on:change={handleCategoryChange}
        />
      </div>
    </div>

    <!-- Orientation Filter -->
    <div class="relative z-10 mb-4">
      <h3 class="mb-3 text-center text-sm font-semibold text-gray-700">Orientasi</h3>
      <div class="flex flex-wrap justify-center gap-2 md:gap-4">
        {#each orientations as orientation}
          <button
            class="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-sm {selectedOrientation === orientation
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

      <!-- Photo Grid dengan event handler -->
      <PhotoGrid 
        photos={filteredPhotos}
        on:photoClick={handlePhotoClick}
      />
    {/if}

    <!-- Modal -->
    {#if selectedPhoto}
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        in:fade={{ duration: 300 }}
        on:click={closeModal}
        role="dialog"
        aria-modal="true"
      >
        <div
          class="relative max-h-[90vh] max-w-5xl overflow-auto rounded-2xl bg-white shadow-2xl"
          on:click|stopPropagation
        >
          <button
            class="absolute top-4 right-4 z-10 rounded-full bg-gray-900/80 p-2 text-white transition-colors hover:bg-gray-900"
            on:click={closeModal}
            aria-label="Close modal"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="lg:col-span-2">
              <img src={selectedPhoto.src} alt={selectedPhoto.alt} class="h-full w-full object-cover" />
            </div>

            <div class="p-4 text-gray-800 lg:p-8">
              <span class="mb-3 inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm font-medium text-white">
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
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Consultation Section -->
  <section class="relative overflow-hidden">
    <div class="absolute inset-x-0 top-0 h-16 bg-white md:h-24">
      <svg class="absolute bottom-0 h-16 w-full md:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#111827" />
            <stop offset="100%" style="stop-color:#000000" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-20 text-center text-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
      <div class="relative z-10 mx-auto max-w-4xl space-y-6 md:space-y-8">
        <h2 class="px-4 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
          <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Ingin Konsultasi atau Tanya
          </span>
          <br />
          <span class="bg-gradient-to-r from-sky-400 to-cyan-500 bg-clip-text text-transparent">
            Seputar Pemotretan?
          </span>
        </h2>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex w-full transform items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 sm:w-auto md:gap-3 md:px-8 md:py-5 md:text-base"
        >
          <span class="relative z-10">Chat Sekarang via WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  <Footer />
</div>

<style>
  html {
    scroll-behavior: smooth;
  }

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