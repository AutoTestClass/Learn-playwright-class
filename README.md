# Learn-playwright-class

介绍 playwright为现代web应用程序提供了可靠的端到端（end-to-end）测试。

GitHub: https://github.com/microsoft/playwright


## playwright 基础

### playwright 特性

![](./images/Browsers.png)

#### 任何浏览器 • 任何平台 • 一套 API

__跨浏览器__：Playwright支持所有现代渲染引擎，包括Chromium、WebKit和Firefox。

__跨平台__: 在Windows、Linux和macOS上测试，本地或CI上测试，`headless` 或 `headed`。

__跨语言__: 在TypeScript、JavaScript、Python、.NET和Java中使用Playwright API。

__测试Mobile Web__: 为移动端chrome和Safari提供原生移动模拟的。相同的渲染引擎工作在你的桌面和云。


#### 弹性 • 没有脆弱测试

__自动等待__: playwright在执行动作之前等待元素可操作。它还有一系列丰富的自省事件(introspection events)。两者的结合消除了人工超时的需要 - 这是测试不稳定的主要原因。

__Web优先断言__: Playwright断言是专门为动态web创建的。检查将自动重试，直到满足必要条件。

__追踪__: 配置测试重试策略，捕获执行过程追踪、视频和截图以消除碎片。


#### 无权衡 • 无限制

浏览器在不同的进程中运行属于不同来源的web内容。Playwright与现代浏览器架构保持一致，并在进程外运行测试。这使得Playwright摆脱了典型的过程中测试运行的限制。

__一切的倍数__: 跨多个选项卡、多个来源和多个用户的测试场景。为不同用户创建具有不同上下文的场景，并在一个测试中对服务器运行它们。

__可信事件__: 悬停元素与动态控件交互，生成可信事件。Playwright使用与真实用户无法区分的真实浏览器输入管道。

__测试表单__: 穿透DOM的阴影。Playwright选择器穿透阴影DOM并允许无缝输入表单。


#### 完全隔离 • 快速执行


__浏览器上下文__: Playwright为每个测试创建浏览器上下文。浏览器上下文相当于一个全新的浏览器配置文件。这提供了零开销的完全测试隔离。创建新的浏览器上下文只需要几毫秒。


__登录一次__: 保存上下文的身份验证状态，并在所有测试中重用它。这绕过了每个测试中的重复登录操作，但提供了独立测试的完全隔离。

#### 强大的工具

__代码生成器(Codegen)__:。通过记录您的操作生成测试。将它们保存为任何语言。

__Playwright检查(inspector)__:检查页面，生成选择器，逐步执行测试，查看单击点，浏览执行日志。

__跟踪查看器(Trace Viewer)__。捕获所有信息以调查测试失败。Playwright跟踪包含测试执行屏幕广播、实时DOM快照、动作资源管理器、测试源等等。


### Playwright VS Selenium VS Cypress

playwrright、selenium、cypress都是目前主流的自动测试工具。接下来，我会通过各个维度来进行对比。

**支持语言**

* Playwright: ✅✅✅✅  支持语言：JavaScript & TypeScript\python\C#\Java
* Selenium:  ✅✅✅✅✅  支持语言：java\python\ruby\C#\C++\JavaScript
* Cypress:   ✅ 只支持 JavaScript & TypeScript

**覆盖浏览器**

* Playwright: ✅✅✅✅✅  支持浏览器：Chromium/Edge/Chrome/WebKit/Firefox
* Selenium:  ✅✅✅✅✅   支持浏览器：Chromium/Edge/Chrome/WebKit/Firefox/IE。
* Cypress:   ✅✅✅✅ 只支持 Chrome/Edge/Firefox/Electron


**安装**

* Playwright: ✅✅✅ 通过命令安装playwright，再通过`playwright`命令安装浏览器。
* Selenium:  ✅✅✅ 通过命令安装selenium, 再通过`selenium-manager`管理浏览器和驱动。
* Cypress:   ✅✅✅✅ 通过命令安装 cypress。

**测试编写速度**

* Playwright: ✅✅ 内置`playwright codegen` 代码生成器，用户在浏览中交互并自动生成代码片段。
* Selenium: ✅ 基于Selenium IDE可以录制脚本，支持导出成不同的语言。。
* Cypress: ❌ 不支持脚本录制。

**多标签**

* Playwright: ✅✅✅✅✅ 原生支持多标签页测试，可以轻松管理多个浏览器上下文（context），每个上下文可以模拟独立的浏览器实例。
* Selenium: ✅✅✅  通过切换窗口句柄（window handle）支持多标签页测试，但切换过程相对繁琐。。
* Cypress: ❌ 不支持直接的多标签页测试


**智能定位**

Playwright: ✅✅✅✅  提供丰富的元素定位方式，包括CSS选择器、XPath、文本内容、角色（aria roles）等。
Selenium: ✅✅✅ 提供多种定位方式，包括ID、Name、CSS选择器、XPath等。
Cypress: ✅✅ 提供简洁的定位方式，主要依赖CSS选择器和数据属性（data-* attributes）。

**调试和错误报错**

* Playwright: ✅✅✅✅ 提供丰富的调试功能，包括自动生成trace、截图和视频录制。
* Selenium:  ✅✅  调试功能基础，主要依赖IDE和手动截屏。
* Cypress:  ✅✅✅✅ 内置时间旅行和实时调试功能，支持丰富的错误报告和日志。

**执行速度**

* Playwright: ✅✅✅ 快速启动，支持异步，性能较优秀。
* Selenium:  ✅✅  相对较慢，尤其是在处理复杂页面和并行测试时。
* Cypress:  ✅✅✅✅✅ 极快的测试执行速度，得益于直接运行在浏览器中。

**运行稳定性**

* Playwright: ✅✅✅ 内置智能等待机制，包括元素可见性、网络空闲、DOM稳定等多种条件的自动等待。
* Selenium:  ✅  提供显式等待和隐式等待，但需要手动配置，无法自动处理所有等待情况。
* Cypress:  ✅✅✅ 内置强大的自动等待机制，自动处理大多数常见的等待情况，如元素加载、Ajax请求完成等。

**并行网格和基础服务**

* Playwright: ✅ 原生支持并发测试，可以在多个浏览器上下文中并行执行测试。
* Selenium: ✅✅✅ 依赖Selenium Grid等外部工具实现并发测试, `docker-selenium`更方便的云端部署。
* Cypress: 🤷 支持并发测试，但需要通过Dashboard Service来管理并发，免费版有并发限制。

**集成和扩展性**

* Playwright: ✅✅✅✅ 与CI/CD工具集成良好，支持多种第三方服务。
* Selenium: ✅✅✅✅✅ 与几乎所有CI/CD系统和测试框架集成，支持范围最广。
* Cypress: ✅✅✅ 与现代CI/CD平台（如GitHub Actions、CircleCI）集成良好。仅在与非JavaScript工具集成时。

**生态系统和社区支持**

* Playwright: ✅✅✅ 生态系统正在快速发展，社区逐渐壮大。。
* Selenium: ✅✅✅✅✅ 拥有最大和最成熟的社区，丰富的插件和工具支持。
* Cypress: ✅✅  活跃的社区和不断扩展的生态系统，特别在JavaScript社区中受欢迎。。

**如何选择？**

首先，这些测试工具都是基础。他们只是提供了一套API来定位和操作元素。并不能成为你自动化项目成功或失败的决定因素。

自动化的是否成功我认为主要取决于以下几个方面：

1. 调研你的项目是否真的适合自动化。
2. 是否真的找到自动化的应用场景。（比如，我们用自动化测试埋点，用自动化配合检查App性能都是很好应用场景）
3. 是否有足够人力投入到自动化中。
4. 测试人员的水平，不要怀疑这一点，不少同学还在定位元素面前磕磕绊绊。
5. 是否有团队支持和配合。有些同学还在纠结验证的问题，让开发配合一些很轻松可绕过，可你就是做不到。

好了，这些工具都无法决定自动化项目是否成功，那怎么选？

如果，你不懂并且也不打算学习JavaScript， 那么就不用选 Cypress了。

如果，你只是一个新手，那么还是稳妥点，先学会Selenium，这是测试的必备技能。

我非常鼓励那些有一些自动化经验的同学尝试学习JavaScript，他会让你对前端（web）技术有更深的理解，因为你要测试的就是前端(web)应用。就像我可灵活的控制元素的隐藏，修改属性，更快速的定位到疑难杂症的元素，这完全是因为我做过前端开发。Cypress 就是很好的选择。
