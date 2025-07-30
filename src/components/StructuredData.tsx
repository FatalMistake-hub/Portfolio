export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Minh Nhat",
    jobTitle: "Frontend Developer",
    description: "Passionate frontend developer specializing in React, Next.js, and modern web technologies",
    url: "https://portfolio-rho-jet-91.vercel.app",
    image: "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
    sameAs: [
      "https://github.com/FatalMistake-hub",
      "https://www.linkedin.com/in/minh-nh%E1%BA%ADt-qu%C3%A1ch/",
      "https://twitter.com/minhnhat_dev"
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Web Development",
      "Frontend Development",
      "UI/UX Design"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN"
    },
    email: "contact@minhnhat.dev",
    telephone: "+84-xxx-xxx-xxx"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Minh Nhat - Frontend Developer Services",
    description: "Professional frontend development services specializing in React, Next.js, and modern web technologies",
    url: "https://portfolio-rho-jet-91.vercel.app",
    logo: "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
    image: "https://portfolio-rho-jet-91.vercel.app/images/avt.jpg",
    founder: {
      "@type": "Person",
      name: "Minh Nhat"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-xxx-xxx-xxx",
      contactType: "customer service",
      email: "contact@minhnhat.dev"
    },
    sameAs: [
      "https://github.com/FatalMistake-hub",
      "https://www.linkedin.com/in/minh-nh%E1%BA%ADt-qu%C3%A1ch/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Minh Nhat - Frontend Developer Portfolio",
    description: "Portfolio website of Minh Nhat, a passionate frontend developer specializing in React, Next.js, and modern web technologies",
    url: "https://portfolio-rho-jet-91.vercel.app",
    author: {
      "@type": "Person",
      name: "Minh Nhat"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://portfolio-rho-jet-91.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
