import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.waitForTimeout(1000);
  await expect(page).toHaveScreenshot();
});