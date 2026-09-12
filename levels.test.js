import test from 'node:test';
import assert from 'node:assert/strict';
import { levels, FINAL_LEVEL, buttonFor } from './levels.js';

test('入口から各タイトルに進み、24クリックでオチと再スタートに到達する', () => {
  assert.equal(FINAL_LEVEL, 24);
  assert.equal(buttonFor(0), 'ダークウェブに入る');
  assert.equal(levels[1], 'Dark web');
  assert.equal(buttonFor(1), 'Super Dark Webに入る');
  for (let level = 1; level < FINAL_LEVEL - 1; level++) {
    assert.equal(buttonFor(level), `${levels[level + 1]}に入る`);
  }
  assert.equal(buttonFor(FINAL_LEVEL - 1), 'いちばん奥に入る');
  assert.equal(buttonFor(FINAL_LEVEL), '最初からやり直す');
});
