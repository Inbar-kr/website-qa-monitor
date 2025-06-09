import { test, expect } from '@playwright/test';

test.describe('Homepage Availability & Content', () => {
  
  test('should load homepage with status < 400', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBeLessThan(400);
  });

  test('should display site title and navbar', async ({ page }) => {
    await page.goto('/');

    // Check the page title
    await expect(page).toHaveTitle(/STORE|PRODUCT/i);

    // Check navbar is visible
    const navbar = page.locator('.navbar-brand');
    await expect(navbar).toBeVisible();
    });

    test('should display featured products', async ({ page }) => {
    await page.goto('/');

    const productCards = page.locator('#tbodyid > div');
    await productCards.first().waitFor({ timeout: 5000 });
    const count = await productCards.count();
    console.log(`Found ${count} product cards`);
    expect(count).toBeGreaterThan(0);
  });
});
