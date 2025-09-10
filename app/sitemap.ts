import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_CONFIG.url,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${SITE_CONFIG.url}/#projects`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${SITE_CONFIG.url}/#almost`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${SITE_CONFIG.url}/#contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.7,
		},
	]
}
