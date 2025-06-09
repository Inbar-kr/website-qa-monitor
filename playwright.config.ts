import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 10000,
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'off',
    baseURL: 'https://www.demoblaze.com',
    trace: 'on-first-retry',
  },
  projects: [
    // Desktop Browsers
    {
      name: 'Chromium Desktop',
      use: { 
        ...devices['Desktop Chrome'], 
        browserName: 'chromium',
      },
    },
    {
      name: 'Firefox Desktop',
      use: { 
        ...devices['Desktop Firefox'], 
        browserName: 'firefox',
      },
    },
    {
      name: 'Microsoft Edge',
      use: { 
        ...devices['Desktop Chrome'], 
        browserName: 'chromium',
        channel: 'msedge',
      },
    },

    // Mobile devices
    {
      name: 'Chromium Mobile (Pixel 5)',
      use: { 
        ...devices['Pixel 5'], 
        browserName: 'chromium',
      },
    },
    {
      name: 'Safari Mobile (iPhone 14 Pro Max)',
      use: { 
        ...devices['iPhone 14 Pro Max'], 
        browserName: 'webkit',
      },
    },
  ],
  reporter: [
    ['html', { outputFolder: 'results/html-report', open: 'never' }],
  ],
});
