// porkgorilla.github.io 共通スクリプト
// 全ページ共通のヘッダー・フッターを挿入し、作品一覧のデータを持つ。
// 作品を追加するときは WORKS に1行足せば、トップページの一覧にも反映される。

window.SITE_WORKS = [
  { id: 'snake', href: '/works/snake.html', icon: '🐍', title: 'SNAKE',
    desc: '定番のへびゲーム。エサを食べて伸びていく。キーボードとスマホのボタンに対応。',
    tags: ['GAME'] },
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
    tags: ['GAME'] }
];

(function () {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<a class="logo" href="/">porkgorilla<span>://</span></a>' +
    '<nav>' +
      '<a href="/#works">WORKS</a>' +
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
