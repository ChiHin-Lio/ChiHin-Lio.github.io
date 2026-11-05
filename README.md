# 應用程式展示網站

澳泊 Macao ParkGo 與 API Matrix 的官方產品展示網站。

純 HTML、CSS、JavaScript，GitHub Pages 從 main 分支根目錄發布。
首頁、parking.html、api-matrix.html 提供繁體中文及英文切換。
下載 badge 使用 Apple 官方繁體中文及英文 SVG，來源見 assets/sources.json。
支援減少動態效果、鍵盤導航及官方截圖畫廊。

本地預覽：`python3 -m http.server 8000`。

## 分享預覽與搜尋資料

五個公開頁面均在 HTML 內提供 description、canonical、Open Graph、Twitter large-image card 及 JSON-LD。爬蟲不需要執行 JavaScript。首頁、澳泊及 API Matrix 使用不同的 1200 × 630 JPEG 分享圖；私隱和支援頁使用澳泊圖。圖片與 canonical 均使用公開 HTTPS 絕對網址。分享預覽預設使用繁體中文，頁內中英文切換保留。

`robots.txt` 指向 `sitemap.xml`，列出五個公開頁面。

OG 圖以白底、左側品牌與文案、右側真實手機畫面呈現，沿用網站品牌。澳泊原始畫面來自用戶提供的 `share page.png`（保留於 `assets/og/parkgo-share-screen.png`）；API Matrix 畫面來自 `assets/matrix-1.jpg`。手機框與圖片排版由 HTML/CSS 產生，沒有重繪 App 內容；參考圖中的外部分享卡標題和深色容器不屬於 OG 圖本身。

重建圖片：安裝 `playwright` 與 `sharp`，執行 `node scripts/render-og.cjs`。可透過 `CHROME_PATH` 指定已安裝 Chrome 路徑。所有素材均從本機讀取。

驗收：已目視檢查三張輸出圖的中文、層級、留白、手機比例及下載 badge；採用自檢，沒有獨立評審。以兩行短標題與兩行說明減少分享縮圖內的文字密度。

## 2026-10-27 搜尋內容優化

澳泊產品頁增加可在原始 HTML 讀取的品牌定義、四條中英常見問題，以及與頁面一致的 MobileApplication 別名和功能資料。FAQ 使用原生 details／summary，停用 JavaScript 仍可展開。沿用現有版面和分享 metadata；保留實際功能介紹，移除「是否保證」問答及重複提示，讓內容集中於巴士、泊車與下載。用戶已確認 2.7.0 正在上架流程；本次先發佈 HTML 更新。

免費 SEO／GEO／App Store ASO 文案、關鍵字和量度方案見外層項目的 marketing/search-growth-2026-10-27/。此目錄為獨立 Git repository，外層項目提交不會發佈網站；需在此 repository 發佈後再核對公開頁面。

## 2026-11-05 App 介面動畫展示

`parking.html` 的巴士及停車場功能區改為 React / CSS 動畫，新增 Live Activity 功能區。沿用原有主視覺、官方截圖畫廊、下載連結、常見問題及搜尋 metadata。

三個場景使用 Stageshow 裝置框；樣式對照 `AppColors.swift`、`ETACardView.swift`、`RouteInlineHeader.swift`、`ParkingListView.swift` 同 `ParkGoBusLiveActivity.swift`。Live Activity 再依用戶提供的 101 路線實際截圖校準。車輛、澳巴 logo 及巴士俯視圖直接使用 App 素材；巴士地圖背景為既有 App 截圖的 CSS 裁切。展示數據固定，沒有接駁即時 API，亦不代表原生 App 錄屏。

進入畫面播一次，重播按鈕可重新播放；減少動態效果時顯示完整結果。按需掛載場景，停用 JavaScript 時保留官方截圖。中英文沿用網站語言設定。

可編輯原始碼在外層 workspace 的 `marketing/parkgo-stageshow-demo/native/`；執行 `npm run typecheck` 同 `npm run build:website` 重建本 repository 的 `assets/parkgo-showcase/`，包含 native 圖片，不需要改網站部署架構。此目錄內的 JS / CSS 為產生檔案。

已以本機 Chrome 檢查 1440px / 390px、中英文、正常播放與重播、動態效果偏好切換、無 JavaScript 截圖及 FAQ。沒有 iOS 原生改動；動效為自檢，沒有獨立評審或真機測試。詳細證據在外層 `marketing/parkgo-stageshow-demo/evidence/`。

### 2026-11-05 晚間循環更新

- 巴士改為用戶最新 5 號線新福利截圖的 ETA 卡樣式。地圖以新截圖的街區裁切作底，SVG polyline 上的 App 車輛素材位置、已離開／前往站名、分鐘及站數由同一份場景資料驅動。
- 停車場加入測量定位的手指、按壓圈與愛心回彈，透過收藏／取消收藏完成循環。
- 新增 `#lrt-arrivals`，採用原生 LRT logo、車站圖標及雙方向到站卡，數字倒數至「即將到站」。
- 四段場景均 loop；資料重設在更新提示及淡出期間進行。新增暫停／播放，保留重播及 reduced-motion poster。

展示數據與時間均屬編排；並非串接中的即時巴士或輕軌服務。新場景來源及驗證記錄在外層 workspace `marketing/parkgo-stageshow-demo/native/`、`evidence/loops-v3/`。
