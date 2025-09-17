'use client'

import { Section } from './Section'
import { SECTION_IDS } from '@/lib/constants'
import type { AlmostSectionProps } from '@/types'
import { AlmostWorkCard } from '../AlmostWorkCard'
import { motion } from 'framer-motion'
import {
	useScrollAnimation,
	fadeUpVariants,
	staggerContainerVariants,
} from '@/lib/hooks/useScrollAnimation'

export function AlmostSection({
	title,
	description,
	almostWork,
	year,
}: AlmostSectionProps) {
	const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
	const { ref: gridRef, isInView: gridInView } = useScrollAnimation({
		triggerOnce: false,
	})

	return (
		<Section id={SECTION_IDS.ALMOST}>
			<div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
				<motion.div
					ref={headerRef}
					className="flex md:flex-row flex-col md:justify-between md:items-center gap-6 sm:gap-8 md:gap-20 pt-8 sm:pt-12 md:pt-14"
					initial="hidden"
					animate={headerInView ? 'visible' : 'hidden'}
					variants={fadeUpVariants}
				>
					<h2
						id={`${SECTION_IDS.ALMOST}-heading`}
						className="text-xl sm:text-2xl md:text-2xl font-normal mb-4 sm:mb-6"
					>
						{title}
					</h2>
					<div className="md:w-1/3 flex flex-col gap-3 sm:gap-4">
						<p
							className="text-base sm:text-lg text-primary font-light"
							aria-describedby={`${SECTION_IDS.ALMOST}-heading`}
						>
							{description}
						</p>
						<div className="flex flex-row gap-2 text-sm sm:text-base">
							{year.split(',').map((yearItem, index) => (
								<span key={yearItem} className="">
									{index > 0 && '- '}
									{yearItem.trim()}
								</span>
							))}
						</div>
					</div>
				</motion.div>

				<motion.div
					ref={gridRef}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
					initial="hidden"
					animate={gridInView ? 'visible' : 'hidden'}
					variants={staggerContainerVariants}
				>
					{almostWork.map((work) => (
						<AlmostWorkCard key={work.id} almostWork={work} />
					))}
				</motion.div>
			</div>
		</Section>
	)
}
