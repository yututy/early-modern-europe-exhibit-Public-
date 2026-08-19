# 政治厅 · TouchDesigner

**0 基础请从这里开始（逐步点哪里）**：[`从零开始.md`](从零开始.md)

**现行开场**：暗地图 + 手电筒探光 → 导出 `assets/politics.mp4`  
对照文案：[`docs/网站内容集.md`](../docs/网站内容集.md) §1.2  
速查：[`手电筒版-替换开场.md`](手电筒版-替换开场.md)

旧清单备份：[`开场片-节点清单.md`](开场片-节点清单.md)

---

## 你需要准备的环境

1. 本机已安装 **TouchDesigner**（Commercial / Education / Non-Commercial 均可导出短片）  
2. 用 TD 打开本目录下将要新建的工程（见下）  
3. 媒体：[`media/`](media/) 里已有从卷一抽出的查理五世帝国地图；其余两张请你本机另存（见下「补图」）

---

## 分镜（照这个做，不要自由加第四条主线）

总时长建议 **54 秒**（每段约 9 秒，淡入淡出 0.6s）

| 段 | 秒 | 画面（TD） | 屏幕字（Text TOP） |
|----|----|------------|-------------------|
| A | 0–9 | `media/map_charles_v_empire.png` 缓慢推近（可叠半透明色块标领地） | One family, many territories |
| B | 9–18 | 深色底 + 三词依次浮现：make law / abolish / natural law | Sovereignty: to make law, not take orders |
| C | 18–27 | 查理五世肖像 `P1_charles_v.jpg`（需你另存，见补图）缓推 | Power must also be seen |
| D | 27–36 | 简单节点图：中央圆 → 放射到 3–4 个地方点（纯几何即可） | How the king's will reaches the localities |
| E | 36–45 | 地图再切回 + 左右色块示意「夹击」（法 / 奥斯曼，抽象即可） | A dynastic board, not a nation-state war |
| F | 45–54 | 黑底大字「sovereign territorial state」淡入，底下小字书脊 | From feudal dynasty to sovereign state |

旁白：可不配音；若配，音量低于画面，字已够。

---

## 推荐网络骨架（新手友好）

```text
Movie File In / Moviefilein (静图也可用)  →  Transform / Level
Text TOP（中文字体用系统「思源黑体」或「微软雅黑」）
Cross / Switch + Timer CHOP 做 A→F 切换
Null → Movie File Out（或 Perform 录屏）
```

更稳的做法：

1. 建一个 **Timer CHOP**：Length = 54，Segments = 6（各 9s）  
2. 用 Timer 的 `segment` 驱动 **Switch TOP** 选画面  
3. 另一路 **Switch TOP** 选对应字幕  
4. **Over TOP** 把字叠在画面上  
5. 输出到 **Movie File Out TOP**

工程文件建议保存为：

`touchdesigner/politics_sovereignty.toe`

---

## 导出规格（给网站用）

| 项 | 值 |
|----|-----|
| 文件 | `../assets/politics.mp4` |
| 分辨率 | 1920×1080 |
| 帧率 | 30 fps |
| 编码 | H.264，可循环（首尾尽量同色/同构图） |
| 音频 | 可无；有则 AAC stereo |

Movie File Out 勾选写入后点录制，播完 54s 停。

---

## 验收清单（你自检）

- [ ] 6 段都出现，总长 30–90s 内  
- [ ] 每段字幕 ≤20 字，且与内容集一致  
- [ ] 未出现路德长叙事 / 游戏 UI  
- [ ] 片尾能无缝或近似循环  
- [ ] 文件已放到 `assets/politics.mp4`  
- [ ] 成片里用的图能在 [`docs/图像版权总表.md`](../docs/图像版权总表.md) 对上 P-1 / P-2 / P-4  

---

## 补图（本机浏览器另存到 `touchdesigner/media/`）

Commons 直链在本机环境常超时，请你浏览器打开后「另存为」：

| 保存文件名 | 打开这个页面 |
|------------|--------------|
| `P1_charles_v.jpg` | https://commons.wikimedia.org/wiki/File:Titian_-_Portrait_of_Charles_V_Seated_-_WGA22964.jpg |
| `P2_hre_eagle.png` | https://commons.wikimedia.org/wiki/File:Holy_Roman_Empire_Arms-double_head.svg （下载 PNG 预览即可） |
| （可选）`P4_habsburg_1547.jpg` | https://commons.wikimedia.org/wiki/File:Habsburg_Map_1547.jpg |

没有肖像也能先用地图 + 文字把 A/B/D/E/F 做完，C 段暂用地图特写代替。

## 我这边 vs 你这边

| 我（已做/可继续） | 你（必须本机） |
|------------------|----------------|
| 镜段说明、字幕表、帝国地图抽出、本 README | 打开 TD 搭网络、调动画、另存补图 |
| 之后把 mp4 嵌进网站 `/politics` | 导出 `assets/politics.mp4` |

导出完成后回我一句「mp4 好了」，我接着挂网页政治厅。
