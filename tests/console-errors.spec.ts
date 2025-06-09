import { test, expect } from '@playwright/test';

test('should not have console errors on homepage', async ({ page }) => {
  const consoleErrors: string[] = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto('/');

  if (consoleErrors.length > 0) {
    console.log('Console errors found:');
    consoleErrors.forEach(err => console.log(err));
  }

  expect(consoleErrors.length).toBe(0);
});
