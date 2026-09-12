# Dark Web

黒い画面の中央に入口の文字だけを置いたジョークサイト。各階層では斜体のタイトルから下向き矢印をたどってスクロールすると、次の入口が現れます。次の階層はページの先頭から始まり、24クリックでオチに到達します。

HTML・CSS・JavaScriptのみ。追加パッケージ不要、Node.js 18以降。

```sh
npm run dev
```

http://localhost:5173 で開けます。ポート変更は `npm run dev -- --port 3000`。

```sh
npm run check
npm test
npm run build
npm start -- --dist
```

`dist/` を静的ホスティングに配置できます。Google Fontsを使用し、接続できない場合はシステムフォントで表示します。アクセス解析・Cookie・プレイ履歴の保存はありません。
