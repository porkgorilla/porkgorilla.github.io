# porkgorilla.github.io

porkgorilla の実験場。ブラウザだけで動く小さな Web アプリを公開しています。

**https://porkgorilla.github.io/**

## Works

| 作品 | 種類 | 内容 |
| --- | --- | --- |
| [SNAKE](https://porkgorilla.github.io/works/snake.html) | GAME | 定番のへびゲーム |
| [TYPE_ATTACK](https://porkgorilla.github.io/works/typing.html) | GAME / LANGUAGE | 60秒英単語タイピング |
| [VOCAB_QUIZ](https://porkgorilla.github.io/works/vocab.html) | LANGUAGE | 英単語4択クイズ |
| [CHAR_COUNTER](https://porkgorilla.github.io/works/counter.html) | TOOL | 文字数カウンター |
| [POMODORO](https://porkgorilla.github.io/works/timer.html) | TOOL | ポモドーロタイマー |
| [KAMOGAWA](https://porkgorilla.github.io/works/kamogawa.html) | GAME | 鴨川等間隔。河原のいちばん空いている場所にカップルを座らせるゲーム |

## 構成

```
/
├── index.html      … トップページ
├── theme.css       … 全ページ共通のテーマ (CYBER WIREFRAME / Black × Green)
├── site.js         … 共通ヘッダー・フッターの挿入と、作品一覧のデータ (SITE_WORKS)
├── favicon.svg
├── 404.html        … GitHub Pages が存在しない URL で表示するページ
└── works/          … 各作品のページ
    ├── snake.html
    ├── typing.html
    ├── vocab.html
    ├── counter.html
    ├── timer.html
    └── kamogawa.html
```

`theme.css` / `site.js` / `favicon.svg` はルート直下に置き、各作品ページからは絶対パス(`/theme.css` など)で読み込みます。404.html も GitHub Pages の仕様上ルート直下が必須です。

### 作品を追加するとき

1. `works/新しい作品.html` を作る。`<head>` に次を入れる:
   ```html
   <link rel="icon" href="/favicon.svg" type="image/svg+xml">
   <link rel="stylesheet" href="/theme.css">
   ```
   `</body>` の直前に `<script src="/site.js"></script>` を入れる。
2. `site.js` の `SITE_WORKS` に1行追加する(`href` は `/works/新しい作品.html`)。トップページの一覧に自動で並ぶ。
3. `index.html` の LOG に更新内容を書く。

## ローカルで確認する

`site.js` や各ページは `/` から始まる絶対パスでリンクするため、ファイルを直接開くのではなくローカルサーバー経由で確認します。

```bash
python -m http.server 8000
```

ブラウザで http://localhost:8000/ を開きます。
