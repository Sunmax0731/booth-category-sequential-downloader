# Competitive Benchmark

## 比較対象

- BOOTH手動ダウンロード
- DownThemAll!
- JDownloader
- Chrome downloads API

## 採用する評価基準

- 入力から検証、証跡、再実行までが1つの流れであること。
- 手動確認が必要な項目を warning として残せること。
- 公開前に docs、release checklist、security/privacy を確認できること。
- Markdownを入力元にして分類別に実行対象を絞り、DDoS的な挙動にならないよう順次DLと待機間隔を前提にする。

## 差別化

この repo は Chrome拡張 Side Panel + downloads API に閉じた最小実装だけでなく、QCDS、traceability、manual test、docs ZIP を含めた公開前の運用品質を製品の一部として扱う。
