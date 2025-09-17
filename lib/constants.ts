export const SITE_CONFIG = {
	name: 'Daniel Kim',
	title: 'Daniel Kim - Software Engineer | Backend & Infrastructure',
	description:
		'Korean American software engineer leading backend and infrastructure teams at TechNova Solutions. Building scalable systems for Netflix, Shopify, Stripe & Microsoft.',
	url: 'https://danielkim.dev',
	ogImage: '/og-image.jpg',
	twitterHandle: '@danielkim_dev',
	author: {
		name: 'Daniel Kim',
		email: 'daniel.kim@gmail.com',
		github: 'https://github.com/danielkim',
		linkedin: 'https://linkedin.com/in/danielkim-dev',
		twitter: 'https://twitter.com/danielkim_dev',
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
				image: '/images/projects/airbnb/template.jpg',
			},
			{
				id: '2',
				image: '/images/projects/airbnb/template.jpg',
			},
			{
				id: '3',
				image: '/images/projects/airbnb/template.jpg',
			},
			{
				id: '4',
				image: '/images/projects/airbnb/template.jpg',
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
				image: '/images/projects/uber/template.jpg',
			},
			{
				id: '2',
				image: '/images/projects/uber/template.jpg',
			},
			{
				id: '3',
				image: '/images/projects/uber/template.jpg',
			},
			{
				id: '4',
				image: '/images/projects/uber/template.jpg',
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

export const SOCIAL_LINKS = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/yourprofile',
		label: 'Connect on LinkedIn',
		colorClass: 'text-[#0077B5]',
		hoverColorClass: 'hover:text-[#005885]',
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/yourprofile',
		label: 'Follow on Instagram',
		colorClass:
			'text-transparent bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text',
		hoverColorClass: 'hover:opacity-80',
	},
	{
		name: 'X / Twitter',
		url: 'https://twitter.com/yourprofile',
		label: 'Follow on X/Twitter',
		colorClass: 'text-[#1DA1F2]',
		hoverColorClass: 'hover:text-[#0d8bd9]',
	},
] as const
