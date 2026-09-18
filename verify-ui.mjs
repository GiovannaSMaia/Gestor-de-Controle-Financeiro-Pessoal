import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 960 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await page.goto('http://127.0.0.1:5173');
await page.getByText('Olá, Lucas 👋').waitFor();
await page.evaluate(() => document.fonts.ready);
await fs.mkdir('docs/verificacao', { recursive: true });
await page.screenshot({ path: 'docs/verificacao/inicio.png' });
for (const name of ['Extratos', 'Metas', 'Ajustes', 'Início']) {
  await page.getByRole('button', { name, exact: true }).click();
  await page.screenshot({ path: `docs/verificacao/${name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}.png` });
}
await page.getByRole('button', { name: /Novo gasto/i }).click();
await page.getByRole('button', { name: /Alimentação/ }).click();
await page.getByRole('button', { name: 'Confirmar Gasto' }).click();
await page.getByText('Gasto registrado!', { exact: true }).waitFor();
assert.deepEqual(errors, []);
console.log('Navegação pelas cinco telas e confirmação de gasto: OK; sem erros JavaScript.');
await browser.close();
