# Projeto React

Todos os comandos abaixo são executados nesta pasta (`src/projeto/`):

```sh
npm install
npm run dev
npm run build
npm run preview
```

Use Node.js 22.12 ou superior; no PowerShell, use `npm.cmd` se necessário. Desenvolvimento: `http://127.0.0.1:5173/Gestor-de-Controle-Financeiro-Pessoal/`.

`main.jsx` inicia o React e `App.jsx` compõe as telas e coordena a navegação. A finalidade e a relação dos arquivos de tipografia estão em [Fontes do React](public/fonts/FONTES.md). A distribuição é gerada em `dist/`, ignorada pelo Git.

[Prototipação de alta fidelidade](../prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/).

O roteiro `node verify-ui.mjs` requer servidor iniciado e Microsoft Edge. Seu conteúdo ainda precisa ser atualizado para os textos atuais; não confundir sua existência com verificação aprovada.

Documentação: [projeto React](../../docs/14_implementacao_react.md).

Validações de gastos, limites e ciclo: `npm test`. Para verificar na interface, iniciar `npm run preview -- --port 4175` após o build e executar `node verify-values.mjs` em outro terminal nesta pasta. O roteiro utiliza Microsoft Edge; `APP_URL` permite indicar outro endereço.

## Organização do código

- `screens/`: cada tela em um arquivo com o nome do componente.
- `components/`: componentes visuais compartilhados, cabeçalho e modal; `icons/` contém os ícones.
- `hooks/useTransactions.js`: estado e operações de cadastro, conciliação e descarte de transações.
- `utils/`: funções reutilizáveis de formatação, filtro e validação, cada uma em seu arquivo.
- `data/`: paletas, categorias e dados iniciais, separados por nome.
- `styles.css` e `layout.css`: estilos globais e de layout responsivo.

`validation.mjs` mantém as exportações das validações para compatibilidade com seus consumidores. Os manipuladores que dependem somente do estado de uma tela ficam junto dela.
