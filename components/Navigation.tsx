import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import type { NavigationItem } from '@/types'

export default function Navigation() {
	return (
		<nav
			className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="bg-white/20 backdrop-blur-xl rounded-full px-2 py-2 sm:px-3 sm:py-2 md:px-2 md:py-1.5 shadow-2xl border border-white/30">
				<div className="flex items-center space-x-1 sm:space-x-2">
					{NAVIGATION_ITEMS.map((item: NavigationItem) => (
						<NavigationLink key={item.id} item={item} />
					))}
				</div>
			</div>
		</nav>
	)
}

function NavigationLink({ item }: { item: NavigationItem }) {
	return (
		<Link
			href={item.href}
			className={cn(
				'text-secondary hover:bg-[#f5f5f5]',
				'rounded-2xl px-3 py-2 sm:px-4 sm:py-2 md:px-3 md:py-1.5 transition-all duration-300',
				'text-xs sm:text-sm md:text-base font-light backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center'
			)}
			aria-label={`Navigate to ${item.label} section`}
		>
			{item.label}
		</Link>
	)
}
