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
			<div className="flex flex-col gap-20">
				<h2
					id={`${SECTION_IDS.PROJECTS}-heading`}
					className="text-normal font-light mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex items-center lg:ps-10"
				>
					{title}{' '}
					<span className="h-[0.2px] w-4 text-black inline-block mx-2 bg-black"></span>
					{year.split(',').map((yearItem, index) => (
						<span key={yearItem} className="">
							{index > 0 && '-'}
							{yearItem.trim()}
						</span>
					))}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
					{projects.map((project: Project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</Section>
	)
}
