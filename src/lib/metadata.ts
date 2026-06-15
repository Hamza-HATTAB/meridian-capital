import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface MetadataOverride {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Factory function for consistent, complete page metadata.
 * Every page MUST call this — never construct metadata manually.
 *
 * @example
 * export const metadata = createMetadata({
 *   title: 'Track Record',
 *   description: '18 years of institutional real estate advisory...',
 * });
 */
export function createMetadata(override: MetadataOverride = {}): Metadata {
  const title = override.title
    ? `${override.title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;

  const description = override.description ?? siteConfig.description;

  const imageUrl = override.image
    ? `${siteConfig.url}${override.image}`
    : `${siteConfig.url}/og-image.png`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: override.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}
