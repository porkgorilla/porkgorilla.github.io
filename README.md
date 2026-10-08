# porkgorilla.github.io

porkgorilla の実験場。ブラウザだけで動く小さな Web アプリを公開しています。

**https://porkgorilla.com/**

## Works

| 作品 | 種類 | 内容 |
| --- | --- | --- |
| [SNAKE](https://porkgorilla.com/works/snake.html) | GAME | 定番のへびゲーム |
| [2048](https://porkgorilla.com/works/2048.html) | GAME | 数字を合体させる定番パズル |
| [MINESWEEPER](https://porkgorilla.com/works/minesweeper.html) | GAME | マインスイーパー |
| [BREAKOUT](https://porkgorilla.com/works/breakout.html) | GAME | ブロック崩し |
| [OTHELLO](https://porkgorilla.com/works/othello.html) | GAME | オセロ (対CPU) |
| [TETRIS](https://porkgorilla.com/works/tetris.html) | GAME | 落ち物パズル |
| [MEMORY](https://porkgorilla.com/works/memory.html) | GAME | 神経衰弱 |
| [CONNECT4](https://porkgorilla.com/works/connect4.html) | GAME | 四目並べ (対CPU) |
| [15_PUZZLE](https://porkgorilla.com/works/puzzle15.html) | GAME | スライドパズル |
| [TYPE_ATTACK](https://porkgorilla.com/works/typing.html) | GAME / LANGUAGE | 60秒英単語タイピング |
| [VOCAB_QUIZ](https://porkgorilla.com/works/vocab.html) | LANGUAGE | 英単語4択クイズ |
| [CHAR_COUNTER](https://porkgorilla.com/works/counter.html) | TOOL | 文字数カウンター |
| [POMODORO](https://porkgorilla.com/works/timer.html) | TOOL | ポモドーロタイマー |
| [CALCULATOR](https://porkgorilla.com/works/calculator.html) | TOOL | 電卓 |
| [STOPWATCH](https://porkgorilla.com/works/stopwatch.html) | TOOL | ストップウォッチ |
| [PASSWORD_GEN](https://porkgorilla.com/works/password.html) | TOOL | パスワード生成 |
| [UNIT_CONVERTER](https://porkgorilla.com/works/unit.html) | TOOL | 単位変換 |
| [COLOR_CONVERTER](https://porkgorilla.com/works/color.html) | TOOL | HEX/RGB/HSL 変換 |
| [JSON_FORMATTER](https://porkgorilla.com/works/jsonfmt.html) | TOOL | JSON 整形 |
| [KAMOGAWA](https://porkgorilla.com/works/kamogawa.html) | GAME | 鴨川等間隔。河原のいちばん空いている場所にカップルを座らせるゲーム |
| [台北∞観景台](https://porkgorilla.com/works/taipei-infinity.html) | GAME | 台北101の逆さ台形フロアを積み上げて、台北102、103…と数字を増やしていく積み上げゲーム |
| [フラッピーばーちゃん](https://porkgorilla.com/works/flappy-baachan.html) | GAME | 焼き芋を食べたら屁で加速。竹林をくぐって飛ぶ、ばーちゃんのフラッピーゲーム |
| [さばの○そ煮](https://porkgorilla.com/works/sabanomaru.html) | GAME | 開くとルーレットが回って、さばの○そ煮の「○」が決まるジョークアプリ |
| [かぼちゃ屋敷からの脱出](https://porkgorilla.com/works/kabocha-yashiki.html) | GAME | ハロウィンの夜、魔女の屋敷の謎を解いて抜け出す2D脱出ゲーム |

## 構成

```
/
├── index.html      … トップページ
├── theme.css       … 全ページ共通のテーマ (CYBER WIREFRAME / Black × Green)
├── site.js         … 共通ヘッダー・フッターの挿入と、作品一覧のデータ (SITE_WORKS)
├── favicon.svg
├── classic/ tools/ language/ apps/ … 種類別のまとめページ (定番ゲーム / 定番ツール / 語学アプリ / アプリ百景)
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
    ├── kamogawa.html
    ├── taipei-infinity.html
    ├── flappy-baachan.html
    ├── sabanomaru.html
    └── kabocha-yashiki.html
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
3. `tags` で載せるまとめページが決まる。`'CLASSIC'` → `/classic/`、`'TOOL'` → `/tools/`、`'LANGUAGE'` → `/language/`、`'APP'`(定番以外のゲーム・アプリ) → `/apps/`(アプリ百景)。トップには各ページへの入口カードだけが並ぶ。定番以外の作品には `og: '/assets/og-xxx.jpg'` を付けると OGP 画像つきのカードになる。
4. `index.html` の LOG に更新内容を書く。

## ローカルで確認する

`site.js` や各ページは `/` から始まる絶対パスでリンクするため、ファイルを直接開くのではなくローカルサーバー経由で確認します。

```bash
python -m http.server 8000
```

ブラウザで http://localhost:8000/ を開きます。
