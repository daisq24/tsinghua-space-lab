# 共同编辑指南

欢迎一起完善未来空间协会官网。建议通过分支和 Pull Request 协作，让每一次修改都可预览、可讨论、可回溯。

## 不写代码：直接改文案

1. 打开 `src/content.js`，点击右上角铅笔图标。
2. 找到对应研究组与专栏，修改文字、摘要或链接。
3. 保留每项内容两侧的引号、逗号和括号，只修改引号内文字。
4. 点击 **Commit changes**，选择 **Create a new branch for this commit and start a pull request**。
5. 写一句修改说明，提交 Pull Request，等待成员审核。

## 本地开发

```bash
git clone https://github.com/daisq24/tsinghua-space-lab.git
cd tsinghua-space-lab
npm install
npm run dev
```

开始修改前，新建自己的分支：

```bash
git checkout -b update/your-change-name
```

完成后检查并提交：

```bash
npm run build
git add .
git commit -m "描述这次修改"
git push origin update/your-change-name
```

随后到 GitHub 创建 Pull Request。

## 添加每日行业讯息

在 `src/content.js` 中：

1. 更新 `dailyDigest.date` 为收录日期。
2. 在 `embodiedNews` 数组顶部复制一条现有消息，修改 `id`、`type`、`title`、`summary`、`details` 和 `links`。
3. 没有原文或报名链接时，保留 `links: []`，不要编造地址。
4. 活动日期、报名截止日期与收录日期应分开核对；页面展示的是收录日期。
5. 其他研究组的专栏可在对应 `columns` 项中添加 `kind: 'news'` 和 `items`。

具身智能消息会同步出现在「具身感知」与「空间机器人」两个专栏，无需重复录入。

## 添加刊行思考

在 `spatialSocietyArticles` 数组中复制一项，修改：

- `id`：显示序号
- `type`：文章类型
- `title` / `english`：中英文标题
- `summary`：简短摘要
- `year`：发布年份
- `url`：原文完整链接

这些文章显示在「明日世界组 → 空间社会」专栏。

## 管理视觉素材与字体

1. 图片优先使用 WebP，建议长边不超过 1600 像素，单张尽量小于 500 KB。
2. 图片放入 `public/images/`，在 `src/content.js` 或 `src/App.jsx` 中引用。
3. 月面园林相关图片仅作为网站视觉素材，不需要新建独立项目栏目。
4. 自托管字体位于 `public/fonts/`，优先使用 WOFF2 控制加载体积。

## 协作约定

- 不直接提交 `node_modules/`、`dist/` 或本机配置文件。
- 不上传学号清单、私人联系方式、账号密钥等敏感信息。
- 使用自己拥有权利或已获授权的图片、字体与文字。
- 修改尽量小而集中；标题和摘要保持准确，不虚构活动时间或项目成果。
- 合并前至少由一位其他成员检查内容、链接与移动端显示。
