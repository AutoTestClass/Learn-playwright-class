import { test, expect } from '@playwright/test';

test('sahitest drag drop', async ({ page }) => {
  await page.goto('https://sahitest.com/demo/dragDropMooTools.htm');
  
  // 推动
  await page.getByText('Drag me').dragTo(page.getByText('Item 1'));
  await page.waitForTimeout(2000);

  // 拖动
  await page.getByText('Drag me').hover();
  await page.mouse.down();
  await page.getByText('Item 2').hover();
  await page.mouse.up();
  await page.waitForTimeout(2000);

});
