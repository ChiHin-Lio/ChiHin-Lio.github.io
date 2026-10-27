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
