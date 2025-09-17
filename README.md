# Minimal Portfolio

A clean, performance-focused portfolio built with Next.js and Tailwind CSS that prioritizes substance over complexity.

## Why Minimal Matters

In a world of over-engineered websites and flashy animations, this portfolio takes a different approach. It's built on the principle that **your work should speak louder than your website**.

### The Philosophy

- **Fast Loading**: No unnecessary bloat or heavy frameworks. Every byte serves a purpose.
- **Accessible**: Clean semantic HTML and proper ARIA labels ensure everyone can navigate your work.
- **Content-First**: The focus is on showcasing your projects and skills, not distracting visual effects.
- **Mobile-Optimized**: Responsive design that works beautifully on any device.
- **SEO-Ready**: Proper meta tags and structured data help your work get discovered.

### What Makes It Minimal

- **Zero External Dependencies**: No Google Fonts or CDN dependencies that slow down loading
- **Efficient Animations**: Smooth, purposeful animations using Framer Motion
- **Clean Architecture**: Well-organized components and utilities for easy maintenance
- **Performance-First**: Built with Next.js 15 and optimized for Core Web Vitals

This approach ensures your portfolio loads instantly, works everywhere, and puts your work front and center.

## Setup for Your Name

Getting started is straightforward. All the customization happens in one main file, making it easy to adapt the portfolio to your personal brand.

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd minimal-portfolio
pnpm install
```

### 2. Customize Your Information

Open `lib/constants.ts` and update the following sections:

#### Site Configuration

```typescript
export const SITE_CONFIG = {
	name: 'Your Name',
	title: 'Your Name - Your Title | Your Expertise',
	description: 'Your professional description...',
	url: 'https://yourdomain.com',
	twitterHandle: '@yourhandle',
	author: {
		name: 'Your Name',
		email: 'your.email@domain.com',
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourprofile',
		twitter: 'https://twitter.com/yourhandle',
	},
}
```

#### Hero Section

```typescript
export const HERO_CONTENT = {
	name: 'Your Name',
	description: 'Your professional story and what you do...',
	clients: ['Client 1', 'Client 2', 'Client 3', 'Client 4'],
	seo: {
		jobTitle: 'Your Job Title',
		expertise: 'Your Main Skills',
		// ... other SEO fields
	},
}
```

#### Your Projects

Replace the example projects in the `PROJECTS` array:

```typescript
export const PROJECTS = [
	{
		id: '1',
		title: 'Your Project Name',
		shortDescription: 'Brief project description',
		role: 'Your Role',
		mainImage: '/images/projects/your-project/main.jpg',
		workContent: 'Detailed description of your work...',
		// ... add your project images
	},
	// ... more projects
]
```

#### Social Links

Update your social media profiles:

```typescript
export const SOCIAL_LINKS = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/yourprofile',
		// ... other config
	},
	// ... other social links
]
```

### 3. Add Your Images

Replace the template images with your own:

- **Project Images**: Add to `public/images/projects/`
- **Almost Work**: Add to `public/images/projects/almost-work/`
- **Favicon**: Replace `app/favicon.ico`

### 4. Update Contact Information

In `app/page.tsx`, update the email and contact section:

```typescript
<ContactSection
	email="your.email@domain.com"
	title="Available for collaborations and experiments."
	socialLinks={SOCIAL_LINKS}
/>
```

### 5. Run and Deploy

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Deploy to Vercel, Netlify, or your preferred hosting platform.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **TypeScript** - Type safety
- **Lucide React** - Clean, consistent icons

## Project Structure

```
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
│   ├── sections/        # Main page sections
│   └── ui/             # Base UI components
├── lib/
│   ├── constants.ts    # All your customizable content
│   ├── hooks/          # Custom React hooks
│   └── utils.ts        # Utility functions
├── public/             # Static assets
└── types/              # TypeScript type definitions
```

---

**Ready to showcase your work?** Start by customizing `lib/constants.ts` with your information and replace the template images with your own projects.
