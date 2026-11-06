import test from 'node:test';
import assert from 'node:assert/strict';
import { parsePositiveMoney, isValidCycleDay } from './validation.mjs';

test('aceita dinheiro em formatos decimal e brasileiro sem truncar o valor', () => {
  for (const [input, expected] of [
    ['25,50', 25.5], ['25.50', 25.5], ['1.234,56', 1234.56],
    ['1.234', 1234], ['1234,56', 1234.56], ['0,01', 0.01], [' 25 ', 25],
  ]) assert.equal(parsePositiveMoney(input), expected, input);
});

test('rejeita valores ausentes, não positivos, parciais e fora da precisão monetária', () => {
  for (const input of ['', ' ', 'abc', '25abc', '0', '0,00', '-10',
    '25,555', '1,234.56', '12.34,56', 'Infinity', '1e3', '9007199254740992']) {
    assert.equal(Number.isNaN(parsePositiveMoney(input)), true, input);
  }
});

test('dia do ciclo deve ser inteiro entre 1 e 28', () => {
  for (const input of ['1', '28', 5]) assert.equal(isValidCycleDay(input), true);
  for (const input of ['', ' ', '0', '29', '-1', '1.5', 'abc', '1e1']) {
    assert.equal(isValidCycleDay(input), false, String(input));
  }
});
