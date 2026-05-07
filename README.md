# booth-category-sequential-downloader

BOOTH分類別順次ダウンローダー は、別ツールで作成した商品分類とDLリンクをまとめたMarkdownを読み込み、分類ごとに商品を一覧表示する。選択した分類だけを対象に、ブラウザのダウンロードAPIで1件ずつ順番にDLし、待機間隔、進捗、失敗リトライ、スキップ、再開ログを管理する。

## 何を解決するか

BOOTHの商品が増えると、分類ごとの再DLや素材整理が手作業になり、同時DLしすぎるとサービス側への負荷も大きくなりやすい。

## 差別化

Markdownを入力元にして分類別に実行対象を絞り、DDoS的な挙動にならないよう順次DLと待機間隔を前提にする。

## 公開先

- Chrome Web Store

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Chrome拡張 Side Panel + downloads API の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/booth-category-sequential-downloader-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\ChromeExtension\created_idea_011_booth-category-sequential-downloader`
- idea ZIP: `D:\AI\ChromeExtension\created_idea_011_booth-category-sequential-downloader\idea_011_booth-category-sequential-downloader.zip`
- PICKUP rank: 21
- Domain: ChromeExtension
