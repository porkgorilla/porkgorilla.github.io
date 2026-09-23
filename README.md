# porkgorilla.github.io

porkgorilla の実験場。ブラウザだけで動く小さな Web アプリを公開しています。

**https://porkgorilla.github.io/**

## Works

| 作品 | 種類 | 内容 |
| --- | --- | --- |
| [SNAKE](https://porkgorilla.github.io/snake.html) | GAME | 定番のへびゲーム |
| [TYPE_ATTACK](https://porkgorilla.github.io/typing.html) | GAME / LANGUAGE | 60秒英単語タイピング |
| [VOCAB_QUIZ](https://porkgorilla.github.io/vocab.html) | LANGUAGE | 英単語4択クイズ |
| [CHAR_COUNTER](https://porkgorilla.github.io/counter.html) | TOOL | 文字数カウンター |
| [POMODORO](https://porkgorilla.github.io/timer.html) | TOOL | ポモドーロタイマー |

## 構成

- `theme.css` … 全ページ共通のテーマ (CYBER WIREFRAME / Black × Green)
- `site.js` … 共通ヘッダー・フッターの挿入と、作品一覧のデータ (`SITE_WORKS`)
- `404.html` … GitHub Pages が存在しない URL で表示するページ

### 作品を追加するとき

1. `新しい作品.html` を作り、`<head>` に `theme.css` と `favicon.svg`、`</body>` の直前に `<script src="site.js"></script>` を入れる
2. `site.js` の `SITE_WORKS` に1行追加する(トップページの一覧に自動で並ぶ)
3. `index.html` の LOG に更新内容を書く

## ローカルで確認する

`site.js` は `/` から始まる絶対パスでリンクするため、ファイルを直接開くのではなくローカルサーバー経由で確認します。

```bash
python -m http.server 8000
```

ブラウザで http://localhost:8000/ を開きます。
