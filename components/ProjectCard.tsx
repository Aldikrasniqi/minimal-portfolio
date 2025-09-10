import { Project } from '@/types'
import Image from 'next/image'

export function ProjectCard({ project }: { project: Project }) {
	return (
		<article
			className="flex flex-col gap-3 sm:gap-4 w-full border-2 border-transparent"
			itemScope
			itemType="https://schema.org/CreativeWork"
		>
			<div className="w-full h-[280px] sm:h-[320px] md:h-[350px]">
				<Image
					src={project.mainImage}
					alt={`${project.title} - ${project.shortDescription}. Project showcase image demonstrating ${project.role} work.`}
					width={600}
					height={500}
					className="rounded-[40px] sm:rounded-[60px] md:rounded-[80px] w-full h-full object-cover"
					priority={false}
					placeholder="blur"
					blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
					itemProp="image"
				/>
			</div>
			<div className="flex flex-col gap-2 sm:gap-3 text-center items-center px-2">
				<h3
					className="text-base sm:text-lg md:text-lg font-medium"
					itemProp="name"
				>
					{project.title}
				</h3>
				<p
					className="text-xs sm:text-sm md:text-sm text-muted-foreground"
					itemProp="description"
				>
					{project.shortDescription}
				</p>
				<meta itemProp="author" content="Daniel Kim" />
				<meta itemProp="workExample" content={project.role} />
			</div>
		</article>
	)
}
