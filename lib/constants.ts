export const SITE_CONFIG = {
	name: 'Your Portfolio',
	title: 'Professional Portfolio | Your Name',
	description: 'Showcasing innovative projects and development expertise',
	url: 'https://yourportfolio.com',
	author: {
		name: 'Your Name',
		email: 'your.email@example.com',
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
	},
} as const

export const NAVIGATION_ITEMS = [
	{
		id: 'home',
		label: 'Home',
		href: '#home',
	},
	{
		id: 'about',
		label: 'Projects',
		href: '#projects',
	},
	{
		id: 'almost',
		label: 'Almost',
		href: '#almost',
	},
	{
		id: 'contact',
		label: 'Contact',
		href: '#contact',
	},
] as const

export const SECTION_IDS = {
	HOME: 'home',
	ABOUT: 'about',
	PROJECTS: 'projects',
	ALMOST: 'almost',
	CONTACT: 'contact',
} as const

export const ANIMATIONS = {
	TRANSITION_DURATION: 300,
	SCROLL_OFFSET: 80,
} as const

export const HERO_CONTENT = {
	name: 'Daniel Kim',
	description:
		'is a Korean American software engineer leading backend and infrastructure teams worldwide at TechNova Solutions. His teams build scalable systems and cloud platforms for clients like',
	clients: ['Netflix', 'Shopify', 'Stripe', 'Microsoft'],
	seo: {
		jobTitle: 'Software Engineer',
		nationality: 'Korean American',
		company: 'TechNova Solutions',
		expertise: 'Backend Development, Infrastructure, Cloud Platforms',
		keywords:
			'software engineer, backend development, infrastructure, cloud platforms, Korean American developer',
	},
} as const

export const PROJECTS = [
	{
		id: '1',
		title: 'Airbnb Smart Pricing Engine',
		shortDescription: ' AI-Driven Revenue Optimization',
		role: 'Lead Backend Engineer',
		mainImage: '/images/projects/airbnb/template.jpg',
		workContent:
			'I primarily worked on designing and implementing a scalable API architecture for Nimbus Analytics, a SaaS platform that helps businesses visualize and analyze real-time data streams. My focus was building a resilient backend system with Node.js and PostgreSQL, integrating data pipelines with AWS services, and ensuring high performance under heavy traffic loads.',
		imageGallery: [
			{
				id: '1',
				image: '/images/projects/airbnb/1.png',
			},
			{
				id: '2',
				image: '/images/projects/airbnb/2.png',
			},
			{
				id: '3',
				image: '/images/projects/airbnb/3.png',
			},
			{
				id: '4',
				image: '/images/projects/airbnb/4.png',
			},
		],
		overview: '',
	},
	{
		id: '2',
		title: 'Uber Eats Courier App',
		shortDescription: 'Scalable Delivery Logistics System',
		role: 'Lead DX Engineer',
		mainImage: '/images/projects/uber/template.jpg',
		workContent:
			'I primarily worked on designing and implementing a scalable API architecture for Nimbus Analytics, a SaaS platform that helps businesses visualize and analyze real-time data streams. My focus was building a resilient backend system with Node.js and PostgreSQL, integrating data pipelines with AWS services, and ensuring high performance under heavy traffic loads.',
		imageGallery: [
			{
				id: '1',
				image: '/images/projects/uber/1.png',
			},
			{
				id: '2',
				image: '/images/projects/uber/2.png',
			},
			{
				id: '3',
				image: '/images/projects/uber/3.png',
			},
			{
				id: '4',
				image: '/images/projects/uber/4.png',
			},
		],
		overview: '',
	},
]

export const ALMOST_WORK = [
	{
		id: '1',
		title: 'FlowScript',
		image: '/images/projects/almost-work/flowscript-template.jpg',
		isFullSize: false,
	},
	{
		id: '2',
		title: 'Liquid Glass',
		image: '/images/projects/almost-work/liquid-template.jpg',
		isFullSize: false,
	},
	{
		id: '3',
		title: 'SwiftCart',
		image: '/images/projects/almost-work/swiftcard-template.jpg',
		isFullSize: false,
	},
	{
		id: '4',
		title: 'Creative Recreation',
		image: '/images/projects/almost-work/creative-recreation.png',
		isFullSize: true,
	},
]
