import { test, expect } from '@playwright/test';

test.describe('Performance Metrics', () => {
  test('homepage loads in under 3 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - start;

    console.log(`Homepage loaded in ${loadTime} ms`);
    expect(loadTime).toBeLessThan(3000);
  });

  test('should not have failed network requests', async ({ page }) => {
    const failedRequests: string[] = [];

    page.on('requestfailed', request => {
      failedRequests.push(request.url());
    });

    await page.goto('/');
    if (failedRequests.length > 0) {
      console.warn('Failed requests:', failedRequests);
    }

    expect(failedRequests.length).toBe(0);
  });

});
