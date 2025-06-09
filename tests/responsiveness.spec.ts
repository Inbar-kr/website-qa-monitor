import { test, expect } from '@playwright/test';

test.describe('Responsive Layout Tests', () => {
  const viewports = [
    { name: 'Mobile - iPhone 14 Pro Max', width: 430, height: 932 },
    { name: 'Tablet - iPad Air', width: 820, height: 1180 },
    { name: 'Desktop - 1920px', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`should render homepage correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');

      // Navbar should be visible or togglable
      const navbar = page.locator('.navbar');
      await expect(navbar).toBeVisible();

      // Product cards should load and adapt layout
      const products = page.locator('#tbodyid > div');
      await products.first().waitFor({ timeout: 5000 });
      expect(await products.count()).toBeGreaterThan(0);
    });
  }
});