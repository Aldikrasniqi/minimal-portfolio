import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	turbopack: {
		root: process.cwd(),
	},

	experimental: {
		optimizePackageImports: [
			'lucide-react',
			'@radix-ui/react-slot',
			'class-variance-authority',
		],
	},

	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

	compress: true,

	poweredByHeader: false,

	// bundleAnalyzer: {
	//   enabled: process.env.ANALYZE === 'true',
	// },

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
				],
			},
		]
	},
}

export default nextConfig
