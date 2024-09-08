import { test, expect } from '@playwright/test';

test('baidu search result', async ({ page }) => {
  await page.goto('https://www.baidu.com');

  // 搜索设置 id="kw" #kw
  await page.locator('#kw').fill('title:(playwright)')
  await page.locator('#kw').press('Enter');
  // await page.locator('#su').click();
  await page.waitForTimeout(2000);

  // 获取一组元素，遍历断言每个元素的文本内容
  const elems = await page.locator('div > h3 > a')

  // 遍历每个元素，获取文本内容，并进行断言
  for (let i = 0; i < await elems.count(); i++) {
    const elem = await elems.nth(i); // 获取第i个元素
    
    const textContent = await elem.textContent(); // 获取文本内容
    console.log(textContent);
    
    // 注意：这里的断言应该是针对每个元素的文本内容，而不是页面的标题
    if (textContent) {
      const lowerCaseText = textContent.toLowerCase();
      expect(lowerCaseText).toContain('playwright');  
    }
  }
  
});
