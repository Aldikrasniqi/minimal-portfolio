import {
	HeroSection,
	ProjectsSection,
	AlmostSection,
	ContactSection,
} from '@/components/sections'
import { PROJECTS, ALMOST_WORK } from '@/lib/constants'

export default function Home() {
	return (
		<main className="font-sans" role="main">
			<HeroSection />

			<ProjectsSection title="Selected work" year="18,25" projects={PROJECTS} />

			<AlmostSection
				title="What I’ve Almost Built"
				description="A collection of experiments and other almost work that didn’t make it into the main section"
				almostWork={ALMOST_WORK}
				year="18,25"
			/>

			<ContactSection
				title="Let's Connect"
				description="Ready to collaborate or discuss opportunities? I'd love to hear from you."
			/>
		</main>
	)
}
