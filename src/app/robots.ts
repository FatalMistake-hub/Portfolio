import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: ' https://portfolio-fatalmistakehubs-projects.vercel.app/sitemap.xml',
  }
}
