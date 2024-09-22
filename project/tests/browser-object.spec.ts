import { test, expect, chromium } from '@playwright/test';

test('browser object', async () => {
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  // context.addCookies([cookieObject1, cookieObject2]);
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
  await page.waitForTimeout(2000);
  
  await expect(page).toHaveTitle(/Playwright/);
  
  await browser.close();
});
