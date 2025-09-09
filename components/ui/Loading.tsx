import { cn } from '@/lib/utils'

interface LoadingProps {
	className?: string
	size?: 'sm' | 'md' | 'lg'
	text?: string
}

export function Loading({ className, size = 'md', text }: LoadingProps) {
	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-8 h-8',
		lg: 'w-12 h-12',
	}

	return (
		<div
			className={cn('flex items-center justify-center', className)}
			role="status"
			aria-live="polite"
			aria-label={text || 'Loading'}
		>
			<div className="flex flex-col items-center space-y-2">
				<div
					className={cn(
						'animate-spin rounded-full border-2 border-muted-foreground/20 border-t-primary',
						sizeClasses[size]
					)}
					aria-hidden="true"
				/>
				{text && <span className="text-sm text-muted-foreground">{text}</span>}
			</div>
			<span className="sr-only">
				{text || 'Loading content, please wait...'}
			</span>
		</div>
	)
}

export function PageLoading() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Loading size="lg" text="Loading..." />
		</div>
	)
}

export function SectionLoading({ className }: { className?: string }) {
	return (
		<div className={cn('py-8 flex justify-center', className)}>
			<Loading size="md" />
		</div>
	)
}
