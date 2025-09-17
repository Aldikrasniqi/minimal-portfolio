'use client'

import { Section } from './Section'
import { SECTION_IDS, HERO_CONTENT } from '@/lib/constants'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import {
	useScrollAnimation,
	fadeUpVariants,
	fadeUpDelayedVariants,
} from '@/lib/hooks/useScrollAnimation'

export function HeroSection() {
	const { ref, isInView } = useScrollAnimation({ margin: '0px 0px -50px 0px' })

	return (
		<Section id={SECTION_IDS.HOME} className="flex items-center">
			<motion.div
				ref={ref}
				itemScope
				itemType="https://schema.org/Person"
				className="space-y-6 sm:space-y-8 w-full xl:absolute xl:right-20 xl:top-1/2 xl:-translate-y-1/2 xl:w-1/2"
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
				variants={fadeUpVariants}
			>
				<motion.h1
					id={`${SECTION_IDS.HOME}-heading`}
					className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-light leading-relaxed sm:leading-relaxed md:leading-relaxed"
					role="banner"
					aria-label="Daniel Kim - Software Engineer Introduction"
					variants={fadeUpDelayedVariants}
				>
					<span className="text-primary font-normal" itemProp="name">
						{HERO_CONTENT.name}
					</span>{' '}
					<span itemProp="description">
						{HERO_CONTENT.description}{' '}
						{HERO_CONTENT.clients.map((client, index) => (
							<Fragment key={client}>
								<UnderlinedText text={client} />
								{index < HERO_CONTENT.clients.length - 1 &&
									(index === HERO_CONTENT.clients.length - 2 ? ', and ' : ', ')}
							</Fragment>
						))}
						.
					</span>
				</motion.h1>

				<div className="sr-only">
					<span itemProp="jobTitle">{HERO_CONTENT.seo.jobTitle}</span>
					<span itemProp="nationality">{HERO_CONTENT.seo.nationality}</span>
					<div
						itemProp="worksFor"
						itemScope
						itemType="https://schema.org/Organization"
					>
						<span itemProp="name">{HERO_CONTENT.seo.company}</span>
					</div>
					<div itemProp="knowsAbout">{HERO_CONTENT.seo.expertise}</div>
					<meta name="keywords" content={HERO_CONTENT.seo.keywords} />
				</div>
			</motion.div>
		</Section>
	)
}

interface UnderlinedTextProps {
	text: string
}

function UnderlinedText({ text }: UnderlinedTextProps) {
	return (
		<span
			className="inline-block relative group"
			itemScope
			itemType="https://schema.org/Organization"
			itemProp="client"
		>
			<span
				className="relative z-10 transition-colors duration-300 group-hover:text-primary"
				itemProp="name"
				title={`${text} - Client`}
				aria-label={`${text} client organization`}
			>
				{text}
			</span>
			<span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground transition-all duration-300 group-hover:bg-primary group-hover:h-1" />
		</span>
	)
}
