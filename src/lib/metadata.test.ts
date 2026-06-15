import { describe, it, expect, vi } from 'vitest';
import { createMetadata } from './metadata';

vi.mock('@/config/site', () => ({
  siteConfig: {
    name: 'Test Site',
    defaultTitle: 'Default Title',
    description: 'Default Description',
    url: 'https://test.com',
  },
}));

describe('createMetadata', () => {
  it('returns default metadata when no overrides are provided', () => {
    const metadata = createMetadata();

    expect(metadata.title).toBe('Default Title');
    expect(metadata.description).toBe('Default Description');
    expect(metadata.openGraph?.title).toBe('Default Title');
    expect(metadata.openGraph?.images).toEqual([
      {
        url: 'https://test.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Default Title',
      },
    ]);
    expect(metadata.robots).toEqual({
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    });
  });

  it('overrides title correctly', () => {
    const metadata = createMetadata({ title: 'Custom Page' });
    expect(metadata.title).toBe('Custom Page | Test Site');
  });

  it('overrides description correctly', () => {
    const metadata = createMetadata({ description: 'Custom Description' });
    expect(metadata.description).toBe('Custom Description');
  });

  it('overrides image correctly', () => {
    const metadata = createMetadata({ image: '/custom-image.png' });
    expect(metadata.openGraph?.images).toEqual([
      {
        url: 'https://test.com/custom-image.png',
        width: 1200,
        height: 630,
        alt: 'Default Title',
      },
    ]);
  });

  it('handles noIndex override correctly', () => {
    const metadata = createMetadata({ noIndex: true });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it('handles full overrides correctly', () => {
    const metadata = createMetadata({
      title: 'Full Custom',
      description: 'Fully customized',
      image: '/full.jpg',
      noIndex: true,
    });

    expect(metadata.title).toBe('Full Custom | Test Site');
    expect(metadata.description).toBe('Fully customized');
    expect(metadata.openGraph?.images).toEqual([
      {
        url: 'https://test.com/full.jpg',
        width: 1200,
        height: 630,
        alt: 'Full Custom | Test Site',
      },
    ]);
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});
