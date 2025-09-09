export const logger = {
	info: (message: string, ...args: unknown[]) => {
		if (process.env.NODE_ENV === 'development') {
			console.info(`[INFO] ${message}`, ...args)
		}
	},

	warn: (message: string, ...args: unknown[]) => {
		if (process.env.NODE_ENV === 'development') {
			console.warn(`[WARN] ${message}`, ...args)
		}
	},

	error: (message: string, ...args: unknown[]) => {
		if (process.env.NODE_ENV === 'development') {
			console.error(`[ERROR] ${message}`, ...args)
		}
	},

	debug: (message: string, ...args: unknown[]) => {
		if (process.env.NODE_ENV === 'development') {
			console.debug(`[DEBUG] ${message}`, ...args)
		}
	},
}

export function measurePerformance<T>(fn: () => T, label: string): T {
	if (process.env.NODE_ENV !== 'development') {
		return fn()
	}

	const start = performance.now()
	const result = fn()
	const end = performance.now()

	logger.debug(`${label} took ${(end - start).toFixed(2)}ms`)
	return result
}

export async function measureAsyncPerformance<T>(
	fn: () => Promise<T>,
	label: string
): Promise<T> {
	if (process.env.NODE_ENV !== 'development') {
		return await fn()
	}

	const start = performance.now()
	const result = await fn()
	const end = performance.now()

	logger.debug(`${label} took ${(end - start).toFixed(2)}ms`)
	return result
}

export function devAssert(condition: boolean, message: string): void {
	if (process.env.NODE_ENV === 'development' && !condition) {
		logger.error(`Assertion failed: ${message}`)
		throw new Error(`Assertion failed: ${message}`)
	}
}

export function isString(value: unknown): value is string {
	return typeof value === 'string'
}

export function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !isNaN(value)
}

export function isObject(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value)
}
