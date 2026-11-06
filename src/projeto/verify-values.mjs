import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(process.env.APP_URL || 'http://127.0.0.1:4175/Gestor-de-Controle-Financeiro-Pessoal/');
  await page.getByRole('button', { name: /Novo gasto/i }).click();
  await page.getByRole('button', { name: /Alimentação/ }).click();
  for (const value of ['', '0', '-10', 'abc', '25abc', '25,555']) {
    await page.locator('#input-valor-gasto').fill(value);
    await page.getByRole('button', { name: 'Confirmar Gasto' }).click();
    await page.locator('#erro-valor-gasto').waitFor();
    assert.equal(await page.getByRole('button', { name: 'Confirmar Gasto' }).count(), 1);
  }
  await page.locator('#input-valor-gasto').fill('1.234,56');
  await page.getByRole('button', { name: 'Confirmar Gasto' }).click();
  await page.getByText('Gasto registado com sucesso!', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'Início', exact: true }).click();
  // Total original de R$ 272,80 + exatamente um cadastro de R$ 1.234,56.
  await page.getByText('R$ 1.507,36', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'Metas', exact: true }).click();
  const save = page.getByRole('button', { name: 'Salvar Configurações' });
  for (const day of ['', '0', '29', '1.5']) {
    await page.locator('#input-ciclo').fill(day);
    await save.click();
    await page.locator('#erro-ciclo').waitFor();
  }
  await page.locator('#input-ciclo').fill('5');
  const limit = page.getByRole('textbox', { name: 'Limite para Alimentação' });
  for (const value of ['', '0', '-1', 'abc']) {
    await limit.fill(value);
    await save.click();
    assert.equal(await limit.getAttribute('aria-invalid'), 'true');
  }
  await limit.fill('1.234,56');
  await save.click();
  await page.getByRole('button', { name: /Configurações salvas com sucesso/ }).waitFor();
  assert.deepEqual(errors, []);
  console.log('Interface: valores inválidos bloqueados, moeda brasileira aceita e ciclo validado; sem erros JavaScript.');
} finally {
  await browser.close();
}
