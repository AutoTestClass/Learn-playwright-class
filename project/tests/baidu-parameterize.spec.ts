import { test, expect } from '@playwright/test';

[
  { name: 'playwright', expected: 'playwright_百度搜索' },
  { name: 'node.js', expected: 'node.js_百度搜索' },
].forEach(({ name, expected }) => {
  // 测试用例
  test(`baidu testing with ${name}`, async ({ page }) => {
    await page.goto('https://www.baidu.com');

    await page.locator('#kw').fill(name)
    await page.locator('#kw').press('Enter');

    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle(expected);    
  });
});
