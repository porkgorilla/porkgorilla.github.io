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
      '<a href="/#about">ABOUT</a>' +
      '<a href="/#log">LOG</a>' +
    '</nav>';
  document.body.prepend(header);

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = '&copy; ' + new Date().getFullYear() + ' porkgorilla';
  document.body.append(footer);
})();
