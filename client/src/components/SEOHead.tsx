import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedDate?: string;
  schema?: Record<string, any>;
}

export function SEOHead({
  title,
  description,
  image = "https://bigisha.org/og-image.png",
  url = "https://bigisha.org",
  type = "website",
  author,
  publishedDate,
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | BIG ISHA Initiative`;

    // Update meta tags
    const updateMeta = (name: string, content: string, isProperty: boolean = false) => {
      let meta = document.querySelector(`meta[${isProperty ? "property" : "name"}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(isProperty ? "property" : "name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("description", description);
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:image", image, true);
    updateMeta("og:url", url, true);
    updateMeta("og:type", type, true);
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", image);

    if (author) updateMeta("author", author);
    if (publishedDate) updateMeta("article:published_time", publishedDate);

    // Add structured data
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, image, url, type, author, publishedDate, schema]);

  return null;
}
