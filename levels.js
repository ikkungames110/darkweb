export const levels = [
  '',
  'Dark web',
  'Super Dark Web',
  'Hyper Dark Web',
  'Ultra Dark Web',
  'Super Hyper Dark Web',
  'Ultra Hyper Dark Web',
  'Mega Ultra Dark Web',
  'Giga Hyper Dark Web',
  'Extreme Mega Dark Web',
  'Ultimate Dark Web',
  'Super Ultimate Dark Web',
  'Final Dark Web',
  'True Final Dark Web',
  'Absolute Final Dark Web',
  'Absolute Final Dark Web II',
  'Giga Extreme Final Dark Web',
  'Ultra Infinite Dark Web',
  'Beyond Infinite Dark Web',
  'Seriously Final Dark Web',
  'Super Seriously Final Dark Web',
  'One More Final Dark Web',
  'The Final Final Dark Web',
  'The Final Final Final Dark Web',
];

export const FINAL_LEVEL = levels.length;

export function buttonFor(level) {
  if (level === 0) return 'ダークウェブに入る';
  if (level >= FINAL_LEVEL) return '最初からやり直す';
  if (level === FINAL_LEVEL - 1) return 'いちばん奥に入る';
  return `${levels[level + 1]}に入る`;
}
