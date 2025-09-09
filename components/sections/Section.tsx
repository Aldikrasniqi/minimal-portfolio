import { cn } from '@/lib/utils'
import type { SectionProps } from '@/types'

export function Section({ id, className, children }: SectionProps) {
	return (
		<section
			id={id}
			className={cn('min-h-screen scroll-mt-20', className)}
			aria-labelledby={`${id}-heading`}
			role="region"
		>
			<div className="max-w-6xl mx-auto px-4">{children}</div>
		</section>
	)
}
