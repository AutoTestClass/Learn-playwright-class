import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';  
  
const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename);
const __filesdir = path.join(__dirname, 'files');

test('sahitest upload', async ({ page }) => {
  await page.goto('https://sahitest.com/demo/php/fileUpload.htm');
  
  
  // 指定要上传的文件路径
  const filePath = path.join(__filesdir, 'sahitest-upload.png');
  await page.locator('#file').setInputFiles(filePath);
  await page.waitForTimeout(2000);

  await page.locator('#files').setInputFiles([
    path.join(__filesdir, 'file1.txt'),
    path.join(__filesdir, 'file2.txt'),
  ]);
  await page.waitForTimeout(2000);
  
});
