# 清华大学学生未来空间协会 · SPACE LAB

社团官网，使用 React + Vite 构建，通过 GitHub Pages 自动部署。

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

## 内容结构

网站采用「研究组 → 专栏标签 → 专栏内容」结构。三个研究组、17 个主题专栏、每日行业讯息和刊行思考都集中在 [`src/content.js`](src/content.js)。

- `dailyDigest`：每日行业讯息的收录日期与说明
- `embodiedNews`：具身智能与机器人行业消息，同步显示在「具身感知」和「空间机器人」专栏
- `spatialSocietyArticles`：明日世界组「空间社会」专栏的四篇刊行思考
- `groups`：研究组介绍、专栏名称、研究方向与对应内容
- `public/images/`：全站视觉素材；月面园林图片只作视觉使用，不是独立项目
- `public/fonts/`：网站自托管字体

修改页面结构使用 `src/App.jsx`，修改视觉样式使用 `src/styles.css`。若修改仓库名，需要同步更新 `vite.config.js` 的 `base`、HTML 与 CSS 中的资源路径。

## 共同编辑

1. 社团负责人进入仓库 **Settings → Collaborators**，邀请成员。
2. 小修改可直接在 GitHub 文件页面点击铅笔图标，选择 **Create a new branch** 并提交 Pull Request。
3. 较大修改建议新建分支，在本地预览后提交 Pull Request。
4. 审核并合并到 `main` 后，GitHub Actions 会自动构建并部署。

详细步骤见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 公开地址

- 仓库：https://github.com/daisq24/tsinghua-space-lab
- 官网：https://daisq24.github.io/tsinghua-space-lab/

四篇刊行思考链接至已发布的 SFES LAB 原文。视觉图片与字体由社团提供并随仓库发布。
