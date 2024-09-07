import { test, expect } from '@playwright/test';

test('sahitest screenshot', async ({ page }) => {
  await page.goto('https://sahitest.com/demo/takePageScreenshotTest.htm');
  
  // 页面截图
  await page.screenshot({ path: 'sahitest-screenshot.png' });
  // 元素截图
  await page.locator('body > div.api > div').screenshot({ path: 'sahitest-screenshot-div.png' });

});
