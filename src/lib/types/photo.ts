export interface Photo {
	id: number;
	src: string;
	alt: string;
	title: string;
	category: 'Graduation' | 'Cosplayer' | 'Models' | 'Others';
	description: string;
	location?:export interface Photo {
	id: number;
	src: string;
	alt: string;
	title: string;
	category: 'Graduation' | 'Cosplayer' | 'Models' | 'Others';
	description: string;
	location?: string;
	camera?: string;
	lens?: string;
	settings?: string;
	date?: string;
	featured?: boolean;
	tags?: string[];
}

export interface PhotoCategory {
	name: string;
	description: string;
	icon?: string;
}

export const photoCategories: PhotoCategory[] = [
	{ name: 'All', description: 'All photographs' },
	{ name: 'Graduation', description: 'Graduation ceremonies and academic achievements' },
	{ name: 'Cosplayer', description: 'Cosplay photography and character portrayals' },
	{ name: 'Models', description: 'Fashion and portrait modeling photography' },
	{ name: 'Others', description: 'Wedding, events, and miscellaneous photography' }
];

export const defaultPhoto: Partial<Photo> = {
	category: 'Others',
	description: '',
	featured: false,
	tags: []
};