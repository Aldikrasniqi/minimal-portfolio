'use client'

import Link from 'next/link'
import { Section } from './Section'
import { SECTION_IDS } from '@/lib/constants'
import type { ContactSectionProps } from '@/types'
import { motion } from 'framer-motion'
import {
	useScrollAnimation,
	fadeUpVariants,
	fadeUpDelayedVariants,
} from '@/lib/hooks/useScrollAnimation'

export function ContactSection({
	title,
	email,
	socialLinks,
}: ContactSectionProps) {
	const { ref, isInView } = useScrollAnimation({ margin: '0px 0px -200px 0px' })

	return (
		<Section id={SECTION_IDS.CONTACT}>
			<span className="border-b w-full flex relative top-30"></span>
			<motion.div
				ref={ref}
				className="flex flex-col gap-12 sm:gap-16 md:gap-20 min-h-screen items-start justify-center"
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
				variants={fadeUpVariants}
			>
				<div className="flex flex-col gap-3 sm:gap-4 text-start">
					<motion.h2
						id={`${SECTION_IDS.CONTACT}-heading`}
						className="font-normal text-primary text-base sm:text-lg md:text-xl"
						variants={fadeUpVariants}
					>
						{email}
					</motion.h2>
					<motion.p
						className="text-xl sm:text-2xl md:text-3xl text-secondary"
						aria-describedby={`${SECTION_IDS.CONTACT}-heading`}
						variants={fadeUpDelayedVariants}
					>
						{title}
					</motion.p>
				</div>
				{socialLinks && socialLinks.length > 0 && (
					<motion.div
						className="flex flex-wrap gap-4 sm:gap-6 items-center justify-start"
						variants={fadeUpDelayedVariants}
					>
						{socialLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`${link.colorClass} ${link.hoverColorClass} transition-all duration-200 font-medium min-h-[44px] min-w-[44px] flex items-center justify-center px-3 py-2 rounded-lg text-sm sm:text-base`}
								aria-label={link.label}
							>
								{link.name}
							</Link>
						))}
					</motion.div>
				)}
			</motion.div>
		</Section>
	)
}
