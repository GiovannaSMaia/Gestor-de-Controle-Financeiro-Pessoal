# Projeto React

Todos os comandos abaixo são executados nesta pasta (`src/projeto/`):

```sh
npm install
npm run dev
npm run build
npm run preview
```

Use Node.js 22.12 ou superior; no PowerShell, use `npm.cmd` se necessário. Desenvolvimento: `http://127.0.0.1:5173/Gestor-de-Controle-Financeiro-Pessoal/`.

`App.jsx`, `main.jsx` e `styles.css` contêm o React. A finalidade e a relação dos arquivos de tipografia estão em [Fontes do React](public/fonts/FONTES.md). A distribuição é gerada em `dist/`, ignorada pelo Git.

[Prototipação de alta fidelidade](../prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/).

O roteiro `node verify-ui.mjs` requer servidor iniciado e Microsoft Edge. Seu conteúdo ainda precisa ser atualizado para os textos atuais; não confundir sua existência com verificação aprovada.

Documentação: [projeto React](../../docs/14_implementacao_react.md).

Validações de gastos, limites e ciclo: `npm test`. Para verificar na interface, iniciar `npm run preview -- --port 4175` após o build e executar `node verify-values.mjs` em outro terminal nesta pasta. O roteiro utiliza Microsoft Edge; `APP_URL` permite indicar outro endereço.
