<!-- src/routes/+page.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let activeSection = 'hero';

	let mounted = false;
	let container: HTMLDivElement | null = null;
	let containerRect: DOMRect | null = null;

	// Thunder positions
	let x1 = 50,
		y1 = 20;
	let x2 = 300,
		y2 = 280;

	// Drag state
	let offsetX1 = 0,
		offsetY1 = 0,
		dragging1 = false;
	let offsetX2 = 0,
		offsetY2 = 0,
		dragging2 = false;

	// Elastic effect state
	let elasticMode1 = false;
	let elasticMode2 = false;

	function handleMouseDown1(event: MouseEvent) {
		event.preventDefault();
		dragging1 = true;

		if (containerRect) {
			offsetX1 = event.clientX - containerRect.left - x1;
			offsetY1 = event.clientY - containerRect.top - y1;
		}
		elasticMode1 = true;
		setTimeout(() => (elasticMode1 = false), 600);
	}

	function handleMouseDown2(event: MouseEvent) {
		event.preventDefault();
		dragging2 = true;

		if (containerRect) {
			offsetX2 = event.clientX - containerRect.left - x2;
			offsetY2 = event.clientY - containerRect.top - y2;
		}
		elasticMode2 = true;
		setTimeout(() => (elasticMode2 = false), 600);
	}

	// ✅ Handler khusus keyboard
	function handleKeyDown1(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			dragging1 = true;
			offsetX1 = 0;
			offsetY1 = 0;
		}
	}

	function handleKeyDown2(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			dragging2 = true;
			offsetX2 = 0;
			offsetY2 = 0;
		}
	}

	function handleMouseMove(event: MouseEvent) {
		if (!containerRect) return;

		const containerX = containerRect.left;
		const containerY = containerRect.top;

		if (dragging1) {
			let newX = event.clientX - containerX - offsetX1;
			let newY = event.clientY - containerY - offsetY1;

			const maxX = containerRect.width - 112;
			const maxY = containerRect.height - 112;

			if (newX < 0) newX = Math.max(newX * 0.3, -20);
			else if (newX > maxX) newX = Math.min(maxX + (newX - maxX) * 0.3, maxX + 20);

			if (newY < 0) newY = Math.max(newY * 0.3, -20);
			else if (newY > maxY) newY = Math.min(maxY + (newY - maxY) * 0.3, maxY + 20);

			x1 = newX;
			y1 = newY;
		}

		if (dragging2) {
			let newX = event.clientX - containerX - offsetX2;
			let newY = event.clientY - containerY - offsetY2;

			const maxX = containerRect.width - 96;
			const maxY = containerRect.height - 96;

			if (newX < 0) newX = Math.max(newX * 0.3, -20);
			else if (newX > maxX) newX = Math.min(maxX + (newX - maxX) * 0.3, maxX + 20);

			if (newY < 0) newY = Math.max(newY * 0.3, -20);
			else if (newY > maxY) newY = Math.min(maxY + (newY - maxY) * 0.3, maxY + 20);

			x2 = newX;
			y2 = newY;
		}
	}

	function handleMouseUp() {
		if (dragging1 && containerRect) {
			x1 = Math.min(Math.max(x1, 0), containerRect.width - 112);
			y1 = Math.min(Math.max(y1, 0), containerRect.height - 112);
			dragging1 = false;
		}
		if (dragging2 && containerRect) {
			x2 = Math.min(Math.max(x2, 0), containerRect.width - 96);
			y2 = Math.min(Math.max(y2, 0), containerRect.height - 96);
			dragging2 = false;
		}
	}

	onMount(() => {
		if (container) containerRect = container.getBoundingClientRect();
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	});

	// Sample data - ganti dengan data Anda yang sebenarnya
	const profileData = {
		name: 'Muhammad Gifary',
		title: 'Web & Mobile Developer • Barista • Photographer',
		description:
			'A passionate web & mobile developer who creates innovative digital solutions, a skilled barista crafting the perfect cup, and a photographer who captures stories through every frame.',
		email: 'gifary024@email.com',
		phone: '+62 851-8274-8023'
	};

	const coffeePhotos = [
		{
			id: 4,
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
			id: 1,
			url: '/images/blkk.jpeg',
			alt: 'Coffee Training',
			caption: 'Barista Training'
		}
	];

	const websites = [
		{
			id: 1,
			title: 'Undangan Pernikahan Digital',
			description:
				'Digital wedding invitation with elegant design, countdown timer, and Google Maps integration.',
			image: '/images/web-undangan-digital.png',
			technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
			liveUrl: 'https://undangan-digital-topaz.vercel.app',
			category: 'Web App'
		},
		{
			id: 2,
			title: 'AM Sports Flooring Company',
			description:
				'Company profile website for sports flooring business with modern responsive design.',
			image: '/images/amflooring-web.png',
			technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
			liveUrl: 'https://amflooring.vercel.app',
			category: 'Company Profile'
		},
		{
			id: 3,
			title: 'Warkop TVB',
			description: 'Coffee shop website – currently under maintenance.',
			image: '/images/tvb-web.png',
			technologies: ['Bootstrap', 'CSS', 'MySql', 'PHP'],
			liveUrl: '', // kosong biar tidak bisa diklik
			category: 'Web App',
			maintenance: true // flag tambahan
		}
	];

	const certificates = [
		{
			id: 1,
			title: 'Barista Certification BNSP 2024 ',
			issuer: 'Badan Nasional Sertifikasi Profesi',
			year: '2024',
			url: '/images/serti1.jpeg'
		},
		{
			id: 2,
			title: 'Barista Certification BLKK 2024  ',
			issuer: 'BLKK Yayasan Sahabat Anak Bangsa',
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
				{ name: 'Dart', icon: 'dart' },
				{ name: 'SvelteKit', icon: 'svelte' },
				{ name: 'TypeScript', icon: 'typescript' },
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
				{ name: 'CapCut', icon: 'capcut' }
			]
		}
	];

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function scrollToSectionMobile(sectionId: string): void {
		scrollToSection(sectionId);
		mobileMenuOpen = false; // Close menu after clicking
	}

	onMount(() => {
		mounted = true;

		// Update container bounds
		function updateBounds() {
			if (container) {
				containerRect = container.getBoundingClientRect();
			}
		}

		updateBounds();

		// Add event listeners
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('resize', updateBounds);

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

		// Cleanup
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('resize', updateBounds);
			observer.disconnect();
		};
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
			postgresql: { default: 'bg-indigo-100', hover: 'group-hover:bg-indigo-200' },
			laragon: { default: 'bg-indigo-100', hover: 'group-hover:bg-indigo-200' },
			git: { default: 'bg-orange-100', hover: 'group-hover:bg-orange-200' },
			vscode: { default: 'bg-blue-100', hover: 'group-hover:bg-blue-200' },
			camera: { default: 'bg-gray-100', hover: 'group-hover:bg-gray-200' },
			edit: { default: 'bg-green-100', hover: 'group-hover:bg-green-200' },
			lightroom: { default: 'bg-purple-100', hover: 'group-hover:bg-purple-200' },
			capcut: { default: 'bg-pink-100', hover: 'group-hover:bg-pink-200' },
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
			postgresql: { default: 'text-indigo-600', hover: 'group-hover:text-indigo-700' },
			laragon: { default: 'text-indigo-600', hover: 'group-hover:text-indigo-700' },
			git: { default: 'text-orange-600', hover: 'group-hover:text-orange-700' },
			vscode: { default: 'text-blue-600', hover: 'group-hover:text-blue-700' },
			camera: { default: 'text-gray-600', hover: 'group-hover:text-gray-700' },
			edit: { default: 'text-green-600', hover: 'group-hover:text-green-700' },
			lightroom: { default: 'text-purple-600', hover: 'group-hover:text-purple-700' },
			capcut: { default: 'text-pink-600', hover: 'group-hover:text-pink-700' },
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
			svelte:
				'M26.47 5.78A14.13 14.13 0 0 0 17.2.5a2.32 2.32 0 0 0-1.8.37l-4.28 2.28a2.17 2.17 0 0 0-.95 1.77A14.85 14.85 0 0 0 5.22 18c.39.65.9 1.21 1.5 1.67l2.13 1.56a2.23 2.23 0 0 0 2.62.18l.08-.05a2.19 2.19 0 0 0 1-1.88 14.85 14.85 0 0 0 4.93-13.06 2.16 2.16 0 0 0-.5-1.5zM19.47 18.22A14.13 14.13 0 0 0 6.53 5.78a2.32 2.32 0 0 0 1.8-.37l4.28-2.28a2.17 2.17 0 0 0 .95-1.77A14.85 14.85 0 0 0 18.78 6c-.39-.65-.9-1.21-1.5-1.67l-2.13-1.56a2.23 2.23 0 0 0-2.62-.18l-.08.05a2.19 2.19 0 0 0-1 1.88 14.85 14.85 0 0 0-4.93 13.06 2.16 2.16 0 0 0 .5 1.5',
			typescript:
				'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
			tailwind:
				'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
			postgresql:
				'M23.111 6.366c0-.455-.465-.82-1.037-.82h-.477C21.114 3.174 19.395 2 17.5 2c-1.895 0-3.614 1.174-4.097 3.546h-.477c-.572 0-1.037.365-1.037.82 0 .277.152.52.382.675v8.959c0 1.38 1.12 2.5 2.5 2.5h3.458c1.38 0 2.5-1.12 2.5-2.5V7.041c.23-.155.382-.398.382-.675zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm1.229 13H15.27c-.966 0-1.75-.784-1.75-1.75V8h5.959v7.25c0 .966-.784 1.75-1.75 1.75z',
			laragon:
				'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
			git: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.713.713 1.87 0 2.583-.714.714-1.87.714-2.584 0-.714-.714-.714-1.87 0-2.584.177-.177.378-.314.598-.421V8.743c-.22-.105-.42-.242-.598-.421-.542-.544-.676-1.342-.402-2.009L7.617 3.56.45 10.724c-.603.605-.603 1.582 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187',
			vscode:
				'M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z',
			camera:
				'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
			edit: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
			lightroom:
				'M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 2h12v16H6V4zm2 2v12h2V8h4v8h2V6H8z',
			capcut:
				'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12.5V9l5.5 3-5.5 3.5zm-2-8v7L4.5 12 9 7.5z',
			coffee:
				'M18.5 3l-.16.02A4.48 4.48 0 0 0 15 7.5V9c0 .28.22.5.5.5s.5-.22.5-.5V7.5A3.5 3.5 0 0 1 19.5 4c.28 0 .5-.22.5-.5S19.78 3 19.5 3h-1z M4 5v6c0 2.55 1.92 4.63 4.39 4.94a5.01 5.01 0 0 0 7.22 0C18.08 15.63 20 13.55 20 11V5H4zm8 10c-1.66 0-3-1.34-3-3V7h6v5c0 1.66-1.34 3-3 3z'
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

			<!-- Desktop Navigation -->
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
				<button
					on:click={toggleMobileMenu}
					class="rounded-md p-2 text-gray-700 transition-colors duration-300 hover:text-blue-600"
					aria-label="Toggle mobile menu"
				>
					{#if mobileMenuOpen}
						<!-- X Icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<!-- Hamburger Icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation Menu -->
		{#if mobileMenuOpen}
			<div class="border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden">
				<div class="space-y-1 px-2 pt-2 pb-3">
					{#each ['hero', 'about', 'websites', 'coffee', 'certificates', 'skills', 'contact'] as section}
						<button
							on:click={() => scrollToSectionMobile(section)}
							class="block w-full rounded-md px-3 py-2 text-left text-base font-medium transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 {activeSection ===
							section
								? 'border-l-4 border-blue-600 bg-blue-50 text-blue-600'
								: 'text-gray-700 hover:bg-gray-50'}"
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
						on:click={() => {
							goto('/photography');
							mobileMenuOpen = false;
						}}
						class="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 transition-all duration-300 hover:bg-purple-50 hover:text-purple-600"
					>
						Photography
					</button>
				</div>
			</div>
		{/if}
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

			<div class="flex justify-center lg:justify-end">
				<div class="relative h-96 w-96 md:h-[450px] md:w-[450px]" bind:this={container}>
					<!-- Background decorative elements -->
					<div class="absolute inset-0">
						<!-- Gradient rings behind photo -->
						<div
							class="absolute top-4 left-4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-orange-200/30 to-amber-200/30 md:h-96 md:w-96"
						></div>
						<div
							class="absolute top-8 left-8 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-orange-300/20 to-amber-300/20 md:h-80 md:w-80"
							style="animation-delay: 0.5s;"
						></div>

						<!-- Floating particles -->
						<div
							class="absolute top-12 right-12 h-3 w-3 animate-bounce rounded-full bg-orange-400"
							style="animation-delay: 0.2s;"
						></div>
						<div
							class="absolute bottom-16 left-8 h-2 w-2 animate-bounce rounded-full bg-amber-400"
							style="animation-delay: 0.8s;"
						></div>
						<div
							class="absolute top-1/3 left-4 h-4 w-4 animate-bounce rounded-full bg-orange-300"
							style="animation-delay: 1.2s;"
						></div>
					</div>

					<!-- Main photo with layered background -->
					<div class="relative top-8 left-8 z-10">
						<!-- Shadow layer -->
						<div
							class="absolute -top-2 -left-2 h-80 w-80 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-400/20 blur-xl md:h-96 md:w-96"
						></div>

						<!-- Photo container -->
						<div
							class="hover:shadow-3xl relative h-80 w-80 overflow-hidden rounded-full bg-gradient-to-br from-orange-100 to-amber-100 p-1 shadow-2xl transition-all duration-500 hover:scale-105 md:h-96 md:w-96"
						>
							<!-- Inner photo -->
							<div class="h-full w-full overflow-hidden rounded-full">
								<img
									src="/images/foto.JPG"
									alt="Profile"
									class="h-full w-full object-cover object-[center_80%]"
								/>
							</div>
						</div>
					</div>

					<!-- Draggable Thunder 1 - Larger -->
					<div
						role="button"
						tabindex="0"
						on:mousedown={handleMouseDown1}
						on:keydown={handleKeyDown1}
						class="absolute cursor-grab transition-all duration-300 ease-out hover:scale-110 active:cursor-grabbing {dragging1
							? 'scale-110 rotate-12'
							: ''}"
						style="top: {y1}px; left: {x1}px; transform: {dragging1
							? 'scale(1.1) rotate(12deg)'
							: 'scale(1)'};"
					>
						<!-- Glow effect -->
						<div class="absolute inset-0 animate-pulse rounded-full bg-yellow-400/30 blur-lg"></div>

						<!-- Thunder icon -->
						<div
							class="relative h-24 w-24 animate-bounce rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-4 shadow-lg md:h-28 md:w-28"
						>
							<img
								src="/images/thunder.png"
								alt="Thunder Icon"
								class="h-full w-full object-contain drop-shadow-lg"
							/>
						</div>
					</div>

					<!-- Draggable Thunder 2 - Medium -->
					<div
						role="button"
						tabindex="0"
						on:mousedown={handleMouseDown2}
						on:keydown={handleKeyDown2}
						class="absolute cursor-grab transition-all duration-300 ease-out hover:scale-110 active:cursor-grabbing {dragging2
							? 'scale-110 rotate-12'
							: ''}"
						style="top: {y2}px; left: {x2}px; transform: {dragging2
							? 'scale(1.1) rotate(12deg)'
							: 'scale(1)'};"
					>
						<!-- Glow effect -->
						<div
							class="absolute inset-0 animate-pulse rounded-full bg-blue-400/30 blur-lg"
							style="animation-delay: 0.7s;"
						></div>

						<!-- Thunder icon -->
						<div
							class="relative h-20 w-20 animate-bounce rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-3 shadow-lg md:h-24 md:w-24"
							style="animation-delay: 0.5s;"
						>
							<img
								src="/images/thunder.png"
								alt="Thunder Icon"
								class="h-full w-full object-contain drop-shadow-lg"
							/>
						</div>
					</div>
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
				<h3 class="mb-4 text-xl font-semibold text-gray-900">Web & Mobile Developer</h3>
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

<!-- Photography Section -->
<section id="photography" class="relative overflow-hidden bg-[#000035]">
	<!-- Curved top border -->
	<div class="absolute top-0 left-0 w-full overflow-hidden">
		<svg
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
			class="relative block h-12 w-full fill-current text-white sm:h-16"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			></path>
		</svg>
	</div>

	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
		<div class="mb-12 text-center sm:mb-16">
			<h2 class="mb-4 text-4xl font-bold text-white">Photography</h2>
			<p class="mb-6 text-lg text-gray-300 sm:mb-8">
				Capturing moments through my lens - explore my visual journey
			</p>
			<div class="mx-auto h-1 w-24 bg-red-600"></div>
		</div>

		<!-- Fixed grid layout -->
		<div class="w-full max-w-full">
			<!-- Mobile: Original 2 column layout -->
			<div class="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
				<!-- Large featured photo -->
				<div
					class="group relative col-span-2 aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl"
				>
					<img
						src="/images/photography/graduation5.jpeg"
						alt="Featured graduation photography"
						class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
					>
						<div class="absolute bottom-4 left-4 text-white sm:bottom-6 sm:left-6">
							<span class="mb-1 block text-sm font-medium text-red-400 sm:text-base"
								>Graduation</span
							>
							<h3 class="text-xl font-bold sm:text-2xl">Special Moments</h3>
						</div>
					</div>
				</div>

				<div class="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
					<img
						src="/images/photography/cosplay6.jpeg"
						alt="Cosplayer photography"
						class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
					>
						<div class="absolute bottom-2 left-2 text-white sm:bottom-3 sm:left-3">
							<span class="text-sm text-red-400">Cosplayer</span>
						</div>
					</div>
				</div>

				<div class="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
					<img
						src="/images/photography/people2.jpeg"
						alt="People photography"
						class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
					>
						<div class="absolute bottom-2 left-2 text-white sm:bottom-3 sm:left-3">
							<span class="text-sm text-red-400">People</span>
						</div>
					</div>
				</div>

				<div class="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
					<img
						src="/images/photography/others3.jpeg"
						alt="Other photography"
						class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
					>
						<div class="absolute bottom-2 left-2 text-white sm:bottom-3 sm:left-3">
							<span class="text-sm text-red-400">Others</span>
						</div>
					</div>
				</div>

				<div class="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
					<img
						src="/images/photography/cosplay2.jpeg"
						alt="Event Cosplayer"
						class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
					>
						<div class="absolute bottom-2 left-2 text-white sm:bottom-3 sm:left-3">
							<span class="text-sm text-red-400">Events</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Desktop: Custom layout - Big + Portrait -->
			<div class="hidden md:block">
				<!-- Top row: Big photo + Portrait photo -->
				<div class="mb-6 grid grid-cols-3 gap-6">
					<!-- Large featured photo (left) - takes 2 columns -->
					<div class="group relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
						<img
							src="/images/photography/graduation5.jpeg"
							alt="Featured graduation photography"
							class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
						>
							<div class="absolute bottom-6 left-6 text-white">
								<span class="mb-1 block text-base font-medium text-red-400">Graduation</span>
								<h3 class="text-2xl font-bold">Special Moments</h3>
							</div>
						</div>
					</div>

					<!-- Portrait photo (right) - takes 1 column -->
					<div class="group relative aspect-[3/5] overflow-hidden rounded-2xl">
						<img
							src="/images/photography/cosplay6.jpeg"
							alt="Cosplayer photography"
							class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
						>
							<div class="absolute bottom-6 left-6 text-white">
								<span class="text-base text-red-400">Cosplayer</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Bottom row: 3 small photos -->
				<div class="grid grid-cols-3 gap-6">
					<div class="group relative aspect-square overflow-hidden rounded-2xl">
						<img
							src="/images/photography/people2.jpeg"
							alt="People photography"
							class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
						>
							<div class="absolute bottom-3 left-3 text-white">
								<span class="text-sm text-red-400">People</span>
							</div>
						</div>
					</div>

					<div class="group relative aspect-square overflow-hidden rounded-2xl">
						<img
							src="/images/photography/others3.jpeg"
							alt="Other photography"
							class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
						>
							<div class="absolute bottom-3 left-3 text-white">
								<span class="text-sm text-red-400">Others</span>
							</div>
						</div>
					</div>

					<div class="group relative aspect-square overflow-hidden rounded-2xl">
						<img
							src="/images/photography/cosplay2.jpeg"
							alt="Event Cosplayer"
							class="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
						>
							<div class="absolute bottom-3 left-3 text-white">
								<span class="text-sm text-red-400">Events</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- View Gallery Button -->
			<div class="mt-10 text-center">
				<a
					href="/photography"
					class="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-2xl"
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
						<div class="absolute top-4 right-4 flex flex-col items-end gap-2">
							<!-- Kategori selalu tampil -->
							<div class="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
								{website.category}
							</div>

							<!-- Marker Maintenance -->
							{#if website.maintenance}
								<div
									class="animate-pulse rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-md"
								>
									Maintenance
								</div>
							{/if}
						</div>

						<div
							class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<div class="absolute right-4 bottom-4 left-4">
								{#if website.maintenance}
									<button
										on:click={() => alert('⚠️ This website is currently under maintenance')}
										class="flex w-full animate-pulse items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 via-orange-500
				       to-yellow-500 px-4 py-2 text-center font-semibold text-white
				       shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 
						   1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 
						   0L4.34 16c-.77 1.333.192 3 1.732 3z"
											/>
										</svg>
										Under Maintenance
									</button>
								{:else}
									<a
										href={website.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="block w-full rounded-lg bg-white/20 px-4 py-2 text-center text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
									>
										View Live
									</a>
								{/if}
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
<!-- My Coffe Section -->
<section
	id="coffee"
	class="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20"
>
	<!-- Top Border -->
	<div class="absolute top-0 left-0 w-full overflow-hidden">
		<svg
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
			class="relative block h-12 w-full fill-current text-white sm:h-16"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			></path>
		</svg>
	</div>

	<!-- Background decorations -->
	<div class="absolute top-10 left-10 h-32 w-32 rounded-full bg-amber-200/20 blur-3xl"></div>
	<div class="absolute right-20 bottom-20 h-48 w-48 rounded-full bg-orange-300/20 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div
				class="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-700"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
					<path
						d="M3 5a2 2 0 012-2h1a3 3 0 003 3h2a3 3 0 003-3h1a2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
					/>
				</svg>
				<span class="text-sm font-medium">Coffee Gallery</span>
			</div>
			<h2 class="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl">
				The Art of <span
					class="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
					>Coffee</span
				>
			</h2>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
				A collection of latte art photos and beautiful moments in the world of coffee
			</p>
			<div
				class="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-amber-600 to-orange-600"
			></div>
		</div>

		<!-- Desktop: Masonry-style grid | Mobile: Featured + Grid -->
		<!-- Mobile Layout -->
		<div class="block sm:hidden">
			{#if coffeePhotos.length > 0}
				<!-- Featured large photo -->
				<div
					class="group relative mb-6 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
				>
					<div class="relative overflow-hidden">
						<img
							src={coffeePhotos[0].url}
							alt={coffeePhotos[0].alt}
							class="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
						>
							<div class="absolute right-4 bottom-4 left-4 text-white">
								<h3 class="mb-1 text-lg font-bold">{coffeePhotos[0].caption}</h3>
								<div class="flex items-center gap-2 text-sm text-amber-200">
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
									<span>Featured</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Small photos grid -->
				{#if coffeePhotos.length > 1}
					<div class="grid grid-cols-2 gap-4">
						{#each coffeePhotos.slice(1) as photo, index}
							<div
								class="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
							>
								<div class="relative overflow-hidden">
									<img
										src={photo.url}
										alt={photo.alt}
										class="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
									>
										<div class="absolute right-2 bottom-2 left-2 text-white">
											<h3 class="mb-1 text-sm font-bold">{photo.caption}</h3>
											<div class="flex items-center gap-1 text-xs text-amber-200">
												<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
													<path
														d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
													/>
												</svg>
												<span>Latte Art</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			{/if}
		</div>

		<!-- Desktop Layout -->
		<div class="hidden columns-1 gap-6 sm:block sm:columns-2 lg:columns-3 xl:columns-4">
			{#each coffeePhotos as photo, index}
				<div
					class="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
					style="transform: translateY({index % 2 === 0 ? '0' : '20px'})"
				>
					<div class="relative overflow-hidden">
						<img
							src={photo.url}
							alt={photo.alt}
							class="w-full object-cover transition-transform duration-700 group-hover:scale-110"
							style="height: {280 + (index % 3) * 40}px"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
						>
							<div class="absolute right-4 bottom-4 left-4 text-white">
								<h3 class="mb-1 text-lg font-bold">{photo.caption}</h3>
								<div class="flex items-center gap-2 text-sm text-amber-200">
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
									<span>Latte Art</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Certificates Section -->
<section
	id="certificates"
	class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20"
>
	<!-- Top Border -->
	<div class="absolute top-0 left-0 w-full overflow-hidden">
		<svg
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
			class="relative block h-12 w-full fill-current text-amber-50 sm:h-16"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			></path>
		</svg>
	</div>

	<!-- Animated background elements -->
	<div class="absolute inset-0">
		<div
			class="absolute top-1/4 left-10 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
		></div>
		<div
			class="absolute right-10 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-indigo-500/10 blur-3xl"
			style="animation-delay: 2s;"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-purple-500/5 blur-3xl"
			style="animation-delay: 4s;"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-20 text-center">
			<div
				class="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-blue-300 backdrop-blur-sm"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="text-sm font-medium">Achievements</span>
			</div>
			<h2 class="mb-6 text-5xl font-bold text-white sm:text-6xl">
				<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
					>Certificates</span
				> & Achievements
			</h2>
			<p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
				Certificates and achievements throughout my career journey, showcasing continuous learning
				and professional growth.
			</p>
			<div
				class="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
			></div>
		</div>

		<!-- Desktop: 2 columns grid | Mobile: Featured + Grid -->
		<!-- Mobile Layout -->
		<div class="block sm:hidden">
			{#if certificates.length > 0}
				<!-- Featured large certificate -->
				<div
					class="group relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
				>
					<!-- Certificate image with enhanced overlay -->
					<div class="relative h-64 overflow-hidden">
						<img
							src={certificates[0].url}
							alt={certificates[0].title}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
						></div>

						<!-- Year badge -->
						<div
							class="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg"
						>
							{certificates[0].year}
						</div>

						<!-- Achievement icon -->
						<div class="absolute top-4 left-4 rounded-full bg-white/20 p-2 backdrop-blur-sm">
							<svg class="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>

						<!-- Featured label -->
						<div class="absolute bottom-4 left-4">
							<span
								class="rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 px-3 py-1 text-xs font-bold text-white shadow-lg"
							>
								Featured
							</span>
						</div>
					</div>

					<!-- Certificate details -->
					<div class="p-6">
						<h3
							class="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400"
						>
							{certificates[0].title}
						</h3>
						<p class="mb-4 font-semibold text-gray-300">{certificates[0].issuer}</p>

						<!-- Progress indicator -->
						<div class="flex items-center gap-2 text-sm text-gray-400">
							<div class="h-1 flex-1 overflow-hidden rounded-full bg-gray-700">
								<div
									class="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover:w-full"
									style="width: 100%"
								></div>
							</div>
							<span class="font-medium text-blue-400">Verified</span>
						</div>
					</div>

					<!-- Hover effect overlay -->
					<div
						class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					></div>
				</div>

				<!-- Small certificates grid -->
				{#if certificates.length > 1}
					<div class="grid grid-cols-1 gap-4">
						{#each certificates.slice(1) as cert, index}
							<div
								class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
							>
								<div class="flex">
									<!-- Certificate image -->
									<div class="relative h-24 w-24 flex-shrink-0 overflow-hidden">
										<img
											src={cert.url}
											alt={cert.title}
											class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div
											class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
										></div>
									</div>

									<!-- Certificate details -->
									<div class="flex-1 p-4">
										<h3
											class="mb-1 text-sm font-bold text-white transition-colors duration-300 group-hover:text-blue-400"
										>
											{cert.title}
										</h3>
										<p class="mb-2 text-xs text-gray-300">{cert.issuer}</p>

										<div class="flex items-center justify-between">
											<span class="text-xs font-medium text-blue-400">{cert.year}</span>
											<span class="text-xs font-medium text-green-400">Verified</span>
										</div>
									</div>
								</div>

								<!-- Hover effect overlay -->
								<div
									class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								></div>
							</div>
						{/each}
					</div>
				{/if}
			{/if}
		</div>

		<!-- Desktop Layout -->
		<div class="hidden sm:block">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				{#each certificates as cert, index}
					<div
						class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
						style="animation-delay: {index * 0.1}s"
					>
						<!-- Certificate image with enhanced overlay -->
						<div class="relative h-64 overflow-hidden">
							<img
								src={cert.url}
								alt={cert.title}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"
							></div>

							<!-- Year badge -->
							<div
								class="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg"
							>
								{cert.year}
							</div>

							<!-- Achievement icon -->
							<div class="absolute top-4 left-4 rounded-full bg-white/20 p-2 backdrop-blur-sm">
								<svg class="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							</div>
						</div>

						<!-- Certificate details -->
						<div class="p-8">
							<h3
								class="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400"
							>
								{cert.title}
							</h3>
							<p class="mb-4 font-semibold text-gray-300">{cert.issuer}</p>

							<!-- Progress indicator -->
							<div class="flex items-center gap-2 text-sm text-gray-400">
								<div class="h-1 flex-1 overflow-hidden rounded-full bg-gray-700">
									<div
										class="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover:w-full"
										style="width: {(index + 1) * 20}%"
									></div>
								</div>
								<span class="font-medium text-blue-400">Verified</span>
							</div>
						</div>

						<!-- Hover effect overlay -->
						<div
							class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Skill Section-->
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
										class="h-7 w-7 animate-bounce transition-colors duration-300 {getSkillIconColors(
											skill.icon
										).default} {getSkillIconColors(skill.icon).hover}"
										fill="currentColor"
										viewBox="0 0 24 24"
										style="animation-delay: {Math.random() * 2}s; animation-duration: {2 +
											Math.random()}s;"
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
	@keyframes bounce-soft {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-6px);
		}
		60% {
			transform: translateY(-3px);
		}
	}

	@keyframes elastic-bounce {
		0% {
			transform: scale(1);
		}
		20% {
			transform: scale(1.1);
		}
		40% {
			transform: scale(0.95);
		}
		60% {
			transform: scale(1.05);
		}
		80% {
			transform: scale(0.98);
		}
		100% {
			transform: scale(1);
		}
	}

	.animate-bounce-soft {
		animation: bounce-soft 3s ease-in-out infinite;
	}

	.animate-elastic {
		animation: elastic-bounce 0.6s ease-out;
	}

	/* Custom bounce animation for thunder elements */
	.animate-bounce {
		animation: bounce 2s infinite;
	}

	/* Fade in animation */
	.animate-fade-in-up {
		animation: fadeInUp 1s ease-out;
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

	/* Smooth slide animation for mobile menu */
	.md\:hidden div {
		animation: slideDown 0.3s ease-out;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
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
