<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let mounted = false;
	let activeSection = 'hero';

	// Sample data - ganti dengan data Anda yang sebenarnya
	const profileData = {
		name: 'Muhammad Gifary',
		title: 'Full Stack Developer • Barista • Photographer',
		description:
			'A passionate full stack developer who creates innovative digital solutions, a skilled barista crafting the perfect cup, and a photographer who captures stories through every frame.',
		email: 'gifary024@email.com',
		phone: '+62 851-8274-8023'
	};

	const coffeePhotos = [
		{
			id: 1,
			url: '/images/latte1.jpeg',
			alt: 'Latte Art ',
			caption: 'Latte Art'
		},
		{
			id: 2,
			url: '/images/latte2.jpeg',
			alt: 'Latte Art Rosetta',
			caption: 'Latte Art'
		},
		{
			id: 3,
			url: '/images/latte3.jpeg',
			alt: 'Latte Art Rosetta',
			caption: 'Latte Art'
		},
		{
			id: 4,
			url: '/images/blkk.jpeg',
			alt: 'Coffee Training',
			caption: 'Barista Training'
		}
	];

	const websites = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description: 'Modern e-commerce solution with Flutter mobile app and Laravel backend',
			image: '/images/ecommerce-preview.jpg',
			technologies: ['Flutter', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
			liveUrl: 'https://example-ecommerce.com',
			category: 'Full Stack'
		},
		{
			id: 2,
			title: 'Coffee Shop Management',
			description: 'Complete POS system for coffee shop with inventory management',
			image: '/images/coffee-pos.jpg',
			technologies: ['SvelteKit', 'TypeScript', 'PostgreSQL'],
			liveUrl: 'https://coffee-pos.com',
			category: 'Web App'
		},
		{
			id: 3,
			title: 'Photography Portfolio',
			description: 'Responsive portfolio website for professional photographers',
			image: '/images/photo-portfolio.jpg',
			technologies: ['SvelteKit', 'Tailwind CSS', 'TypeScript'],
			liveUrl: 'https://photo-portfolio.com',
			category: 'Portfolio'
		}
	];

	const certificates = [
		{
			id: 1,
			title: 'Barista Certification BLKK 2024 ',
			issuer: 'BLKK Yayasan Sahabat Anak Bangsa',
			year: '2024',
			url: '/images/serti1.jpeg'
		},
		{
			id: 2,
			title: 'Barista Certification BNSP 2024',
			issuer: 'Badan Nasional Sertifikasi Profesi',
			year: '2024',
			url: '/images/serti2.jpeg'
		},
		{
			id: 3,
			title: 'Seminar Nasional',
			issuer: 'Universitas Sumatra Utara',
			year: '2025',
			url: '/images/serti3.jpeg'
		}
	];

	const skills = [
		{
			category: 'Development',
			items: [
				{ name: 'Flutter', icon: 'flutter' },
				{ name: 'SvelteKit', icon: 'svelte' },
				{ name: 'TypeScript', icon: 'typescript' },
				{ name: 'Laravel', icon: 'laravel' },
				{ name: 'Tailwind CSS', icon: 'tailwind' },
				{ name: 'PostgreSQL', icon: 'postgresql' }
			]
		},
		{
			category: 'Barista Skills',
			items: [
				{ name: 'Espresso Extraction', icon: 'coffee' },
				{ name: 'Latte Art', icon: 'coffee' },
				{ name: 'Mocktail', icon: 'coffee' },
				{ name: 'Brewing Methods', icon: 'coffee' },
				{ name: 'Milk-Based Drinks', icon: 'coffee' }
			]
		},
		{
			category: 'Tools & Others',
			items: [
				{ name: 'Git', icon: 'git' },
				{ name: 'VS Code', icon: 'vscode' },
				{ name: 'Android Studio', icon: 'android' },
				{ name: 'Laragon', icon: 'laragon' }
			]
		},
		{
			category: 'Photography',
			items: [
				{ name: 'Model Photography', icon: 'camera' },
				{ name: 'Photo Editing', icon: 'edit' },
				{ name: 'Adobe Lightroom', icon: 'lightroom' },
				{ name: 'Adobe Photoshop', icon: 'photoshop' }
			]
		}
	];

	onMount(() => {
		mounted = true;

		// Intersection Observer untuk mendeteksi section yang aktif
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.5 }
		);

		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});

	function scrollToSection(sectionId: string): void {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}

	function getSkillColors(iconName: string): { default: string; hover: string } {
		const colorMap: Record<string, { default: string; hover: string }> = {
			flutter: { default: 'bg-blue-100', hover: 'group-hover:bg-blue-200' },
			dart: { default: 'bg-cyan-100', hover: 'group-hover:bg-cyan-200' },
			android: { default: 'bg-green-100', hover: 'group-hover:bg-green-200' },
			ios: { default: 'bg-gray-100', hover: 'group-hover:bg-gray-200' },
			svelte: { default: 'bg-orange-100', hover: 'group-hover:bg-orange-200' },
			typescript: { default: 'bg-blue-100', hover: 'group-hover:bg-blue-200' },
			tailwind: { default: 'bg-teal-100', hover: 'group-hover:bg-teal-200' },
			laravel: { default: 'bg-red-100', hover: 'group-hover:bg-red-200' },
			php: { default: 'bg-purple-100', hover: 'group-hover:bg-purple-200' },
			postgresql: { default: 'bg-blue-100', hover: 'group-hover:bg-blue-200' },
			laragon: { default: 'bg-indigo-100', hover: 'group-hover:bg-indigo-200' },
			git: { default: 'bg-orange-100', hover: 'group-hover:bg-orange-200' },
			vscode: { default: 'bg-blue-100', hover: 'group-hover:bg-blue-200' },
			camera: { default: 'bg-gray-100', hover: 'group-hover:bg-gray-200' },
			edit: { default: 'bg-green-100', hover: 'group-hover:bg-green-200' },
			lightroom: { default: 'bg-blue-100', hover: 'group-hover:bg-blue-200' },
			photoshop: { default: 'bg-indigo-100', hover: 'group-hover:bg-indigo-200' },
			coffee: { default: 'bg-amber-100', hover: 'group-hover:bg-amber-200' }
		};
		return colorMap[iconName] || { default: 'bg-gray-100', hover: 'group-hover:bg-gray-200' };
	}

	function getSkillIconColors(iconName: string): { default: string; hover: string } {
		const iconColorMap: Record<string, { default: string; hover: string }> = {
			flutter: { default: 'text-blue-600', hover: 'group-hover:text-blue-700' },
			dart: { default: 'text-cyan-600', hover: 'group-hover:text-cyan-700' },
			android: { default: 'text-green-600', hover: 'group-hover:text-green-700' },
			ios: { default: 'text-gray-600', hover: 'group-hover:text-gray-700' },
			svelte: { default: 'text-orange-600', hover: 'group-hover:text-orange-700' },
			typescript: { default: 'text-blue-600', hover: 'group-hover:text-blue-700' },
			tailwind: { default: 'text-teal-600', hover: 'group-hover:text-teal-700' },
			laravel: { default: 'text-red-600', hover: 'group-hover:text-red-700' },
			php: { default: 'text-purple-600', hover: 'group-hover:text-purple-700' },
			postgresql: { default: 'text-blue-600', hover: 'group-hover:text-blue-700' },
			laragon: { default: 'text-indigo-600', hover: 'group-hover:text-indigo-700' },
			git: { default: 'text-orange-600', hover: 'group-hover:text-orange-700' },
			vscode: { default: 'text-blue-600', hover: 'group-hover:text-blue-700' },
			camera: { default: 'text-gray-600', hover: 'group-hover:text-gray-700' },
			edit: { default: 'text-green-600', hover: 'group-hover:text-green-700' },
			lightroom: { default: 'text-blue-600', hover: 'group-hover:text-blue-700' },
			photoshop: { default: 'text-indigo-600', hover: 'group-hover:text-indigo-700' },
			coffee: { default: 'text-amber-600', hover: 'group-hover:text-amber-700' }
		};
		return (
			iconColorMap[iconName] || { default: 'text-gray-600', hover: 'group-hover:text-gray-700' }
		);
	}

	function getSkillIcon(iconName: string): string {
		const icons: Record<string, string> = {
			flutter:
				'M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z',
			dart: 'M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105L4.105 4.105z',
			android:
				'M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5046C15.5027 8.2006 13.8018 7.6739 12.0001 7.6739c-1.8017 0-3.5026.5267-4.6187 1.3085L5.3591 5.5488a.4162.4162 0 00-.5972-.1518.4162.4162 0 00-.1518.5972L6.5954 9.321C3.5465 11.1013 1.4499 14.215 1.4499 17.8146c0 .1626.1184.2939.2824.2939h20.5355c.1641 0 .2824-.1313.2824-.2939 0-3.5996-2.0966-6.7133-5.1454-8.4936',
			ios: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z',
			svelte:
				'M26.47 5.78A14.13 14.13 0 0 0 17.2.5a2.32 2.32 0 0 0-1.8.37l-4.28 2.28a2.17 2.17 0 0 0-.95 1.77A14.85 14.85 0 0 0 5.22 18c.39.65.9 1.21 1.5 1.67l2.13 1.56a2.23 2.23 0 0 0 2.62.18l.08-.05a2.19 2.19 0 0 0 1-1.88 14.85 14.85 0 0 0 4.93-13.06 2.16 2.16 0 0 0-.5-1.5z',
			typescript:
				'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
			tailwind:
				'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
			laravel:
				'M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.021.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.018-.013.042-.02.065-.031.007-.003.012-.01.02-.013L4.4.054a.375.375 0 01.375 0L8.602 2.43c.008.003.013.01.02.013a.375.375 0 01.065.031c.012.009.025.018.037.027.013.014.024.03.033.045.008.011.019.02.023.033.01.02.017.038.023.058.005.011.011.02.014.032.009.032.014.065.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.028.018-.013.044-.02.067-.031.006-.003.011-.01.02-.013L16.4.054a.375.375 0 01.375 0l3.826 2.197c.008.003.014.01.02.013.023.011.049.018.067.031.012.007.025.016.037.028.012.013.021.028.033.043.007.013.018.021.025.033.01.02.017.038.024.059.003.012.01.021.013.032.009.032.013.065.013.098v14.77c0 .1-.042.191-.111.255a.378.378 0 01-.189.071z',
			php: 'M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.279-.365.297-.244.458-.565.458-.97 0-.306-.084-.542-.253-.708-.17-.165-.421-.25-.75-.25-.112 0-.219.003-.319.01-.1.007-.174.014-.223.021-.049.007-.085.013-.107.018zm-.627-3.214c.285 0 .506.086.664.257.157.172.236.402.236.69 0 .399-.158.732-.475.999-.317.267-.706.4-1.167.4h-.802l.545-2.346z',
			postgresql:
				'M23.111 5.498c-.096-.665-.518-1.23-1.234-1.645C20.674 3.35 18.857 3 16.5 3c-2.357 0-4.174.35-5.377.853-.716.415-1.138.98-1.234 1.645-.093.642.025 1.31.343 1.939.318.63.774 1.139 1.297 1.488l.02.014c.523.35 1.099.561 1.699.561.6 0 1.176-.211 1.699-.561l.02-.014c.523-.35.979-.858 1.297-1.488.318-.63.436-1.297.343-1.939z',
			laragon:
				'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
			git: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.713.713 1.87 0 2.583-.714.714-1.87.714-2.584 0-.714-.714-.714-1.87 0-2.584.177-.177.378-.314.598-.421V8.743c-.22-.105-.42-.242-.598-.421-.542-.544-.676-1.342-.402-2.009L7.617 3.56.45 10.724c-.603.605-.603 1.582 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187',
			vscode:
				'M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z',
			camera:
				'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
			edit: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
			lightroom:
				'M6.5 3C4.57 3 3 4.57 3 6.5S4.57 10 6.5 10 10 8.43 10 6.5 8.43 3 6.5 3zm8 8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z',
			photoshop:
				'M19.875 3H4.125C3.504 3 3 3.504 3 4.125v15.75C3 20.496 3.504 21 4.125 21h15.75c.621 0 1.125-.504 1.125-1.125V4.125C21 3.504 20.496 3 19.875 3zM12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z',
			coffee:
				'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
		};
		return icons[iconName] || icons.camera;
	}
</script>

<svelte:head>
	<title>{profileData.name} - Portfolio</title>
	<meta name="description" content="Portfolio {profileData.name} - {profileData.title}" />
</svelte:head>

<!-- Navigation -->
<nav
	class="fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-shrink-0">
				<h1
					class="text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600"
				>
					{profileData.name}
				</h1>
			</div>

			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					{#each ['hero', 'about', 'websites', 'coffee', 'certificates', 'skills', 'contact'] as section}
						<button
							on:click={() => scrollToSection(section)}
							class="px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-blue-600 {activeSection ===
							section
								? 'border-b-2 border-blue-600 text-blue-600'
								: 'text-gray-700'}"
						>
							{section === 'hero'
								? 'Home'
								: section === 'coffee'
									? 'Coffee Gallery'
									: section === 'websites'
										? 'My Work'
										: section.charAt(0).toUpperCase() + section.slice(1)}
						</button>
					{/each}
					<button
						on:click={() => goto('/photography')}
						class="px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:text-purple-600"
					>
						Photography
					</button>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button class="text-gray-700 transition-colors duration-300 hover:text-blue-600">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>

<!-- Hero Section -->
<section
	id="hero"
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-16"
>
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div class="text-center lg:text-left {mounted ? 'animate-fade-in-up' : 'opacity-0'}">
				<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
					Hello, I'm <span
						class="text-orange-500 transition-colors duration-300 hover:text-orange-700"
						>{profileData.name}</span
					>
				</h1>
				<p class="mb-8 text-xl font-light text-gray-600 md:text-2xl">
					{profileData.title}
				</p>
				<p class="mb-10 max-w-2xl text-lg leading-relaxed text-gray-700">
					{profileData.description}
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
					<button
						on:click={() => scrollToSection('websites')}
						class="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-700 hover:shadow-xl"
					>
						View My Work
					</button>
					<button
						on:click={() => scrollToSection('contact')}
						class="rounded-full border-2 border-orange-500 px-8 py-4 font-semibold text-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:text-white"
					>
						Get In Touch
					</button>
				</div>
			</div>

			<div
				class="flex justify-center lg:justify-end {mounted ? 'animate-fade-in-right' : 'opacity-0'}"
			>
				<div class="relative">
					<div
						class="hover:shadow-3xl h-80 w-80 overflow-hidden rounded-full shadow-2xl transition-all duration-500 hover:scale-105 md:h-96 md:w-96"
					>
						<img src="/images/foto.JPG" alt="Profile" class="h-full w-full object-cover" />
					</div>
					<!-- Floating elements -->
					<div
						class="animate-bounce-slow absolute -top-4 -right-4 h-20 w-20 rounded-full bg-orange-200 opacity-80"
					></div>
					<div
						class="animate-bounce-slow absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-amber-200 opacity-80"
						style="animation-delay: 1s;"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="bg-white py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900">About Me</h2>
			<div class="mx-auto h-1 w-24 bg-blue-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Full Stack Developer -->
			<div
				class="group rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200"
				>
					<svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-semibold text-gray-900">Full Stack Developer</h3>
				<p class="text-gray-600">
					Creating innovative mobile and web applications using modern technologies like Flutter,
					SvelteKit, and Laravel.
				</p>
			</div>

			<!-- Barista -->
			<div
				class="group rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 transition-colors duration-300 group-hover:bg-amber-200"
				>
					<svg class="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-semibold text-gray-900">Passionate Barista</h3>
				<p class="text-gray-600">
					A true coffee enthusiast who finds art in every cup — from perfect espresso extraction to
					captivating latte art.
				</p>
			</div>

			<!-- Photographer -->
			<div
				class="group rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				<div
					class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 transition-colors duration-300 group-hover:bg-purple-200"
				>
					<svg
						class="h-8 w-8 text-purple-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
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
				<h3 class="mb-4 text-xl font-semibold text-gray-900">Photographer</h3>
				<p class="text-gray-600">
					Capturing meaningful moments and telling stories through the lens with creativity and
					passion.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- My Websites Section -->
<section id="websites" class="bg-gray-50 py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900">My Work</h2>
			<p class="mb-8 text-xl text-gray-600">A showcase of websites and applications I've built</p>
			<div class="mx-auto h-1 w-24 bg-blue-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each websites as website}
				<div
					class="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
				>
					<div class="relative h-48 overflow-hidden">
						<img
							src={website.image}
							alt={website.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white"
						>
							{website.category}
						</div>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<div class="absolute right-4 bottom-4 left-4">
								<a
									href={website.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="block w-full rounded-lg bg-white/20 px-4 py-2 text-center text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
								>
									View Live
								</a>
							</div>
						</div>
					</div>
					<div class="p-6">
						<h3
							class="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
						>
							{website.title}
						</h3>
						<p class="mb-4 text-gray-600">{website.description}</p>
						<div class="flex flex-wrap gap-2">
							{#each website.technologies as tech}
								<span
									class="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-700"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Photography Section -->
<section id="photography" class="relative bg-black">
	<!-- Curved top border -->
	<div class="absolute top-0 left-0 w-full overflow-hidden">
		<svg
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
			class="relative block h-16 w-full fill-current text-white"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			></path>
		</svg>
	</div>

	<div class="mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white">Photography</h2>
			<p class="mb-8 text-xl text-gray-300">
				Capturing moments through my lens - explore my visual journey
			</p>
			<div class="mx-auto h-1 w-24 bg-red-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- Featured Photo 1 -->
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-800 md:col-span-2 md:row-span-2"
			>
				<img
					src="/api/placeholder/600/400"
					alt="Featured graduation photography"
					class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
				>
					<div class="absolute bottom-6 left-6 text-white">
						<span class="mb-2 block text-sm font-medium text-red-400">Graduation</span>
						<h3 class="text-2xl font-bold">Special Moments</h3>
					</div>
				</div>
			</div>

			<!-- Small Photos -->
			<div class="group relative overflow-hidden rounded-2xl border border-gray-800">
				<img
					src="/api/placeholder/300/300"
					alt="Cosplayer photography"
					class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
				>
					<div class="absolute bottom-4 left-4 text-white">
						<span class="text-sm text-red-400">Cosplayer</span>
					</div>
				</div>
			</div>

			<div class="group relative overflow-hidden rounded-2xl border border-gray-800">
				<img
					src="/api/placeholder/300/300"
					alt="Models photography"
					class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
				>
					<div class="absolute bottom-4 left-4 text-white">
						<span class="text-sm text-red-400">Models</span>
					</div>
				</div>
			</div>

			<div class="group relative overflow-hidden rounded-2xl border border-gray-800">
				<img
					src="/api/placeholder/300/300"
					alt="Other photography"
					class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
				>
					<div class="absolute bottom-4 left-4 text-white">
						<span class="text-sm text-red-400">Others</span>
					</div>
				</div>
			</div>

			<div class="group relative overflow-hidden rounded-2xl border border-gray-800">
				<img
					src="/api/placeholder/300/300"
					alt="Graduation ceremony"
					class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
				>
					<div class="absolute bottom-4 left-4 text-white">
						<span class="text-sm text-red-400">Graduation</span>
					</div>
				</div>
			</div>
		</div>

		<!-- View Gallery Button -->
		<div class="mt-12 text-center">
			<a
				href="/photography"
				class="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-2xl"
			>
				<span>View Full Gallery</span>
				<svg
					class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 7l5 5m0 0l-5 5m5-5H6"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Coffee Gallery Section -->
<section id="coffee" class="bg-white py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900">Coffee Gallery</h2>
			<p class="mb-8 text-xl text-gray-600">
				A collection of latte art photos and beautiful moments in the world of coffee
			</p>
			<div class="mx-auto h-1 w-24 bg-amber-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each coffeePhotos as photo}
				<div
					class="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
				>
					<img
						src={photo.url}
						alt={photo.alt}
						class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<div class="absolute bottom-4 left-4 text-white">
							<h3 class="text-lg font-semibold">{photo.caption}</h3>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Certificates Section -->
<section id="certificates" class="bg-gray-50 py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900">Certificates & Achievements</h2>
			<p class="mb-8 text-xl text-gray-600">
				Certificates and achievements throughout my career journey.
			</p>
			<div class="mx-auto h-1 w-24 bg-blue-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each certificates as cert}
				<div
					class="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
				>
					<div class="relative h-48 overflow-hidden">
						<img
							src={cert.url}
							alt={cert.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white"
						>
							{cert.year}
						</div>
					</div>
					<div class="p-6">
						<h3
							class="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
						>
							{cert.title}
						</h3>
						<p class="font-medium text-gray-600">{cert.issuer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Skills Section -->
<section id="skills" class="bg-white py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900">Skills & Expertise</h2>
			<p class="mb-8 text-xl text-gray-600">
				A diverse set of skills across different technologies and crafts.
			</p>
			<div class="mx-auto h-1 w-24 bg-blue-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
			{#each skills as skillGroup}
				<div
					class="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-50 hover:to-indigo-50 hover:shadow-xl"
				>
					<h3 class="mb-6 text-center text-xl font-semibold text-gray-900">
						{skillGroup.category}
					</h3>
					<div class="grid grid-cols-2 gap-3">
						{#each skillGroup.items as skill}
							<div
								class="group flex flex-col items-center rounded-lg bg-white p-4 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
							>
								<div
									class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 {getSkillColors(
										skill.icon
									).default} {getSkillColors(skill.icon).hover}"
								>
									<svg
										class="h-7 w-7 transition-colors duration-300 {getSkillIconColors(skill.icon)
											.default} {getSkillIconColors(skill.icon).hover}"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d={getSkillIcon(skill.icon)} />
									</svg>
								</div>
								<span
									class="text-center text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-blue-700"
									>{skill.name}</span
								>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="bg-gray-900 py-20 text-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold">Let's Work Together</h2>
			<p class="mb-8 text-xl text-gray-300">Ready to collaborate on exciting projects</p>
			<div class="mx-auto h-1 w-24 bg-blue-600"></div>
		</div>

		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			<div>
				<h3 class="mb-6 text-2xl font-semibold">Get In Touch</h3>
				<div class="space-y-4">
					<!-- Email -->
					<div class="group flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-110"
						>
							<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<p class="font-semibold">Email</p>
							<p class="text-gray-300 transition-colors duration-300 group-hover:text-blue-400">
								{profileData.email}
							</p>
						</div>
					</div>

					<!-- Phone -->
					<div class="group flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-110"
						>
							<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div>
							<p class="font-semibold">Phone</p>
							<p class="text-gray-300 transition-colors duration-300 group-hover:text-blue-400">
								{profileData.phone}
							</p>
						</div>
					</div>
				</div>

				<!-- Follow Me -->
				<div class="mt-10">
					<h3 class="mb-4 text-2xl font-semibold">Follow Me</h3>
					<div class="flex space-x-6">
						<!-- Instagram -->
						<a
							href="https://instagram.com/gif_ry02"
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center space-x-2 transition-colors duration-300 hover:text-blue-400"
						>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z"
								/>
							</svg>
							<span>@gif_ry02</span>
						</a>

						<!-- GitHub -->
						<a
							href="https://github.com/gifary500D"
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center space-x-2 transition-colors duration-300 hover:text-blue-400"
						>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2C6.477 2 2 6.486 2 12.014c0 4.425 2.865 8.178 6.839 9.504.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.533 1.034 1.533 1.034.892 1.531 2.341 1.09 2.91.833.09-.647.35-1.09.636-1.34-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.03-2.687-.104-.253-.447-1.274.098-2.656 0 0 .84-.27 2.75 1.026a9.564 9.564 0 012.5-.336c.85.004 1.705.115 2.5.337 1.908-1.297 2.747-1.027 2.747-1.027.547 1.382.204 2.403.1 2.656.64.7 1.03 1.594 1.03 2.687 0 3.847-2.338 4.694-4.566 4.942.36.31.68.923.68 1.861 0 1.343-.012 2.427-.012 2.757 0 .267.18.576.688.479A10.012 10.012 0 0022 12.014C22 6.486 17.523 2 12 2z"
								/>
							</svg>
							<span>github.com/gifary500D</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-black py-12 text-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div>
				<h3 class="mb-4 text-2xl font-bold text-blue-600">{profileData.name}</h3>
				<p class="mb-4 text-gray-400">{profileData.title}</p>
				<p class="text-sm text-gray-400">
					Passionate about creating innovative mobile and web solutions, crafting the perfect cup of
					coffee, and capturing life's precious moments through photography.
				</p>
			</div>

			<div>
				<h4 class="mb-4 text-lg font-semibold">Quick Links</h4>
				<div class="space-y-2">
					{#each ['About', 'My Work', 'Coffee Gallery', 'Certificates', 'Skills', 'Contact'] as link}
						<button
							on:click={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
							class="block text-sm text-gray-400 transition-colors duration-300 hover:text-blue-600"
						>
							{link}
						</button>
					{/each}
				</div>
			</div>

			<div>
				<h4 class="mb-4 text-lg font-semibold">Services</h4>
				<div class="space-y-2">
					<p class="text-sm text-gray-400">• Mobile App Development</p>
					<p class="text-sm text-gray-400">• Web Development</p>
					<p class="text-sm text-gray-400">• Photography Services</p>
					<p class="text-sm text-gray-400">• Barista Consultation</p>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-800 pt-8 text-center">
			<p class="text-sm text-gray-400">
				© 2024 {profileData.name}. All rights reserved. Made with ❤️ and lots of ☕
			</p>
		</div>
	</div>
</footer>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			'Roboto',
			sans-serif;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeInRight {
		from {
			opacity: 0;
			transform: translateX(30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes bounceSlow {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	.animate-fade-in-up {
		animation: fadeInUp 0.8s ease-out;
	}

	.animate-fade-in-right {
		animation: fadeInRight 0.8s ease-out 0.3s both;
	}

	.animate-bounce-slow {
		animation: bounceSlow 3s infinite;
	}

	/* Custom scrollbar */
	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #f1f1f1;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: #3b82f6;
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: #2563eb;
	}
</style>
