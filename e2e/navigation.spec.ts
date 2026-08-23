import { test, expect } from '@playwright/test';

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

test.describe('Navigation and E2E Journeys', () => {
  test('should navigate between pages correctly on desktop', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop only test');

    await page.goto('/');
    
    // Check home page loaded
    await expect(page).toHaveTitle(/North Star Advisory/i);
    await expect(page.locator('h1').first()).toBeVisible();

    // Click on About
    await page.locator('.nav-desktop a').filter({ hasText: /^About$/ }).click();
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1', { hasText: 'About North Star Advisory' })).toBeVisible();

    // Click on Advisory Services
    await page.locator('.nav-desktop a').filter({ hasText: /^Advisory Services$/ }).click();
    await expect(page).toHaveURL(/.*\/advisory-services/);
    await expect(page.locator('h1', { hasText: 'Engagements' })).toBeVisible();

    // Click on Track Record
    await page.locator('.nav-desktop a').filter({ hasText: /^Track Record$/ }).click();
    await expect(page).toHaveURL(/.*\/track-record/);
    await expect(page.locator('h1', { hasText: 'The Diagnostic Approach' })).toBeVisible();

    // Click on Contact (Enquire CTA)
    await page.locator('.nav-desktop a').filter({ hasText: /^Enquire$/ }).first().click();
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.locator('h1', { hasText: 'Request a Real-Estate Lead-to-Appointment Diagnostic' })).toBeVisible();
  });

  test('should open and use mobile menu correctly', async ({ page, isMobile, viewport }) => {
    test.skip(!isMobile || (viewport && viewport.width > 900), 'Mobile viewport only test');

    await page.goto('/');
    
    // Open menu
    const menuBtn = page.locator('button.nav-mobile-trigger').filter({ visible: true });
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    await expect(page.locator('#mobile-menu')).toBeVisible();

    // Click on About
    const aboutLink = page.locator('#mobile-menu a').filter({ hasText: 'About' }).filter({ visible: true });
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1', { hasText: 'About North Star Advisory' })).toBeVisible();
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
