import { Project } from '@/types'
import Image from 'next/image'

export function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="flex flex-col gap-2 w-full border-2 border-transparent">
			<div className="w-full h-[350px]">
				<Image
					src={project.mainImage}
					alt={project.title}
					width={600}
					height={500}
					className="rounded-[80px] w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col gap-2 text-center items-center">
				<h3 className="text-lg font-medium">{project.title}</h3>
				<p className="text-sm text-muted-foreground">
					{project.shortDescription}
				</p>
			</div>
		</div>
	)
}
