// porkgorilla.github.io 共通スクリプト
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
      '<a href="https://github.com/porkgorilla" target="_blank" rel="noopener">GITHUB</a>' +
    '</nav>';
  document.body.prepend(header);

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '&copy; ' + new Date().getFullYear() + ' porkgorilla<br>' +
    'built with HTML + CSS + JavaScript // hosted on GitHub Pages';
  document.body.append(footer);
})();
