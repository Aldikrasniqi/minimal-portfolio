import {
	HeroSection,
	ProjectsSection,
	AlmostSection,
	ContactSection,
} from '@/components/sections'
import { PROJECTS, ALMOST_WORK, SOCIAL_LINKS } from '@/lib/constants'

export default function Home() {
	return (
		<main className="font-sans" role="main">
			<HeroSection />

			<section aria-labelledby="projects-heading">
				<ProjectsSection
					title="Selected work"
					year="18,25"
					projects={PROJECTS}
				/>
			</section>

			<section aria-labelledby="almost-heading">
				<AlmostSection
					title="What I've Almost Built"
					description="A collection of experiments and other almost work that didn't make it into the main section"
					almostWork={ALMOST_WORK}
					year="18,25"
				/>
			</section>

			<section aria-labelledby="contact-heading">
				<ContactSection
					email="daniel.kim@gmail.com"
					title="Available for collaborations and experiments."
					socialLinks={SOCIAL_LINKS}
				/>
			</section>
		</main>
	)
}
