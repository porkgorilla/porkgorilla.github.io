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
    tags: ['GAME'] },
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
    tags: ['GAME', 'CLASSIC'] }
];

(function () {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<a class="logo" href="/">porkgorilla<span>://</span></a>' +
    '<nav>' +
      '<a href="/#works">WORKS</a>' +
      '<a href="/classic/">CLASSIC</a>' +
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
