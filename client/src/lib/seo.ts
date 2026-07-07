/**
 * SEO utilities for generating meta tags and structured data
 */

export interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedDate?: string;
}

export function generateMetaTags(config: SEOConfig) {
  return {
    title: `${config.title} | BIG ISHA Initiative`,
    description: config.description,
    og: {
      title: config.title,
      description: config.description,
      image: config.image || "https://bigisha.org/og-image.png",
      url: config.url || "https://bigisha.org",
      type: config.type || "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      image: config.image,
    },
  };
}

export function generateNonProfitSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "BIG ISHA Initiative",
    "url": "https://bigisha.org",
    "logo": "https://bigisha.org/logo.png",
    "description": "BIG ISHA Initiative is a non-governmental organization based in Owerri, Imo State, Nigeria, dedicated to transforming lives through education, health, and community empowerment.",
    "location": {
      "@type": "Place",
      "name": "Owerri, Imo State, Nigeria",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Owerri",
        "addressRegion": "Imo State",
        "addressCountry": "NG"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@bigisha.org",
      "telephone": "[Insert Phone]"
    },
    "sameAs": [
      "https://facebook.com/bigisha",
      "https://instagram.com/bigisha",
      "https://twitter.com/bigisha",
      "https://linkedin.com/company/bigisha"
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BIG ISHA Initiative",
    "url": "https://bigisha.org",
    "logo": "https://bigisha.org/logo.png",
    "foundingDate": "[Insert Founding Year]",
    "founders": [
      {
        "@type": "Person",
        "name": "[Insert Founder Name]"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Insert Street Address]",
      "addressLocality": "Owerri",
      "addressRegion": "Imo State",
      "postalCode": "[Insert Postal Code]",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@bigisha.org",
      "telephone": "[Insert Phone]"
    }
  };
}
