import { Metadata } from 'next';

/**
 * SEO Checklist Component
 * This component serves as a documentation and checklist for SEO improvements
 */

export const SEOChecklist = {
  // Technical SEO
  technical: {
    completed: [
      'Meta title tags (unique for each page)',
      'Meta description tags (unique for each page)',
      'Open Graph tags for social media',
      'Twitter Card tags',
      'Canonical URLs',
      'Robots.txt file',
      'XML sitemap',
      'Structured data (JSON-LD)',
      'Viewport meta tag',
      'Language attribute',
      'Theme color meta tag',
      'Favicon',
    ],
    pending: [
      'Google Search Console verification',
      'Google Analytics setup',
      'Page speed optimization',
      'Mobile responsiveness',
      'HTTPS implementation',
      'Image alt tags',
      'Internal linking strategy',
    ]
  },

  // Content SEO
  content: {
    completed: [
      'Unique page titles',
      'Descriptive meta descriptions',
      'Header tags hierarchy (H1, H2, H3)',
      'Keyword optimization',
      'Content quality and uniqueness',
    ],
    pending: [
      'Blog content creation',
      'Regular content updates',
      'Keyword research',
      'Content length optimization',
    ]
  },

  // Performance SEO
  performance: {
    completed: [
      'Next.js Image optimization',
      'Vercel Speed Insights',
      'Static site generation',
    ],
    pending: [
      'Core Web Vitals optimization',
      'Lazy loading implementation',
      'Bundle size optimization',
      'CDN implementation',
    ]
  }
};

/**
 * SEO Configuration Constants
 */
export const SEO_CONFIG = {
  SITE_NAME: 'Minh Nhat - Frontend Developer',
  SITE_URL: 'https://portfolio-rho-jet-91.vercel.app',
  TWITTER_HANDLE: '@minhnhat_dev',
  DEFAULT_IMAGE: '/images/avt.jpg',
  AUTHOR: 'Minh Nhat',
  KEYWORDS: [
    'Minh Nhat',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript',
    'TypeScript',
    'Web Developer',
    'UI/UX Designer',
    'Portfolio'
  ]
};

/**
 * Generate page-specific metadata
 */
export function createPageMetadata({
  title,
  description,
  path = '',
  image = SEO_CONFIG.DEFAULT_IMAGE,
  keywords = [],
  type = 'website'
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
}): Metadata {
  const url = `${SEO_CONFIG.SITE_URL}${path}`;
  const fullTitle = title === 'Home' ? SEO_CONFIG.SITE_NAME : `${title} | ${SEO_CONFIG.SITE_NAME}`;
  
  return {
    title: fullTitle,
    description,
    keywords: [...SEO_CONFIG.KEYWORDS, ...keywords],
    authors: [{ name: SEO_CONFIG.AUTHOR }],
    creator: SEO_CONFIG.AUTHOR,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SEO_CONFIG.SITE_NAME,
      images: [
        {
          url: image.startsWith('http') ? image : `${SEO_CONFIG.SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SEO_CONFIG.TWITTER_HANDLE,
      images: [
        {
          url: image.startsWith('http') ? image : `${SEO_CONFIG.SITE_URL}${image}`,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
