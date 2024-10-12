import { test, expect } from '@playwright/test';

test('测试 - context', async ({ playwright }) => {

  const context = await playwright.request.newContext({
    baseURL: 'https://httpbin.org',
  });

  // Create a repository.
  const resp1 = await context.post('/post', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token 123`,
    },
    data: {
      name: "jack"
    }
  });
  expect(resp1.ok()).toBeTruthy();
  const responseBody = await resp1.json();
  console.log(responseBody);

  // Delete a repository.
  const resp2 = await context.delete(`/delete`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    }
  });
  expect(resp2.ok()).toBeTruthy();
  const responseBody2 = await resp2.json();
  console.log(responseBody2);
});
