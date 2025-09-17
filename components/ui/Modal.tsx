'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
	modalVariants,
	modalBackdropVariants,
	modalContentVariants,
} from '@/lib/hooks/useScrollAnimation'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose])

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<motion.div
						className="absolute inset-0 bg-black/50"
						onClick={onClose}
						aria-hidden="true"
						variants={modalBackdropVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						style={{
							backdropFilter: 'blur(0px)',
						}}
					/>

					<motion.div
						className="relative z-10 w-full h-full overflow-hidden"
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<motion.div
							className="bg-white shadow-2xl w-full h-full flex flex-col"
							variants={modalContentVariants}
						>
							<motion.button
								onClick={onClose}
								className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg flex items-center justify-center group"
								aria-label="Close modal"
								whileHover={{
									scale: 1.05,
									backgroundColor: 'rgba(255, 255, 255, 0.3)',
									borderColor: 'rgba(255, 255, 255, 0.4)',
								}}
								whileTap={{ scale: 0.95 }}
								transition={{
									duration: 0.2,
									ease: [0.25, 0.46, 0.45, 0.94],
								}}
							>
								<motion.svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-gray-600"
									whileHover={{
										color: 'rgb(55 65 81)',
										rotate: 90,
									}}
									transition={{
										duration: 0.2,
										ease: [0.25, 0.46, 0.45, 0.94],
									}}
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</motion.svg>
							</motion.button>

							<motion.div
								className="flex-1 overflow-auto px-6 pt-6 pb-6"
								variants={modalContentVariants}
							>
								{children}
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	)
}
