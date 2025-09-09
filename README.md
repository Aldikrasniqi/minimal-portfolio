# 🚀 Minimal Portfolio

A modern, performant portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean, minimalist design with smooth animations and excellent accessibility.

## ✨ Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Performance Optimized**: Turbopack, image optimization, font optimization
- **Accessibility First**: WCAG compliant with proper ARIA labels and semantic HTML
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dynamic Layouts**: Flexible grid system with full-width showcase items
- **Type Safe**: Full TypeScript implementation with proper type definitions
- **Clean Architecture**: Modular components following clean code principles
- **Error Handling**: Comprehensive error boundaries and loading states
- **SEO Optimized**: Proper metadata, Open Graph, and Twitter Cards
- **Portfolio Sections**: Hero, Projects, Almost Work showcase, and Contact

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI Slot, custom components with CVA
- **Icons**: Lucide React
- **Fonts**: Inter Variable font with fallbacks
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Animations**: tw-animate-css
- **Package Manager**: PNPM
- **Build Tool**: Turbopack

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page with sections
│   ├── loading.tsx        # Loading UI
│   └── error.tsx          # Error UI
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AlmostSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Section.tsx    # Base section component
│   │   └── index.ts       # Section exports
│   ├── ui/               # UI primitives
│   │   ├── button.tsx
│   │   └── Loading.tsx
│   ├── AlmostWorkCard.tsx # Almost work project cards
│   ├── Navigation.tsx    # Main navigation
│   ├── ProjectCard.tsx   # Project display cards
│   └── ErrorBoundary.tsx # Error boundary component
├── lib/                  # Utilities and configuration
│   ├── constants.ts      # App constants and configuration
│   ├── fonts.ts         # Font configuration
│   ├── utils.ts         # Utility functions
│   └── dev-utils.ts     # Development utilities
├── types/               # TypeScript type definitions
│   └── index.ts
└── public/             # Static assets
    ├── fonts/          # Custom fonts
    ├── images/         # Project images and assets
    │   └── projects/   # Project-specific images
    └── *.svg          # Icon assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PNPM (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd minimal-portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### 1. Personal Information

Update your personal information in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
	name: 'Your Portfolio',
	title: 'Professional Portfolio | Your Name',
	description: 'Your description here',
	url: 'https://yourportfolio.com',
	author: {
		name: 'Your Name',
		email: 'your.email@example.com',
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
	},
}
```

### 2. Portfolio Content

#### Projects

Update your projects in `lib/constants.ts`:

```typescript
export const PROJECTS = [
	{
		id: '1',
		title: 'Your Project Title',
		shortDescription: 'Brief description',
		role: 'Your Role',
		mainImage: '/images/projects/your-project/template.jpg',
		workContent: 'Detailed project description...',
		imageGallery: [...],
	},
]
```

#### Almost Work Showcase

Configure your showcase items in `lib/constants.ts`:

```typescript
export const ALMOST_WORK = [
	{
		id: '1',
		title: 'Project Name',
		image: '/images/projects/almost-work/your-image.jpg',
		isFullSize: false, // Set to true for full-width display
	},
]
```

#### Page Content

Modify the section content in `app/page.tsx`:

```tsx
<HeroSection />
<ProjectsSection />
<AlmostSection />
<ContactSection />
```

### 3. Styling

- Colors and design tokens: `app/globals.css`
- Component styles: Individual component files
- Tailwind configuration: `tailwind.config.js` (if created)

## 🎨 Design System

The project uses a consistent design system with:

- **Typography**: Inter Variable font with multiple weights
- **Colors**: Modern OKLCH color space with light/dark mode support
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions and micro-interactions
- **Components**: Reusable UI components with variants

## 🧩 Key Components

### AlmostWorkCard

Flexible showcase component supporting two layouts:

- **Regular Cards**: Square aspect ratio for standard items
- **Full-size Cards**: 2:1 aspect ratio spanning full grid width
- **Features**: Rounded corners, image optimization, responsive titles

### ProjectCard

Main project display component with:

- Hero image display
- Project metadata (title, role, description)
- Responsive design

### Section Components

Modular page sections:

- `HeroSection`: Landing area with introduction
- `ProjectsSection`: Main portfolio showcase
- `AlmostSection`: Creative work display with flexible grid
- `ContactSection`: Contact information and links

## 🔧 Development

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production with Turbopack
pnpm start        # Start production server
pnpm lint         # Run ESLint (if configured)
```

### Code Quality

The project follows clean code principles:

- **Separation of Concerns**: Modular components and utilities
- **Type Safety**: Comprehensive TypeScript usage
- **Documentation**: JSDoc comments for all functions
- **Error Handling**: Proper error boundaries and loading states
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Performance**: Optimized fonts, images, and bundle size

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
