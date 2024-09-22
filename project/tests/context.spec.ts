import { test, expect } from '@playwright/test';

test('should inherit use options on context when using built-in browser fixture', async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
  await page.waitForTimeout(3000);
  console.log('sss', await page.evaluate(() => navigator.userAgent))
  console.log('sss', await page.evaluate(() => window.innerWidth))

  expect(await page.evaluate(() => navigator.userAgent)).toBe('some custom ua');
  expect(await page.evaluate(() => window.innerWidth)).toBe(1920);
  await context.close();
});