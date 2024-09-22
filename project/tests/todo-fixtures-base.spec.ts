import { test as base } from '@playwright/test';
import { TodoPage } from './page/todo-page';

// Extend basic test by providing a "todoPage" fixture.
const test1 = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');

    await use(todoPage);
    
    await todoPage.removeAll();
  },
});

test1('should add an item', async ({ todoPage }) => {
  await todoPage.addToDo('my item');
  // ...
});

test1('should remove an item', async ({ todoPage }) => {
  await todoPage.remove('item1');
  // ...
});