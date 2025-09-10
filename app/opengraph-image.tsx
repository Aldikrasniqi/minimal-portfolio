import { ImageResponse } from 'next/og'
import { SITE_CONFIG, HERO_CONTENT } from '@/lib/constants'

export const runtime = 'edge'

export const alt = `${SITE_CONFIG.name} - Software Engineer Portfolio`
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					fontFamily: 'system-ui',
				}}
			>
				<div
					style={{
						background: 'linear-gradient(90deg, #000 0%, #333 100%)',
						backgroundClip: 'text',
						WebkitBackgroundClip: 'text',
						color: 'transparent',
						fontSize: 72,
						fontWeight: 'bold',
						marginBottom: 20,
					}}
				>
					{HERO_CONTENT.name}
				</div>
				<div
					style={{
						fontSize: 32,
						color: '#666',
						textAlign: 'center',
						maxWidth: 800,
						lineHeight: 1.4,
					}}
				>
					{HERO_CONTENT.seo.jobTitle} • {HERO_CONTENT.seo.company}
				</div>
				<div
					style={{
						fontSize: 24,
						color: '#999',
						marginTop: 20,
					}}
				>
					Building scalable systems for Netflix, Shopify, Stripe & Microsoft
				</div>
			</div>
		),
		{
			...size,
		}
	)
}
