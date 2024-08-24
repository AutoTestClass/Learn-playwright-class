## plywright Node.js版

playwright 支持多种语言：

node.js: https://github.com/microsoft/playwright
python: https://github.com/microsoft/playwright-python
.net: https://github.com/microsoft/playwright-dotnet
java: https://github.com/microsoft/playwright-java


### 安装

- [x] node.js

* 下载地址

https://nodejs.org/en/download/

* 查看版本

```shell
> node --version
v18.20.3

> npm --version
10.7.0
```

- [x] playwright

```shell
> npm init playwright@latest

Need to install the following packages:
create-playwright@1.17.133
Ok to proceed? (y) y


> npx
> create-playwright

Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Initializing NPM project (npm init -y)…
Wrote to D:\github\AutoTestClass\Learn-playwright-class\demo\package.json:

{
  "name": "demo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}



Installing Playwright Test (npm install --save-dev @playwright/test)…

added 3 packages in 5s
Installing Types (npm install --save-dev @types/node)…

added 2 packages in 2s
Writing playwright.config.ts.
Writing tests\example.spec.ts.
Writing tests-examples\demo-todo-app.spec.ts.
Writing package.json.
Downloading browsers (npx playwright install)…
Downloading Firefox 128.0 (playwright build v1458) from https://playwright.azureedge.net/builds/firefox/1458/firefox-win64.zip
83.8 MiB [====================] 100% 0.0s
Firefox 128.0 (playwright build v1458) downloaded to C:\Users\fnngj\AppData\Local\ms-playwright\firefox-1458
Downloading Webkit 18.0 (playwright build v2051) from https://playwright.azureedge.net/builds/webkit/2051/webkit-win64.zip
45.9 MiB [====================] 100% 0.0s
Webkit 18.0 (playwright build v2051) downloaded to C:\Users\fnngj\AppData\Local\ms-playwright\webkit-2051
✔ Success! Created a Playwright Test project at D:\github\AutoTestClass\Learn-playwright-class\project
..
```

使用命令：

```shell

Inside that directory, you can run several commands:


We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```

### 测试用例分析

* 目录结构：

![](images/js_dir.png)

`tests`文件夹包含一个基本的示例测试，可以帮助您开始测试。

`test-sample`文件夹更详细的示例，包含为测试todo应用程序而编写的测试。


* 简单的例子

```ts
// 导入playwright测试
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // 期望标题“包含”子字符串
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // 点击“get started”链接
  await page.getByRole('link', { name: 'Get started' }).click();

  //  检查页面是否有一个标题“安装”
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

### 运行测试

进入项目`js_project\`目录，通过下面的命令运行测试。

* 运行命令

```shell
$ npx playwright test Runs the end-to-end tests. # 运行 e2e测试
$ npx playwright test --ui     Starts the interactive UI mode.  # 启动交互式UI模式
$ npx playwright test --project=chromium     Runs the tests only on Desktop Chrome. # 运行在桌面Chromium上的测试
$ npx playwright test example     Runs the tests in a specific file. # 运行指定文件的测试
$ npx playwright test --debug     Runs the tests in debug mode.  # 运行在调试模式下
$ npx playwright codegen     Auto generate tests with Codegen. # 自动生成测试代码
```

* 默认`--headless`模式运行

```shell
$ npx playwright test

Running 6 tests using 6 workers
...
```
> /tests/example.spec.ts 里面两条用例三个浏览器分别运行，所以，运行6条测试。

* 指定浏览器运行

```shell
npx playwright test --project=chromium

Running 2 tests using 2 workers
...
```
> 指定 chromium 浏览器，headed模式运行，运行2条测试。

* 指定`--headed`模式运行

```shell
npx playwright test --headed

Running 6 tests using 6 workers
...
```
> headed模式运行。

* 指定`--debug`模式运行

```shell
$ npx playwright test --debug
```
> 启动 plywright Inspector 工具

![](./images/playwright-debug-running.png)

* UI模式运行

```shell
$ npx playwright test
```

![](./images/playwright-ui.png)


* 查看报告

```shll
$ npx playwright show-report

Serving HTML report at http://127.0.0.1:9323. Press Ctrl+C to quit.
```

浏览器访问URL: http://127.0.0.1:9323

![](./images/playwright_report.png)


### 编写测试


Playwright 测试是简单的，它包含：

- **执行动作**，
- **断言状态**

在执行动作之前，不需要等待任何东西：Playwright 在执行每个动作之前会自动等待通过广泛的可操作性检查。

在执行检查时也无需处理竞态条件 - Playwright 断言被设计成一种方式，即它们描述了需要最终满足的期望。

就是这样！这些设计选择允许 Playwright 用户完全忘记在测试中的不稳定的超时和种族检查。

**你将学到**

- 如何编写第一个测试
- 如何执行动作
- 如何使用断言
- 测试如何在隔离中运行
- 如何使用测试钩子

#### 第一个测试

查看以下示例，了解如何编写测试。

tests/example.spec.ts

```typescript
import { test, expect } from '@playwright/test';

test('有标题', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // 期望标题“包含”一个子串。
  await expect(page).toHaveTitle(/Playwright/);
});

test('开始链接', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // 点击“开始”链接。
  await page.getByRole('link', { name: 'Get started' }).click();

  // 期望页面有一个名为“安装”的标题。
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

注意

在每个测试文件的开始处添加`// @ts-check`，以便在使用 VS Code 的 JavaScript 中获得自动类型检查。

#### 动作

**导航**

大多数测试将从导航页面到 URL 开始。之后，测试将能够与页面元素进行交互。

```typescript
await page.goto('https://playwright.dev/');

```

Playwright 将等待页面达到加载状态后才会继续。了解更多关于 page.goto() 选项。

**交互**

执行动作始于定位元素。Playwright 使用 Locators API 执行此操作。定位符表示在任何时候在页面上找到元素（s）的方式，了解更多关于可用的不同类型定位符。Playwright 将在执行动作之前等待元素变为可操作，因此无需等待其变为可用。

```typescript
// 创建一个定位符。
const getStarted = page.getByRole('link', { name: 'Get started' });

// 点击它。
await getStarted.click();
```

在大多数情况下，它将被写成一行：

```typescript
await page.getByRole('link', { name: 'Get started' }).click();
```

**基本动作**

这是最受欢迎的 Playwright 动作列表。注意，还有更多，请务必查看定位符 API 部分，了解更多关于它们的内容。

| 动作                    | 描述                   |
| ----------------------- | ---------------------- |
| locator.check()         | 勾选输入框             |
| locator.click()         | 点击元素               |
| locator.uncheck()       | 取消勾选输入框         |
| locator.hover()         | 鼠标悬停在元素上       |
| locator.fill()          | 填充表单字段，输入文本 |
| locator.focus()         | 聚焦元素               |
| locator.press()         | 按单个键               |
| locator.setInputFiles() | 选择上传文件           |
| locator.selectOption()  | 在下拉菜单中选择选项   |

#### 断言

Playwright 以 `expect` 函数的形式包含测试断言。要进行断言，请调用 `expect(value)` 并选择一个反映期望的匹配器。

有许多通用匹配器，如 `toEqual`、`toContain`、`toBeTruthy`，可用于断言任何条件。

```typescript
expect(success).toBeTruthy();
```

Playwright 还包括异步匹配器，将等待直到满足预期条件。使用这些匹配器可以使测试不出现波动并且具有弹性。例如，此代码将等待页面获得包含“Playwright”的标题：

```typescript
await expect(page).toHaveTitle(/Playwright/);
```

这里是最流行的异步断言列表。注意，还有更多需要熟悉：

| 断言                              | 描述                 |
| --------------------------------- | -------------------- |
| expect(locator).toBeChecked()     | 复选框被勾选         |
| expect(locator).toBeEnabled()     | 控件被启用           |
| expect(locator).toBeVisible()     | 元素可见             |
| expect(locator).toContainText()   | 元素包含文本         |
| expect(locator).toHaveAttribute() | 元素具有属性         |
| expect(locator).toHaveCount()     | 元素列表具有给定长度 |
| expect(locator).toHaveText()      | 元素匹配文本         |
| expect(locator).toHaveValue()     | 输入元素具有值       |
| expect(page).toHaveTitle()        | 页面具有标题         |
| expect(page).toHaveURL()          | 页面具有 URL         |

#### 测试隔离

Playwright 测试基于测试夹具的概念，例如内置的页面夹具，它被传递到你的测试中。由于浏览器上下文，页面在测试之间是隔离的，这相当于一个全新的浏览器配置文件，每个测试都获得一个新环境，即使多个测试在单个浏览器中运行。

tests/example.spec.ts

```typescript
import { test } from '@playwright/test';

test('example test', async ({ page }) => {
  // "page" 属于一个隔离的 BrowserContext，为这个特定测试创建。
});

test('another test', async ({ page }) => {
  // 这个第二个测试中的 "page" 完全与第一个测试隔离。
});
```

#### 使用测试钩子

你可以使用各种测试钩子，例如 `test.describe` 声明一组成组测试，以及 `test.beforeEach` 和 `test.afterEach` 它们在每个测试之前/之后执行。其他钩子包括 `test.beforeAll` 和 `test.afterAll` 它们在每个工作器的所有测试之前/之后执行一次。

tests/example.spec.ts

```typescript
import { test, expect } from '@playwright/test';

test.describe('navigation', () => {


  test.beforeEach(async ({ page }) => {
    console.log('Before each test.');
    // 在每个测试之前转到起始 URL。
    await page.goto('https://playwright.dev/');
  });
  
  test.afterEach(async ({ page }) => {
    // 在每个测试之后执行。
    console.log("After each test.")
  });

  test('main navigation', async ({ page }) => {
    // 断言使用 expect API。
    await expect(page).toHaveURL('https://playwright.dev/');
  });

});
```

### 录制测试


Playwright Codegen 简介

Playwright Codegen（代码生成器）是一个自动生成测试代码的工具，它可以帮助开发者快速编写测试脚本。使用 Codegen，您可以通过录制用户的操作来生成测试代码，这使得编写测试变得更加简单和快捷。

**使用 Codegen 的好处**

- **快速开始**：对于不熟悉 Playwright API 的开发者，使用 Codegen 可以快速生成测试代码。
- **减少错误**：自动生成的代码减少了手动编写代码时可能出现的错误。
- **提高效率**：节省编写测试脚本的时间，让开发者可以专注于测试逻辑。

**如何使用 Codegen**

1. **启动 Codegen**：在 Playwright 测试脚本中，使用 `codegen` 命令启动 Codegen。
2. **录制操作**：执行页面操作，如点击、输入等，这些操作将被 Codegen 录制。
3. **生成代码**：录制完成后，Codegen 将生成对应的测试代码。

**您将学到：**
- 如何录制测试。
- 如何生成定位符。

## 运行 Codegen

使用 `codegen` 命令运行测试生成器，并接着输入要生成测试的网站的 URL。URL 是可选的，您也可以运行命令时不输入它，然后在浏览器窗口中直接添加 URL。

```bash
npx playwright codegen demo.playwright.dev/todomvc
```

### 录制测试

运行 `codegen` 并在浏览器中执行操作。Playwright 将为用户交互生成代码。`Codegen` 将查看渲染后的页面并找出推荐的定位符，优先考虑角色、文本和测试 ID 定位符。如果生成器识别到多个元素与定位符匹配，它将改进定位符以使其具有弹性并唯一标识目标元素，从而消除和减少因定位符引起的测试失败和不稳定。

您可以使用测试生成器录制：

- 通过简单地与页面交互，录制点击或填写等动作。
- 通过点击工具栏中的一个图标，然后点击页面上的元素来录制断言。您可以选择：
  - `'assert visibility'` 断言元素是可见的。
  - `'assert text'` 断言元素包含特定文本。
  - `'assert value'` 断言元素具有特定值。

![img](https://github.com/microsoft/playwright/assets/13063165/34a79ea1-639e-4cb3-8115-bfdc78e3d34d)


当您完成与页面的交互后，按 `'record'` 按钮停止录制，并使用 `'copy'` 按钮将生成的代码复制到您的编辑器中。

使用 `'clear'` 按钮清除代码以重新开始录制。完成后关闭 Playwright 检查器窗口或停止终端命令。

要了解更多关于生成测试的信息，请查看我们的 Codegen 详细指南。

### 生成定位符

你可以使用测试生成器生成定位符。

- 按下 `'Record'` 按钮停止录制，'Pick Locator'（选择定位符）按钮将出现。
- 点击 `'Pick Locator'` 按钮，然后在浏览器窗口中将鼠标悬停在元素上，以查看在每个元素下方突出显示的定位符。
- 要选定一个定位符，点击您想要定位的元素，该定位符的代码将出现在选择定位符按钮旁边的定位符乐园中。
- 然后您可以在定位符乐园中编辑定位符以微调它，并看到浏览器窗口中突出显示的匹配元素。
- 使用复制按钮复制定位符并将其粘贴到您的代码中。

![img](https://github.com/microsoft/playwright/assets/13063165/2c8a12e2-4e98-4fdd-af92-1d73ae696d86)

