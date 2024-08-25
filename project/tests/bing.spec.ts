import { test, expect } from '@playwright/test';

test('has bing title', async ({ page }) => {
  await page.goto('https://www.bing.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/必应ing/);
});

