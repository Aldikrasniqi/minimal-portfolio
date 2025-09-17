'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationOptions {
	threshold?: number
	triggerOnce?: boolean
	margin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
	const ref = useRef(null)
	const isInView = useInView(ref, {
		amount: options.threshold || 0.1,
		once: options.triggerOnce ?? true,
		...(options.margin && { margin: options.margin as any }),
	})

	return { ref, isInView }
}

export const fadeUpVariants = {
	hidden: {
		opacity: 0,
		y: 60,
		transition: {
			duration: 0.6,
			ease: [0.6, 0.01, 0.05, 0.95] as const,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.6, 0.01, 0.05, 0.95] as const,
		},
	},
}

export const fadeUpDelayedVariants = {
	hidden: {
		opacity: 0,
		y: 60,
		transition: {
			duration: 0.6,
			ease: [0.6, 0.01, 0.05, 0.95] as const,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: 0.2,
			ease: [0.6, 0.01, 0.05, 0.95] as const,
		},
	},
}

export const staggerContainerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
}

export const cardVariants = {
	hidden: {
		opacity: 0,
		y: 40,
		transition: {
			duration: 0.6,
			ease: [0.6, 0.01, 0.05, 0.95] as const,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.6, 0.01, 0.05, 0.95] as const,
		},
	},
}

export const cardHoverVariants = {
	initial: {
		scale: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	},
	hover: {
		scale: 1.02,
		y: -8,
		transition: {
			duration: 0.4,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	},
}

export const imageHoverVariants = {
	initial: {
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	},
	hover: {
		scale: 1.1,
		transition: {
			duration: 0.6,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	},
}

export const overlayVariants = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	},
	hover: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	},
}

export const premiumCardVariants = {
	initial: {
		scale: 1,
		y: 0,
		boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
		transition: {
			duration: 0.3,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	hover: {
		scale: 1.02,
		y: -4,
		boxShadow: '0 16px 32px rgba(0, 0, 0, 0.12)',
		transition: {
			duration: 0.3,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	tap: {
		scale: 0.98,
		transition: {
			duration: 0.1,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
}

export const premiumImageVariants = {
	initial: {
		scale: 1,
		transition: {
			duration: 0.4,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	hover: {
		scale: 1.05,
		transition: {
			duration: 0.4,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
}

export const modalVariants = {
	hidden: {
		opacity: 0,
		scale: 0.96,
		transition: {
			duration: 0.2,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	exit: {
		opacity: 0,
		scale: 0.96,
		transition: {
			duration: 0.2,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
}

export const modalBackdropVariants = {
	hidden: {
		opacity: 0,
		backdropFilter: 'blur(0px)',
		transition: {
			duration: 0.2,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	visible: {
		opacity: 1,
		backdropFilter: 'blur(12px)',
		transition: {
			duration: 0.3,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	exit: {
		opacity: 0,
		backdropFilter: 'blur(0px)',
		transition: {
			duration: 0.2,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
}

export const modalContentVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.2,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delay: 0.1,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.2,
			ease: [0.25, 0.46, 0.45, 0.94] as const,
		},
	},
}

export const staggerModalVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.2,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
}
