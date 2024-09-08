import { test, expect } from '@playwright/test';

test('baidu keyword', async ({ page }) => {
  await page.goto('https://www.baidu.com');

  const input = page.locator('#kw')
  // 搜索设置
  await input.fill('playwrightt')
  await page.waitForTimeout(2000);

  await input.press('Backspace');
  await page.waitForTimeout(2000);

  await input.press('Control+A')
  await page.waitForTimeout(2000);
  
  await input.press('Control+X')
  await page.waitForTimeout(2000);
  
  await input.press('Control+V')
  await page.waitForTimeout(2000);

  await input.press('Enter')
  await page.waitForTimeout(2000);

});
