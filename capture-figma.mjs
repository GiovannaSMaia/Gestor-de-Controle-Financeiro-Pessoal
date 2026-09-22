import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 960 } });
  await page.goto('https://doge-bottom-60575002.figma.site/', { waitUntil: 'networkidle' });
  await page.getByText('Olá, Lucas 👋').waitFor();
  await page.evaluate(() => document.fonts.ready);
  await mkdir('docs/imagens/figma', { recursive: true });
  await page.screenshot({ path: 'docs/imagens/figma/inicio.png' });
  await page.getByRole('button', { name: /Novo gasto/i }).click();
  await page.screenshot({ path: 'docs/imagens/figma/novo-lancamento.png' });
  for (const [name, file] of [['Extratos', 'extratos'], ['Metas', 'metas'], ['Ajustes', 'ajustes']]) {
    await page.getByRole('button', { name, exact: true }).click();
    await page.screenshot({ path: `docs/imagens/figma/${file}.png` });
  }
  console.log('Cinco capturas obtidas diretamente do protótipo publicado no Figma.');
} finally {
  await browser.close();
}
