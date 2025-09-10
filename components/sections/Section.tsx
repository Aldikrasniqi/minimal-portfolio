import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export function Section({ id, className, children }: SectionProps) {
	return (
		<section
			id={id}
			className={cn('min-h-[100svh] md:min-h-screen scroll-mt-20', className)}
			aria-labelledby={`${id}-heading`}
			role="region"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
				{children}
			</div>
		</section>
	)
}
