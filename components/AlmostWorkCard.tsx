import { AlmostWork } from '@/types'
import Image from 'next/image'

export function AlmostWorkCard({ almostWork }: { almostWork: AlmostWork }) {
	return (
		<>
			{almostWork.isFullSize ? (
				<article
					className="col-span-full flex flex-col gap-4 sm:gap-6"
					itemScope
					itemType="https://schema.org/CreativeWork"
				>
					<div className="w-full h-[300px] sm:h-[400px] md:h-[510px] rounded-[40px] sm:rounded-[60px] md:rounded-[80px] overflow-hidden">
						<Image
							src={almostWork.image}
							alt={`${almostWork.title} - Experimental project showcase demonstrating creative development and design exploration`}
							width={1200}
							height={600}
							className="w-full h-full object-cover filter brightness-70"
							loading="lazy"
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
							itemProp="image"
						/>
					</div>
					<h3
						className="text-center text-lg sm:text-xl md:text-2xl font-medium"
						itemProp="name"
					>
						{almostWork.title}
					</h3>
					<meta itemProp="author" content="Daniel Kim" />
					<meta itemProp="genre" content="Experimental Work" />
				</article>
			) : (
				<article
					className="flex flex-col gap-4 sm:gap-6"
					itemScope
					itemType="https://schema.org/CreativeWork"
				>
					<div className="w-full aspect-square rounded-[40px] sm:rounded-[60px] md:rounded-[80px] overflow-hidden">
						<Image
							src={almostWork.image}
							alt={`${almostWork.title} - Experimental project exploring innovative concepts and design patterns`}
							width={600}
							height={600}
							className="w-full h-full object-cover"
							loading="lazy"
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
							itemProp="image"
						/>
					</div>
					<h3
						className="text-center text-base sm:text-lg md:text-xl font-medium"
						itemProp="name"
					>
						{almostWork.title}
					</h3>
					<meta itemProp="author" content="Daniel Kim" />
					<meta itemProp="genre" content="Experimental Work" />
				</article>
			)}
		</>
	)
}
