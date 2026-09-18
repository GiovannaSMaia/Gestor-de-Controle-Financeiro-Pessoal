# Implementação final em React

A interface foi reproduzida a partir do [protótipo de alta fidelidade](https://doge-bottom-60575002.figma.site/), preservando os componentes publicados, cores, textos, ícones, dimensões e interações. O código da interface foi convertido para JSX editável; a aplicação utiliza React e Vite, sem depender do site do Figma para executar.

## Telas

- **Início:** saldo do ciclo, meta mensal, atalhos e últimas despesas.
- **Novo lançamento:** valor, categoria, observação e confirmação visual de gasto.
- **Extratos:** pendências de conciliação e histórico demonstrativo.
- **Metas:** dia de início do ciclo, limites por categoria e confirmação de alterações.
- **Ajustes:** perfil e opções apresentadas no protótipo.

O enquadramento original de celular foi mantido, inclusive em computadores. As fontes Inter e Outfit estão em `public/fonts`, permitindo sua utilização local.

## Execução

Na raiz do repositório, com Node.js 22.12 ou superior:

```sh
npm install
npm run dev
```

No PowerShell com scripts bloqueados, utilize `npm.cmd` em vez de `npm`. Abra o endereço exibido pelo Vite, normalmente http://127.0.0.1:5173.

Para gerar a versão de produção: `npm run build`. Os arquivos são gerados em `dist`. Para conferir essa versão: `npm run preview`.

## Organização

- `src/main.jsx`: inicialização do React.
- `src/App.jsx`: telas, navegação, componentes visuais e dados demonstrativos.
- `src/styles.css`: estilos do protótipo e fontes locais.
- `verify-ui.mjs`: verificação no Microsoft Edge, executada com `node verify-ui.mjs` após iniciar o servidor.

## Escopo e validação

A implementação mantém o comportamento do protótipo: os dados são demonstrativos e o estado é temporário. Registrar um gasto exibe a confirmação, mas não altera o saldo nem o histórico da tela inicial. Os controles sem ação no protótipo, como relatório e opções de conta, mantêm esse comportamento. Não foram adicionados backend, autenticação, integração bancária ou persistência.

Foram verificadas a compilação de produção, a navegação entre as cinco telas e a confirmação de um gasto, sem erros JavaScript. Capturas das telas estão em `docs/verificacao`.
