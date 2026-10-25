# 共同编辑指南

欢迎一起完善未来空间协会官网。建议通过分支和 Pull Request 协作，让每一次修改都可预览、可讨论、可回溯。

## 不写代码：直接改文案

1. 打开 `src/content.js`，点击右上角铅笔图标。
2. 找到需要修改的社团介绍、研究方向、文章或项目文字。
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

## 添加文章

在 `src/content.js` 的 `articles` 数组中复制一项，修改：

- `id`：显示序号
- `type`：文章类型
- `title` / `english`：中英文标题
- `summary`：简短摘要
- `year`：发布年份
- `url`：原文完整链接

## 添加项目图片

1. 优先使用 WebP，建议长边不超过 1600 像素，单张尽量小于 500 KB。
2. 将图片放入 `public/images/`。
3. 在 `src/content.js` 的 `gallery` 中增加图片文件名、标题和说明。
4. 本地检查桌面和手机布局，再提交 Pull Request。

## 协作约定

- 不直接提交 `node_modules/`、`dist/` 或本机配置文件。
- 不上传学号清单、私人联系方式、账号密钥等敏感信息。
- 使用自己拥有权利或已获授权的图片与文字。
- 修改尽量小而集中；标题和摘要保持准确，不虚构活动时间或项目成果。
- 合并前至少由一位其他成员检查内容、链接与移动端显示。
