# 贡献指南 - CityU 手册

欢迎来到 **CityU 手册** 的贡献指南！  
我们很高兴您对本项目感兴趣，并期待您的参与。本指南将帮助您快速上手并有效地做出贡献。

---

## 🚀 1 为什么要贡献？

通过为 **CityU 手册** 做出贡献，您可以：

- **帮助 CityU 学生**：您的贡献将改善当前和未来学生获取关键资源的途径。
- **支持开源项目**：加入不断壮大的贡献者社区，共同打造有价值的资源。
- **提升您的技能**：为开源项目做贡献是提高技能和丰富作品集的好方法。
- **获得认可**：您的贡献将被记录并受到社区的赞赏。

---

## 📋 2 您可以贡献的内容

以下是您可以参与的领域：

### 📝 **内容贡献**
- **课程页面**：
    - 添加或更新课程内容，如总结课程大纲、学习目标及评估方式。
    - 分享对课程的真实评价、学习方法及考试经验，帮助他人更好地选择课程。
- **其他板块**：
    - **初见城大**：为新生提供更详细的入学指导，包括注册流程、校园资源及生活建议。
    - **职业启航**：扩展职业资源，提供求职技巧及面试准备工具或投稿你的求职经历。
    - **常见问题**：解答在学习、生活及职业规划方面的常见疑问，帮助更多学生解决困惑。

通过参与以上内容，您将帮助更多 CityU 学生高效利用资源，提升学术与职业体验。🎉

### 🌟 [改善功能](https://github.com/penjc/CityU/issues/new?labels=enhancement&template=feature-request---.md)
- 优化网站设计和导航，提升用户体验。
- 提议或实现新功能。

### 🔍 [修复问题](https://github.com/penjc/CityU/issues/new?labels=bug&template=bug-report---.md)
- 报告或修复网站功能或内容中的错误。

---

## 🤝 3 如何开始？

### 3.1. 安装Node
**Node.js 版本 18.0 或更高**：  
您可以通过以下命令检查当前版本：
  ```bash
  node -v
  ```
如果版本低于 18.0，建议使用 **nvm**（Node Version Manager）来管理和切换 Node.js 版本：
  ```bash
  nvm install 18
  nvm use 18
  ```

#### **Node.js 安装推荐**：
- 请前往 [Node.js 官方网站](https://nodejs.org/) 下载并安装最新版本。
- 在安装过程中，建议勾选所有与依赖相关的选项，以确保安装完整。

---

### 3.2 克隆代码库
从 GitHub 克隆代码库：

```bash
git clone https://github.com/penjc/CityU.git
cd CityU
```

---

### 3.3 安装依赖
安装项目所需依赖：

```bash
npm install
```

---

### 3.4 本地运行
启动开发服务器以预览网站：

```bash
npm run start
```

开发服务器将运行在 `http://localhost:3000`，您可以在浏览器中访问。

:::tip
本站由 [Docusaurus](https://docusaurus.io/) 构建，您可以参考 [Docusaurus 文档](https://docusaurus.io/docs) 了解更多关于本站的构建和贡献信息。
:::

---

## 🛠️4 如何提交贡献？

1. **Fork 仓库**  
   前往 [CityU 手册 GitHub 仓库](https://github.com/penjc/CityU)，点击 **Fork**。

2. **创建新分支**  
   为您的分支使用一个描述性的名称：
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **进行更改**  
   编辑代码、更新内容或修复错误。

4. **提交更改**  
   写清晰的提交信息：
   ```bash
   git add .
   git commit -m "Add: CSXXXX 课程页面"
   ```

5. **推送更改**  
   将更改推送到您 Fork 的仓库：
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**  
   前往原始仓库并点击 **New Pull Request**。

:::warning
每次提交前，请确保您的分支是基于 **[CityU 手册仓库](https://github.com/penjc/CityU)** 最新的 `main` 分支。（由于仓库可能会在您做更改时有更新，因此建议您在提交前先更新您的分支，避免发生代码冲突。）

可以通过以下命令更新你的本地分支：
```bash
git add remote upstream https://github.com/penjc/CityU.git
git add .
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
git rebase main
```
:::

:::tip
您可以参考 [GitHub Docs](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests) 了解更多关于 GitHub 协作的使用方法。
:::

---

## ✍️5 **内容指南**

在此部分，我们将详细列出每种页面的模版，并附上结构化的格式说明，帮助您快速高效地完成内容创作。


### **内容撰写要求**
1. **格式化**
    - 使用正确的 **mdx** 格式撰写页面。
    - 请确保所有内容符合以下模版的结构规范。
2. **语言风格**
    - 简洁、专业、清晰，避免过于复杂的技术术语。
    - 语言中立，确保适合所有用户阅读。

---

### **页面模版**

#### 课程信息页面模版:
- **用途**：提供单个课程的详细信息，包括简介、学习目标、评估方式和课程评价。

- **模版链接**：[课程信息页面模版](https://github.com/penjc/CityU/blob/main/COURSE_TEMPLATE.mdx)

---

## 📬6 联系与支持

如果您有任何问题或需要帮助，请通过以下方式联系我们：

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github&style=flat-square)](https://github.com/penjc/CityU)

[![GitHub Issues](https://img.shields.io/badge/GitHub-Submit%20Issue-green?logo=github&style=flat-square)](https://github.com/penjc/CityU/issues)


---

## ⚠️7 行为准则

所有贡献者都需遵守 [行为准则](https://github.com/penjc/CityU/blob/main/CODE_OF_CONDUCT.md)。请在互动中保持尊重与包容。

---

> 非常感谢您考虑为 **CityU 手册** 做出贡献！
> 让我们携手将它打造为城大社区的一份宝贵资源！