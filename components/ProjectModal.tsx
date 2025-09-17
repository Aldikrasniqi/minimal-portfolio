import { Project } from '@/types'
import { Modal } from '@/components/ui/Modal'
import Image from 'next/image'
import { Footer } from './Footer'
import { motion } from 'framer-motion'
import {
	modalContentVariants,
	staggerModalVariants,
} from '@/lib/hooks/useScrollAnimation'

interface ProjectModalProps {
	project: Project | null
	isOpen: boolean
	onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
	if (!project) return null

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<motion.div
				className="max-w-6xl mx-auto pt-10 pb-10 flex flex-col gap-10"
				variants={staggerModalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<motion.div
					className="text-center space-y-3 mb-8"
					variants={modalContentVariants}
				>
					<motion.h1
						className="text-2xl md:text-3xl font-normal tracking-tight"
						variants={modalContentVariants}
					>
						{project.title}
					</motion.h1>
					<motion.div className="space-y-2" variants={modalContentVariants}>
						<p className="font-normal text-secondary">
							Role: <span className="text-primary">{project.role}</span>
						</p>
					</motion.div>
				</motion.div>

				<motion.div className="w-full mb-22" variants={modalContentVariants}>
					<motion.div
						className="relative overflow-hidden flex items-center justify-center rounded-[80px]"
						whileHover={{ scale: 1.02 }}
						transition={{
							duration: 0.3,
							ease: [0.25, 0.46, 0.45, 0.94],
						}}
					>
						<Image
							src={project.mainImage}
							alt={`${project.title} - Main project image`}
							width={1200}
							height={1000}
							className="object-cover"
							priority
						/>
					</motion.div>
				</motion.div>

				<motion.div
					className="mb-22 max-w-3xl mx-auto"
					variants={modalContentVariants}
				>
					<p className="text-secondary leading-relaxed text-base tracking-wide text-center font-light">
						{project.workContent}
					</p>
				</motion.div>

				{project.imageGallery && project.imageGallery.length > 0 && (
					<motion.div className="mb-16" variants={modalContentVariants}>
						<motion.div
							className="grid grid-cols-2 gap-4 md:gap-6"
							variants={staggerModalVariants}
						>
							{project.imageGallery.map((galleryItem, index) => (
								<motion.div
									key={galleryItem.id}
									className="relative overflow-hidden flex items-center justify-center"
									variants={modalContentVariants}
									whileHover={{
										scale: 1.03,
										borderRadius: '64px',
									}}
									transition={{
										duration: 0.3,
										ease: [0.25, 0.46, 0.45, 0.94],
									}}
								>
									<Image
										src={galleryItem.image}
										alt={`${project.title} - Gallery image ${galleryItem.id}`}
										width={600}
										height={400}
										className="object-cover rounded-[80px] transition-all duration-300"
									/>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				)}

				<motion.div
					className="border-t border-gray-200 pt-12"
					variants={modalContentVariants}
				>
					<motion.div
						className="text-center space-y-6"
						variants={modalContentVariants}
					>
						<motion.h2
							className="text-xl md:text-2xl font-normal"
							variants={modalContentVariants}
						>
							Overview
						</motion.h2>
						<motion.div
							className="max-w-2xl mx-auto"
							variants={modalContentVariants}
						>
							<p className="text-secondary leading-relaxed text-base font-light tracking-tight">
								This project demonstrates my ability to architect robust backend
								systems while collaborating closely with design teams to deliver
								polished, user-friendly products. It reflects my focus on
								scalability, performance, and simplicity — key principles I
								carry into every project.
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>
			<motion.div variants={modalContentVariants}>
				<Footer />
			</motion.div>
		</Modal>
	)
}
