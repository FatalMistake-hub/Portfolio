import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: "website" | "article" | "profile";
}

// SEO Configuration
export const SEO_CONFIG = {
  SITE_NAME: 'Minh Nhat - Frontend Developer',
  SITE_URL: 'https://portfolio-rho-jet-91.vercel.app',
  TWITTER_HANDLE: '@minhnhat_dev',
  DEFAULT_IMAGE: '/images/avt.jpg',
  AUTHOR: 'Minh Nhat',
};

// Common keywords for the site
export const commonKeywords = [
  "Minh Nhat",
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "JavaScript",
  "TypeScript",
  "Web Developer",
  "UI/UX Designer",
  "Portfolio"
];

// Default images for different pages
export const defaultImages = {
  home: "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
  about: "https://portfolio-rho-jet-91.vercel.app/images/about.webp",
  projects: "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
  contact: "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
  resume: "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
  url,
  type = "website"
}: SEOProps): Metadata {
  const siteName = SEO_CONFIG.SITE_NAME;
  const twitterHandle = SEO_CONFIG.TWITTER_HANDLE;
  
  return {
    title,
    description,
    keywords: [...commonKeywords, ...keywords],
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      creator: twitterHandle,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}

// Simplified metadata generator for pages
export function createPageMetadata({
  title,
  description,
  path = '',
  image,
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
  const pageImage = image || SEO_CONFIG.DEFAULT_IMAGE;
  
  return generateMetadata({
    title,
    description,
    keywords,
    image: pageImage.startsWith('http') ? pageImage : `${SEO_CONFIG.SITE_URL}${pageImage}`,
    url,
    type
  });
}
