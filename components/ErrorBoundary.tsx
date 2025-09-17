'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryState {
	hasError: boolean
	error?: Error
}

interface ErrorBoundaryProps {
	children: React.ReactNode
	fallback?: React.ComponentType<ErrorFallbackProps>
}

interface ErrorFallbackProps {
	error?: Error
	resetError: () => void
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return {
			hasError: true,
			error,
		}
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo)
	}

	resetError = () => {
		this.setState({ hasError: false, error: undefined })
	}

	render() {
		if (this.state.hasError) {
			const FallbackComponent = this.props.fallback || DefaultErrorFallback
			return (
				<FallbackComponent
					error={this.state.error}
					resetError={this.resetError}
				/>
			)
		}

		return this.props.children
	}
}

function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
	return (
		<div
			className="min-h-screen flex items-center justify-center px-4"
			role="alert"
			aria-live="assertive"
		>
			<div className="max-w-md mx-auto text-center">
				<h2 className="text-2xl font-semibold mb-4 text-destructive">
					Something went wrong
				</h2>
				<p className="text-muted-foreground mb-6">
					{error?.message || 'An unexpected error occurred. Please try again.'}
				</p>
				<div className="space-y-3">
					<Button
						onClick={resetError}
						className="w-full"
						aria-label="Try again"
					>
						Try Again
					</Button>
					<Button
						variant="outline"
						onClick={() => window.location.reload()}
						className="w-full"
						aria-label="Refresh page"
					>
						Refresh Page
					</Button>
				</div>
			</div>
		</div>
	)
}

export function useErrorHandler() {
	return React.useCallback((error: Error) => {
		console.error('Async error caught:', error)

		throw error
	}, [])
}
