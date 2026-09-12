import { FINAL_LEVEL, levels, buttonFor } from './levels.js';

const title = document.getElementById('title');
const ending = document.getElementById('ending');
const button = document.getElementById('enter-button');
const arrows = document.getElementById('arrows');
for (let i = 0; i < 32; i++) {
  const arrow = document.createElement('span');
  arrow.textContent = '↓';
  arrows.append(arrow);
}
let level = 0;

function render() {
  const finished = level === FINAL_LEVEL;
  const descending = level > 0 && !finished;
  document.querySelector('main').classList.toggle('descending', descending);
  arrows.hidden = !descending;
  title.hidden = level === 0;
  title.textContent = finished ? '暗いだけでした。' : levels[level];
  title.classList.toggle('japanese', finished);
  ending.hidden = !finished;
  ending.textContent = finished ? `${level}クリック。` : '';
  button.textContent = buttonFor(level);
  document.title = title.textContent || 'Dark Web';
}

button.addEventListener('click', () => {
  level = level === FINAL_LEVEL ? 0 : level + 1;
  render();
  if (level > 0) title.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

render();
