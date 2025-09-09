import type { Metadata, Viewport } from 'next'
import { interDisplay } from '@/lib/fonts'
import Navigation from '@/components/Navigation'
import { SITE_CONFIG } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
	title: {
		default: SITE_CONFIG.title,
		template: `%s | ${SITE_CONFIG.name}`,
	},
	description: SITE_CONFIG.description,
	keywords: [
		'portfolio',
		'developer',
		'web development',
		'frontend',
		'React',
		'Next.js',
		'TypeScript',
	],
	authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.url }],
	creator: SITE_CONFIG.author.name,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: SITE_CONFIG.url,
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		siteName: SITE_CONFIG.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		creator: '@yourtwitterhandle', // Update with actual Twitter handle
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

interface RootLayoutProps {
	readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${interDisplay.variable} antialiased`}
				suppressHydrationWarning
			>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
