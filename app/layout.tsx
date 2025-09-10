import type { Metadata, Viewport } from 'next'
import { interDisplay } from '@/lib/fonts'
import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SITE_CONFIG } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
	title: {
		default: SITE_CONFIG.title,
		template: `%s | ${SITE_CONFIG.name}`,
	},
	description: SITE_CONFIG.description,
	keywords: [
		'Daniel Kim',
		'software engineer',
		'backend developer',
		'infrastructure',
		'Korean American developer',
		'TechNova Solutions',
		'Node.js',
		'PostgreSQL',
		'AWS',
		'cloud platforms',
		'scalable systems',
		'portfolio',
		'web development',
		'React',
		'Next.js',
		'TypeScript',
	],
	authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
	creator: SITE_CONFIG.author.name,
	publisher: SITE_CONFIG.author.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL(SITE_CONFIG.url),
	alternates: {
		canonical: SITE_CONFIG.url,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: SITE_CONFIG.url,
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		siteName: SITE_CONFIG.name,
		images: [
			{
				url: SITE_CONFIG.ogImage,
				width: 1200,
				height: 630,
				alt: `${SITE_CONFIG.name} - Software Engineer Portfolio`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		creator: SITE_CONFIG.twitterHandle,
		site: SITE_CONFIG.twitterHandle,
		images: [SITE_CONFIG.ogImage],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	category: 'technology',
	manifest: '/manifest.json',
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
}

interface RootLayoutProps {
	readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: SITE_CONFIG.author.name,
		url: SITE_CONFIG.url,
		image: SITE_CONFIG.ogImage,
		jobTitle: 'Software Engineer',
		worksFor: {
			'@type': 'Organization',
			name: 'TechNova Solutions',
		},
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'University',
		},
		sameAs: [
			SITE_CONFIG.author.linkedin,
			SITE_CONFIG.author.github,
			SITE_CONFIG.author.twitter,
		],
		knowsAbout: [
			'Backend Development',
			'Infrastructure',
			'Cloud Platforms',
			'Node.js',
			'PostgreSQL',
			'AWS',
			'React',
			'TypeScript',
		],
	}

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${interDisplay.variable} antialiased`}
				suppressHydrationWarning
			>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
