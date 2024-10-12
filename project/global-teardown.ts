import { chromium, type FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);
  await console.log('Global teardown', baseURL, storageState);
  await browser.close();
}

export default globalTeardown;