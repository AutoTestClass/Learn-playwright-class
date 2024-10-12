import { test, expect } from '@playwright/test';

test('api test get', async ({ request }) => {

  const resp = await request.get(`https://httpbin.org/get`, {
    params: {  
      id: 1,  
      name: 'jack',  
    },
  });
  
  expect(resp.ok()).toBeTruthy();
  const respBody = await resp.json();  
  console.log(respBody);
  expect(respBody).toEqual(expect.objectContaining({  
    args: { id: '1', name: 'jack' } 
  }));
});

test('api test post-data', async ({ request }) => {
  const resp = await request.post(`https://httpbin.org/post`, {
    form: {
      title: 'title',
      body: 'body',
    }
  });
  expect(resp.ok()).toBeTruthy();

  const respBody = await resp.json();  
  console.log(respBody);
  
  expect(respBody).toEqual(expect.objectContaining({  
    form: {
      title: 'title',
      body: 'body',  
    },  
  }));

});

test('api test post-json', async ({ request }) => {

  const resp = await request.post(`https://httpbin.org/post`, {
    headers: {  
      'Content-Type': 'application/json',  
    },  
    data: {  
      title: 'test title',  
      body: 'test body',  
    }, 
  });
  expect(resp.ok()).toBeTruthy();
  
  const respBody = await resp.json();  
  console.log(respBody);
  
  expect(respBody).toEqual(expect.objectContaining({  
    json: {
      title: 'test title',
      body: 'test body',
    },    
  }));

});
