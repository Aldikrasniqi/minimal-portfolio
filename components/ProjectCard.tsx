'use client'

import { Project } from '@/types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
	cardVariants,
	premiumCardVariants,
	premiumImageVariants,
} from '@/lib/hooks/useScrollAnimation'

interface ProjectCardProps {
	project: Project
	onClick?: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
	return (
		<motion.article
			className="flex flex-col gap-3 sm:gap-4 w-full cursor-pointer rounded-[40px] sm:rounded-[60px] md:rounded-[80px] p-2"
			itemScope
			itemType="https://schema.org/CreativeWork"
			onClick={onClick}
			variants={cardVariants}
			whileHover="hover"
			whileTap="tap"
		>
			<motion.div
				className="w-full h-[280px] sm:h-[320px] md:h-[350px] overflow-hidden rounded-[36px] sm:rounded-[56px] md:rounded-[76px]"
				variants={premiumCardVariants}
			>
				<motion.div className="w-full h-full" variants={premiumImageVariants}>
					<Image
						src={project.mainImage}
						alt={`${project.title} - ${project.shortDescription}. Project showcase image demonstrating ${project.role} work.`}
						width={600}
						height={500}
						className="w-full h-full object-cover"
						priority={false}
						placeholder="blur"
						blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
						itemProp="image"
					/>
				</motion.div>
			</motion.div>
			<motion.div
				className="flex flex-col gap-2 sm:gap-3 text-center items-center px-2"
				variants={{
					initial: { opacity: 1 },
					hover: { opacity: 0.9 },
				}}
			>
				<motion.h3
					className="text-base sm:text-lg md:text-lg font-medium transition-colors duration-300"
					itemProp="name"
					variants={{
						initial: { color: 'currentColor' },
						hover: { color: 'rgb(59 130 246)' },
					}}
				>
					{project.title}
				</motion.h3>
				<motion.p
					className="text-xs sm:text-sm md:text-sm text-muted-foreground transition-colors duration-300"
					itemProp="description"
					variants={{
						initial: { color: 'currentColor' },
						hover: { color: 'rgb(107 114 128)' },
					}}
				>
					{project.shortDescription}
				</motion.p>
				<meta itemProp="author" content="Daniel Kim" />
				<meta itemProp="workExample" content={project.role} />
			</motion.div>
		</motion.article>
	)
}
