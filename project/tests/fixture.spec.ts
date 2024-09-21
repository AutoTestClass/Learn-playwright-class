import { test, expect } from '@playwright/test';

test.describe('navigation', () => {


  test.beforeEach(async ({ page }) => {
    console.log('Before each test.');
    // 在每个测试之前转到起始 URL。
    await page.goto('https://playwright.dev/');
  });
  
  test.afterEach(async ({ page }) => {
    // 在每个测试之后执行。
    console.log("After each test.")
  });

  test('main navigation', async ({ page }) => {
    // 断言使用 expect API。
    await expect(page).toHaveURL('https://playwright.dev/');
  });

});