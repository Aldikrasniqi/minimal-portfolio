export interface NavigationItem {
	readonly id: string
	readonly label: string
	readonly href: string
}

export interface SiteConfig {
	readonly name: string
	readonly title: string
	readonly description: string
	readonly url: string
	readonly author: AuthorInfo
}

export interface AuthorInfo {
	readonly name: string
	readonly email: string
	readonly github: string
	readonly linkedin: string
}

export interface SectionProps {
	readonly id: string
	readonly className?: string
	readonly children: React.ReactNode
}

export interface ProjectsSectionProps {
	readonly title: string
	readonly year: string
	readonly projects: Project[]
}

export interface SocialLink {
	readonly name: string
	readonly url: string
	readonly label: string
	readonly colorClass: string
	readonly hoverColorClass: string
}

export interface ContactSectionProps {
	readonly title: string
	readonly email: string
	readonly socialLinks?: readonly SocialLink[]
}

export interface AlmostSectionProps {
	readonly title: string
	readonly description: string
	readonly almostWork: AlmostWork[]
	readonly year: string
}

export interface Project {
	readonly id: string
	readonly title: string
	readonly shortDescription: string
	readonly role: string
	readonly mainImage: string
	readonly workContent: string
	readonly imageGallery: { readonly id: string; readonly image: string }[]
}

export interface AlmostWork {
	readonly id: string
	readonly title: string
	readonly image: string
	readonly isFullSize: boolean
}
