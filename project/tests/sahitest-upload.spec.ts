import { test, expect } from '@playwright/test';
import path from 'path';

test('sahitest upload', async ({ page }) => {
  await page.goto('https://sahitest.com/demo/php/fileUpload.htm');
  
  
  // 指定要上传的文件路径
  const filePath = path.join(__dirname, 'files', 'sahitest-upload.png');
  // 页面截图
  await page.locator('#file').setInputFiles(filePath);
  await page.waitForTimeout(2000);

  await page.locator('#files').setInputFiles([
    path.join(__dirname, 'files', 'file1.txt'),
    path.join(__dirname, 'files', 'file2.txt'),
  ]);
  await page.waitForTimeout(2000);
  
});
