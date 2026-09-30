# HTMLゲーム制作 覚書

porkgorilla.github.io にHTMLゲーム/ツールを追加するときに参照する覚書。
新しいチャットでゲームを作るときは、この内容を渡しておくこと。

サイト本体: https://porkgorilla.github.io/
リポジトリ: https://github.com/porkgorilla/porkgorilla.github.io

---

## 1. GitHub Pagesへのアップロード手順

### ファイル配置
- ゲーム本体は `works/<name>.html` に置く(リポジトリ直下ではない)。
- 共通ファイル(`theme.css` / `site.js` / `favicon.svg`)は **絶対パス** で読み込む。1階層下にあるため相対パスは壊れる。

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/theme.css">   <!-- サイトのテーマに乗せる場合のみ -->
```

`</body>` の直前に:
```html
<script src="/site.js"></script>
```
これで共通ヘッダー・フッターが自動挿入される。

### 見た目のテーマ
- サイト全体のテーマは「CYBER WIREFRAME」(黒背景+ネオングリーンのモノスペース端末風)。`theme.css` を読み込めば適用される。
- ただし、ゲーム自体に作り込まれた独自の世界観・配色がある場合は、無理に緑テーマに合わせず、そのまま活かしてよい(実例: 鴨川等間隔は暖色系の独自デザインのまま公開している)。

### タイトル・メタ情報
```html
<title>GAME_NAME | porkgorilla://</title>
<meta name="description" content="一言で説明">
```
このタイトル・説明文は、後述のOGPカードでも再利用する。

### Google Analytics
全ページに以下を `<head>` に追加する(測定ID: `G-MBT4300J0L`、プロパティ名 "Minobot")。共通ファイル化はしておらず、各ページに直書きする方式。

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MBT4300J0L"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-MBT4300J0L');
</script>
```

### サイトへの登録
`site.js` の `SITE_WORKS` 配列に1行追加すると、トップページの一覧(フィルタ付きグリッド)に自動で並ぶ。

```js
{ id: 'newgame', href: '/works/newgame.html', icon: '🎮', title: 'NEW_GAME', isNew: true,
  desc: '説明文', tags: ['GAME'] }
```

**まとめページの分け方:** `tags` で載る場所が決まる。`'CLASSIC'` → `/classic/`、`'TOOL'` → `/tools/`、`'LANGUAGE'` → `/language/`、`'APP'`(定番以外) → `/apps/`(アプリ百景)。トップには入口カードだけが出る。定番以外の作品は `og: '/assets/og-xxx.jpg'` を足すと OGP 画像つきのカードになる。

あわせて `index.html` の LOG セクションと `README.md` の表にも1行追加する。

### 動作確認
- **`file://` で直接開かない**。絶対パス(`/theme.css` など)が読み込めず壊れる。
- 必ずローカルサーバー経由で確認する:
  ```bash
  python -m http.server 8734
  ```
  `http://localhost:8734/works/<name>.html` を開く。
- デスクトップの横長ウィンドウと、スマホ相当(390×844など)の縦長ウィンドウ、**両方**で見た目を確認する(理由は4章)。

### 公開
```bash
git add -A
git commit -m "Add <name> game"
git push
```
- ブランチは `main` に直接push(このリポジトリはPRフローを使っていない)。
- GitHub Pagesへの反映には数十秒〜1分ほどかかる。push直後にローカルのキャッシュだけで「動いた」と判断せず、実際に `https://porkgorilla.github.io/works/<name>.html` を開いて確認する。

---

## 2. X(旧Twitter)投稿機能をつけるときの覚書

### 基本形
```js
const GAME_URL = 'https://porkgorilla.github.io/works/<name>.html';
const shareUrl = 'https://x.com/intent/post?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(GAME_URL);
```
`text` と `url` は別パラメータで渡す。連結して1本のテキストに埋め込まない。

### 文字数カウントの注意
Xは `url` パラメータのリンクも t.co短縮URL(23文字固定)として280文字の上限にカウントする。自前で文字数カウンターを作る場合は、本文の文字数に +23 して判定すること。

### Xアプリを直接開かせるのは諦める
実機(iPhone、Safari・Chrome両方)で検証済み。結論: **Webサイト側からXアプリを確実に開かせる手段は無い。**

- `target="_blank"` を外すだけでは何も変わらない(Xが `/intent/post` をユニバーサルリンクの対象外にしていると見られる)。
- `twitter://post?message=...` のカスタムURLスキーム+フォールバックタイマー方式も試したが、Safariでは確認ダイアログが出ている間もJS側のタイマーが動いてしまい、**アプリとWeb版が同時に開く**という悪い挙動になった。Chromeではスキーム自体が無視された。

→ 素直に `https://x.com/intent/post?...` のリンクを開くだけでよい。スマホでは `target="_blank"` を外して同じタブで遷移させると多少自然(下記コード)。

```js
if (matchMedia('(pointer: coarse)').matches) {
  shareBtn.removeAttribute('target');
  shareBtn.removeAttribute('rel');
}
```

---

## 3. 投稿時のカード化(OGP)の覚書

### 必要なタグ
共有したいページの `<head>` に以下を追加する(すべて絶対URL)。

```html
<meta property="og:type" content="website">
<meta property="og:title" content="ゲーム名">
<meta property="og:description" content="説明文">
<meta property="og:url" content="https://porkgorilla.github.io/works/<name>.html">
<meta property="og:image" content="https://porkgorilla.github.io/assets/<name>.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ゲーム名">
<meta name="twitter:description" content="説明文">
<meta name="twitter:image" content="https://porkgorilla.github.io/assets/<name>.jpg">
```

- `t.co` は投稿中の全リンクを自動短縮する機能で、カード表示とは無関係。カードが出るかどうかは上記タグの有無で決まる。
- 画像は実ファイル(jpg/png、1200×630、比率1.91:1)が必要。favicon(SVG)はカード画像として使えない。
- ゲームのcanvasをそのまま素材にできる: `canvas.toDataURL('image/jpeg', 0.88)` でブラウザ上で画像を作り、そのbase64をPythonスクリプトでデコードして `assets/` にファイルとして保存する方法が手早い。

### 最大の落とし穴: Xのキャッシュ
**Xはリンクごとにカード情報を長期間キャッシュする。** タグを追加・修正した後でも、そのURLを一度でも(タグが無い状態で)共有したことがあると、そのキャッシュのせいでいつまでもカードが出ないことがある。今はXの公開Card Validatorも廃止されており、外部から強制的に再クロールさせる手段が無い。

対処法: 共有時に使うURLにダミーのクエリを付けて、Xから見て「新しいURL」にしてしまう。

```js
const OG_CACHE_VERSION = 2; // タグや画像を変えたら数字を上げる
const SHARE_URL = GAME_URL + '?ogv=' + OG_CACHE_VERSION;
```

この `SHARE_URL` を `x.com/intent/post?...&url=` に使う(ページ自体のURLやOGPの`og:url`はクエリ無しの正規URLのままでよい)。クエリはページ側では無視されるので表示は変わらない。

反映しない場合は、まず以下を確認してからXの問題と判断する。
```bash
curl -s https://porkgorilla.github.io/works/<name>.html | grep -Ei 'og:|twitter:'
curl -I https://porkgorilla.github.io/assets/<name>.jpg   # 200が返るか
```

---

## 4. PCとスマホの画面サイズ差の覚書

### ありがちな不具合
画面の縦横比から盤面(canvas)の論理サイズを決める実装(レターボックスを減らすための定番テクニック)は、縦長のスマホと横長のPCで論理サイズが大きく変わる。キャラクターなど固定サイズの要素は変わらないため、**PCの横長ウィンドウだと盤面がやたら間延びして見える**ことがある。

実例(鴨川等間隔): スマホは論理幅480、PC(1400×800)は1029まで広がり、歩ける幅が2倍以上に。上限のクランプ値を1100→800に下げて解消した。

### 対応方針
- 論理幅の計算式自体は変えず、**上限のクランプ値を絞る**方向で調整する。
- 調整時は、スマホ相当の縦長サイズ(例: 390×844)と、PCの横長サイズ(例: 1400×800)の**両方**で見比べる。片方だけで判断しない。
- タッチ操作かどうかの判定は `matchMedia('(pointer: coarse)')` を使う(画面幅だけで判定するより確実)。ゲーム内のUIサイズ切り替え(`LW < 640` など)とは別軸の話なので混同しない。

---

## 5. モバイルでの音声(Web Audio)の覚書

BGMやSEに `AudioContext` を使うゲームで、共有ボタンなどから他アプリ(Xなど)に一度移動して戻ってくると、**iOS(Safari・Chrome共通、内部はWebKit)でBGMが鳴らなくなる**ことがある。

### 原因
バックグラウンドに回った際に `AudioContext` が実質的に壊れることがあるが、`.state` が正直に `'closed'` になるとは限らず、`'running'` のまま実際には無音、ということが実機で起きる。`state === 'suspended'` のときだけ `.resume()` する、という対応では不十分。

### 対応方針
`.state` を信用せず、**確実なユーザー操作(「もう一度」「スタート」ボタンなど)のタイミングで、既存のAudioContextを問答無用で閉じて作り直す。**

```js
function initAudio(force) {
  if (AC && force) {
    try { AC.close().catch(() => {}); } catch (e) {}  // closeはPromiseを返す。既に閉じている場合のrejectも拾う
    AC = null;
  } else if (AC) {
    if (AC.state === 'closed') { AC = null; }
    else { if (AC.state === 'suspended') AC.resume(); return; }
  }
  // ここで AudioContext を新規作成する
}
```
`AudioContext.close()` は非同期でrejectすることがあるため、`try/catch` だけでは拾えない。`.catch(() => {})` を必ず付ける。

`visibilitychange` で「タブに戻ってきた瞬間」にソフトな復帰(`initAudio()` を force無しで呼ぶ)を試みるのはやってよいが、それだけでは直らないことがある。上記の「ユーザー操作時に強制再作成」が本命の対策。

---

## 6. クレジット表示と画面遷移(タイトルへ戻る)の覚書

鴨川等間隔(KAMOGAWA)への追加要望をきっかけに固めたルール。**新しくゲームを作る/持ち込むときは、最初からこの形にしておく。**

### クレジット表示
- タイトル画面のどこか(操作説明やスタートボタンの下など)に、控えめな一言を入れる。

```html
<div class="credit">porkgorilla — 2026</div>
```
```css
.credit{font-size:11px;color:#8f8878;margin-top:18px;letter-spacing:.05em}
```
- 色はゲーム自体の配色から拾った、目立たない中間色(薄いグレーやくすんだ色)にする。強調色(アクセントカラー)は使わない。
- 年はゲームを作った年でよい。サイト共通フッターのように `new Date().getFullYear()` で自動化してもよいが、タイトル画面は静的な演出の一部なので固定値のままでも問題ない。

### 「タイトルへ戻る」ボタン
- **リザルト画面(ゲームオーバー/クリア画面)には、「もう一度」だけでなく「タイトルへ」ボタンも必ず置く。**
- 2つのボタンは横並び(スマホでは縦積みに折り返す)にし、「もう一度」を主役(塗りつぶし)、「タイトルへ」を控えめ(輪郭線だけの ghost ボタン)にして優先度を視覚的に分ける。

```html
<div class="actions">
  <button class="go" id="againBtn">もう一度</button>
  <button class="go ghost" id="titleBtn">タイトルへ</button>
</div>
```
```css
.actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px}
.go.ghost{background:transparent;color:#f2a33a;box-shadow:none;border:2px solid rgba(242,163,58,.55)}
.go.ghost:hover{background:rgba(242,163,58,.12)}
```
```js
function backToTitle() {
  S.mode = 'title';
  setBgm(false);           // BGMがあるゲームは、タイトルに戻すときも止める/切り替える
  overOv.hidden = true;
  titleOv.hidden = false;
  // 自己ベストの再表示など、タイトル画面の状態を更新
}
$('titleBtn').addEventListener('click', backToTitle);
```

### 中断(ポーズ)画面の場合は確認ダイアログを挟む
プレイ中に開ける「ポーズ画面」に「タイトルへ戻る」を置く場合は、**リザルト画面と同列に扱わない**こと。リザルト画面は既にゲームが終わっているので即座に戻ってよいが、ポーズ画面から戻るのはプレイ中のスコア・進行を失う操作なので、誤タップ・誤クリックで即終了させないよう、必ず一段確認を挟む。

```js
function requestBackToTitle() {
  if (confirm('タイトルに戻りますか？ここまでの記録は失われます')) {
    backToTitle();
  }
}
```
シンプルな `confirm()` で十分。ゲームの世界観に合わせた自作の確認モーダルにしてもよいが、その場合も「はい/いいえ」の2択で、デフォルトフォーカスは「いいえ(キャンセル)」側に置く(誤って続けてタップ/Enterしても終了しないように)。

