import { SITE_CONFIG } from '@/lib/constants'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className="px-4 sm:px-6">
			<div className="max-w-6xl mx-auto py-6 sm:py-8 md:py-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2">
				<div className="text-secondary flex items-center justify-center gap-2 text-sm sm:text-base">
					{SITE_CONFIG.author.name}
					<span className="text-primary">@{new Date().getFullYear()}</span>
				</div>
				<div className="flex items-center justify-center">
					<Link
						href="/privacy"
						className="text-secondary underline font-medium text-sm sm:text-base min-h-[44px] min-w-[44px] flex items-center justify-center px-2 py-2 rounded-lg hover:bg-muted/50 transition-colors"
					>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	)
}
