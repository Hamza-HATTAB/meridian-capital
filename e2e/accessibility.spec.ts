import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/advisory-services',
  '/investment-intelligence',
  '/insights',
  '/track-record',
  '/transactions'
];

test.describe('Accessibility Audit', () => {
  for (const pagePath of pages) {
    test(`page ${pagePath} should not have any automatically detectable accessibility issues`, async ({ page }) => {
      await page.goto(pagePath);
      await page.waitForLoadState('load');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
