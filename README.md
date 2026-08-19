# 项目四 · 早期现代欧洲线上展（1460–1559）

一刻钟线上短展：政治厅探光交互 · 经济厅账本过账 · 军事厅对撞与战争财政。  
史实脊柱为尤金·赖斯、安东尼·格拉夫顿《现代欧洲史》卷一（Rice & Grafton）。

## 怎么跑

```bash
cd web
npm install
npm run dev
```

默认打开 `http://localhost:5173/`。完整路由与说明见 [`web/README.md`](web/README.md)。

建议参观顺序：封面 → 大门 → 政治厅 → 经济厅 → 军事厅 → **结束页**（`#/end`）。

## 阶段

**三厅与结束页已可演示**（作品集走查版）。TouchDesigner 工程仍保留在 `touchdesigner/`，供当面实时探光；网页主路径已改为探光交互，不必再挂 `politics.mp4`。

## 定稿文档

| 文件 | 用途 |
|------|------|
| [`docs/主题与方案.md`](docs/主题与方案.md) | 主题 + 技术 |
| [`docs/卷一精读.md`](docs/卷一精读.md) | 史实脊柱 |
| [`docs/全书速览.md`](docs/全书速览.md) | 目录对照 |
| [`docs/三厅文字.md`](docs/三厅文字.md) | 展签 / 专名 / 原典 |
| [`docs/网站内容集.md`](docs/网站内容集.md) | 建站文案源 |
| [`docs/图像版权总表.md`](docs/图像版权总表.md) | 已验 Commons 主图 |

底本 PDF：`现代欧洲史【6册】-多人/`（只深挖卷 01）

## 目录

| 路径 | 说明 |
|------|------|
| `web/` | 展览站点（Vite） |
| `assets/` | 展图与游戏立绘（Vite `publicDir`） |
| `docs/` | 文案与版权 |
| `touchdesigner/` | 政治厅 TD 工程与笔记 |
