import { Section } from './Section'
import { SECTION_IDS } from '@/lib/constants'
import type { Project, ProjectsSectionProps } from '@/types'
import { ProjectCard } from '@/components/ProjectCard'

export function ProjectsSection({
	title,
	year,
	projects,
}: ProjectsSectionProps) {
	return (
		<Section id={SECTION_IDS.PROJECTS}>
			<div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
				<h2
					id={`${SECTION_IDS.PROJECTS}-heading`}
					className="text-lg sm:text-xl md:text-2xl font-light mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:ps-10"
				>
					<span>{title}</span>
					<div className="flex items-center gap-2">
						<span className="h-[0.2px] w-4 text-black inline-block bg-black"></span>
						<div className="flex gap-1 text-sm sm:text-base">
							{year.split(',').map((yearItem, index) => (
								<span key={yearItem} className="">
									{index > 0 && '-'}
									{yearItem.trim()}
								</span>
							))}
						</div>
					</div>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project: Project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</Section>
	)
}
