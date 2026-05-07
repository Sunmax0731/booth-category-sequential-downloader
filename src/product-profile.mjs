export const productProfile = {
  "repository": "booth-category-sequential-downloader",
  "title": "BOOTH分類別順次ダウンローダー",
  "domain": "ChromeExtension",
  "hostApp": null,
  "rank": 21,
  "ideaNo": 11,
  "overview": "別ツールで作成した商品分類とDLリンクをまとめたMarkdownを読み込み、分類ごとに商品を一覧表示する。選択した分類だけを対象に、ブラウザのダウンロードAPIで1件ずつ順番にDLし、待機間隔、進捗、失敗リトライ、スキップ、再開ログを管理する。",
  "problem": "BOOTHの商品が増えると、分類ごとの再DLや素材整理が手作業になり、同時DLしすぎるとサービス側への負荷も大きくなりやすい。",
  "differentiation": "Markdownを入力元にして分類別に実行対象を絞り、DDoS的な挙動にならないよう順次DLと待機間隔を前提にする。",
  "publish": "Chrome Web Store",
  "surface": "Chrome拡張 Side Panel + downloads API",
  "entity": "download job",
  "requiredFields": [
    "id",
    "title",
    "source",
    "category",
    "url",
    "owner",
    "acceptance"
  ],
  "warningField": "retryPolicy",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
