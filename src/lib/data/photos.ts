export interface Photo {
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

export const photos: Photo[] = [
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
			description: 'Foto',
			personName: 'Ara',
			instagram: 'raax.a_'
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
			title: 'Mizly',
			category: 'People',
			orientation: 'portrait',
			description: 'Foto Sore di Kaputama',
			personName: 'Mizly',
			instagram: '@mzly_fskaa'
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
		{
			id: 124,
			src: '/images/photography/people24.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 24',
			category: 'People',
			orientation: 'portrait',
			description: 'Potret casual dengan pencahayaan natural',
			personName: '',
			instagram: ''
		},
			{
			id: 125,
			src: '/images/photography/people25.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 25',
			category: 'People',
			orientation: 'landscape',
			description: 'Potret casual dengan pencahayaan natural',
			personName: '',
			instagram: ''
		},
	{
			id: 126,
			src: '/images/photography/people26.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 26',
			category: 'People',
			orientation: 'landscape',
			description: 'Potret casual dengan pencahayaan natural',
			personName: '',
			instagram: ''
		},
		{
			id: 127,
			src: '/images/photography/people27.jpeg',
			alt: 'People Portrait',
			title: 'Portrait 27',
			category: 'People',
			orientation: 'landscape',
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
			description: 'Foto Cosplayer',
			personName: 'Litha',
			instagram: 'arxxl_yn'
		},
		{
			id: 23,
			src: '/images/photography/cosplay4.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Klee',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Klee dari Genshin Impact',
			personName: 'Fiaa',
			instagram: '@fifiaa_fia'
		},
		{
			id: 24,
			src: '/images/photography/cosplay5.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Gaeul',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Gaeul dari How to Fight',
			personName: 'Fiaa',
			instagram: '@fifiaa_fia'
		},
		{
			id: 25,
			src: '/images/photography/cosplay6.jpeg',
			alt: 'Cosplay Portrait',
		title: 'Elaina Cosplay',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Foto cosplay Elaina dari Genshin Impact',
			personName: 'Ara',
			instagram: '@raax.a_'
		},
		{
			id: 26,
			src: '/images/photography/cosplay7.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Female Nanami Cosplay',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Jujutsu Kaisen dengan kostum karakter Nanami',
			personName: 'Fiaa',
			instagram: '@fifiaa_fia'
		},
		{
			id: 27,
			src: '/images/photography/cosplay8.jpeg',
			alt: 'Cosplay Group',
			title: 'Elaina Cosplay',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Foto cosplay Elaina dari Genshin Impact',
			personName: 'Ara',
			instagram: '@raax.a_'
		},
		{
			id: 28,
			src: '/images/photography/cosplay9.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Nero',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay From Anime Black Clover',
			personName: 'Araa',
			instagram: '@raax.a_'
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
			title: 'Cosplay Sucrose',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact',
				personName: 'Araa',
			instagram: '@raxx.a_'
		},
		{
			id: 31,
			src: '/images/photography/cosplay12.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Sucrose',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay Dari Anime Genshin Impact',
				personName: 'Araa',
			instagram: '@raxx.a_'
	
		},
		{
			id: 57,
			src: '/images/photography/cosplay13.jpeg',
			alt: 'Cosplay Portrait',
				title: 'Cosplay Zani ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Anime Genshin Impact',
			personName: 'Xiuu',
			instagram: '@xiuu_cosu'
		},
		{
			id: 58,
			src: '/images/photography/cosplay14.jpeg',
			alt: 'Cosplay Portrait',
					title: 'Cosplay Zani ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Anime Genshin Impact',
			personName: 'Xiuu',
			instagram: '@xiuu_cosu'
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
				title: 'Cosplay Zani ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Anime Genshin Impact',
			personName: 'Xiuu',
			instagram: '@xiuu_cosu'
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
			title: 'Cosplay Zani ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Anime Genshin Impact',
			personName: 'Xiuu',
			instagram: '@xiuu_cosu'
		},
		{
			id: 330,
			src: '/images/photography/cosplay20.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Nezuko',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay From Demon Slayer',
			personName: '???',
			instagram: '???'
		},
		{
			id: 231,
			src: '/images/photography/cosplay21.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Zani ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Anime Genshin Impact',
			personName: 'Xiuu',
			instagram: '@xiuu_cosu'
		},
		{
			id: 232,
			src: '/images/photography/cosplay22.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Zani ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Anime Genshin Impact',
			personName: 'Xiuu',
			instagram: '@xiuu_cosu'
		},
		{
			id: 233,
			src: '/images/photography/cosplay23.jpeg',
			alt: 'Cosplay Portrait',
			title: 'Cosplay Zani ',
			category: 'Cosplay',
			orientation: 'portrait',
			description: 'Cosplay dari Anime Genshin Impact',
			personName: 'Xiuu',
			instagram: '@xiuu_cosu'
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
