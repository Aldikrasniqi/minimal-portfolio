import localFont from 'next/font/local'

export const interDisplay = localFont({
	src: [
		{
			path: '../public/fonts/InterVariable.ttf',
			weight: '100 900',
			style: 'normal',
		},
		{
			path: '../public/fonts/InterVariable-Italic.ttf',
			weight: '100 900',
			style: 'italic',
		},
	],
	variable: '--font-inter-display',
	display: 'swap',
	preload: true,
	fallback: [
		'system-ui',
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'sans-serif',
	],
})
