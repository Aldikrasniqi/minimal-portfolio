import { Section } from './Section'
import { SECTION_IDS } from '@/lib/constants'
import type { ContactSectionProps } from '@/types'

export function ContactSection({ title, description }: ContactSectionProps) {
	return (
		<Section id={SECTION_IDS.CONTACT} className="bg-muted/30">
			<h2
				id={`${SECTION_IDS.CONTACT}-heading`}
				className="text-3xl font-light mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
			>
				{title}
			</h2>
			<p
				className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200"
				aria-describedby={`${SECTION_IDS.CONTACT}-heading`}
			>
				{description}
			</p>
			{/* TODO: Add contact form or contact methods here */}
		</Section>
	)
}
