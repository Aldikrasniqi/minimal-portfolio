'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorPageProps {
	error: Error & { digest?: string }
	reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
	useEffect(() => {
		console.error('Application error:', error)
	}, [error])

	return (
		<div
			className="min-h-screen flex items-center justify-center px-4"
			role="alert"
			aria-live="assertive"
		>
			<div className="max-w-md mx-auto text-center">
				<h2 className="text-2xl font-semibold mb-4 text-destructive">
					Something went wrong!
				</h2>
				<p className="text-muted-foreground mb-6">
					We encountered an unexpected error. This has been logged and we're
					looking into it.
				</p>

				{process.env.NODE_ENV === 'development' && (
					<details className="mb-6 text-left">
						<summary className="cursor-pointer text-sm font-medium mb-2">
							Error Details (Development)
						</summary>
						<pre className="text-xs bg-muted p-3 rounded overflow-auto max-h-32">
							{error.message}
							{error.stack && `\n\n${error.stack}`}
						</pre>
					</details>
				)}

				<div className="space-y-3">
					<Button onClick={reset} className="w-full" aria-label="Try again">
						Try Again
					</Button>
					<Button
						variant="outline"
						onClick={() => (window.location.href = '/')}
						className="w-full"
						aria-label="Go to homepage"
					>
						Go Home
					</Button>
				</div>
			</div>
		</div>
	)
}
