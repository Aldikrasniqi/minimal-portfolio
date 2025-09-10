import { SITE_CONFIG } from '@/lib/constants'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="max-w-6xl mx-auto py-1.5 flex justify-between">
				<div className="text-secondary flex items-center justify-center gap-2">
					{SITE_CONFIG.author.name}
					<span className="text-primary">@{new Date().getFullYear()}</span>
				</div>
				<div className="flex items-center justify-center gap-2">
					<Link
						href="/privacy"
						className="text-secondary underline font-medium"
					>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	)
}
