/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://meridian-advisory.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/favicon.ico'],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};
