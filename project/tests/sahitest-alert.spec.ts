import { test, expect } from '@playwright/test';

test('sahitest alert advanced search setting', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://sahitest.com/demo/alertTest.htm');
  

  // 监听 alert 对话框
  page.on('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await page.waitForTimeout(3000);
    await dialog.accept(); // 接受 alert 对话框
  });

  // 点击按钮，触发 alert
  await page.getByRole('button', { name: 'Click For Alert' }).click();
  
});
