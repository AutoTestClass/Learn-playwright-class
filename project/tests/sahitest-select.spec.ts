import { test, expect } from '@playwright/test';

test('sahitest select', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://sahitest.com/demo/selectTest.htm');
  
  await page.locator('#s1Id').selectOption('o1');
  await page.locator('#s4Id').selectOption(['o1val', 'o2val']);
  await page.waitForTimeout(2000);

  await page.locator('#s2Id').selectOption({ label: 'o2' });
  await page.locator('#s1').selectOption({ label: 'Business Phone' });
  await page.waitForTimeout(2000);

  await page.locator('#testInputEvent').selectOption({ index: 2 });
  await page.waitForTimeout(2000);

  // 另一个选择方式
  // await page.selectOption('#s1Id', 'o3');
  // await page.selectOption('#s1Id', {label: 'o2'});
  // await page.selectOption('#s1Id', {index: 0});
  
});
