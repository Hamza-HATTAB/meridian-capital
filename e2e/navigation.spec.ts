import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/about',
  '/contact',
  '/advisory-services',
  '/investment-intelligence',
  '/insights',
  '/track-record',
  '/transactions'
];

test.describe('Navigation and E2E Journeys', () => {
  test('should navigate between pages correctly on desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop only test');

    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();

    // Click on About
    await page.click('nav a:has-text("About")');
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1', { hasText: 'About the Firm' })).toBeVisible();

    // Click on Contact
    await page.click('nav a:has-text("Contact")');
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.locator('h1', { hasText: 'Institutional Enquiries' })).toBeVisible();
  });

  test('should open and use mobile menu correctly', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test');

    await page.goto('/');
    
    // Open menu
    const menuBtn = page.locator('button.nav-mobile-trigger');
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    await expect(page.locator('#mobile-menu')).toBeVisible();

    // Click on About
    const aboutLink = page.locator('#mobile-menu a', { hasText: 'About' });
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1', { hasText: 'About the Firm' })).toBeVisible();
  });

  for (const p of pages) {
    test(`Page ${p} should load without console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (exception) => {
        errors.push(exception.message);
      });
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const text = msg.text();
          // Ignore Next.js HMR WebSocket errors which are harmless in dev
          if (!text.includes('webpack-hmr') && !text.includes('ERR_INVALID_HTTP_RESPONSE')) {
            errors.push(text);
          }
        }
      });

      await page.goto(p);
      await page.waitForLoadState('load');

      expect(errors).toEqual([]);
    });
  }
});
