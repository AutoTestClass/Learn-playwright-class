import { test, expect } from '@playwright/test';

// 全局变量用于存储请求上下文
let apiReqContext; 


test.beforeAll(async ({ playwright }) => {
  // 初始化 API 请求上下文
  apiReqContext = await playwright.request.newContext({
    baseURL: 'https://httpbin.org',
    extraHTTPHeaders: {
      'Authorization': 'Bearer your-token' // 设置全局请求头，例如身份验证
    }
  });
  console.log('beforeAll: 初始化 API 请求上下文');
});

test.afterAll(async () => {
  // 清理请求上下文
  await apiReqContext.dispose();
  console.log('afterAll: 清理 API 请求上下文');
});

test('POST 请求测试 - 创建资源', async () => {
  const response = await apiReqContext.post('/post', {
    data: {
      name: 'Playwright',
      type: 'Automation'
    }
  });
  
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody.json).toEqual(expect.objectContaining({
    name: 'Playwright',
    type: 'Automation',
  }));
});

test('GET 请求测试 - 获取资源', async () => {
  const response = await apiReqContext.get('/get');
  
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody).toHaveProperty('headers');
});
