# porkgorilla.github.io

porkgorilla の実験場。ブラウザだけで動く小さな Web アプリを公開しています。

**https://porkgorilla.github.io/**

## Works

| 作品 | 種類 | 内容 |
| --- | --- | --- |
| [SNAKE](https://porkgorilla.github.io/works/snake.html) | GAME | 定番のへびゲーム |
| [2048](https://porkgorilla.github.io/works/2048.html) | GAME | 数字を合体させる定番パズル |
| [MINESWEEPER](https://porkgorilla.github.io/works/minesweeper.html) | GAME | マインスイーパー |
| [BREAKOUT](https://porkgorilla.github.io/works/breakout.html) | GAME | ブロック崩し |
| [OTHELLO](https://porkgorilla.github.io/works/othello.html) | GAME | オセロ (対CPU) |
| [TETRIS](https://porkgorilla.github.io/works/tetris.html) | GAME | 落ち物パズル |
| [MEMORY](https://porkgorilla.github.io/works/memory.html) | GAME | 神経衰弱 |
| [CONNECT4](https://porkgorilla.github.io/works/connect4.html) | GAME | 四目並べ (対CPU) |
| [15_PUZZLE](https://porkgorilla.github.io/works/puzzle15.html) | GAME | スライドパズル |
| [TYPE_ATTACK](https://porkgorilla.github.io/works/typing.html) | GAME / LANGUAGE | 60秒英単語タイピング |
| [VOCAB_QUIZ](https://porkgorilla.github.io/works/vocab.html) | LANGUAGE | 英単語4択クイズ |
| [CHAR_COUNTER](https://porkgorilla.github.io/works/counter.html) | TOOL | 文字数カウンター |
| [POMODORO](https://porkgorilla.github.io/works/timer.html) | TOOL | ポモドーロタイマー |
| [CALCULATOR](https://porkgorilla.github.io/works/calculator.html) | TOOL | 電卓 |
| [STOPWATCH](https://porkgorilla.github.io/works/stopwatch.html) | TOOL | ストップウォッチ |
| [PASSWORD_GEN](https://porkgorilla.github.io/works/password.html) | TOOL | パスワード生成 |
| [UNIT_CONVERTER](https://porkgorilla.github.io/works/unit.html) | TOOL | 単位変換 |
| [COLOR_CONVERTER](https://porkgorilla.github.io/works/color.html) | TOOL | HEX/RGB/HSL 変換 |
| [JSON_FORMATTER](https://porkgorilla.github.io/works/jsonfmt.html) | TOOL | JSON 整形 |
| [KAMOGAWA](https://porkgorilla.github.io/works/kamogawa.html) | GAME | 鴨川等間隔。河原のいちばん空いている場所にカップルを座らせるゲーム |

## 構成

```
/
├── index.html      … トップページ
├── theme.css       … 全ページ共通のテーマ (CYBER WIREFRAME / Black × Green)
├── site.js         … 共通ヘッダー・フッターの挿入と、作品一覧のデータ (SITE_WORKS)
├── favicon.svg
├── classic/index.html … 定番ゲームの一覧ページ (/classic/)
├── 404.html        … GitHub Pages が存在しない URL で表示するページ
└── works/          … 各作品のページ
    ├── snake.html
    ├── 2048.html
    ├── minesweeper.html
    ├── breakout.html
    ├── othello.html
    ├── tetris.html
    ├── memory.html
    ├── connect4.html
    ├── puzzle15.html
    ├── calculator.html
    ├── stopwatch.html
    ├── password.html
    ├── unit.html
    ├── color.html
    ├── jsonfmt.html
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
3. 定番ゲーム(SNAKE・2048 など)なら `tags` に `'CLASSIC'` を足す。トップの一覧ではなく `/classic/` に並ぶ。自作ゲーム・ツールは足さない。
4. `index.html` の LOG に更新内容を書く。

## ローカルで確認する

`site.js` や各ページは `/` から始まる絶対パスでリンクするため、ファイルを直接開くのではなくローカルサーバー経由で確認します。

```bash
python -m http.server 8000
```

ブラウザで http://localhost:8000/ を開きます。
