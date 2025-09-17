'use client'

import { useState } from 'react'
import { Section } from './Section'
import { SECTION_IDS } from '@/lib/constants'
import type { Project, ProjectsSectionProps } from '@/types'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectModal } from '@/components/ProjectModal'
import { motion } from 'framer-motion'
import {
	useScrollAnimation,
	fadeUpVariants,
	staggerContainerVariants,
} from '@/lib/hooks/useScrollAnimation'

export function ProjectsSection({
	title,
	year,
	projects,
}: ProjectsSectionProps) {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { ref: headerRef, isInView: headerInView } = useScrollAnimation()
	const { ref: gridRef, isInView: gridInView } = useScrollAnimation({
		triggerOnce: false,
	})

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project)
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setSelectedProject(null)
	}

	return (
		<Section id={SECTION_IDS.PROJECTS}>
			<div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
				<motion.h2
					ref={headerRef}
					id={`${SECTION_IDS.PROJECTS}-heading`}
					className="text-lg sm:text-xl md:text-2xl font-light mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:ps-10"
					initial="hidden"
					animate={headerInView ? 'visible' : 'hidden'}
					variants={fadeUpVariants}
				>
					<span>{title}</span>
					<div className="flex items-center gap-2">
						<span className="h-[0.2px] w-4 text-black inline-block bg-black"></span>
						<div className="flex gap-1 text-sm sm:text-base">
							{year.split(',').map((yearItem, index) => (
								<span key={yearItem} className="">
									{index > 0 && '- '}
									{yearItem.trim()}
								</span>
							))}
						</div>
					</div>
				</motion.h2>
				<motion.div
					ref={gridRef}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
					initial="hidden"
					animate={gridInView ? 'visible' : 'hidden'}
					variants={staggerContainerVariants}
				>
					{projects.map((project: Project) => (
						<ProjectCard
							key={project.id}
							project={project}
							onClick={() => handleProjectClick(project)}
						/>
					))}
				</motion.div>
			</div>

			<ProjectModal
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</Section>
	)
}
