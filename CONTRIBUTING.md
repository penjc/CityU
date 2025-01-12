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

## 📋 1.1 您可以贡献的内容

以下是您可以参与的领域：

### 📝 内容贡献
- 添加或更新 **课程页面**：
    - 总结课程大纲、学习目标及评估方式。
    - 分享往届学生的课程反馈和经验。
- 扩展其他部分：
    - **初见城大**：为新生提供详细的入学信息。
    - **职业起航**：为求职者提供建议和工具。
    - **常见问题**：解答用户的常见疑问。

### 🌟 [改善功能](https://github.com/penjc/cityU-navigator/issues/new?labels=enhancement&template=feature-request---.md)
- 优化网站设计和导航，提升用户体验。
- 提议或实现新功能。

### 🔍 [修复问题](https://github.com/penjc/cityU-navigator/issues/new?labels=bug&template=bug-report---.md)
- 报告或修复网站功能或内容中的错误。

---

## 🤝 2 如何开始？

### 2.1. 安装Node
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

### 2.2 克隆代码库
从 GitHub 克隆代码库：

```bash
git clone https://github.com/penjc/cityU-navigator.git
cd cityU-navigator
```

---

### 2.3 安装依赖
安装项目所需依赖：

```bash
npm install
```

---

### 2.4 本地运行
启动开发服务器以预览网站：

```bash
npm run start
```

开发服务器将运行在 `http://localhost:3000`，您可以在浏览器中访问。


---

## 🛠️3 如何提交贡献？

1. **Fork 仓库**  
   前往 [CityU 手册 GitHub 仓库](https://github.com/penjc/cityU-navigator)，点击 **Fork**。

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

---

## ✍️4 **内容指南**

在此部分，我们将详细列出每种页面的模版，并附上结构化的格式说明，帮助您快速高效地完成内容创作。


### 4.1 **内容撰写要求**
1. **格式化**
    - 使用正确的 **mdx** 格式撰写页面。
    - 请确保所有内容符合以下模版的结构规范。
2. **语言风格**
    - 简洁、专业、清晰，避免过于复杂的技术术语。
    - 语言中立，确保适合所有用户阅读。

---

### 4.1 **页面模版列表**

#### 4.1.1 课程信息页面模版
**用途**：提供单个课程的详细信息，包括简介、学习目标、评估方式和课程评价。

**模版链接**：[课程信息页面模版](https://github.com/penjc/cityU-navigator/blob/main/COURSE_TEMPLATE.mdx)

---

## 📬5 联系与支持

如果您有任何问题或需要帮助，请通过以下方式联系我们：

- **提交 Issue**：[GitHub Issues](https://github.com/penjc/cityU-navigator/issues)

---

## ⚠️6 行为准则

所有贡献者都需遵守 [行为准则](https://github.com/penjc/cityU-navigator/blob/main/CODE_OF_CONDUCT.md)。请在互动中保持尊重与包容。

---

非常感谢您考虑为 **CityU 手册** 做出贡献！  
让我们携手将它打造为 CityU 社区的一份宝贵资源！