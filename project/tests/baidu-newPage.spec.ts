import { test, expect } from '@playwright/test';

test('baidu advanced search setting', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://www.baidu.com');

  // 搜索设置
  await page.locator('#s-usersetting-top').first().hover();
  await page.locator('#s-user-setting-menu > div > a.setpref.first > span').click();
  await page.waitForTimeout(2000);
  // 高级搜索
  await page.locator('#wrapper > div.bdlayer.s-isindex-wrap.new-pmd.pfpanel > div > div > ul > li:nth-child(2)').click();

  await page.locator('#adv_keyword').fill('seldomqa');

  // 下拉框
  await page.locator('#adv-setting-gpc > div > div.c-select-selection').click();
  await page.locator('#adv-setting-gpc > div > div.c-select-dropdown > div.c-select-dropdown-list > p:nth-child(5)').click();
  // 单选框
  await page.locator('#q5_1').check();
  await page.waitForTimeout(2000);
  
  // 高级搜索 - 监听打开新的页面
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    // page.click('#adv-setting-8 > input.advanced-search-btn.c-btn.c-btn-primary.switch-button'),
    page.locator('#adv-setting-8 > input.advanced-search-btn.c-btn.c-btn-primary.switch-button').click()
  ]);

  await newPage.waitForTimeout(3000);

  // 断言新页面标题
  await expect(newPage).toHaveTitle('title: (seldomqa)_百度搜索');  // 断言新的标签页的标题
  
  // 断言原页面标题
  await expect(page).toHaveTitle('百度一下，你就知道');
});
