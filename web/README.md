# web · 线上展览

Vite + 原生 JS/CSS。封面 → 大门 → 三厅 → 结束页。

## 开发

```bash
cd web
npm install
npm run dev
```

浏览器打开终端提示的本地地址（默认 `http://localhost:5173`）。

```bash
npm run build    # 输出到 web/dist
npm run preview  # 预览构建结果
```

静态资源目录为仓库根下的 `../assets`（见 `vite.config.js` 的 `publicDir`）。部署前请勿把未引用的大型 `.mov` 一并上传。

## 路由

| 路径 | 页面 |
|------|------|
| `#/` | 封面 |
| `#/gate` | 大门（三厅入口） |
| `#/politics` | 政治厅 · 看见主权（探光地图 + 读墙） |
| `#/economy` | 经济厅 · 扩张的引擎（九帖账本） |
| `#/military` | 军事厅 · 新型战争（对撞局 → 读墙 → 王国的账本） |
| `#/end` | 结束页 · 带走的问题 / 致谢 / 图注 |
| `#/ledger-review` | 账本局单独预览（调试用，大门无入口） |

## 厅内要点

- **政治厅**：手电筒点亮伊比利亚 / 低地 / 意大利 / 奥地利；旁签切换读墙。
- **经济厅**：过账 → 盖章 → 开新页；总账锁册后可去军事厅。
- **军事厅**：四幕对撞教学局；通关后可读墙并开第二局「战争与经济」。

文案与史实约束见仓库 `docs/`（尤其 `网站内容集.md`、`卷一精读.md`）。

## 可选部署（静态托管）

```bash
npm run build
```

把 `web/dist` 丢到任意静态宿主（GitHub Pages / Netlify / Cloudflare Pages 等）即可；本站用 **hash 路由**，一般不需要额外 rewrite。

### 推荐：Cloudflare Pages + GitHub

1. 把本仓库推到 **公开** GitHub 仓库。  
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。  
3. 构建设置填：

| 项 | 值 |
|----|-----|
| Framework preset | Vite（或 None） |
| Root directory | `web` |
| Build command | `npm run build` |
| Build output directory | `dist`（若界面是 Deploy command：`npx wrangler deploy`，需仓库里有 `web/wrangler.toml`） |

4. Deploy 完成后得到 `https://<项目名>.pages.dev`，可在 Pages 设置里改项目名，并可选绑定自定义域名。  
5. 之后每次 `git push` 到连接的分支，会自动重新构建上线。

注意：

1. `publicDir` 指向整棵 `assets/`，构建会把其中文件拷进 `dist`。未用大文件已挪到仓库根目录 `_deploy_exclude/`（含约 1.3GB 的 `politics.mov`）；不要把 `_deploy_exclude` 再拷回 `assets` 后上线。  
2. 若站点不在域名根路径（例如 `username.github.io/repo/`），需在 `vite.config.js` 设 `base: '/repo/'` 后再 build。Cloudflare Pages 默认挂在站点根路径，**一般不用改 base**。  
3. 作品集演示用 `npm run preview` 或本地 `dev` 已足够；公开 URL 是加分项，不是门槛。
