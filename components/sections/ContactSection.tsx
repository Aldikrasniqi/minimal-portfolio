import Link from 'next/link'
import { Section } from './Section'
import { SECTION_IDS } from '@/lib/constants'
import type { ContactSectionProps } from '@/types'

export function ContactSection({
	title,
	email,
	socialLinks,
}: ContactSectionProps) {
	return (
		<Section id={SECTION_IDS.CONTACT}>
			<span className="border-b w-full flex relative top-30"></span>
			<div className="flex flex-col gap-12 sm:gap-16 md:gap-20 min-h-screen items-start justify-center">
				<div className="flex flex-col gap-3 sm:gap-4 text-start">
					<h2
						id={`${SECTION_IDS.CONTACT}-heading`}
						className="font-normal animate-in fade-in slide-in-from-bottom-4 duration-1000 text-primary text-base sm:text-lg md:text-xl"
					>
						{email}
					</h2>
					<p
						className="text-xl sm:text-2xl md:text-3xl text-secondary animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200"
						aria-describedby={`${SECTION_IDS.CONTACT}-heading`}
					>
						{title}
					</p>
				</div>
				{socialLinks && socialLinks.length > 0 && (
					<div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-start animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
						{socialLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`${link.colorClass} ${link.hoverColorClass} transition-all duration-200 font-medium min-h-[44px] min-w-[44px] flex items-center justify-center px-3 py-2 rounded-lg text-sm sm:text-base`}
								aria-label={link.label}
							>
								{link.name}
							</Link>
						))}
					</div>
				)}
			</div>
		</Section>
	)
}
