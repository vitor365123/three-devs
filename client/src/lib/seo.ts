/**
 * SEO Utilities - Three Devs
 * Funções para otimização de SEO
 */

import { METADATA } from './constants';

export const updateMetaTags = (
  title?: string,
  description?: string,
  ogImage?: string
) => {
  // Update title
  if (title) {
    document.title = title;
    const titleTag = document.querySelector('meta[property="og:title"]');
    if (titleTag) titleTag.setAttribute('content', title);
  }

  // Update description
  if (description) {
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', description);
    
    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', description);
  }

  // Update OG image
  if (ogImage) {
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) ogImageTag.setAttribute('content', ogImage);
  }
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Three Devs',
    url: 'https://threedevs.com.br',
    logo: METADATA.ogImage,
    description: METADATA.description,
    sameAs: [
      'https://wa.me/5585991082608'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Fortaleza',
      addressRegion: 'CE'
    }
  };
};

export const generateBreadcrumbs = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};
