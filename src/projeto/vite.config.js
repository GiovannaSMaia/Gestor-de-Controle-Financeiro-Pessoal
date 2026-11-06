import { defineConfig } from 'vite';
import { cpSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const prototypeDirectory = new URL('../prototipação de alta fidelidade/', import.meta.url);

export default defineConfig({
  base: '/Gestor-de-Controle-Financeiro-Pessoal/',
  plugins: [{
    name: 'publicar-prototipo-independente',
    apply: 'build',
    closeBundle() {
      cpSync(
        fileURLToPath(prototypeDirectory),
        fileURLToPath(new URL('./dist/prototipação de alta fidelidade/', import.meta.url)),
        { recursive: true },
      );
    },
  }],
});
