import { test, expect } from '@playwright/test';

test('sahitest iframe', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://sahitest.com/demo/iframesTest.htm');

 // 查找 iframe
  const frameElement = await page.frameLocator('body > iframe');

  // 现在可以在 iframe 内查找元素并进行交互
  const title = await frameElement.locator('body > h2').textContent()
  console.log('------------------>', title);
  expect(title).toBe('Sahi Tests');
});
