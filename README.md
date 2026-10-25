# 清华大学学生未来空间协会 · SPACE LAB

社团官网，使用 React + Vite 构建，面向 GitHub Pages 自动部署。

## 本地预览

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 最常修改的内容

社团介绍、三个研究方向、四篇文章与项目图集都集中在 [`src/content.js`](src/content.js)。只需修改对应文字或链接，不需要改动页面组件。

- 修改页面结构：`src/App.jsx`
- 修改视觉样式：`src/styles.css`
- 替换项目图片：将 WebP 图片放入 `public/images/`，再更新 `src/content.js` 中的文件名
- 修改仓库名后：同步更新 `vite.config.js` 的 `base`、`index.html` 的图标路径，以及本文件中的链接

## 共同编辑

1. 社团负责人进入仓库 **Settings → Collaborators**，邀请成员。
2. 小修改可直接在 GitHub 文件页面点击铅笔图标，选择 **Create a new branch** 并提交 Pull Request。
3. 较大修改建议新建分支，在本地预览后提交 Pull Request。
4. 审核并合并到 `main` 后，GitHub Actions 会自动构建并部署。

详细步骤见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 发布到 GitHub Pages

首次推送后，在仓库 **Settings → Pages → Build and deployment** 中将 **Source** 设为 **GitHub Actions**。之后每次合并到 `main` 都会自动部署。

仓库地址：https://github.com/daisq24/tsinghua-space-lab

启用 Pages 后的访问地址：https://daisq24.github.io/tsinghua-space-lab/

## 文章与图片

四篇文章链接至已发布的 SFES LAB 原文。月面园林项目图片由社团提供并随仓库发布。
