// porkgorilla.com 共通スクリプト
// 全ページ共通のヘッダー・フッターを挿入し、作品一覧のデータを持つ。
// 作品を追加するときは WORKS に1行足せば、トップページの一覧にも反映される。

window.SITE_WORKS = [
  { id: 'snake', href: '/works/snake.html', icon: '🐍', title: 'SNAKE',
    desc: '定番のへびゲーム。エサを食べて伸びていく。キーボードとスマホのボタンに対応。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'type_attack', href: '/works/typing.html', icon: '⌨️', title: 'TYPE_ATTACK', isNew: true,
    desc: '60秒で英単語を何語打てるか挑戦するタイピングゲーム。日本語訳も一緒に覚えられる。',
    tags: ['GAME', 'LANGUAGE'] },
  { id: 'vocab', href: '/works/vocab.html', icon: '🔤', title: 'VOCAB_QUIZ',
    desc: '英単語の意味を4択で答えるクイズ。全10問、発音の読み上げつき。',
    tags: ['LANGUAGE'] },
  { id: 'kana', href: '/works/kana.html', icon: 'あ', title: 'KANA_QUIZ', isNew: true,
    desc: 'ひらがな・カタカナの読み方をローマ字4択で答えるクイズ。濁音・拗音も選べる。',
    tags: ['LANGUAGE'] },
  { id: 'flashcard', href: '/works/flashcard.html', icon: '🗂', title: 'FLASHCARDS', isNew: true,
    desc: 'めくって覚える英単語カード。4レベル100語、覚えた単語は記録して「まだ」だけ繰り返す。',
    tags: ['LANGUAGE'] },
  { id: 'listening', href: '/works/listening.html', icon: '🎧', title: 'LISTEN_TYPE', isNew: true,
    desc: '読み上げられた英単語を聞き取って書くディクテーション。ゆっくり再生とヒントつき。',
    tags: ['LANGUAGE'] },
  { id: 'scramble', href: '/works/scramble.html', icon: '🧩', title: 'SPELL_SCRAMBLE', isNew: true,
    desc: 'バラバラの文字を並べ替えて英単語をつくる。60秒で何問解けるか挑戦。',
    tags: ['GAME', 'LANGUAGE'] },
  { id: 'counter', href: '/works/counter.html', icon: '📝', title: 'CHAR_COUNTER',
    desc: '文字数・行数・英単語数・バイト数をリアルタイムに数えるツール。',
    tags: ['TOOL'] },
  { id: 'pomodoro', href: '/works/timer.html', icon: '⏱', title: 'POMODORO', isNew: true,
    desc: '25分集中＋5分休憩のポモドーロタイマー。終了時にビープ音でお知らせ。',
    tags: ['TOOL'] },
  { id: 'kamogawa', href: '/works/kamogawa.html', icon: '🏮', title: 'KAMOGAWA', isNew: true,
    desc: '夕暮れの鴨川。やって来たカップルを、河原のいちばん空いている場所に座らせよう。',
    og: '/assets/og-kamogawa.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'taipei_infinity', href: '/works/taipei-infinity.html', icon: '🏙️', title: 'TAIPEI_INFINITY', isNew: true,
    desc: '台北101の逆さ台形フロアを積み上げて、台北102、103…と数字を増やしていく積み上げゲーム。',
    og: '/assets/og-taipei-infinity.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'flappy_baachan', href: '/works/flappy-baachan.html', icon: '🍠', title: 'FLAPPY_BAACHAN', isNew: true,
    desc: '焼き芋を食べたら屁で加速。竹林をくぐって飛ぶ、ばーちゃんのフラッピーゲーム。',
    og: '/assets/og-flappy-baachan.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'sabanomaru', href: '/works/sabanomaru.html', icon: '🐟', title: 'SABANOMARU', isNew: true,
    desc: '開くとルーレットが回って、さばの○そ煮の「○」が決まるジョークアプリ。',
    og: '/assets/og-sabanomaru.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'kabocha_yashiki', href: '/works/kabocha-yashiki.html', icon: '🎃', title: 'KABOCHA_YASHIKI', isNew: true,
    desc: 'ハロウィンの夜、魔女の屋敷に閉じ込められた。黒猫、ランタン、大鍋の謎を解いて抜け出す2D脱出ゲーム。',
    og: '/assets/og-kabocha-yashiki.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'dobadoba_dozer', href: '/works/dobadoba-dozer.html', icon: '🪙', title: 'DOBADOBA_DOZER', isNew: true,
    desc: 'コインを落として押し出す、ポップな3Dコインドーザー。リングを通してスロット、ボールを落としてジャックポット。',
    og: '/assets/og-dobadoba-dozer.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'grabo_takasugi', href: '/works/grabo-takasugi.html', icon: '⚔️', title: 'GRABO_TAKASUGI', isNew: true,
    desc: 'グラボの相場チャートの上を高杉晋作が駆ける。小判を集め、転売ヤーを踏み、底値でグラボを買え。',
    og: '/assets/og-grabo-takasugi.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'magokoro_koji', href: '/works/magokoro-koji.html', icon: '🔧', title: 'MAGOKORO_KOJI', isNew: true,
    desc: '商店街の便利屋・浩二が、ちょうどいい加減のまごころで依頼をこなすゲーム。',
    og: '/assets/og-magokoro-koji.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'heiohazard', href: '/works/heiohazard.html', icon: '🧟', title: 'HEIOHAZARD', isNew: true,
    desc: '腸内のガスだけを武器に、ゾンビだらけの洋館から脱出するサバイバル・ホラー。',
    og: '/assets/og-heiohazard.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'container_yard_tank', href: '/works/container-yard-tank.html', icon: '🚢', title: 'CONTAINER_YARD_TANK', isNew: true,
    desc: '港に積まれたカラフルなコンテナを戦車で砲撃したり体当たりしたりして崩す3D物理シミュレーター。',
    og: '/assets/og-container-yard-tank.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'sportsday', href: '/works/sportsday.html', icon: '🏃', title: 'SPORTSDAY', isNew: true,
    desc: '徒競走・玉入れ・綱引きの3種目で紅組代表として競う、秋の運動会ゲーム。',
    og: '/assets/og-sportsday.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'ojihipparu', href: '/works/ojihipparu.html', icon: '😊', title: 'OJIHIPPARU', isNew: true,
    desc: 'いらすとやのおじさんのほっぺとおなかを、リクエストどおりに引っ張るゲーム。',
    og: '/assets/og-ojihipparu.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'tekuteku_pechan', href: '/works/tekuteku-pechan.html', icon: '🍐', title: 'TEKUTEKU_PECHAN', isNew: true,
    desc: '梨の精のペーちゃんとアーちゃんが鬼ごっこをする3Dゲーム。鬼にタッチされたら交代、60秒のうち逃げ切った時間がスコア。',
    og: '/assets/og-tekuteku-pechan.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'hangul_button', href: '/works/hangul-button.html', icon: '🔴', title: 'HANGUL_BUTTON', isNew: true,
    desc: '押すと韓国語をしゃべる、ボタン3つだけのマシーン。',
    og: '/assets/og-hangul-button.jpg',
    tags: ['LANGUAGE', 'APP'] },
  { id: 'apple_motion_opus55', href: '/works/apple-motion-opus55.html', icon: '🍎', title: 'APPLE_MOTION (Opus 5.5)', isNew: true,
    desc: '英単語「apple」だけを、BGM付き30秒のモーショングラフィックスで覚えるアプリ。Claude Opus 5.5 版。',
    og: '/assets/og-apple-motion-opus55.jpg',
    tags: ['LANGUAGE', 'APP'] },
  { id: 'apple_motion_sonnet55', href: '/works/apple-motion-sonnet55.html', icon: '🍏', title: 'APPLE_MOTION (Sonnet 5.5)', isNew: true,
    desc: '英単語 apple だけを、BGM付きの30秒モーショングラフィックスで覚えるアプリ。Claude Sonnet 5.5 版。',
    og: '/assets/og-apple-motion-sonnet55.jpg',
    tags: ['LANGUAGE', 'APP'] },
  { id: 'sukimaccho', href: '/works/sukimaccho.html', icon: '💪', title: 'SUKIMACCHO', isNew: true,
    desc: '回転するマッチョを、タイミングよく落として床の隙間にハメるゲーム。',
    og: '/assets/og-sukimaccho.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'kakin_koubou', href: '/works/kakin-koubou.html', icon: '💸', title: 'KAKIN_KOUBOU', isNew: true,
    desc: '無課金で始めて、全サーバー1位に立ち、そして引退する。ある廃課金者の興亡を、BGM付き30秒のモーショングラフィックスで見届けるアプリ。',
    og: '/assets/og-kakin-koubou.jpg',
    tags: ['APP'] },
  { id: 'suzukuri_dragon', href: '/works/suzukuri-dragon.html', icon: '🐉', title: 'SUZUKURI_DRAGON', isNew: true,
    desc: 'ドラゴンの火加減で壺の酢を育て、米酢から黒酢まで仕込むゲーム。',
    og: '/assets/og-suzukuri-dragon.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'dogeza_slash', href: '/works/dogeza-slash.html', icon: '🙇', title: 'DOGEZA_SLASH', isNew: true,
    desc: '相手ごとにちょうどいい誠意で土下座し、その勢いで詰め寄る相手を真っ二つにするゲーム。',
    og: '/assets/og-dogeza-slash.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'buzz_rally', href: '/works/buzz-rally.html', icon: '🏐', title: 'BUZZ_RALLY', isNew: true,
    desc: 'バズってますよ！ トスした瞬間からスパイクとレシーブが止まらない、疑似バズ体験アプリ。',
    og: '/assets/og-buzz-rally.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'yamuneko', href: '/works/yamuneko.html', icon: '🐱', title: 'YAMUNEKO', isNew: true,
    desc: '茹でたヤムイモを、ねこちゃんの口までドラッグしてあげるだけのアプリ。すぐおなかいっぱいになる。',
    og: '/assets/og-yamuneko.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'botoffice', href: '/works/botoffice.html', icon: '🤖', title: 'BOTOFFICE', isNew: true,
    desc: '裏でつながったBotたちが、指示やデータをやりとりしながら仕事を回す様子を眺めるアプリ。',
    og: '/assets/og-botoffice.jpg',
    tags: ['APP'] },
  { id: 'nise_roblox', href: '/works/nise-roblox.html', icon: '🧱', title: 'NISE_ROBLOX', isNew: true,
    desc: 'プレイヤーが全員ボットのニセモノのブロックゲーム広場。オビー、工場タイクーン、サバイバル、毎回ちがう塔で遊べる。',
    og: '/assets/og-nise-roblox.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'oden_tsuntsun', href: '/works/oden-tsuntsun.html', icon: '🍢', title: 'ODEN_TSUNTSUN', isNew: true,
    desc: '鍋のおでんに指を近づけると、具から小さな手が出てきてツンツンしてくる。仕切りを外すと全員で指を囲んで回りながら突いてくる。',
    og: '/assets/og-oden-tsuntsun.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'sushipiano', href: '/works/sushipiano.html', icon: '🍣', title: 'SUSHIPIANO', isNew: true,
    desc: '鍵盤が寿司のピアノ。板前兼ピアニストとして弾いていると、カウンターのお客さんが勝手に鍵盤を食べていくシミュレーター。',
    og: '/assets/og-sushipiano.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'mayutetsu', href: '/works/mayutetsu.html', icon: '🧲', title: 'MAYUTETSU', isNew: true,
    desc: '眉毛のないおじさんに蹄鉄を投げて、眉毛にする。縁日の蹄鉄福笑いゲーム。',
    og: '/assets/og-mayutetsu.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'chikainouchi', href: '/works/chikainouchi.html', icon: '🏠', title: 'CHIKAINOUCHI', isNew: true,
    desc: '施主の話を覚えて、希望に近い間取りを作るゲーム。途中でびっくりして忘れても、頼れるのは記憶だけ。',
    og: '/assets/og-chikainouchi.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'seikimatsu_derby', href: '/works/seikimatsu-derby.html', icon: '🐎', title: 'SEIKIMATSU_DERBY', isNew: true,
    desc: '予想した馬だけが覇者の巨馬、ロボ、装甲車、UFO、怪獣、そしておじさんに変身して、絶対に勝つ競馬予想ゲーム。',
    og: '/assets/og-seikimatsu-derby.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'tezukami_steak', href: '/works/tezukami-steak.html', icon: '🥩', title: 'TEZUKAMI_STEAK', isNew: true,
    desc: '座布団サイズの肉を素手で掴んで、ビタンと叩きつけて焼く。コンボでFEVER、味付けはミルでお好みで、最後は両手で掴んで貪る豪快ステーキ調理ゲーム。',
    og: '/assets/og-tezukami-steak.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'double_murakami', href: '/works/double-murakami.html', icon: '📚', title: 'DOUBLE_MURAKAMI', isNew: true,
    desc: '村上春樹と村上龍の著作タイトルを切り分けて、ルーレットで架空の村上文学を生み出す。',
    og: '/assets/og-double-murakami.jpg',
    tags: ['GAME', 'APP'] },
  { id: 'yoko_burger', href: '/works/yoko-burger.html', icon: '🍔', title: 'YOKO_BURGER', isNew: true,
    desc: '揺れるバンズや具を垂直で止めて、画面の横から両手でバチンと挟むハンバーガーゲーム。',
    og: '/assets/og-yoko-burger.jpg',
    tags: ['GAME', 'APP'] },
  { id: '2048', href: '/works/2048.html', icon: '🔢', title: '2048', isNew: true,
    desc: '同じ数字を合体させて2048を目指す定番パズル。矢印キー・スワイプ対応。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'minesweeper', href: '/works/minesweeper.html', icon: '💣', title: 'MINESWEEPER', isNew: true,
    desc: '定番のマインスイーパー。9x9・地雷10個。スマホは旗モードで操作。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'breakout', href: '/works/breakout.html', icon: '🧱', title: 'BREAKOUT', isNew: true,
    desc: '定番のブロック崩し。マウス・タッチ・キーボードでパドルを操作。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'othello', href: '/works/othello.html', icon: '⚫', title: 'OTHELLO', isNew: true,
    desc: '定番のオセロ。あなたが黒、CPUが白。置ける場所をヒント表示。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'tetris', href: '/works/tetris.html', icon: '🧱', title: 'TETRIS', isNew: true,
    desc: '定番の落ち物パズル。ラインを揃えて消そう。キーボードとスマホのボタンに対応。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'memory', href: '/works/memory.html', icon: '🃏', title: 'MEMORY', isNew: true,
    desc: '定番の神経衰弱。同じ絵柄のペアを少ない手数で探そう。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'connect4', href: '/works/connect4.html', icon: '🔴', title: 'CONNECT4', isNew: true,
    desc: '定番の四目並べ。縦・横・斜めに4つ揃えたら勝ち。CPU対戦。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'puzzle15', href: '/works/puzzle15.html', icon: '🔲', title: '15_PUZZLE', isNew: true,
    desc: '定番のスライドパズル。数字を1から15の順に並べよう。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'sudoku', href: '/works/sudoku.html', icon: '🔢', title: 'SUDOKU', isNew: true,
    desc: '定番の数独。毎回自動生成で答えは1つ。3段階の難易度とメモ機能つき。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'lightsout', href: '/works/lightsout.html', icon: '💡', title: 'LIGHTS_OUT', isNew: true,
    desc: '押したマスと上下左右のライトが反転。全部消せたらクリア。最少手数とヒントつき。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'gomoku', href: '/works/gomoku.html', icon: '⚪', title: 'GOMOKU', isNew: true,
    desc: '定番の五目並べ。15路盤でCPU対戦、先手・後手を選べて待ったもできる。',
    tags: ['GAME', 'CLASSIC'] },
  { id: 'calculator', href: '/works/calculator.html', icon: '🧮', title: 'CALCULATOR', isNew: true,
    desc: 'シンプルな電卓。四則演算・パーセント・キーボード入力に対応。',
    tags: ['TOOL'] },
  { id: 'stopwatch', href: '/works/stopwatch.html', icon: '⏲', title: 'STOPWATCH', isNew: true,
    desc: 'ラップタイム対応のストップウォッチ。スペースキーで開始・停止。',
    tags: ['TOOL'] },
  { id: 'password', href: '/works/password.html', icon: '🔑', title: 'PASSWORD_GEN', isNew: true,
    desc: '長さと文字種を選べるパスワード生成。ブラウザ内で生成し送信しない。',
    tags: ['TOOL'] },
  { id: 'unit', href: '/works/unit.html', icon: '📏', title: 'UNIT_CONVERTER', isNew: true,
    desc: '長さ・重さ・面積・容量・速度・データ量・温度の単位変換。',
    tags: ['TOOL'] },
  { id: 'color', href: '/works/color.html', icon: '🎨', title: 'COLOR_CONVERTER', isNew: true,
    desc: 'カラーピッカーと HEX / RGB / HSL の相互変換。',
    tags: ['TOOL'] },
  { id: 'jsonfmt', href: '/works/jsonfmt.html', icon: '🧾', title: 'JSON_FORMATTER', isNew: true,
    desc: 'JSON の整形・圧縮・構文チェック。',
    tags: ['TOOL'] },
  { id: 'encoder', href: '/works/encoder.html', icon: '🔐', title: 'ENCODER', isNew: true,
    desc: 'Base64・URL・HTML・Unicode エスケープのエンコードとデコード。日本語対応。',
    tags: ['TOOL'] },
  { id: 'datecalc', href: '/works/datecalc.html', icon: '📅', title: 'DATE_CALC', isNew: true,
    desc: '日付の間の日数、○日後・○か月後の日付、満年齢と和暦を計算。',
    tags: ['TOOL'] },
  { id: 'warikan', href: '/works/warikan.html', icon: '💴', title: 'WARIKAN', isNew: true,
    desc: '割り勘計算。丸め単位、多め・少なめの傾斜配分、幹事の過不足まで出す。',
    tags: ['TOOL'] }
];

// トップページに並べる「まとめページ」。tag を持つ作品は、トップではなくそのページに並ぶ。
window.SITE_SECTIONS = [
  { tag: 'CLASSIC',  href: '/classic/',  icon: '🕹', title: 'CLASSIC_GAMES', label: '定番ゲーム' },
  { tag: 'TOOL',     href: '/tools/',    icon: '🛠', title: 'CLASSIC_TOOLS', label: '定番ツール' },
  { tag: 'LANGUAGE', href: '/language/', icon: '🔤', title: 'LANGUAGE_APPS', label: '語学アプリ' },
  { tag: 'APP'     , href: '/apps/',     icon: '🏮', title: 'アプリ百景',     label: '定番以外のゲーム・アプリ' }
];

// 作品カードを container に描画する。work.og があれば OGP 画像つきのカードになる。
window.renderWorkCards = function (container, works) {
  works.forEach(w => {
    const a = document.createElement('a');
    a.className = 'card panel' + (w.og ? ' has-og' : '');
    a.href = w.href;
    a.innerHTML =
      (w.og ? '<img class="card-og" alt="" loading="lazy" width="1200" height="630">' : '') +
      '<div class="card-head"><span class="card-icon"></span><h3></h3></div>' +
      '<p></p><div class="tags"></div><div class="open">&gt; OPEN</div>';
    if (w.og) a.querySelector('.card-og').src = w.og;
    a.querySelector('.card-icon').textContent = w.icon;
    a.querySelector('h3').textContent = w.title;
    a.querySelector('p').textContent = w.desc;
    const tags = a.querySelector('.tags');
    if (w.isNew) tags.insertAdjacentHTML('beforeend', '<span class="tag new">NEW</span>');
    (w.tags || []).forEach(t => {
      const s = document.createElement('span');
      s.className = 'tag';
      s.textContent = t;
      tags.appendChild(s);
    });
    container.appendChild(a);
  });
};

(function () {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<a class="logo" href="/">porkgorilla<span>://</span></a>' +
    '<nav>' +
      '<a href="/#works">WORKS</a>' +
      '<a href="/classic/">CLASSIC</a>' +
      '<a href="/tools/">TOOLS</a>' +
      '<a href="/language/">LANGUAGE</a>' +
      '<a href="/apps/">APPS</a>' +
      '<a href="/#links">LINKS</a>' +
      '<a href="/#about">ABOUT</a>' +
      '<a href="/#log">LOG</a>' +
    '</nav>';
  document.body.prepend(header);

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = '&copy; ' + new Date().getFullYear() + ' porkgorilla';
  document.body.append(footer);
})();
