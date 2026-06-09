import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: object | object[];
}

const BASE_URL = 'https://sr3entandsurgicalcentre.com';
const DEFAULT_IMAGE = `${BASE_URL}/sr3clinic.jpeg`;

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setSchema(schema: object | object[]) {
  const existing = document.getElementById('page-schema');
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'page-schema';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_IMAGE,
  schema,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | SR³ ENT & Surgical Centre`;
    document.title = fullTitle;

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    if (canonical) setLink('canonical', `${BASE_URL}${canonical}`);

    // Open Graph
    setMeta('og:title', ogTitle ?? fullTitle, 'property');
    setMeta('og:description', ogDescription ?? description, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:url', canonical ? `${BASE_URL}${canonical}` : BASE_URL, 'property');

    // Twitter
    setMeta('twitter:title', ogTitle ?? fullTitle);
    setMeta('twitter:description', ogDescription ?? description);
    setMeta('twitter:image', ogImage);

    if (schema) setSchema(schema);

    return () => {
      // Restore defaults on unmount
      document.title = 'SR³ ENT & Surgical Centre | Best ENT Doctor in Lucknow | Care & Cure';
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage]);
}

// Helper: breadcrumb schema
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
